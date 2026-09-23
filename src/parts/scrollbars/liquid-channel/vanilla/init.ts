import {createKineticScroll} from '../../../../shared/kinetic-scroll';
import type {ScrollAreaOptions} from '../../../../shared/scroll-area';
export function init(root:HTMLElement,options:ScrollAreaOptions={}){return createKineticScroll(root,'liquid',options);}
