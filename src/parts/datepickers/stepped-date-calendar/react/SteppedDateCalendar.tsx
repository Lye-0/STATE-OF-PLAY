'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stepped-date-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": [
    "2026-10-06",
    "2026-10-12"
  ],
  "mode": "range"
};
export type SteppedDateCalendarProps = FoundationProps;
/** Stepped Date Calendar: Aタイプ。元の外観と、独自の日時選択を備えた独立したDOM領域。 */
export default forwardRef<HTMLDivElement, SteppedDateCalendarProps>(function SteppedDateCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
