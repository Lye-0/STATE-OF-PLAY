'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** ニュートラルな文字と、少しだけ動く矢印。 */
const SubtleLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function SubtleLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-subtle-link ${className}`}/>;
});
export default SubtleLink;
