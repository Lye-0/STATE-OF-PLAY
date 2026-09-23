import {mountLoader} from '../../../../shared/foundation/continuum/loader';
import type {FoundationConfig,FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "magnetic-pendulum-loader",
  "kind": "loaders",
  "variant": "magnetic-pendulum",
  "label": "Magnetic Pendulum",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export function init(element:HTMLElement,options:FoundationOptions={}){return mountLoader(element,config,options);}
