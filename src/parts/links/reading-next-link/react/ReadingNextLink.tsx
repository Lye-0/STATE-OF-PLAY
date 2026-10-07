'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 次に読む項目を細い縦線で示す。 */
const ReadingNextLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function ReadingNextLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-reading-next-link ${className}`}/>;
});
export default ReadingNextLink;
