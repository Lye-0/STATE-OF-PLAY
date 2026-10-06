'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** ラベルの下辺を進んだ線が、右端で上へ折れて矢印になる。 */
const CornerTurnLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CornerTurnLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-corner-turn-link ${className}`}/>;
});
export default CornerTurnLink;
