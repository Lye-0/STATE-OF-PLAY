import { createToggleController } from '../../../../shared/toggle-controller.js';
const config = {
    "id": "eclipse",
    "name": "Eclipse",
    "initial": false,
    "stiffness": 155,
    "damping": 23,
    "tone": 330,
    "travel": 154
};
/** Pass the component button, not a selector or a gallery card. */
export function init(element, options = {}) {
    if (!(element instanceof HTMLButtonElement))
        throw new TypeError('A button is required for EclipseToggle.');
    return createToggleController(element, config, options);
}
