import {createDataTable,type TableOptions} from '../../../../shared/workbench/table';
import {bridge} from '../../../../shared/workbench/core';
export type {TableOptions};
/** Mount this component only; call destroy() before removing it. */
export function init(root:HTMLElement,options:TableOptions={}){return bridge(createDataTable(root,options));}
