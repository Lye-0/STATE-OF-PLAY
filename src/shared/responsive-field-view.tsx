'use client';
import React,{useEffect,useRef} from 'react';
import {TextFieldView,type TextFieldProps} from './text-field-view';
import {attachFieldMotion} from './responsive-field';
export function ResponsiveFieldView(props:TextFieldProps){
  const root=useRef<HTMLDivElement>(null);
  useEffect(()=>{if(root.current)return attachFieldMotion(root.current);},[props.multiline]);
  return <TextFieldView {...props} rootRef={root}/>;
}
