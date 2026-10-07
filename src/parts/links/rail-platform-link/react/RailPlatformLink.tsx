'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 駅の縁と同じ低いレールを持つ。 */
const RailPlatformLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function RailPlatformLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-rail-platform-link ${className}`}/>;
});
export default RailPlatformLink;
