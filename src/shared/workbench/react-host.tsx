'use client';
import React, {useEffect,useId,useRef,type CSSProperties,type Ref} from 'react';
import type {WorkbenchAPI} from './core';
export interface WorkbenchContainer<O,S extends object> {className?:string;style?:CSSProperties;id?:string;apiRef?:Ref<WorkbenchAPI<O,S>|null>;}
interface HostProps<O,S extends object> extends WorkbenchContainer<O,S> {
 kind:string;skin:string;options:O;render:(options:O,prefix?:string)=>string;create:(root:HTMLElement,options:O)=>WorkbenchAPI<O,S>;
}
function setRef<T>(ref:Ref<T>|undefined,value:T){if(typeof ref==='function')ref(value);else if(ref)(ref as {current:T}).current=value;}
/**
 * Explicit DOM ownership boundary: the controller owns data-wb-owned, never React children.
 * Stable initial SSR markup; prop updates do not remount inputs. All listeners/requests are cleaned up.
 */
export function WorkbenchHost<O,S extends object>({kind,skin,options,render,create,className='',style,id,apiRef}:HostProps<O,S>){
 const root=useRef<HTMLDivElement>(null),api=useRef<WorkbenchAPI<O,S>|null>(null),latest=useRef(options);latest.current=options;
 const uid=useId().replace(/[^A-Za-z0-9_-]/g,''),initial=useRef<{__html:string}|null>(null);
 if(initial.current===null)initial.current={__html:render(options,`wb-react-${uid}`)};
 useEffect(()=>{if(!root.current)return;const controller=create(root.current,latest.current);api.current=controller;return()=>{controller.destroy();api.current=null;};},[create]);
 useEffect(()=>{api.current?.update(options);},[options]);
 useEffect(()=>{setRef(apiRef,api.current);return()=>setRef(apiRef,null);},[apiRef]);
 return <div ref={root} id={id} className={`sop-wb sop-${skin} ${className}`} data-wb-kind={kind} style={style}><div data-wb-owned dangerouslySetInnerHTML={initial.current}/></div>;
}
