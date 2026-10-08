'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as FolioChapterWizardProps };
/** 手順を積み上げる資料綴じ。上の索引から記入面へ進み、現在のページを背の色で示す。 */
export default function FolioChapterWizard(props: WizardProps) {
  return <WizardView {...props} skin="folio-chapter-wizard" />;
}
