'use client';
import React, {forwardRef, useEffect, useLayoutEffect, useRef, useImperativeHandle, type HTMLAttributes, type Ref} from 'react';
import type {FoundationConfig, FoundationOptions, FoundationController, FoundationValue} from './core.ts';
export interface FoundationProps extends Omit<HTMLAttributes<HTMLDivElement>,'defaultValue'|'onChange'|'content'>, Omit<FoundationOptions,'controlled'|'onDataChange'> {
  onValueChange?: (value: FoundationValue) => void;
  controllerRef?: Ref<FoundationController>;
}
type WidgetProps = FoundationProps & {
  config: FoundationConfig;
  renderContent: (options: FoundationOptions) => string;
  mountContent: (root: HTMLElement, config: FoundationConfig, options: FoundationOptions) => FoundationController;
};
const useClientLayoutEffect=typeof window==='undefined'?useEffect:useLayoutEffect;
/** A deliberately isolated DOM island. React owns the outer element; the controller owns ONLY its children.
 * The initial inner HTML stays constant across React renders, preserving native input editing and undo.
 */
export const FoundationWidget=forwardRef<HTMLDivElement,WidgetProps>(function FoundationWidget(props,forwardedRef){
  const {config,renderContent,mountContent,className='',style,id,title,role,controllerRef,onValueChange,children: _children,...options}=props;
  const element=useRef<HTMLDivElement>(null),controller=useRef<FoundationController|null>(null),latest=useRef(props);latest.current=props;
  const first=useRef<{__html:string}|null>(null);if(first.current===null)first.current={__html:renderContent({...config,...options})};
  useImperativeHandle(forwardedRef,()=>element.current!,[]);
  useImperativeHandle(controllerRef,()=>({getData:()=>controller.current?.getData()??null,setData:v=>controller.current?.setData(v),updateFoundation:o=>controller.current?.updateFoundation(o),setDisabled:v=>controller.current?.setDisabled(v),setPaused:v=>controller.current?.setPaused(v),focus:()=>controller.current?.focus(),destroy:()=>controller.current?.destroy(),show:()=>controller.current?.show?.(),hide:()=>controller.current?.hide?.(),notify:n=>controller.current?.notify?.(n)??'',dismiss:id=>controller.current?.dismiss?.(id)}),[]);
  useClientLayoutEffect(()=>{const root=element.current;if(!root)return;
    const api=mountContent(root,config,{...options,controlled:props.value!==undefined,onDataChange(value){latest.current.onValueChange?.(value);}});controller.current=api;
    return ()=>{api.destroy();controller.current=null;};
  },[config,mountContent]);
  useClientLayoutEffect(()=>{const next:FoundationOptions={...options,controlled:props.value!==undefined,onDataChange:value=>latest.current.onValueChange?.(value)};if(props.value===undefined)delete next.value;controller.current?.updateFoundation(next);});
  const wrapper: HTMLAttributes<HTMLDivElement> = {onKeyDown:props.onKeyDown,onClick:props.onClick,onFocus:props.onFocus,onBlur:props.onBlur,tabIndex:props.tabIndex};
  const accessibility=Object.fromEntries(Object.entries(props).filter(([key])=>key.startsWith('aria-')||key.startsWith('data-')));
  return <div {...accessibility} {...wrapper} ref={element} id={id} title={title} role={role} className={`sop-foundation sop-${config.id} ${className}`} data-foundation={config.kind} data-variant={config.variant} style={style} aria-label={props['aria-label']} dangerouslySetInnerHTML={first.current}/>;
});
