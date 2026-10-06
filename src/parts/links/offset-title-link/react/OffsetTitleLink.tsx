'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 太い見出しと小さな矢印をずらして、次の章への移動を示す。 */
const OffsetTitleLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function OffsetTitleLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-offset-title-link ${className}`}/>;
});
export default OffsetTitleLink;
