'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** ホバーで文字の下に線が伸びる、静かなテキスト。 */
const UnderlineLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function UnderlineLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-underline-link ${className}`}/>;
});
export default UnderlineLink;
