'use client';
import React from 'react';
import {useSimpleToggle,type SimpleToggleProps} from '../use-simple-toggle';
import type {SimpleToggleConfig} from '../simple-toggle';
import type {GlassOptions} from './core';
import {useGlass} from './use-glass';
export type GlassToggleProps=SimpleToggleProps&GlassOptions;
export function GlassToggleView({config,...props}:GlassToggleProps&{config:SimpleToggleConfig}){
 const {material='clear',appearance='auto',optics='standard',paused=false,className='',checked:_c,defaultChecked:_d,onCheckedChange:_change,...attributes}=props;
 const {element,checked}=useSimpleToggle(config,props);useGlass(element,{material,appearance,optics,paused});
 return <button {...attributes} ref={element} type="button" role="switch" aria-label={attributes['aria-label']??'設定の切り替え'} aria-checked={checked} className={`lg-root lg-toggle sop-toggle ${className}`} data-lg-material={material} data-lg-appearance={appearance}>
  <span className="lg-track lg-surface" aria-hidden="true"><span className="lg-channel"/><span className="lg-on">ON</span><span className="lg-off">OFF</span></span>
  <span className="lg-knob" aria-hidden="true"><span className="lg-surface"><span className="lg-core"/></span></span>
 </button>;
}
