'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 狭い縦の門の間から、ラベルと矢印が移動方向を示す。 */
const NarrowGateLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function NarrowGateLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-narrow-gate-link ${className}`}/>;
});
export default NarrowGateLink;
