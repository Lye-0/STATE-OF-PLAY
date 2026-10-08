'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "ribbon-count-number",
  "kind": "numbers",
  "variant": "essential",
  "label": "必要な量を、ちょうどよく。",
  "description": "",
  "defaultValue": 3,
  "min": 0,
  "max": 24,
  "step": 1,
  "unit": "UNITS"
};
export type RibbonCountNumberProps = FoundationProps;
/** 上下に巻いたリボンの数値操作。元の縦に深い読む帯と巻く上下端を保持し、濃い紫の面を明るい織布へ、上下の材料を10px/12pxの同じ巻端へ揃える。送り線は上下14pxの巻く布だけに限定し、数字と単位へ通さない。押面も織布の同じ上面・下面で作り、紙の影や濃い箱を混ぜない。 */
export default forwardRef<HTMLDivElement, RibbonCountNumberProps>(function RibbonCountNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
