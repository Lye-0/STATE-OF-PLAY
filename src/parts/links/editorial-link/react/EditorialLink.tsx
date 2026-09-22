'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** セリフ体の大きな文字と、遅れて伸びる細い線。 */
const EditorialLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function EditorialLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-editorial-link ${className}`}/>;
});
export default EditorialLink;
