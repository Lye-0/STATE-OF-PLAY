'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** アーチの入口へ行先と矢印の基線を揃える。上の余白を28pxへ整理し、曲率を8pxの内壁と底の敷居へ接続する。操作中は内側の曲面だけが少し広がり、読む面とクリック領域を保つ。 */
const ArchwayLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function ArchwayLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-archway-link ${className}`}/>;
});
export default ArchwayLink;
