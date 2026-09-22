'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 精密な目盛りと、角の照準。工具のようなリンク。 */
const BlueprintLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function BlueprintLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-blueprint-link ${className}`}/>;
});
export default BlueprintLink;
