'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "inset-calendar",
  "kind": "datepickers",
  "variant": "inset",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23T14:30",
  "mode": "datetime"
};
export type InsetCalendarProps = FoundationProps;
/** Inset Calendar: Bタイプ。元の外観と、独自の日時選択を備えた独立したDOM領域。 */
export default forwardRef<HTMLDivElement, InsetCalendarProps>(function InsetCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
