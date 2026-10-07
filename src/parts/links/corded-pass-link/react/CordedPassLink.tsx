'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 索を通したタグのようなリンク。 */
const CordedPassLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CordedPassLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-corded-pass-link ${className}`}/>;
});
export default CordedPassLink;
