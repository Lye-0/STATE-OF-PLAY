'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 切り欠きに矢印の台を接続する。文字面から外へ抜ける経路が一目で分かる。 */
const NotchRouteLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function NotchRouteLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-notch-route-link ${className}`}/>;
});
export default NotchRouteLink;
