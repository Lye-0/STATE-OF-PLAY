import {createTabsController,type TabsOptions} from '../../../../shared/tabs-controller';
export function init(root:HTMLElement, options:TabsOptions={}) { return createTabsController(root,options); }
