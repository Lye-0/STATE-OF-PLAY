'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 外部リソースへの移動を示す、コンパクトな記号。 */
const ExternalLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function ExternalLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-external-link ${className}`}/>;
});
export default ExternalLink;
