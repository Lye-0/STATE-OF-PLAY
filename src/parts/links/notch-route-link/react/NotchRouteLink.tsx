'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 右の円形の切欠きを越えて、二本の細い金属材が行先の矢印台へ渡る。切欠きは背景へ抜き、読む面と矢印の台を別の断面へ接続する。独立したボタンを増やさず、全体を一つのnativeリンクへ保つ。 */
const NotchRouteLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function NotchRouteLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-notch-route-link ${className}`}/>;
});
export default NotchRouteLink;
