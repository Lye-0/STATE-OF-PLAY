'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 一本の片持ち梁の先端に右上矢印を置く。横向きの第二矢印を廃止し、誘導を一方向へ。 */
const CantileverArrowLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CantileverArrowLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-cantilever-arrow-link ${className}`}/>;
});
export default CantileverArrowLink;
