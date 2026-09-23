'use client';
import React,{useRef,useEffect,useLayoutEffect} from 'react';
import {PopupView,type PopupProps} from './popup-view';
import {attachTransitPopup} from './transit-popup';
const useDOMEffect=typeof window==='undefined'?useEffect:useLayoutEffect;
const art=<span className="sop-popup-scene" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/></span>;
export function TransitPopupView({mode,className='',...props}:PopupProps & {mode:string}){
 const root=useRef<HTMLDivElement|null>(null);
 useDOMEffect(()=>{if(root.current)return attachTransitPopup(root.current);},[mode]);
 return <PopupView {...props} rootRef={root} motionArt={art} data-transit-popup={mode} className={`sop-transit-popup ${className}`}/>;
}
