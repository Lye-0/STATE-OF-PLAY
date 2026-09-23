'use client';
import React,{forwardRef} from 'react';
import {FoundationWidget,type FoundationProps} from '../../../../shared/foundation/react';
import {renderLoader,mountLoader} from '../../../../shared/foundation/continuum/loader';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config:FoundationConfig={
  "id": "tick-spinner-loader",
  "kind": "loaders",
  "variant": "tick-spinner",
  "label": "Tick Spinner",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export type TickSpinnerLoaderProps=FoundationProps;
export default forwardRef<HTMLDivElement,TickSpinnerLoaderProps>(function TickSpinnerLoader(props,ref){
 return <FoundationWidget {...props} className={`sop-motion-loader ${props.className??''}`} ref={ref} config={config} renderContent={renderLoader} mountContent={mountLoader}/>;
});
