'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** ホバーで文字の下に線が伸びる、静かなテキスト。 */
const LgcLinksMist=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function LgcLinksMist({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`lgc-root sop-lgc-links-mist ${className}`}/>;
});
export default LgcLinksMist;
