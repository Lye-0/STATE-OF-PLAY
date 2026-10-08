'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stitched-planner",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type StitchedPlannerProps = FoundationProps;
/** 六つの週紙片を、二つずつの孔へ通した一本の連続した縫い糸で綴じる暦。独立したXを廃止し、各週の上8px/下8pxに空けた二孔を糸が渡り、10pxの週間の隙間を越えて次の紙の上孔へ続く。最後の糸は六枚目の下孔で止まる。孔と糸を同じ論理側へ鏡映し、RTLでも縫合を分離しない。曜日と数字は綴じる余白の24px右へ固定する。 */
export default forwardRef<HTMLDivElement, StitchedPlannerProps>(function StitchedPlanner(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
