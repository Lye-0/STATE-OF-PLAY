import {createUnfoldAccordion} from '../../../../shared/unfold-accordion';
import type {AccordionOptions} from '../../../../shared/accordion-controller';
export function init(root:HTMLElement,options:AccordionOptions={}){return createUnfoldAccordion(root,options);}
