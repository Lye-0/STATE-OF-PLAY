import { createSurfaceController } from '../../../../shared/surface-controller.js';
export function init(element, options = {}) {
    return createSurfaceController(element, { tilt: true, ...options });
}
