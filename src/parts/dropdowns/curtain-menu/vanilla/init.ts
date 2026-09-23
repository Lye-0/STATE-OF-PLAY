import {createKineticSelect} from '../../../../shared/kinetic-select';
import type {SelectOptions} from '../../../../shared/select-controller';
export function init(root:HTMLElement,options:SelectOptions={}){return createKineticSelect(root,'curtain',options);}
