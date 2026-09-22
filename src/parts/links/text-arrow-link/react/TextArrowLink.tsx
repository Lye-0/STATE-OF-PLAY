'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 文章に添えやすい、控えめな右矢印付きリンク。 */
const TextArrowLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function TextArrowLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-text-arrow-link ${className}`}/>;
});
export default TextArrowLink;
