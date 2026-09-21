import { createSurfaceController } from './surface-controller.js';
export function init(element, options = {}) {
    return createSurfaceController(element, { tilt: true, ...options });
}
