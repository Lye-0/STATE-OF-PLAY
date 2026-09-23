'use client';
import React,{useEffect,useLayoutEffect,useRef} from 'react';
import {TabsView,type TabsProps} from './tabs-view';
import {SegmentView,type SegmentProps} from './segment-view';
import {attachTransitSelection} from './transit-selection';
const useDOMEffect=typeof window==='undefined'?useEffect:useLayoutEffect;
const markerArt=<span className="sop-transit-plate" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>;
const panelArt=<span className="sop-transit-panel-art" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>;
export function TransitTabsView({mode,className='',...props}:TabsProps & {mode:string}) {
 const root=useRef<HTMLDivElement|null>(null);
 useDOMEffect(()=>{if(root.current)return attachTransitSelection(root.current);},[mode]);
 return <TabsView {...props} rootRef={root} markerArt={markerArt} panelArt={panelArt} data-transit-mode={mode} className={`sop-transit ${className}`}/>;
}
export function TransitSegmentView({mode,className='',...props}:SegmentProps & {mode:string}) {
 const root=useRef<HTMLDivElement|null>(null);
 useDOMEffect(()=>{if(root.current)return attachTransitSelection(root.current);},[mode]);
 return <SegmentView {...props} rootRef={root} markerArt={markerArt} data-transit-mode={mode} className={`sop-transit ${className}`}/>;
}
