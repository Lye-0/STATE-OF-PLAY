'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 切り欠きのある標識と丸い進路灯。 */
const NotchRouteLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function NotchRouteLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-notch-route-link ${className}`}/>;
});
export default NotchRouteLink;
