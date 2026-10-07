'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 山括弧が行先の余白を開く。 */
const AngleBracketLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function AngleBracketLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-angle-bracket-link ${className}`}/>;
});
export default AngleBracketLink;
