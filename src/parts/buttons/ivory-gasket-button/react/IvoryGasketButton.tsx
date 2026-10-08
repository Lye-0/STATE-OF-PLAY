'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 象牙色の押し面から下へ出る二つの押し子を、露出したゴムの輪と銀の足が受ける。ホバーでは局所的な弾性部がたわみ、上の文字面と操作位置は固定する。 */
const IvoryGasketButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function IvoryGasketButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-ivory-gasket-button ${className}`}/>;
});
export default IvoryGasketButton;
