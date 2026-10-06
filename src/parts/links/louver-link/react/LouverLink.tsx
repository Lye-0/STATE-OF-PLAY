'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 文字の下の細いルーバーが、先端へ向かって順に傾く。 */
const LouverLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function LouverLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-louver-link ${className}`}/>;
});
export default LouverLink;
