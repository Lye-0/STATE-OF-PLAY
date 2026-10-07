'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 固定した数尺の上を矢印の目盛りが右へ走る。 */
const SlideRuleLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function SlideRuleLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-slide-rule-link ${className}`}/>;
});
export default SlideRuleLink;
