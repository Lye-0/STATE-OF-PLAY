'use client';
import React,{forwardRef} from 'react';
import {NavigationLinkView,type NavigationLinkProps} from '../../../../shared/navigation-link-view';
import '../styles.css';
export type {NavigationLinkProps} from '../../../../shared/navigation-link-view';
/** ミシン目と番号帯を持った、細長いチケット。 */
const TicketLink=forwardRef<HTMLAnchorElement,NavigationLinkProps>(function TicketLink({className='',...props},ref){
 return <NavigationLinkView {...props} ref={ref} className={`sop-ticket-link ${className}`}/>;
});
export default TicketLink;
