import React, {useState} from 'react';
import TideSkeleton from './TideSkeleton';
const initial = {
  "label": "コンテンツを読み込んでいます",
  "loading": true,
  "rows": 4
};
export default function Example() {
 const [loading,setLoading]=useState(true);
 return <><button type="button" onClick={()=>setLoading(v=>!v)}>読み込み状態を切り替える（デモ）</button><TideSkeleton {...initial} loading={loading}><article className="sg-loaded-content"><span className="sg-kicker">READY / サンプル</span><h3>次のアイデアへ。</h3><p>実際のコンテンツは、ここへ配置します。</p></article></TideSkeleton></>;
}
