'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 括弧で行き先を挟む開放的な構成。 */
const AngleBracketLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function AngleBracketLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-angle-bracket-link ${className}`}/>;
});
export default AngleBracketLink;
