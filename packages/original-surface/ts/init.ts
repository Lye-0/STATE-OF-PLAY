import { createSurfaceController, type SurfaceOptions } from './surface-controller';
export function init(element: HTMLElement, options: SurfaceOptions = {}) {
    return createSurfaceController(element, { tilt: false, ...options });
}
