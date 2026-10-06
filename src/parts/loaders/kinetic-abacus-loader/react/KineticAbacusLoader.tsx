'use client';
import React,{forwardRef} from 'react';
import {FoundationWidget,type FoundationProps} from '../../../../shared/foundation/react';
import {renderLoader,mountLoader} from '../../../../shared/foundation/continuum/loader';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config:FoundationConfig={
  "id": "kinetic-abacus-loader",
  "kind": "loaders",
  "variant": "three-dots",
  "label": "Three Dots",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export type KineticAbacusLoaderProps=FoundationProps;
export default forwardRef<HTMLDivElement,KineticAbacusLoaderProps>(function KineticAbacusLoader(props,ref){
 return <FoundationWidget {...props} className={`sop-motion-loader ${props.className??''}`} ref={ref} config={config} renderContent={renderLoader} mountContent={mountLoader}/>;
});
