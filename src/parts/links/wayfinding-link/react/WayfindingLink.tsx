'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 行先を示す斜めの標識。矢印を一つに保ち、先端の余白が進む方向を作る。 */
const WayfindingLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function WayfindingLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-wayfinding-link ${className}`}/>;
});
export default WayfindingLink;
