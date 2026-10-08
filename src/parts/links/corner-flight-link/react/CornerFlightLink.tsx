'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 全幅の長い折翼を片端で接続した紙のリンク。31pxの二つの三角面を右の48pxで読む紙へ留め、翼の下と紙の間には背景へ抜ける斜めの細い空隙を残す。下の紙の断面で台を支え、操作中は折翼だけが張る。文字と矢印は読む紙へ固定する。 */
const CornerFlightLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CornerFlightLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-corner-flight-link ${className}`}/>;
});
export default CornerFlightLink;
