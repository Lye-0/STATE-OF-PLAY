import React, {useState} from 'react';
import ArchiveFileSkeleton from './ArchiveFileSkeleton';
const initial = {
  "label": "コンテンツを読み込んでいます",
  "loading": true,
  "rows": 4
};
export default function Example() {
 const [loading,setLoading]=useState(true);
 return <><button type="button" onClick={()=>setLoading(v=>!v)}>読み込み状態を切り替える（デモ）</button><ArchiveFileSkeleton {...initial} loading={loading}><article className="sg-skeleton-frame sg-example-loaded"><div className="sg-sk-hero"><svg viewBox="0 0 160 100" role="img" aria-label="建築のスタディ"><path d="M20 85V40L80 10l60 30v45ZM20 40l60 30 60-30M80 10v60M80 70v15" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M40 50v25m20-15v25m40-25v25m20-35v25" stroke="currentColor" strokeWidth="1"/></svg></div><div className="sg-sk-profile"><span>SM</span><div><strong>Form study</strong><small>Sora Mori · Design</small></div></div><div className="sg-sk-lines"><p>形と余白の記録</p><p>光がつくる輪郭</p><p>素材の重なり</p><p>次のアイデアへ</p></div><div className="sg-sk-tiles"><span>形</span><span>素材</span><span>記録</span></div></article></ArchiveFileSkeleton></>;
}
