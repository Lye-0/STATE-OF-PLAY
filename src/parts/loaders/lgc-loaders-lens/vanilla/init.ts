import {mountLoader} from '../../../../shared/foundation/continuum/loader';
import type {FoundationConfig,FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "lgc-loaders-lens",
  "kind": "loaders",
  "variant": "liquid-merge",
  "label": "Glass Droplets",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export function init(element:HTMLElement,options:FoundationOptions={}){return mountLoader(element,config,options);}
