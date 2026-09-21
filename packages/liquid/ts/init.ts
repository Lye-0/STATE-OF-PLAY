import { createToggleController, type ToggleOptions } from './toggle-controller';
const config = {
    "id": "liquid",
    "name": "Liquid",
    "initial": true,
    "stiffness": 195,
    "damping": 15,
    "tone": 540,
    "travel": 153
};
/** Pass the component button, not a selector or a gallery card. */
export function init(element: HTMLElement, options: ToggleOptions = {}) {
    if (!(element instanceof HTMLButtonElement))
        throw new TypeError('A button is required for LiquidToggle.');
    return createToggleController(element, config, options);
}
