'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 上下の目盛りを持つ外枠へ、行先を示す一枚の滑尺を通す。読む文字は固定し、操作中は背の滑尺だけが6px進む。数値や独立したつまみを設けず、動く中板と固定した外枠で進む方向を示す。 */
const SlideRuleLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function SlideRuleLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-slide-rule-link ${className}`}/>;
});
export default SlideRuleLink;
