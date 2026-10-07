'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 二重の切り込みから矢印を見せる。 */
const CutlineLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CutlineLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-cutline-link ${className}`}/>;
});
export default CutlineLink;
