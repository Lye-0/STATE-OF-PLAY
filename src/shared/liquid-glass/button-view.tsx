'use client';
import React,{forwardRef,useRef} from 'react';
import type {ActionButtonProps} from '../action-button-view';
import type {GlassOptions} from './core';
import {useGlass} from './use-glass';
export type GlassButtonProps=ActionButtonProps&GlassOptions;
export const GlassButtonView=forwardRef<HTMLButtonElement,GlassButtonProps>(function GlassButtonView(
 {material='clear',appearance='auto',optics='standard',paused=false,loading=false,type='button',className='',children,icon,onClickCapture,...props},forwarded){
 const root=useRef<HTMLButtonElement|null>(null);useGlass(root,{material,appearance,optics,paused});
 return <button {...props} ref={node=>{root.current=node;if(typeof forwarded==='function')forwarded(node);else if(forwarded)forwarded.current=node;}} type={type} className={`lg-root lg-button sop-action ${className}`} data-lg-material={material} data-lg-appearance={appearance} data-loading={String(loading)} aria-busy={loading||undefined} aria-disabled={loading?true:props['aria-disabled']}
  onClickCapture={event=>{if(loading||props.disabled||props['aria-disabled']===true||props['aria-disabled']==='true'){event.preventDefault();event.stopPropagation();return;}onClickCapture?.(event);}}>
  <span className="lg-button-plane lg-surface" aria-hidden="true"><span className="lg-ripple"/></span>
  <span className="sop-action-label">{children}</span><span className="sop-action-icon" aria-hidden="true">{icon??<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>}</span>
  <span className="sop-action-spinner" aria-hidden="true"/>
 </button>;
});
