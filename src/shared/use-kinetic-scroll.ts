'use client';
import {useEffect,useId,useRef} from 'react';
import {createKineticScroll,type KineticRail} from './kinetic-scroll';
import type {ScrollAreaProps} from './use-scroll-area';
export type {ScrollAreaProps} from './use-scroll-area';
/** Artwork lives in an explicitly empty canvas. React retains ownership of all children. */
export function useKineticScroll(kind:KineticRail,{orientation='vertical',onProgressChange}:ScrollAreaProps){
 const root=useRef<HTMLDivElement>(null),callback=useRef(onProgressChange);callback.current=onProgressChange;
 const viewportId=useId();
 useEffect(()=>{if(!root.current)return;const api=createKineticScroll(root.current,kind,{orientation,onProgressChange:p=>callback.current?.(p)});return()=>api.destroy();},[kind,orientation]);
 return {root,viewportId};
}
