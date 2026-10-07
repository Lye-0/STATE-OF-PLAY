'use client';
import React,{forwardRef} from 'react';
import {FoundationWidget,type FoundationProps} from '../../../../shared/foundation/react';
import {renderLoader as renderBaseLoader,mountLoader} from '../../../../shared/foundation/continuum/loader';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config:FoundationConfig={
  "id": "small-square-pulse-loader",
  "kind": "loaders",
  "variant": "three-dots",
  "label": "Small Square Pulse Loader",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export type SmallSquarePulseLoaderProps=FoundationProps;
export default forwardRef<HTMLDivElement,SmallSquarePulseLoaderProps>(function SmallSquarePulseLoader(props,ref){
 return <FoundationWidget {...props} className={`sop-motion-loader ${props.className??''}`} ref={ref} config={config} renderContent={renderLoader} mountContent={mountLoader}/>;
});

function renderLoader(o:Parameters<typeof renderBaseLoader>[0]){return renderBaseLoader({...o,variant:"three-dots"}).replace("<div class=\"ld-dots\"><i class=\"ld-dot\" style=\"--i:0\"></i><i class=\"ld-dot\" style=\"--i:1\"></i><i class=\"ld-dot\" style=\"--i:2\"></i></div>","<div class=\"x-composition\"><i style=\"--i:0\"></i><i style=\"--i:1\"></i><i style=\"--i:2\"></i><i style=\"--i:3\"></i><i style=\"--i:4\"></i><i style=\"--i:5\"></i></div>");}
