'use client';
import React,{forwardRef} from 'react';
import {FoundationWidget,type FoundationProps} from '../../../../shared/foundation/react';
import {renderLoader,mountLoader} from '../../../../shared/foundation/continuum/loader';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config:FoundationConfig={
  "id": "lgc-loaders-lens",
  "kind": "loaders",
  "variant": "liquid-merge",
  "label": "Glass Droplets",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export type LgcLoadersLensProps=FoundationProps;
export default forwardRef<HTMLDivElement,LgcLoadersLensProps>(function LgcLoadersLens(props,ref){
 return <FoundationWidget {...props} className={`lgc-root sop-motion-loader ${props.className??''}`} ref={ref} config={config} renderContent={renderLoader} mountContent={mountLoader}/>;
});
