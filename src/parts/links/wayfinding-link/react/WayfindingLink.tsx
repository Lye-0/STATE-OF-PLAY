'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 折った金属の案内翼へ、行先を載せる。先端のV字の空隙と返した下端を連続した切断面として示し、手前の読む面を固定する。操作中は下の折面だけが広がり、リンクの矢印は動かさない。 */
const WayfindingLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function WayfindingLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-wayfinding-link ${className}`}/>;
});
export default WayfindingLink;
