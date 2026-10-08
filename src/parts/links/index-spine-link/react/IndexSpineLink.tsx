'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 背表紙から抜き出す索引カード。操作中は外側の札が出るだけで、リンクの位置は固定。 */
const IndexSpineLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function IndexSpineLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-index-spine-link ${className}`}/>;
});
export default IndexSpineLink;
