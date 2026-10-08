'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 折った二つのアングル材が、開いた行先を受けるリンク。左の長い立ち上がりと下の返しを一体の45度の接合へ作り、右上には短い反対向きの断面を置く。読む領域を箱で閉じず、操作中は下の折面だけが張る。 */
const AngleBracketLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function AngleBracketLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-angle-bracket-link ${className}`}/>;
});
export default AngleBracketLink;
