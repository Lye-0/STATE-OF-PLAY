'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** ツールバー向けの小さな案内リンク。 */
const CompactRouteLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CompactRouteLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-compact-route-link ${className}`}/>;
});
export default CompactRouteLink;
