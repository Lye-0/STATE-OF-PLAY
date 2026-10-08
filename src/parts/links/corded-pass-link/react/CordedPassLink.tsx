'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 丸い通し孔へ一本のコードを結ぶ通行札。孔は背景へ抜き、上の小さい輪と孔をまたぐ結び目を同じ線質へ揃える。行先の矢印から別の点線輪を省き、操作中はコードの輪だけが張る。 */
const CordedPassLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CordedPassLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-corded-pass-link ${className}`}/>;
});
export default CordedPassLink;
