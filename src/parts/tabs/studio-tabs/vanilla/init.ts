import {createTransitTabs} from '../../../../shared/transit-selection';
import type {TabsOptions} from '../../../../shared/tabs-controller';
export function init(root:HTMLElement, options:TabsOptions={}) { return createTransitTabs(root,options); }
