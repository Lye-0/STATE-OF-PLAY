'use client';
import React,{forwardRef} from 'react';
import {GlassButtonView,type GlassButtonProps} from '../../../../shared/liquid-glass/button-view';
import '../styles.css';
export type {GlassButtonProps} from '../../../../shared/liquid-glass/button-view';
const PressureButton=forwardRef<HTMLButtonElement,GlassButtonProps>(function PressureButton({className='',...props},ref){return <GlassButtonView ref={ref} material="clear" {...props} className={`sop-lg-pressure-button ${className}`}/>;});
export default PressureButton;
