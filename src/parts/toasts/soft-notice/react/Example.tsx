import React,{useRef} from 'react';
import SoftNotice from './SoftNotice';
import type {FoundationController} from '../../../../shared/foundation/core';
export default function Example(){const notifications=useRef<FoundationController>(null);return <><button type="button" onClick={()=>notifications.current?.notify?.({title:'表示の確認',description:'これは使用例です。実際の処理結果へ接続してください。',tone:'success'})}>通知の例</button><SoftNotice controllerRef={notifications}/></>;}
