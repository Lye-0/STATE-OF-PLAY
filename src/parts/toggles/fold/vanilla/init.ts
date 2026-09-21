import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
    "id": "fold",
    "name": "Fold",
    "initial": false,
    "stiffness": 250,
    "damping": 21,
    "tone": 280,
    "travel": 177
};
/** Pass the component button, not a selector or a gallery card. */
export function init(element: HTMLElement, options: ToggleOptions = {}) {
    if (!(element instanceof HTMLButtonElement))
        throw new TypeError('A button is required for FoldToggle.');
    return createToggleController(element, config, options);
}
