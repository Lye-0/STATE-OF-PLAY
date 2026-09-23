'use client';
import React,{useEffect,useId,useRef,useState,type HTMLAttributes,type ReactNode,type Ref} from 'react';
import {createAccordionController,type AccordionController} from './accordion-controller';
export interface AccordionItem {
  value:string; title:string; subtitle?:string; badge?:string; content:ReactNode; disabled?:boolean;
}
export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>,'onChange'|'defaultValue'> {
  items?:readonly AccordionItem[]; expanded?:readonly string[]; defaultExpanded?:readonly string[];
  onExpandedChange?:(values:string[])=>void; multiple?:boolean; collapsible?:boolean; disabled?:boolean;
  headingLevel?:2|3|4|5|6;
}
export function AccordionView(props:AccordionProps & {rootRef?:Ref<HTMLDivElement>; motionLayer?:ReactNode}) {
  const {items=[],expanded,defaultExpanded=[],onExpandedChange,multiple=false,collapsible=true,disabled=false,headingLevel=3,className='',rootRef,motionLayer,...attributes}=props;
  const [internal,setInternal]=useState<readonly string[]>(defaultExpanded),values=expanded??internal;
  const root=useRef<HTMLDivElement>(null),controller=useRef<AccordionController|null>(null),latest=useRef(props);
  latest.current=props;const id=useId().replace(/:/g,'');const Heading=`h${headingLevel}` as 'h3';
  // Controllers are cheap and event-driven. Recreate when the opening policy changes, not per frame.
  useEffect(()=>{
    if(!root.current)return;
    const c=createAccordionController(root.current,{expanded:latest.current.expanded??values,multiple,collapsible,controlled:true,
      onExpandedChange(next){if(latest.current.expanded===undefined)setInternal(next);latest.current.onExpandedChange?.(next);}});
    controller.current=c;return()=>{c.destroy();controller.current=null;};
  },[multiple,collapsible]);
  useEffect(()=>{controller.current?.setExpanded(values);controller.current?.refresh();},[values,items,disabled]);
  const activeValues=multiple?values:values.slice(0,1);
  return <div {...attributes} ref={node=>{root.current=node;if(typeof rootRef==='function')rootRef(node);else if(rootRef)rootRef.current=node;}} className={`sop-accordion ${className}`} data-sop-accordion="" data-multiple={multiple}>
    {items.map((item,index)=>{const open=activeValues.includes(item.value);return <section key={item.value} className="sop-accordion-item" data-value={item.value} data-open={open}>
      {motionLayer}<Heading className="sop-accordion-heading"><button type="button" id={`${id}-heading-${index}`} className="sop-accordion-trigger" aria-expanded={open} aria-controls={`${id}-panel-${index}`} disabled={disabled||item.disabled}>
        <span className="sop-accordion-index" aria-hidden="true">{String(index+1).padStart(2,'0')}</span><span className="sop-accordion-title"><b>{item.title}</b>{item.subtitle&&<small>{item.subtitle}</small>}</span>{item.badge&&<span className="sop-accordion-badge">{item.badge}</span>}<span className="sop-accordion-sign" aria-hidden="true"/>
      </button></Heading>
      <div id={`${id}-panel-${index}`} className="sop-accordion-panel" role="region" aria-labelledby={`${id}-heading-${index}`} aria-hidden={!open}>
        <div className="sop-accordion-clip"><div className="sop-accordion-content">{item.content}</div></div>
      </div>
    </section>;})}
    {!items.length&&<p className="sop-accordion-empty">表示するセクションがありません</p>}
  </div>;
}
