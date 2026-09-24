export interface SurfaceOptions {
    intensity?: number;
    tilt?: boolean;
}
/** Pointer light and optional tilt. CSS supplies a motion-reduced and touch-safe resting state. */
export function createSurfaceController(element: HTMLElement, { intensity = 1, tilt = false }: SurfaceOptions = {}) {
    const abort = new AbortController();
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0, disposed = false, x = .5, y = .5, targetX = .5, targetY = .5, lastTime = 0;
    let visible = true, paused = false;
    const updateAnimation = () => { element.toggleAttribute('data-sop-paused', paused || !visible || document.hidden); };
    function paint() {
        element.style.setProperty('--sop-x', `${x * 100}%`);
        element.style.setProperty('--sop-y', `${y * 100}%`);
        element.style.setProperty('--sop-angle', `${110 + x * 70 - y * 25}deg`);
        element.style.setProperty('--sop-rx', `${tilt && !media.matches ? (y - .5) * -6 * intensity : 0}deg`);
        element.style.setProperty('--sop-ry', `${tilt && !media.matches ? (x - .5) * 8 * intensity : 0}deg`);
    }
    function tick(time: number) {
        raf = 0;
        if (disposed || paused || !visible || document.hidden)
            return;
        const elapsed = lastTime ? Math.min(time - lastTime, 64) : 16;
        lastTime = time;
        // CSS cannot transition gradient centers supplied through custom properties.
        // Ease the actual coordinates, with a gentler return after pointer leave.
        const ease = 1 - Math.exp(-elapsed / (element.classList.contains('sop-hover') ? 90 : 260));
        x += (targetX - x) * ease;
        y += (targetY - y) * ease;
        if (Math.abs(targetX - x) < .001 && Math.abs(targetY - y) < .001) {
            x = targetX;
            y = targetY;
            lastTime = 0;
            paint();
            return;
        }
        paint();
        raf = requestAnimationFrame(tick);
    }
    function schedule() {
        if (!raf && !disposed && !paused && visible && !document.hidden && !media.matches)
            raf = requestAnimationFrame(tick);
    }
    function reset(immediate = false) {
        targetX = targetY = .5;
        element.classList.remove('sop-hover');
        if (immediate || paused || !visible || document.hidden || media.matches) {
            cancelAnimationFrame(raf);
            raf = 0;
            lastTime = 0;
            x = y = .5;
            paint();
        } else schedule();
    }
    element.addEventListener('pointermove', event => {
        if (paused || !visible || document.hidden || media.matches || event.pointerType !== 'mouse')
            return;
        const rect = element.getBoundingClientRect();
        targetX = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        targetY = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
        element.classList.add('sop-hover');
        schedule();
    }, { passive: true, signal: abort.signal });
    element.addEventListener('pointerleave', () => reset(), { signal: abort.signal });
    media.addEventListener('change', () => reset(true), { signal: abort.signal });
    const intersection = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(entries => { visible = entries[0].isIntersecting; updateAnimation(); if (!visible) reset(true); }) : undefined;
    intersection?.observe(element);
    document.addEventListener('visibilitychange', () => { updateAnimation(); if (document.hidden) reset(true); }, {signal: abort.signal});
    updateAnimation();
    return { setPaused(value: boolean) { paused = value; updateAnimation(); if (paused) reset(true); }, destroy() { reset(true); disposed = true; abort.abort(); intersection?.disconnect(); element.removeAttribute('data-sop-paused'); } };
}
