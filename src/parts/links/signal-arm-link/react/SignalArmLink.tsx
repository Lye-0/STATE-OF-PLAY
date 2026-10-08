'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 信号腕と行先を同じ台へ。ホバーで外側の腕が上がり、固定矢印の方向を補助する。 */
const SignalArmLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function SignalArmLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-signal-arm-link ${className}`}/>;
});
export default SignalArmLink;
