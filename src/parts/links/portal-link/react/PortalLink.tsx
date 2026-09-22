'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 塗りのない文字に、大きな円の矢印を添える。 */
const PortalLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function PortalLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-portal-link ${className}`}/>;
});
export default PortalLink;
