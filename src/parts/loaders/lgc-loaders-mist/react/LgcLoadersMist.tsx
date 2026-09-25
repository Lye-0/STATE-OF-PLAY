'use client';
import React,{forwardRef} from 'react';
import {FoundationWidget,type FoundationProps} from '../../../../shared/foundation/react';
import {renderLoader,mountLoader} from '../../../../shared/foundation/continuum/loader';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config:FoundationConfig={
  "id": "lgc-loaders-mist",
  "kind": "loaders",
  "variant": "arc-spinner",
  "label": "Frost Spinner",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export type LgcLoadersMistProps=FoundationProps;
export default forwardRef<HTMLDivElement,LgcLoadersMistProps>(function LgcLoadersMist(props,ref){
 return <FoundationWidget {...props} className={`lgc-root sop-motion-loader ${props.className??''}`} ref={ref} config={config} renderContent={renderLoader} mountContent={mountLoader}/>;
});
