'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 索引のような整列と、細い縦線に沿って動く光。 */
const IndexLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function IndexLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-index-link ${className}`}/>;
});
export default IndexLink;
