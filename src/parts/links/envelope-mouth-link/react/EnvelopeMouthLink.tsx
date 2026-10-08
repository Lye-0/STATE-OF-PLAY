'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 封筒の開口を移動先の入口にする。中央の文字を固定し、右の口だけを開く。 */
const EnvelopeMouthLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function EnvelopeMouthLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-envelope-mouth-link ${className}`}/>;
});
export default EnvelopeMouthLink;
