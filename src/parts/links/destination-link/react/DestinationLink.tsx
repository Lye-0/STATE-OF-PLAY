'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** ラベルと移動方向を離し、行全体を読みやすいリンクとして使う。 */
const DestinationLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function DestinationLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-destination-link ${className}`}/>;
});
export default DestinationLink;
