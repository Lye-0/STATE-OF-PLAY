import React, {useState} from 'react';
import BasicTimeline, {type BasicTimelineProps} from './BasicTimeline';
const initial: BasicTimelineProps = {
  "label": "PROJECT HISTORY / サンプル",
  "defaultExpanded": [
    "review"
  ],
  "items": [
    {
      "id": "idea",
      "title": "構想をまとめる",
      "description": "目的と使う場面を整理。小さく試せる形にする。",
      "date": "09.12",
      "dateTime": "2026-09-12",
      "status": "done",
      "meta": "NOTES / 01"
    },
    {
      "id": "review",
      "title": "デザインを確かめる",
      "description": "画面と操作の両方を確認する。\n見た目だけでなく、使った後の感覚まで。",
      "date": "09.18",
      "dateTime": "2026-09-18",
      "status": "active",
      "meta": "REVIEW / 02"
    },
    {
      "id": "release",
      "title": "次の人へ届ける",
      "description": "利用例と必要なファイルを揃えて、公開の準備をする。",
      "date": "09.24",
      "dateTime": "2026-09-24",
      "status": "pending",
      "meta": "RELEASE / 03"
    }
  ]
};
export default function Example() {return <BasicTimeline {...initial} />;}
