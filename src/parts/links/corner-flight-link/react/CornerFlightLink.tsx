'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 対角の空白を飛ぶ小さな矢印。 */
const CornerFlightLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CornerFlightLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-corner-flight-link ${className}`}/>;
});
export default CornerFlightLink;
