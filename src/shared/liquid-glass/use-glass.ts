'use client';
import {useEffect,useRef,type RefObject} from 'react';
import {createGlass,type GlassOptions,type GlassController} from './core';
/** One visual controller per mounted instance. State/event ownership stays with the widget. */
export function useGlass(root:RefObject<HTMLElement|null>,options:GlassOptions){
 const ref=useRef<GlassController|null>(null),initial=useRef(options);
 useEffect(()=>{if(!root.current)return;const c=createGlass(root.current,initial.current);ref.current=c;return()=>{c.destroy();ref.current=null;};},[root]);
 useEffect(()=>{ref.current?.updateGlass(options);},[options.material,options.appearance,options.optics,options.paused]);
 return ref;
}
