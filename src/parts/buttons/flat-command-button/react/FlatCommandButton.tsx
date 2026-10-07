'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** フラットな小面と適切な余白で、繰り返す操作を揃える。 */
const FlatCommandButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function FlatCommandButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-flat-command-button ${className}`}/>;
});
export default FlatCommandButton;
