'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StonePathWizardProps };
/** 実手順を一つの地形の縁へ並べ、現在の場所だけから入力床へ渡る石の道。24pxの後ろの連続道が全てのnative章を結び、四辺の小石箱は廃する。現在の実章の切口から64pxの渡り石が32pxの背景を渡り、両端16pxずつで地形と入力床へ接する。現在が変われば渡り石も実章へ移り、固定中央や最後の未来章を接続しない。狭幅は現在の行の直後へ入力床と実操作を開き、後ろの道とnative章順は続く。任意の手順数でも実名の読む幅を確保し、入力の字面・caret・hitは平らに保つ。 */
export default function StonePathWizard(props: WizardProps) {
  return <WizardView {...props} skin="stone-path-wizard" />;
}
