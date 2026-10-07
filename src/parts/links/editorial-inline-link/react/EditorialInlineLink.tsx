'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 文章に収まる細い下線と外向き矢印。 */
const EditorialInlineLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function EditorialInlineLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-editorial-inline-link ${className}`}/>;
});
export default EditorialInlineLink;
