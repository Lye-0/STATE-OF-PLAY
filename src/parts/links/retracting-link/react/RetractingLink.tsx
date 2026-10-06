'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 細い導線が矢印の根元に巻き取られ、リンク先への方向を残す。 */
const RetractingLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function RetractingLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-retracting-link ${className}`}/>;
});
export default RetractingLink;
