'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 索引の背を開き、リンク面を一枚の見出しとして置く。 */
const IndexSpineLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function IndexSpineLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-index-spine-link ${className}`}/>;
});
export default IndexSpineLink;
