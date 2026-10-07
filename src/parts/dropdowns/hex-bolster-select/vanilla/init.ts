import {createSelectController,type SelectOptions} from '../../../../shared/select-controller';
export function init(root:HTMLElement,options:SelectOptions={}){return createSelectController(root,options);}
