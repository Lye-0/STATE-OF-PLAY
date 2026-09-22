'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 本文中でも使える、読みやすい色と下線のリンク。 */
const InlineLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function InlineLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-inline-link ${className}`}/>;
});
export default InlineLink;
