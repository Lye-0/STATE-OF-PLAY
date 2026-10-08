'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** ずれた陶板を一つの押し面へ。押すと背面の受け皿へ沈み、文字と押せる領域は固定。 */
const OffsetPorcelainButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function OffsetPorcelainButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-offset-porcelain-button ${className}`}/>;
});
export default OffsetPorcelainButton;
