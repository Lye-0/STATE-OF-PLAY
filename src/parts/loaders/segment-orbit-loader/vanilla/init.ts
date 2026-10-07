import {renderLoader,mountLoader} from '../../../../shared/foundation/continuum/loader';
import type {FoundationConfig,FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "segment-orbit-loader",
  "kind": "loaders",
  "variant": "three-dots",
  "label": "Segment Orbit Loader",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export function init(element:HTMLElement,options:FoundationOptions={}){if(!element.querySelector("[data-loader-art]"))element.innerHTML=renderLoader({...config,...options});const art=element.querySelector("[data-loader-art]");if(art)art.innerHTML="<div class=\"x-composition\"><i style=\"--i:0\"></i><i style=\"--i:1\"></i><i style=\"--i:2\"></i><i style=\"--i:3\"></i><i style=\"--i:4\"></i><i style=\"--i:5\"></i></div>";return mountLoader(element,config,options);}
