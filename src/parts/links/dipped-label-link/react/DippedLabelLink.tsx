'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 丸い浸し跡のような面が、ラベルの端に重なる。 */
const DippedLabelLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function DippedLabelLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-dipped-label-link ${className}`}/>;
});
export default DippedLabelLink;
