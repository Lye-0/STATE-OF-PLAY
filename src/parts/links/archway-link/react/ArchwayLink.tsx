'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** アーチの入口に収めた行き先。 */
const ArchwayLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function ArchwayLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-archway-link ${className}`}/>;
});
export default ArchwayLink;
