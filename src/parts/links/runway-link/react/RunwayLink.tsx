'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 横に伸びるレールと、進行方向を示す小さな矢印。 */
const RunwayLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function RunwayLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-runway-link ${className}`}/>;
});
export default RunwayLink;
