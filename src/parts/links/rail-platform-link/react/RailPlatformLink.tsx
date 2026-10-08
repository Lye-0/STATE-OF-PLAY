'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 二本のI字の鋼材と横のレールが、張り出した行先のホームを受ける。上の床、5pxの切断面、二本の独立した断面を接続する。操作中は下のレールの薄い断面だけが張り、つまみを作らずホーム全体を一つのリンクへ保つ。 */
const RailPlatformLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function RailPlatformLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-rail-platform-link ${className}`}/>;
});
export default RailPlatformLink;
