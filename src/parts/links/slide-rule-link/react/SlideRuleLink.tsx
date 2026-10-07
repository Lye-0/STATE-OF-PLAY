'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** スライドする目盛りが行き先を指す。 */
const SlideRuleLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function SlideRuleLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-slide-rule-link ${className}`}/>;
});
export default SlideRuleLink;
