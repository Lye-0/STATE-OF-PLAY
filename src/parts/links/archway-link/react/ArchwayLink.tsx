'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** アーチの入口から奥へ進む方向を足元に示す。 */
const ArchwayLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function ArchwayLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-archway-link ${className}`}/>;
});
export default ArchwayLink;
