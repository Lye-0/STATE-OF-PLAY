'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 橋桁の両端に留め点を持つリンク。 */
const RivetBridgeLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function RivetBridgeLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-rivet-bridge-link ${className}`}/>;
});
export default RivetBridgeLink;
