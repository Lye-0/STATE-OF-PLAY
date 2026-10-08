'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 行先の台を信号機の柱へつなぎ、左の実際の軸から一本の腕を上げる。柱の切欠きと下の固定足、台への接続片を一体で作り、腕の白い反射端だけを上へ導く。行先とnativeの矢印は固定する。 */
const SignalArmLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function SignalArmLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-signal-arm-link ${className}`}/>;
});
export default SignalArmLink;
