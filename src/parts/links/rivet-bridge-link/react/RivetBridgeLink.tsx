'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 二つの鋲で固定した橋桁に移動の筋が通る。 */
const RivetBridgeLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function RivetBridgeLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-rivet-bridge-link ${className}`}/>;
});
export default RivetBridgeLink;
