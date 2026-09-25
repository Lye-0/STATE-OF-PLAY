'use client';
import React,{forwardRef} from 'react';
import {GlassButtonView,type GlassButtonProps} from '../../../../shared/liquid-glass/button-view';
import '../styles.css';
export type {GlassButtonProps} from '../../../../shared/liquid-glass/button-view';
const FrostButton=forwardRef<HTMLButtonElement,GlassButtonProps>(function FrostButton({className='',...props},ref){return <GlassButtonView ref={ref} material="regular" {...props} className={`sop-lg-frost-button lg-quiet ${className}`}/>;});
export default FrostButton;
