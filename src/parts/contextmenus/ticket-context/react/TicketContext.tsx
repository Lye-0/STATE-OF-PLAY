'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as TicketContextProps };
/** ミシン目と折り返した端で操作を区切る、一枚の切符。 */
export default function TicketContext(props:ContextProps) {
 return <ContextView {...props} skin="ticket-context" />;
}
