import {mountLoader} from '../../../../shared/foundation/continuum/loader';
import type {FoundationConfig,FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "line-sweep-loader",
  "kind": "loaders",
  "variant": "line-sweep",
  "label": "Line Sweep",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export function init(element:HTMLElement,options:FoundationOptions={}){return mountLoader(element,config,options);}
