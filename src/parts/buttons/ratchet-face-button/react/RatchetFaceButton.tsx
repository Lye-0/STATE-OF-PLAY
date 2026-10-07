'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 歯止めの端が段階的に噛み合う、機械式の面。 */
const RatchetFaceButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function RatchetFaceButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-ratchet-face-button ${className}`}/>;
});
export default RatchetFaceButton;
