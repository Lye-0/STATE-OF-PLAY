'use client';
import React, {useEffect,useId,useRef,type ReactNode,type CSSProperties} from 'react';
import type {SignatureAPI} from './core';
export interface SignatureContainerProps { className?:string; style?:CSSProperties; id?:string; children?:ReactNode; }
interface HostProps<O,S extends object> extends SignatureContainerProps {
 kind:string; skin:string; options:O;
 render:(options:O,prefix?:string)=>string;
 create:(root:HTMLElement,options:O)=>SignatureAPI<O,S>;
}
/**
 * The controller exclusively owns data-sg-owned. React exclusively owns data-sg-slot.
 * No document queries, cloning of children, or React-managed input DOM mutations.
 * First paint is real, escaped SSR markup; effects only attach/update the controller.
 */
export function SignatureHost<O,S extends object>({kind,skin,options,render,create,className='',style,id,children}:HostProps<O,S>){
 const root=useRef<HTMLDivElement>(null),api=useRef<SignatureAPI<O,S>|null>(null),latest=useRef(options);
 latest.current=options;
 const loading=kind==='skeletons'&&(options as {loading?:boolean}).loading!==false;
 const uid=useId().replace(/[^a-zA-Z0-9_-]/g,'');
 const initial=useRef<{html:string}|null>(null);
 if(initial.current===null)initial.current={html:render(options,`sg-react-${uid}`)};
 useEffect(()=>{if(!root.current)return;const controller=create(root.current,latest.current);api.current=controller;return()=>{controller.destroy();api.current=null;};},[create]);
 useEffect(()=>{api.current?.update(options);},[options]);
 return <div ref={root} id={id} className={`sop-sig sop-${skin} ${className}`} data-sg-kind={kind} aria-busy={kind==='skeletons'?loading:undefined} style={style}><div hidden={kind==='skeletons'&&!loading} data-sg-owned dangerouslySetInnerHTML={{__html:initial.current.html}}/><div data-sg-slot hidden={loading} inert={loading||undefined}>{children}</div></div>;
}
