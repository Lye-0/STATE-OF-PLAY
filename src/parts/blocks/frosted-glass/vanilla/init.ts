import { createSurfaceController, type SurfaceOptions } from '../../../../shared/surface-controller';
export function init(element: HTMLElement, options: SurfaceOptions = {}) {
    return createSurfaceController(element, { tilt: true, ...options });
}
