'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 左右の鋲付き端板から梁を支える橋のリンク。下の大きい開口と両端の足を一体の支持面で作り、中央の空隙を実際に抜く。操作中は支持の薄い折面だけが広がり、読む梁と矢印は固定する。 */
const RivetBridgeLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function RivetBridgeLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-rivet-bridge-link ${className}`}/>;
});
export default RivetBridgeLink;
