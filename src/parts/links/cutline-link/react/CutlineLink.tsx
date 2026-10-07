'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 切取り線の先を折り返す、移動方向の明快な札。 */
const CutlineLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CutlineLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-cutline-link ${className}`}/>;
});
export default CutlineLink;
