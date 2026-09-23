'use client';
import React,{forwardRef} from 'react';
import {FoundationWidget,type FoundationProps} from '../../../../shared/foundation/react';
import {renderLoader,mountLoader} from '../../../../shared/foundation/continuum/loader';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config:FoundationConfig={
  "id": "magnetic-pendulum-loader",
  "kind": "loaders",
  "variant": "magnetic-pendulum",
  "label": "Magnetic Pendulum",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export type MagneticPendulumLoaderProps=FoundationProps;
export default forwardRef<HTMLDivElement,MagneticPendulumLoaderProps>(function MagneticPendulumLoader(props,ref){
 return <FoundationWidget {...props} className={`sop-motion-loader ${props.className??''}`} ref={ref} config={config} renderContent={renderLoader} mountContent={mountLoader}/>;
});
