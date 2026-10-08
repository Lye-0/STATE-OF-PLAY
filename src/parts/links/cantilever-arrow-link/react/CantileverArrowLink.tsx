'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 一本の柱から突き出す片持ちの行先台。下の斜めの補強を柱と梁へ接続し、右の自由端へリンクの矢印を置く。操作中は補強の薄い折面だけが張り、行先の台と文字は動かさない。 */
const CantileverArrowLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CantileverArrowLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-cantilever-arrow-link ${className}`}/>;
});
export default CantileverArrowLink;
