import { createToggleController, type ToggleOptions } from './toggle-controller';
const config = {
    "id": "orbit",
    "name": "Orbit",
    "initial": true,
    "stiffness": 140,
    "damping": 18,
    "tone": 420,
    "travel": 192
};
/** Pass the component button, not a selector or a gallery card. */
export function init(element: HTMLElement, options: ToggleOptions = {}) {
    if (!(element instanceof HTMLButtonElement))
        throw new TypeError('A button is required for OrbitToggle.');
    return createToggleController(element, config, options);
}
