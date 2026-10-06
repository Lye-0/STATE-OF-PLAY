import {createContextMenu,type ContextOptions} from '../../../../shared/workbench/context';
import {bridge} from '../../../../shared/workbench/core';
export type {ContextOptions};
/** Mount this component only; call destroy() before removing it. */
export function init(root:HTMLElement,options:ContextOptions={}){return bridge(createContextMenu(root,options));}
