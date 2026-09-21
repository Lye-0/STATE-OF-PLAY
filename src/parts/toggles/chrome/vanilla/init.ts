import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
    "id": "chrome",
    "name": "Chrome",
    "initial": true,
    "stiffness": 380,
    "damping": 25,
    "tone": 220,
    "travel": 128
};
/** Pass the component button, not a selector or a gallery card. */
export function init(element: HTMLElement, options: ToggleOptions = {}) {
    if (!(element instanceof HTMLButtonElement))
        throw new TypeError('A button is required for ChromeToggle.');
    return createToggleController(element, config, options);
}
