import { createToggleController } from '../../../../shared/toggle-controller.js';
const config = {
    "id": "signal",
    "name": "Signal",
    "initial": false,
    "stiffness": 460,
    "damping": 29,
    "tone": 130,
    "travel": 140
};
/** Pass the component button, not a selector or a gallery card. */
export function init(element, options = {}) {
    if (!(element instanceof HTMLButtonElement))
        throw new TypeError('A button is required for SignalToggle.');
    return createToggleController(element, config, options);
}
