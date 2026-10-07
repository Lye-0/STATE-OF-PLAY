'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 裁断線と縫い目を分け、行先に沿って帯が張る。 */
const TailoredEdgeLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function TailoredEdgeLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-tailored-edge-link ${className}`}/>;
});
export default TailoredEdgeLink;
