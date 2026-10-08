'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 右上の角が小さな翼として開く。リンクの矢印と飛び出す方向を統一する。 */
const CornerFlightLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CornerFlightLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-corner-flight-link ${className}`}/>;
});
export default CornerFlightLink;
