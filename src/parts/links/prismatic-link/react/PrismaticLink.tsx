'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 虹色の細い下線と、結晶の縁を思わせる矢印。 */
const PrismaticLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function PrismaticLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-prismatic-link ${className}`}/>;
});
export default PrismaticLink;
