import {createTransitPopup} from '../../../../shared/transit-popup';
import type {PopupOptions} from '../../../../shared/popup-controller';
export function init(root:HTMLElement,options:PopupOptions={}) {return createTransitPopup(root,options);}
