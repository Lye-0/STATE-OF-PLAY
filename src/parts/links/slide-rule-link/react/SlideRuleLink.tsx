'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 物差しの固定ラベルと出口。ホバーで副尺が矢印側へ走り、文字の下に細い距離を残す。 */
const SlideRuleLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function SlideRuleLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-slide-rule-link ${className}`}/>;
});
export default SlideRuleLink;
