'use client';
import React,{useEffect,useRef} from 'react';
import {AccordionView,type AccordionProps} from './accordion-view';
import {attachUnfoldMotion} from './unfold-accordion';

// A dedicated decorative layer, never a clone of user content and never focusable.
const layer=<span className="sop-unfold-scene" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/></span>;
export function UnfoldAccordionView({mode,className='',...props}:AccordionProps & {mode:string}) {
  const root=useRef<HTMLDivElement>(null);
  useEffect(()=>{if(root.current)return attachUnfoldMotion(root.current);},[mode]);
  return <AccordionView {...props} rootRef={root} motionLayer={layer} data-unfold-mode={mode} className={`sop-unfold-accordion ${className}`}/>;
}
