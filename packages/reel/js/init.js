import { createToggleController } from './toggle-controller.js';
const config = {
    "id": "reel",
    "name": "Analog",
    "initial": false,
    "stiffness": 430,
    "damping": 28,
    "tone": 170,
    "travel": 134
};
/** Pass the component button, not a selector or a gallery card. */
export function init(element, options = {}) {
    if (!(element instanceof HTMLButtonElement))
        throw new TypeError('A button is required for AnalogToggle.');
    return createToggleController(element, config, options);
}
