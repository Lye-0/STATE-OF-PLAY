'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 薄い紙の帯と折り目。矢印の端だけが起き上がる。 */
const RibbonLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function RibbonLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-ribbon-link ${className}`}/>;
});
export default RibbonLink;
