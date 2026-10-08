'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 裁断した布の端を抜けるリンク。斜めの終端と縫い目が矢印側へ続く。 */
const TailoredEdgeLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function TailoredEdgeLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-tailored-edge-link ${className}`}/>;
});
export default TailoredEdgeLink;
