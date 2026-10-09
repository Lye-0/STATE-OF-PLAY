'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as FolioChapterWizardProps };
/** 実手順を章見出し、入力を本文の紙面として揃える。外側の背4px、上の実章の区切り2px、下の操作の基準線1pxに役割を分け、本文の重複罫線を廃する。章番号44pxと章タイトル16px、実見出し30pxが読み順を作る。狭幅では章を縦に並べ、native入力と戻る・次への操作を48px以上の平面で保つ。 */
export default function FolioChapterWizard(props: WizardProps) {
  return <WizardView {...props} skin="folio-chapter-wizard" />;
}
