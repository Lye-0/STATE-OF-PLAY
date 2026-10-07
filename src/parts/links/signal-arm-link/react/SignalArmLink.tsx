'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 文字に触れず腕木だけが回転する。 */
const SignalArmLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function SignalArmLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-signal-arm-link ${className}`}/>;
});
export default SignalArmLink;
