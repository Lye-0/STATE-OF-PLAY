'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 通行札を結ぶコードが張り、行先へ視線を導く。 */
const CordedPassLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CordedPassLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-corded-pass-link ${className}`}/>;
});
export default CordedPassLink;
