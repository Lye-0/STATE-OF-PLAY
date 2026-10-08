'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 切り取り線から先へ進むチケット。矢印側の半券を区切り、ラベルと行先を読みやすく分離。 */
const CutlineLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CutlineLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-cutline-link ${className}`}/>;
});
export default CutlineLink;
