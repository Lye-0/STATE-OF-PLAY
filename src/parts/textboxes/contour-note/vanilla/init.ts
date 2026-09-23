import {createResponsiveTextField} from '../../../../shared/responsive-field';
import type {TextFieldOptions} from '../../../../shared/text-field';
export function init(root:HTMLElement,options:TextFieldOptions={}){return createResponsiveTextField(root,options);}
