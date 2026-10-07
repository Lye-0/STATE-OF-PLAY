'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 本の背に添えた縦罫の案内。 */
const IndexSpineLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function IndexSpineLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-index-spine-link ${className}`}/>;
});
export default IndexSpineLink;
