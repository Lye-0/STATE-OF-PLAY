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
/** 一枚の暦紙から出る六つのT形の紙舌を、櫛状の露出した背へ組み継ぐ暦。二葉と二つの橋を全廃し、各実週の28pxの広い先端が背のスリットの裏へ入り、8pxの根元が読む紙面へ4px連続する構造を作る。背と読む七列の間へ48pxの綴じ余白を取り、日付を紙舌の上に置かない。RTLでも背・切込み・紙舌が一括して同じ側へ移る。 */
export default forwardRef<HTMLDivElement, FolioDateCalendarProps>(function FolioDateCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
