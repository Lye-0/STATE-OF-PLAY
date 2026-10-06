'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 紐でつないだ小さな先端タグが、触れると外向きに揺れる。 */
const SwingTagLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function SwingTagLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-swing-tag-link ${className}`}/>;
});
export default SwingTagLink;
