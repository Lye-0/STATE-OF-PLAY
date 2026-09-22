'use client';
import React, {useEffect,useId,useRef,useState,type HTMLAttributes,type ReactNode} from 'react';
import {createSelectController,type SelectController} from './select-controller';
export interface SelectItem {
  value:string; label:string; description?:string; icon?:string; badge?:string; group?:string; disabled?:boolean;
}
export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>,'onChange'|'defaultValue'> {
  items?:readonly SelectItem[]; value?:string; defaultValue?:string;
  onValueChange?:(value:string)=>void; onOpenChange?:(open:boolean)=>void;
  label?:string; placeholder?:string; name?:string; disabled?:boolean;
  /** Decorative content only. Interactive controls must not be placed inside a listbox option. */
  renderOption?:(item:SelectItem)=>ReactNode;
}
function OptionCopy({item}:{item:SelectItem}) {
  return <><span className="sop-select-icon" aria-hidden="true">{item.icon ?? item.label.slice(0,2)}</span><span className="sop-select-option-copy"><b>{item.label}</b>{item.description && <small>{item.description}</small>}</span></>;
}
/** React owns the committed value and options. The controller owns popup/focus state only. */
export function SelectView(props:SelectProps) {
  const {items=[],value,defaultValue,onValueChange,onOpenChange,label='選択してください',placeholder='選択してください',name,disabled=false,renderOption,className='',...attributes}=props;
  const [internal,setInternal]=useState(defaultValue??items.find(i=>!i.disabled)?.value??'');
  const selected=value??internal,chosen=items.find(i=>i.value===selected);
  const root=useRef<HTMLDivElement>(null),controller=useRef<SelectController|null>(null),latest=useRef(props),initial=useRef(selected);
  latest.current=props;
  const id=useId().replace(/:/g,'');
  useEffect(()=>{
    if(!root.current)return;
    const c=createSelectController(root.current,{value:initial.current,controlled:true,manageContent:false,
      onValueChange(next){if(latest.current.value===undefined)setInternal(next);latest.current.onValueChange?.(next);},
      onOpenChange(open){latest.current.onOpenChange?.(open);}});
    controller.current=c;
    return()=>{c.destroy();controller.current=null;};
  },[]);
  useEffect(()=>{controller.current?.setValue(selected);controller.current?.refresh();},[selected,items,disabled]);
  return <div {...attributes} ref={root} className={`sop-select ${className}`} data-value={selected} data-placeholder={placeholder}>
    <span className="sop-select-caption" id={`${id}-label`}>{label}<span aria-hidden="true">SELECT / 01</span></span>
    <button className="sop-select-trigger" type="button" role="combobox" aria-label={label} aria-expanded={false} aria-haspopup="listbox" aria-controls={`${id}-list`} disabled={disabled}>
      <span className="sop-select-value" data-glyph={items.findIndex(i=>i.value===selected)%4}>{chosen?<OptionCopy item={chosen}/>:placeholder}</span><span className="sop-select-chevron" aria-hidden="true"/>
    </button>
    <input className="sop-select-input" type="hidden" name={name} value={selected} disabled={disabled}/>
    <div className="sop-select-popup" id={`${id}-list`} role="listbox" aria-label={label} hidden>
      <div className="sop-select-menu-heading" role="presentation"><span>{label}</span><small>{String(items.length).padStart(2,'0')} OPTIONS</small></div>
      {items.map((item,index)=><React.Fragment key={item.value}>
        {item.group && item.group!==items[index-1]?.group && <div className="sop-select-group" role="presentation">{item.group}</div>}
        <div className="sop-select-option" id={`${id}-option-${index}`} role="option" data-value={item.value} data-label={item.label} data-glyph={index%4} aria-selected={item.value===selected} aria-disabled={item.disabled||undefined}>
          {renderOption?renderOption(item):<OptionCopy item={item}/>}<span className="sop-select-badge">{item.badge}</span><span className="sop-select-check" aria-hidden="true">✓</span>
        </div>
      </React.Fragment>)}
      {!items.length&&<div className="sop-select-empty">選択肢がありません</div>}
      <div className="sop-select-menu-footer" role="presentation"><span>↑ ↓ 選択</span><span>↵ 決定</span><span>esc 閉じる</span></div>
    </div>
  </div>;
}
