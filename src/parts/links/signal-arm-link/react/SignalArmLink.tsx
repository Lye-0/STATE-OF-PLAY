'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 信号腕がラベルの横で進行方向に開く。 */
const SignalArmLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function SignalArmLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-signal-arm-link ${className}`}/>;
});
export default SignalArmLink;
