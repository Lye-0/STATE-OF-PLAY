'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** 封筒の口が開き、文言を固定したまま下紙がのぞく。 */
const EnvelopeMouthLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function EnvelopeMouthLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-envelope-mouth-link ${className}`}/>;
});
export default EnvelopeMouthLink;
