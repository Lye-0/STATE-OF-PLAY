'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 等幅文字と、大きく余白を取った斜めの矢印。 */
const CompassLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function CompassLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-compass-link ${className}`}/>;
});
export default CompassLink;
