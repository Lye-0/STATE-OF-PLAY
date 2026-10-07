'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** ツールバーで場所を取らない、文字とアイコンの短い操作。 */
const CompactToolbarButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function CompactToolbarButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-compact-toolbar-button ${className}`}/>;
});
export default CompactToolbarButton;
