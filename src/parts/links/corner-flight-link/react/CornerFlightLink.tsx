'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 右上の角へ飛ぶ経路を文字の外で描く。 */
const CornerFlightLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CornerFlightLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-corner-flight-link ${className}`}/>;
});
export default CornerFlightLink;
