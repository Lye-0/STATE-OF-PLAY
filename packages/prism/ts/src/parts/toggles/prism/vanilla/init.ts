import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
    "id": "prism",
    "name": "Prism",
    "initial": true,
    "stiffness": 170,
    "damping": 17,
    "tone": 880,
    "travel": 160
};
/** Pass the component button, not a selector or a gallery card. */
export function init(element: HTMLElement, options: ToggleOptions = {}) {
    if (!(element instanceof HTMLButtonElement))
        throw new TypeError('A button is required for PrismToggle.');
    return createToggleController(element, config, options);
}
