'use client';
import React, {useEffect, useId, useRef, useState, type ChangeEvent, type HTMLAttributes, type ReactNode, type Ref} from 'react';
import {createTextField, replaceTextValue, type TextControl, type TextFieldController} from './text-field';
export interface TextFieldProps extends Omit<HTMLAttributes<TextControl>, 'defaultValue' | 'onChange' | 'prefix' | 'children'> {
  label?: string; description?: ReactNode; error?: string; success?: boolean;
  value?: string; defaultValue?: string; onValueChange?: (value: string) => void;
  onChange?: (event: ChangeEvent<TextControl>) => void;
  name?: string; form?: string; placeholder?: string;
  type?: 'text' | 'search' | 'email' | 'url' | 'tel' | 'password';
  multiline?: boolean; rows?: number; autoGrow?: boolean;
  required?: boolean; disabled?: boolean; readOnly?: boolean;
  minLength?: number; maxLength?: number; pattern?: string;
  autoComplete?: string; autoFocus?: boolean;
  clearable?: boolean; showCount?: boolean; validateOnBlur?: boolean;
  prefix?: ReactNode; suffix?: ReactNode; caption?: string;
  /** Native input ref for selection, focus and form-library registration. */
  inputRef?: Ref<TextControl>;
}
function setRef<T>(ref: Ref<T> | undefined, node: T | null) {
  if (typeof ref === 'function') ref(node); else if (ref) ref.current = node;
}
/** Real controlled/uncontrolled native input. No contenteditable, value formatting or key interception. */
export function TextFieldView(props: TextFieldProps & {rootRef?: Ref<HTMLDivElement>}) {
  const {label='入力欄', description, error='', success=false, value, defaultValue, onValueChange, onChange,
    name, form, placeholder, type='text', multiline=false, rows=3, autoGrow=false, required=false,
    disabled=false, readOnly=false, minLength, maxLength, pattern, autoComplete, autoFocus,
    clearable=false, showCount=false, validateOnBlur=false, prefix, suffix, caption,
    inputRef, rootRef, className='', style, id: suppliedId, ...attributes} = props;
  const uid=useId(), id=suppliedId ?? `sop-${uid.replace(/[^a-zA-Z0-9_-]/g,'')}-input`;
  const root=useRef<HTMLDivElement>(null), field=useRef<TextControl|null>(null), control=useRef<TextFieldController|null>(null);
  const [revealed,setRevealed]=useState(false);
  const selection=useRef<{start:number|null;end:number|null}|null>(null);
  const password=!multiline && type==='password';
  useEffect(()=>{
    if (!root.current) return;
    const c=createTextField(root.current, {manageIds:false,manageActions:false,validateOnBlur});
    control.current=c;
    return()=>{c.destroy();control.current=null;};
  },[multiline,validateOnBlur]);
  useEffect(()=>{control.current?.setError(error);control.current?.refresh();},[error,value,defaultValue,disabled,readOnly,maxLength,showCount,clearable,autoGrow,multiline,attributes['aria-invalid']]);
  useEffect(()=>{
    const pending=selection.current;
    if (pending && field.current instanceof HTMLInputElement) {
      field.current.focus({preventScroll:true});
      if (pending.start!==null && pending.end!==null) field.current.setSelectionRange(pending.start,pending.end);
      selection.current=null;
    }
    control.current?.refresh();
  },[revealed]);
  useEffect(()=>{
    let alive=true;
    const owner=field.current?.form;
    const reset=(e:Event)=>queueMicrotask(()=>{if(alive&&!e.defaultPrevented)setRevealed(false);});
    owner?.addEventListener('reset',reset);
    return()=>{alive=false;owner?.removeEventListener('reset',reset);};
  },[form,multiline]);
  const change=(e:ChangeEvent<TextControl>)=>{onValueChange?.(e.currentTarget.value);onChange?.(e);};
  const described=[attributes['aria-describedby'],`${id}-help`,`${id}-feedback`].filter(Boolean).join(' ');
  const ref=(node:TextControl|null)=>{field.current=node;setRef(inputRef,node);};
  const native={...attributes,id,name,form,placeholder,required,disabled,readOnly,minLength,maxLength,autoComplete,autoFocus,
    className:'sop-field-control',onChange:change,'aria-describedby':described,
    ...(value!==undefined?{value}:{defaultValue}),ref};
  return <div ref={node=>{root.current=node;setRef(rootRef,node);}} className={`sop-textfield ${className}`} style={style}
    data-multiline={multiline} data-clearable={clearable} data-show-count={showCount} data-auto-grow={autoGrow}
    data-validate={validateOnBlur?'blur':'submit'} data-success={success} data-external-invalid={attributes['aria-invalid'] ?? false}>
    <div className="sop-field-heading"><label className="sop-field-label" htmlFor={id}>{label}{required&&<span className="sop-field-required" aria-hidden="true"> *</span>}</label>{caption&&<span className="sop-field-caption" aria-hidden="true">{caption}</span>}</div>
    <div className="sop-field-shell">
      <span className="sop-field-fx" aria-hidden="true"><i/><i/><i/><i/></span>
      <span className="sop-field-symbol" aria-hidden="true"/>
      {prefix!=null&&<span className="sop-field-prefix" aria-hidden="true">{prefix}</span>}
      {multiline?<textarea {...native} rows={rows}/>:<input {...native} type={password&&revealed?'text':type} pattern={pattern}/>}
      {suffix!=null&&<span className="sop-field-suffix" aria-hidden="true">{suffix}</span>}
      {clearable&&<button type="button" className="sop-field-clear" hidden={!value&&!defaultValue} aria-label={`${label}をクリア`} disabled={disabled||readOnly} onClick={()=>{
        if(root.current?.dataset.composing==='true'||!field.current)return;
        replaceTextValue(field.current,'');field.current.focus({preventScroll:true});control.current?.refresh();
      }}><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m6 6 8 8m0-8-8 8"/></svg></button>}
      {password&&<button type="button" className="sop-field-reveal" aria-label={revealed?'パスワードを隠す':'パスワードを表示'} aria-pressed={revealed} disabled={disabled||readOnly} onClick={()=>{
        if(root.current?.dataset.composing==='true'||!(field.current instanceof HTMLInputElement))return;
        selection.current={start:field.current.selectionStart,end:field.current.selectionEnd};setRevealed(!revealed);
      }}><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M2 10s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5Z"/><circle cx="10" cy="10" r="2"/><path className="sop-field-eye-slash" d="m3 3 14 14"/></svg></button>}
    </div>
    <div className="sop-field-meta"><span className="sop-field-help" id={`${id}-help`}>{description}</span><span className="sop-field-counter" aria-hidden="true"/></div>
    <p className="sop-field-validation" id={`${id}-feedback`} aria-live="polite" hidden/>
    <div className="sop-field-baseline" aria-hidden="true"><i/><i/><i/><span/></div>
  </div>;
}
