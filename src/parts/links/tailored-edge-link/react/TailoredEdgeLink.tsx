'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 斜めの裁ち端と、その内側の一本の縫い目を合わせた布のリンク。右上の短い折返しを裁断面へ接続し、下には5pxの繊維の切断面だけを残す。操作中は下の繊維だけが張り、布と文字の座標を保つ。 */
const TailoredEdgeLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function TailoredEdgeLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-tailored-edge-link ${className}`}/>;
});
export default TailoredEdgeLink;
