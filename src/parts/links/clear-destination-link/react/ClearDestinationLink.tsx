'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 行き先を読みやすい白いラベルに。 */
const ClearDestinationLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function ClearDestinationLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-clear-destination-link ${className}`}/>;
});
export default ClearDestinationLink;
