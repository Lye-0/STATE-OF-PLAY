'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 資料へのリンクを枠と短い矢印で示す。 */
const QuietResourceLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function QuietResourceLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-quiet-resource-link ${className}`}/>;
});
export default QuietResourceLink;
