'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 一本の曲がった線が文字の左から先端を支え、移動方向で伸びる。 */
const CopperWireLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CopperWireLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-copper-wire-link ${className}`}/>;
});
export default CopperWireLink;
