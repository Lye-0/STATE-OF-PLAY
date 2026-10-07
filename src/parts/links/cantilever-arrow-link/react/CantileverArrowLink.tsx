'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 片持ちの矢印台がラベルの下から先へ伸びる。 */
const CantileverArrowLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CantileverArrowLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-cantilever-arrow-link ${className}`}/>;
});
export default CantileverArrowLink;
