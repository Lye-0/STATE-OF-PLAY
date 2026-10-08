'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 橋の二つの支点で文字面を保持。外のブリッジが矢印へ続き、ボタンとは異なる入口を作る。 */
const RivetBridgeLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function RivetBridgeLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-rivet-bridge-link ${className}`}/>;
});
export default RivetBridgeLink;
