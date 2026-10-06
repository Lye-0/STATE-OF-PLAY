'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 薄い切り込みのある縁が、先端のスコア位置で光る。 */
const ScoredEdgeLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function ScoredEdgeLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-scored-edge-link ${className}`}/>;
});
export default ScoredEdgeLink;
