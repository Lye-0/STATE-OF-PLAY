'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folio-date-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type FolioDateCalendarProps = FoundationProps;
/** 綴じた手帳の予定ページ。背の余白と横罫を残し、日付を押しても升目の配置を保つ。 */
export default forwardRef<HTMLDivElement, FolioDateCalendarProps>(function FolioDateCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
