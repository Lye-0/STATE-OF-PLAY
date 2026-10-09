'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as LetterpressStageWizardProps };
/** 実「次へ」を押し版の片持ち腕の操作面へ載せ、一枚の現在の記入紙をその下へ通す。32pxの鋳物の支持脚、76pxの開いた腕、40pxの押し面が24pxの空間を渡って紙へ8px接する関係が実作用を示す。native入力と字面を押し潰さず、完了・エラー・戻るも同じ記入紙で保つ。上の実操作は52px以上の明瞭な押し面、狭幅では脚を22pxへ縮めて読む幅を守る。 */
export default function LetterpressStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="letterpress-stage-wizard" />;
}
