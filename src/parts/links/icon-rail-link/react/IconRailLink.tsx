'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 小さなアイコン専用の帯と本文を分けた、一覧用の移動操作。 */
const IconRailLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function IconRailLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-icon-rail-link ${className}`}/>;
});
export default IconRailLink;
