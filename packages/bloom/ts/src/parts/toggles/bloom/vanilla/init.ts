import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
    "id": "bloom",
    "name": "Bloom",
    "initial": true,
    "stiffness": 180,
    "damping": 19,
    "tone": 660,
    "travel": 159
};
/** Pass the component button, not a selector or a gallery card. */
export function init(element: HTMLElement, options: ToggleOptions = {}) {
    if (!(element instanceof HTMLButtonElement))
        throw new TypeError('A button is required for BloomToggle.');
    return createToggleController(element, config, options);
}
