/* Gallery controller: native switches, drag gestures, demo, visibility-aware animation. */
(function () {
  'use strict';
  const { OBJECTS, Spring, clamp, isDrag, dragValue } = window.MotionKit;
  const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = reducedQuery.matches;
  const sound = new window.TactileAudio();
  const count = document.getElementById('active-count');
  const announcement = document.getElementById('announcement');
  const demoButton = document.getElementById('demo');
  let demoRunning = false, demoTimer = 0, demoIndex = 0, demoPhase = true;
  let announcementTimer = 0, batchTimers = [];
  let raf = 0, lastTime = 0, elapsed = 0;
  const objects = [];

  function announce(text) {
    clearTimeout(announcementTimer);
    announcementTimer = setTimeout(() => { announcement.textContent = text; }, 130);
  }
  function updateCount() {
    count.textContent = String(objects.filter(object => object.on).length).padStart(2, '0');
  }
  function clearBatch() { batchTimers.forEach(clearTimeout); batchTimers = []; }
  function stopDemo() {
    demoRunning = false; clearTimeout(demoTimer);
    demoButton.setAttribute('aria-pressed', 'false');
    demoButton.querySelector('.demo-label').textContent = 'デモ再生';
  }
  function interrupt() { clearBatch(); stopDemo(); }

  class ToggleObject {
    constructor(config) {
      this.config = config;
      this.button = document.querySelector(`[data-id="${config.id}"]`);
      this.card = this.button.closest('.object-card');
      this.on = config.initial;
      this.spring = new Spring(this.on ? 1 : 0, config);
      this.renderer = new window.ObjectRenderer(this.button, config);
      this.visible = true; this.pointer = null; this.suppressClick = false; this.dragging = false;
      this.sync();
      this.bind();
      this.renderer.frame(this.spring.value, 0, 0, 0, reduced);
    }
    sync() {
      this.button.setAttribute('aria-checked', String(this.on));
      this.card.classList.toggle('is-on', this.on);
      this.card.querySelector('.state-readout span').textContent = this.on ? 'ON' : 'OFF';
    }
    set(on, { silent = false, source = 'user' } = {}) {
      on = Boolean(on);
      const changed = this.on !== on;
      this.on = on;
      if (reduced) this.spring.snap(on ? 1 : 0); else this.spring.setTarget(on ? 1 : 0);
      this.sync(); updateCount();
      if (changed) {
        this.renderer.trigger(on, reduced);
        if (!silent) sound.play(this.config, on);
        if (source === 'user') announce(`${this.config.name}、${on ? 'オン' : 'オフ'}`);
      }
      if (reduced || !this.visible) this.renderer.frame(this.spring.value, 0, elapsed, 0, reduced);
      requestFrame();
    }
    bind() {
      this.button.addEventListener('click', event => {
        if (this.suppressClick) { this.suppressClick = false; event.preventDefault(); return; }
        interrupt(); this.set(!this.on);
      });
      this.button.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowDown' || event.key === 'Home') {
          event.preventDefault(); interrupt(); this.set(false);
        } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'End') {
          event.preventDefault(); interrupt(); this.set(true);
        } else if (event.key === 'Escape') {
          event.preventDefault(); this.cancelPointer(); interrupt();
        }
        // Space and Enter use the button's native click behavior.
      });
      this.button.addEventListener('pointerdown', event => {
        if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0) || this.pointer) return;
        interrupt();
        this.suppressClick = false;
        const rect = this.button.getBoundingClientRect();
        this.pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, start: this.spring.value,
          on: this.on, scale: rect.width / this.button.offsetWidth };
        this.button.style.setProperty('--press', '1');
        // Capture allows release outside the object. touch-action:pan-y still allows page scrolling.
        try { this.button.setPointerCapture(event.pointerId); } catch (_) { /* Older browsers may not allow capture. */ }
      });
      this.button.addEventListener('pointermove', event => {
        if (!this.pointer || this.pointer.id !== event.pointerId) return;
        const dx = event.clientX - this.pointer.x, dy = event.clientY - this.pointer.y;
        if (!this.dragging && isDrag(dx, dy)) this.dragging = true;
        if (!this.dragging) return;
        const next = dragValue(this.pointer.start, dx, this.config.travel, this.pointer.scale);
        this.spring.snap(next);
        this.renderer.frame(next, 0, elapsed, 0, reduced);
      });
      this.button.addEventListener('pointerup', event => {
        if (!this.pointer || this.pointer.id !== event.pointerId) return;
        const dragged = this.dragging;
        this.pointer = null; this.dragging = false;
        this.button.style.setProperty('--press', '0');
        if (dragged) { this.suppressClick = true; this.set(this.spring.value >= .5); }
        // A tap is intentionally left to the ensuing native click (keyboard/touch-compatible).
      });
      this.button.addEventListener('pointercancel', () => this.cancelPointer());
      this.button.addEventListener('lostpointercapture', () => { if (this.pointer) this.cancelPointer(); });
      this.card.addEventListener('pointermove', event => {
        if (event.pointerType !== 'mouse') return;
        const rect = this.card.getBoundingClientRect();
        this.card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        this.card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      }, { passive: true });
    }
    cancelPointer() {
      if (!this.pointer) return;
      this.pointer = null; this.dragging = false;
      this.button.style.setProperty('--press', '0');
      if (reduced) this.spring.snap(this.on ? 1 : 0); else this.spring.setTarget(this.on ? 1 : 0);
      this.renderer.frame(this.spring.value, 0, elapsed, 0, reduced);
      requestFrame();
    }
    frame(t, dt) {
      if (this.dragging) return;
      this.spring.advance(dt);
      if (this.visible) this.renderer.frame(this.spring.value, this.spring.velocity, t, dt, reduced);
    }
  }

  function needsFrame() {
    if (document.hidden) return false;
    return objects.some(o => !o.spring.settled || (!reduced && o.visible &&
      (o.renderer.particles.length > 0 || (o.on && ['volt', 'orbit', 'reel', 'prism', 'signal'].includes(o.config.id)))));
  }
  function requestFrame() { if (!raf && !document.hidden) raf = requestAnimationFrame(frame); }
  function frame(timestamp) {
    raf = 0;
    const dt = lastTime ? Math.min((timestamp - lastTime) / 1000, .05) : 1 / 60;
    lastTime = timestamp; elapsed += dt;
    objects.forEach(object => object.frame(elapsed, dt));
    if (needsFrame()) requestFrame(); else lastTime = 0;
  }

  OBJECTS.forEach(config => objects.push(new ToggleObject(config)));
  updateCount();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const object = objects.find(o => o.card === entry.target);
        object.visible = entry.isIntersecting;
        if (object.visible) {
          object.renderer.frame(object.spring.value, object.spring.velocity, elapsed, 0, reduced);
          requestFrame();
        } else {
          object.renderer.particles = []; // Do not revive old particle bursts on re-entry.
        }
      }
    }, { rootMargin: '80px' });
    objects.forEach(object => observer.observe(object.card));
  }

  function setAll(on) {
    interrupt();
    objects.forEach((object, i) => {
      batchTimers.push(setTimeout(() => object.set(on, { source: 'batch', silent: i % 3 !== 0 }), reduced ? 0 : i * 65));
    });
    announce(`10個すべてを${on ? 'オン' : 'オフ'}にしました`);
  }
  document.getElementById('all-on').addEventListener('click', () => setAll(true));
  document.getElementById('all-off').addEventListener('click', () => setAll(false));

  function demoStep() {
    if (!demoRunning || document.hidden) return;
    objects[demoIndex].set(demoPhase, { source: 'demo', silent: demoIndex % 2 !== 0 });
    demoIndex++;
    let delay = 380;
    if (demoIndex === objects.length) { demoIndex = 0; demoPhase = !demoPhase; delay = 1500; }
    demoTimer = setTimeout(demoStep, delay);
  }
  demoButton.addEventListener('click', () => {
    if (demoRunning) { stopDemo(); return; }
    clearBatch();
    objects.forEach(o => o.set(false, { source: 'demo', silent: true }));
    demoRunning = true; demoIndex = 0; demoPhase = true;
    demoButton.setAttribute('aria-pressed', 'true');
    demoButton.querySelector('.demo-label').textContent = 'デモ停止';
    demoTimer = setTimeout(demoStep, 500);
  });

  const soundButton = document.getElementById('sound');
  soundButton.addEventListener('click', async () => {
    soundButton.disabled = true;
    const wanted = !sound.enabled;
    const enabled = await sound.setEnabled(wanted);
    soundButton.disabled = false;
    soundButton.setAttribute('aria-pressed', String(enabled));
    soundButton.setAttribute('aria-label', enabled ? '効果音をオフにする' : '効果音をオンにする');
    soundButton.querySelector('span').textContent = enabled ? 'SOUND ON' : 'SOUND OFF';
    if (enabled) sound.play(OBJECTS[0], true);
    else if (wanted) announce('この環境では効果音を開始できませんでした。スイッチはそのまま操作できます。');
  });

  window.addEventListener('resize', () => { objects.forEach(o => { o.renderer.resize(); o.renderer.frame(o.spring.value, 0, elapsed, 0, reduced); }); requestFrame(); }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (raf) cancelAnimationFrame(raf); raf = 0; lastTime = 0;
      clearTimeout(demoTimer); objects.forEach(o => o.cancelPointer());
    } else { requestFrame(); if (demoRunning) demoStep(); }
  });
  const onReducedChange = event => {
    reduced = event.matches;
    objects.forEach(o => { o.spring.snap(o.on ? 1 : 0); o.renderer.particles = []; o.renderer.frame(o.spring.value, 0, elapsed, 0, reduced); });
    requestFrame();
  };
  if (reducedQuery.addEventListener) reducedQuery.addEventListener('change', onReducedChange);
  else reducedQuery.addListener(onReducedChange);
  // Resolve section links inside this document, including srcdoc/embedded previews.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const id = link.getAttribute('href').slice(1);
      const target = id ? document.getElementById(id) : null;
      if (id && !target) return;
      event.preventDefault();
      if (target) target.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' });
      if (link.classList.contains('skip-link') && target) {
        target.tabIndex = -1; target.focus({ preventScroll: true });
      }
    });
  });
  requestFrame();
  // A read-only diagnostic view: useful for automated tests, no writable application internals.
  window.StateOfPlay = Object.freeze({ getStates: () => Object.fromEntries(objects.map(o => [o.config.id, o.on])), getVersion: () => '1.0.0' });
})();
