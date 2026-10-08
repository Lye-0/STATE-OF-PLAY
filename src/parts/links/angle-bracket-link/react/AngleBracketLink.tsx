'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 二つの角が行先を囲むオープンリンク。閉じた箱を作らず、右上へ開く余白を残す。 */
const AngleBracketLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function AngleBracketLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-angle-bracket-link ${className}`}/>;
});
export default AngleBracketLink;
