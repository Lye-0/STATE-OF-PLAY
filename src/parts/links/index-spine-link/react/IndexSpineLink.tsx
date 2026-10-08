'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 横へ寝かせた丸背の索引。上下の長辺へつながる凸の革面、左右の楕円の断面、二本の隆起バンドと、その下へ覗く紙の切断面を接続する。文字は丸背の正面へ固定し、操作中は下の紙の薄い断面だけが開く。 */
const IndexSpineLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function IndexSpineLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-index-spine-link ${className}`}/>;
});
export default IndexSpineLink;
