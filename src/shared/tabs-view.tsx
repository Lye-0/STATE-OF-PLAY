'use client';
import React, {useId,useState,useRef,useEffect,useLayoutEffect,type HTMLAttributes,type ReactNode} from 'react';
import {createTabsController,type TabsController} from './tabs-controller';
import {selectionValue,validateSelectionItems,type SelectionOrientation} from './selection-model';
export interface TabItem {value:string;label:string;icon?:ReactNode;badge?:string;disabled?:boolean;content:ReactNode;}
export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>,'defaultValue'|'onChange'|'children'> {
  items?:readonly TabItem[]; value?:string; defaultValue?:string; onValueChange?:(value:string)=>void;
  activation?:'automatic'|'manual';orientation?:SelectionOrientation;disabled?:boolean;
}
const empty:readonly TabItem[]=[];
const useDOMEffect=typeof window==='undefined'?useEffect:useLayoutEffect;
/** Switching hides (rather than unmounts) panels, preserving local form state. */
export function TabsView({items=empty,value,defaultValue,onValueChange,activation='automatic',orientation='horizontal',disabled=false,className='',...attributes}:TabsProps) {
  validateSelectionItems(items);
  const [internal,setInternal]=useState(()=>selectionValue(items,defaultValue));
  const selected=selectionValue(items,value??internal);
  const root=useRef<HTMLDivElement>(null),controller=useRef<TabsController|null>(null),id=useId();
  const latest=useRef({value,onValueChange,selected});latest.current={value,onValueChange,selected};
  useDOMEffect(()=>{
    if(!root.current)return;
    const c=createTabsController(root.current,{value:latest.current.selected,controlled:true,manageDOM:false,activation,orientation,disabled,
      onValueChange(next){if(latest.current.value===undefined)setInternal(next);latest.current.onValueChange?.(next);}});
    controller.current=c;return()=>{c.destroy();controller.current=null;};
  },[activation]);
  useDOMEffect(()=>{controller.current?.refresh();controller.current?.setDisabled(disabled);controller.current?.setOrientation(orientation);controller.current?.setValue(selected);if(value===undefined&&internal!==selected)setInternal(selected);},[items,selected,disabled,orientation,value,internal]);
  return <div {...attributes} ref={root} className={`sop-choice sop-tabs ${className}`} data-selection-kind="tabs" data-value={selected} data-orientation={orientation} data-disabled={disabled}>
    <div className="sop-choice-list" role="tablist" aria-label={attributes['aria-label']??'内容の切り替え'} aria-orientation={orientation}>
      <span className="sop-choice-marker" aria-hidden="true"/>
      {items.map((item,index)=><button key={item.value} type="button" className="sop-choice-item" data-choice-value={item.value} data-selected={selected===item.value} role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel-${index}`} aria-selected={selected===item.value} aria-disabled={disabled||item.disabled||false} disabled={item.disabled} tabIndex={!disabled&&selected===item.value?0:-1}>
        <span className="sop-choice-index" aria-hidden="true">{String(index+1).padStart(2,'0')}</span>{item.icon&&<span className="sop-choice-icon" aria-hidden="true">{item.icon}</span>}<span className="sop-choice-label">{item.label}</span>{item.badge&&<span className="sop-choice-badge">{item.badge}</span>}<span className="sop-choice-dot" aria-hidden="true"/>
      </button>)}
    </div>
    <div className="sop-choice-panels">{items.map((item,index)=><section key={item.value} className="sop-choice-panel" data-panel-value={item.value} role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} tabIndex={0} hidden={selected!==item.value}>{item.content}</section>)}</div>
    {!items.length&&<p className="sop-choice-empty">表示するタブがありません</p>}
  </div>;
}
