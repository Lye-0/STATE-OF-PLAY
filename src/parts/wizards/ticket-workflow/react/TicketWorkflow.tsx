'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as TicketWorkflowProps };
/** ミシン目で分かれる工程と、紙の乗車券のような操作面。 */
export default function TicketWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="ticket-workflow" />;
}
