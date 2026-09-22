'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 左向き矢印と控えめなラベル。戻り道を自然に示す。 */
const BackLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function BackLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-back-link ${className}`}/>;
});
export default BackLink;
