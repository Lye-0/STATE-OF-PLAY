'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 丸い軌道と、中心に浮かぶ矢印の静かな回転。 */
const OrbitalLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function OrbitalLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-orbital-link ${className}`}/>;
});
export default OrbitalLink;
