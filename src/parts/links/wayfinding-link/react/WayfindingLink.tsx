'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 標識の行先と方向を分け、矢印までの経路がつながる。 */
const WayfindingLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function WayfindingLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-wayfinding-link ${className}`}/>;
});
export default WayfindingLink;
