export interface SurfaceOptions {
    intensity?: number;
    tilt?: boolean;
}
/** Pointer light and optional tilt. CSS supplies a motion-reduced and touch-safe resting state. */
export function createSurfaceController(element: HTMLElement, { intensity = 1, tilt = false }: SurfaceOptions = {}) {
    const abort = new AbortController();
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0, disposed = false, x = .5, y = .5;
    function paint() {
        raf = 0;
        if (disposed)
            return;
        element.style.setProperty('--sop-x', `${x * 100}%`);
        element.style.setProperty('--sop-y', `${y * 100}%`);
        element.style.setProperty('--sop-angle', `${110 + x * 70 - y * 25}deg`);
        element.style.setProperty('--sop-rx', `${tilt && !media.matches ? (y - .5) * -6 * intensity : 0}deg`);
        element.style.setProperty('--sop-ry', `${tilt && !media.matches ? (x - .5) * 8 * intensity : 0}deg`);
    }
    function reset() {
        x = y = .5;
        cancelAnimationFrame(raf);
        raf = 0;
        element.classList.remove('sop-hover');
        paint();
    }
    element.addEventListener('pointermove', event => {
        if (media.matches || event.pointerType !== 'mouse')
            return;
        const rect = element.getBoundingClientRect();
        x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
        element.classList.add('sop-hover');
        if (!raf)
            raf = requestAnimationFrame(paint);
    }, { passive: true, signal: abort.signal });
    element.addEventListener('pointerleave', reset, { signal: abort.signal });
    media.addEventListener('change', reset, { signal: abort.signal });
    return { destroy() { reset(); disposed = true; abort.abort(); } };
}
