/* Pure, testable motion primitives. Also works when index.html is opened directly. */
(function (root, factory) {
  const kit = factory();
  if (typeof module === 'object' && module.exports) module.exports = kit;
  else root.MotionKit = kit;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const OBJECTS = Object.freeze([
    { id: 'chrome', name: 'Chrome', initial: true, stiffness: 380, damping: 25, tone: 220, travel: 128 },
    { id: 'liquid', name: 'Liquid', initial: true, stiffness: 195, damping: 15, tone: 540, travel: 153 },
    { id: 'eclipse', name: 'Eclipse', initial: false, stiffness: 155, damping: 23, tone: 330, travel: 154 },
    { id: 'bloom', name: 'Bloom', initial: true, stiffness: 180, damping: 19, tone: 660, travel: 159 },
    { id: 'volt', name: 'Volt', initial: false, stiffness: 330, damping: 23, tone: 110, travel: 173 },
    { id: 'orbit', name: 'Orbit', initial: true, stiffness: 140, damping: 18, tone: 420, travel: 192 },
    { id: 'reel', name: 'Analog', initial: false, stiffness: 430, damping: 28, tone: 170, travel: 134 },
    { id: 'fold', name: 'Fold', initial: false, stiffness: 250, damping: 21, tone: 280, travel: 177 },
    { id: 'prism', name: 'Prism', initial: true, stiffness: 170, damping: 17, tone: 880, travel: 160 },
    { id: 'signal', name: 'Signal', initial: false, stiffness: 460, damping: 29, tone: 130, travel: 140 }
  ].map(Object.freeze));

  class Spring {
    constructor(value = 0, { stiffness = 250, damping = 22 } = {}) {
      this.value = value;
      this.target = value;
      this.velocity = 0;
      this.stiffness = stiffness;
      this.damping = damping;
    }
    setTarget(value) { this.target = clamp(value); }
    snap(value) { this.value = this.target = clamp(value); this.velocity = 0; }
    get settled() { return Math.abs(this.value - this.target) < 0.0001 && Math.abs(this.velocity) < 0.001; }
    advance(dt) {
      if (!Number.isFinite(dt) || dt <= 0) return this.value;
      // Small fixed substeps make springs stable on low-refresh devices and after a slow frame.
      let remaining = Math.min(dt, 0.064);
      while (remaining > 0) {
        const step = Math.min(remaining, 1 / 240);
        this.velocity += ((this.target - this.value) * this.stiffness - this.velocity * this.damping) * step;
        this.value += this.velocity * step;
        remaining -= step;
      }
      if (this.settled) { this.value = this.target; this.velocity = 0; }
      return this.value;
    }
  }

  function isDrag(dx, dy, threshold = 7) {
    return Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy) * 1.12;
  }
  function dragValue(start, dx, travel, scale = 1) {
    if (!Number.isFinite(travel) || travel <= 0) return clamp(start);
    return clamp(start + dx / (travel * Math.max(0.1, scale)));
  }
  function orbitPosition(value) {
    const p = clamp(value, -0.08, 1.08);
    return { x: 140 - 96 * Math.cos(p * Math.PI), y: 73 - 36 * Math.sin(p * Math.PI) };
  }
  return { clamp, OBJECTS, Spring, isDrag, dragValue, orbitPosition };
});
