'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 上下の銀帯へ、端の接線がつながる二本の彫刻曲線を置いた押し面。交差と線幅を揃え、ホバーでは文字の外側の二本の帯だけが逆向きに流れる。 */
const GuillocheButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function GuillocheButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-guilloche-button ${className}`}/>;
});
export default GuillocheButton;
