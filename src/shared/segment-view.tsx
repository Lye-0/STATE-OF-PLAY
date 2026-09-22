'use client';
import React,{useId,useState,useRef,useEffect,useLayoutEffect,type HTMLAttributes,type ReactNode}from'react';
import {selectionValue,validateSelectionItems,nextSelection,type SelectionOrientation}from'./selection-model';
import {createSelectionIndicator}from'./selection-indicator';
export interface SegmentItem {value:string;label:string;icon?:ReactNode;description?:string;disabled?:boolean;}
export interface SegmentProps extends Omit<HTMLAttributes<HTMLDivElement>,'defaultValue'|'onChange'|'children'> {
  items?:readonly SegmentItem[];value?:string;defaultValue?:string;onValueChange?:(value:string)=>void;
  name?:string;form?:string;required?:boolean;disabled?:boolean;orientation?:SelectionOrientation;
}
const empty:readonly SegmentItem[]=[];
const useDOMEffect=typeof window==='undefined'?useEffect:useLayoutEffect;
export function SegmentView({items=empty,value,defaultValue,onValueChange,name,form,required=false,disabled=false,orientation='horizontal',className='',...attributes}:SegmentProps) {
  validateSelectionItems(items);
  const [internal,setInternal]=useState(()=>selectionValue(items,defaultValue)),selected=selectionValue(items,value??internal);
  const id=useId(),root=useRef<HTMLDivElement>(null),marker=useRef<ReturnType<typeof createSelectionIndicator>|null>(null);
  const first=useRef(defaultValue),latest=useRef({items,value,selected,onValueChange});latest.current={items,value,selected,onValueChange};
  function request(next:string){if(value===undefined)setInternal(next);onValueChange?.(next);}
  useDOMEffect(()=>{if(!root.current)return;const m=createSelectionIndicator(root.current);marker.current=m;return()=>{m.destroy();marker.current=null;};},[]);
  useDOMEffect(()=>{marker.current?.refresh();if(value===undefined&&internal!==selected)setInternal(selected);},[items,selected,orientation,disabled,value,internal]);
  useEffect(()=>{
    const owner=root.current?.querySelector('input')?.form;if(!owner)return;
    let active=true;
    const reset=(event:Event)=>queueMicrotask(()=>{if(!active||event.defaultPrevented)return;const state=latest.current;const next=selectionValue(state.items,first.current);
      if(state.value===undefined)setInternal(next);state.onValueChange?.(next);
      // Reset is a native operation. Restore controlled values even when a parent rejects a reset.
      const current=state.value===undefined?next:state.selected;
      root.current?.querySelectorAll<HTMLInputElement>('input[type="radio"]').forEach(input=>input.checked=input.value===current);
      marker.current?.refresh();
    });
    owner.addEventListener('reset',reset);return()=>{active=false;owner.removeEventListener('reset',reset);};
  },[form,items.length]);
  return <div {...attributes} ref={root} className={`sop-choice sop-segments ${className}`} data-selection-kind="segments" data-value={selected} data-orientation={orientation} data-disabled={disabled}>
    <div className="sop-choice-list" role="radiogroup" aria-label={attributes['aria-label']??'設定を選択'} onKeyDown={event=>{
      if(disabled||event.defaultPrevented||!['Home','End'].includes(event.key))return;
      const next=nextSelection(items,selected,event.key==='Home'?'first':'last');if(!next)return;
      event.preventDefault();root.current?.querySelectorAll<HTMLInputElement>('input').forEach(input=>{if(input.value===next)input.focus({preventScroll:true});});request(next);
    }}>
      <span className="sop-choice-marker" aria-hidden="true"/>
      {items.map((item,index)=><label key={item.value} className="sop-choice-item" data-choice-value={item.value} data-selected={selected===item.value} data-disabled={disabled||item.disabled||false}>
        <input type="radio" name={name??`sop-${id}`} form={form} value={item.value} aria-label={item.label} checked={selected===item.value} disabled={disabled||item.disabled} required={required} onChange={()=>request(item.value)}/>
        <span className="sop-choice-index" aria-hidden="true">{String(index+1).padStart(2,'0')}</span>{item.icon&&<span className="sop-choice-icon" aria-hidden="true">{item.icon}</span>}<span className="sop-choice-copy"><span className="sop-choice-label">{item.label}</span>{item.description&&<small className="sop-choice-description">{item.description}</small>}</span><span className="sop-choice-dot" aria-hidden="true"/>
      </label>)}
    </div>
    {!items.length&&<p className="sop-choice-empty">選択肢がありません</p>}
  </div>;
}
