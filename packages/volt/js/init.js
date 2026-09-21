import { createToggleController } from './toggle-controller.js';
const config = {
    "id": "volt",
    "name": "Volt",
    "initial": false,
    "stiffness": 330,
    "damping": 23,
    "tone": 110,
    "travel": 173
};
/** Pass the component button, not a selector or a gallery card. */
export function init(element, options = {}) {
    if (!(element instanceof HTMLButtonElement))
        throw new TypeError('A button is required for VoltToggle.');
    return createToggleController(element, config, options);
}
