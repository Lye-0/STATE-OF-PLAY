'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/continuum/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "prism-calendar",
  "kind": "datepickers",
  "variant": "prism",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23T14:30",
  "mode": "datetime"
};
export type PrismCalendarProps = FoundationProps;
/** Prism Calendar: Aタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, PrismCalendarProps>(function PrismCalendar(props, ref) {
  return <FoundationWidget {...props} className={`sop-continuum ${props.className??''}`} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
