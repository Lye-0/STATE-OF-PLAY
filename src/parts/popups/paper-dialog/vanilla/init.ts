import {createPopupController,type PopupOptions} from '../../../../shared/popup-controller';
export function init(root:HTMLElement,options:PopupOptions={}) { const controller=createPopupController(root,options);return {...controller,updatePopupOptions:controller.updateOptions}; }
