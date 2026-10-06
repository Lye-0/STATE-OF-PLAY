'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 参照先を細い縦括弧で囲み、本文の中でも移動を識別できる。 */
const MutedReferenceLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function MutedReferenceLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-muted-reference-link ${className}`}/>;
});
export default MutedReferenceLink;
