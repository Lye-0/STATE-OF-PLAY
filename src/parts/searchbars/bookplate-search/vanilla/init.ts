import {createSearch,type SearchOptions} from '../../../../shared/workbench/search';
import {bridge} from '../../../../shared/workbench/core';
export type {SearchOptions};
/** Mount this component only; call destroy() before removing it. */
export function init(root:HTMLElement,options:SearchOptions={}){return bridge(createSearch(root,options));}
