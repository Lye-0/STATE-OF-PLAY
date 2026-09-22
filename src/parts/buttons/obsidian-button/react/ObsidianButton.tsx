'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 黒い面に刻まれた面取り。細い縁だけが白く光る。 */
const ObsidianButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function ObsidianButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-obsidian-button ${className}`}/>;
});
export default ObsidianButton;
