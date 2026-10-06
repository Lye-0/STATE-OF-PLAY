import {createNavigation,type NavigationOptions} from '../../../../shared/workbench/navigation';
import {bridge} from '../../../../shared/workbench/core';
export type {NavigationOptions};
/** Mount this component only; call destroy() before removing it. */
export function init(root:HTMLElement,options:NavigationOptions={}){return bridge(createNavigation(root,options));}
