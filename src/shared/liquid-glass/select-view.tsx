'use client';
import React,{useEffect,useRef,useState,useId} from 'react';
import {createSelectController,type SelectController} from '../select-controller';
import type {SelectProps,SelectItem} from '../select-view';
import type {GlassOptions} from './core';
import {useGlass} from './use-glass';
export type GlassSelectProps=Omit<SelectProps,'autoIcon'|'showHeading'|'showHints'|'renderOption'|'children'>&GlassOptions;
export type {SelectItem} from '../select-view';
const empty:readonly SelectItem[]=[];
function Copy({item}:{item:SelectItem}){return <>{item.icon&&<span className="sop-select-icon" aria-hidden="true">{item.icon}</span>}<span className="sop-select-option-copy"><b>{item.label}</b>{item.description&&<small>{item.description}</small>}</span></>;}
export function GlassSelectView({material='clear',appearance='auto',optics='standard',paused=false,items=empty,value,defaultValue,onValueChange,onOpenChange,label='並び順',placeholder='選択してください',name,disabled=false,className='',...attrs}:GlassSelectProps){
 const [internal,setInternal]=useState(defaultValue??items.find(x=>!x.disabled)?.value??''),[open,setOpen]=useState(false);
 const selected=value??internal,chosen=items.find(x=>x.value===selected),id=useId();
 const root=useRef<HTMLDivElement|null>(null),controller=useRef<SelectController|null>(null);
 const latest=useRef({value,selected,onValueChange,onOpenChange});latest.current={value,selected,onValueChange,onOpenChange};
 useEffect(()=>{if(!root.current)return;const c=createSelectController(root.current,{value:latest.current.selected,controlled:true,manageContent:false,
  onValueChange(next){if(latest.current.value===undefined)setInternal(next);latest.current.onValueChange?.(next);},
  onOpenChange(next){setOpen(next);latest.current.onOpenChange?.(next);}});controller.current=c;return()=>{c.destroy();controller.current=null;};},[]);
 const glass=useGlass(root,{material,appearance,optics,paused});
 useEffect(()=>{controller.current?.setValue(selected);controller.current?.refresh();glass.current?.refreshGlass();},[selected,items,disabled]);
 useEffect(()=>{controller.current?.setPaused(paused);},[paused]);
 return <div {...attrs} ref={root} className={`lg-root lg-select sop-select ${className}`} data-lg-material={material} data-lg-appearance={appearance} data-value={selected} data-placeholder={placeholder}>
  <span className="sop-select-caption" id={`${id}-label`}>{label}</span>
  <button className="sop-select-trigger" type="button" role="combobox" aria-label={label} aria-expanded={open} aria-haspopup="listbox" aria-controls={`${id}-list`} disabled={disabled}>
   <span className="lg-trigger-plane lg-surface" aria-hidden="true"/><span className="sop-select-value">{chosen?<Copy item={chosen}/>:placeholder}</span><span className="sop-select-chevron" aria-hidden="true"/>
  </button>
  <input className="sop-select-input" type="hidden" name={name} value={selected} disabled={disabled}/>
  <div className="sop-select-popup" id={`${id}-list`} role="listbox" aria-label={label} hidden>
   {items.map((item,index)=><React.Fragment key={item.value}>
    {item.group&&item.group!==items[index-1]?.group&&<div className="sop-select-group" role="presentation">{item.group}</div>}
    <div className="sop-select-option" id={`${id}-option-${index}`} role="option" data-value={item.value} data-label={item.label} aria-selected={item.value===selected} aria-disabled={item.disabled||undefined}>
     <Copy item={item}/>{item.badge&&<span className="sop-select-badge">{item.badge}</span>}<span className="sop-select-check" aria-hidden="true">✓</span>
    </div>
   </React.Fragment>)}
   {!items.length&&<div className="sop-select-empty">選択肢がありません</div>}
  </div>
 </div>;
}
