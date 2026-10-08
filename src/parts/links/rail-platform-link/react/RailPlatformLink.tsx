'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 駅の乗降口を右端へ設ける。細いプラットフォームと矢印の台を分けて誘導する。 */
const RailPlatformLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function RailPlatformLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-rail-platform-link ${className}`}/>;
});
export default RailPlatformLink;
