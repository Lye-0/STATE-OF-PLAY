'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 固定した行先の紙を、下の封筒の返しと右の差込み口へ収める。大きい三角を省き、下の浅い折山と斜めの右断面を紙の端へ接続する。操作中は口の側面だけを開き、紙と矢印を保つ。 */
const EnvelopeMouthLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function EnvelopeMouthLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-envelope-mouth-link ${className}`}/>;
});
export default EnvelopeMouthLink;
