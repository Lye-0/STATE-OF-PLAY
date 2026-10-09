'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 落ち着いた青灰の布張りの丸背に、薄い縫いバンドと紙の切断面を接続する。文字を固定し、下の紙の層だけが静かに開く。 */
const IndexSpineLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function IndexSpineLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-index-spine-link ${className}`}/>;
});
export default IndexSpineLink;
