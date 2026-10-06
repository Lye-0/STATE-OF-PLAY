'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 番号札から伸びる細い道が、ラベルとその先の矢印を結ぶ。 */
const AtlasSpurLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function AtlasSpurLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-atlas-spur-link ${className}`}/>;
});
export default AtlasSpurLink;
