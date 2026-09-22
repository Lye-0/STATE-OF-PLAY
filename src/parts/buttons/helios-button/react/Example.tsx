'use client';
import React,{useState} from 'react';
import HeliosButton from './HeliosButton';
/** Demo counter only. Supply your own async function; never fake a network success. */
export default function Example(){
 const [count,setCount]=useState(0),[loading,setLoading]=useState(false);
 return <div><HeliosButton loading={loading} onClick={()=>setCount(n=>n+1)}>START SOMETHING</HeliosButton><p role="status">{count}回操作しました。デモは通信しません。</p><label><input type="checkbox" checked={loading} onChange={e=>setLoading(e.target.checked)}/>処理中表示を確認</label></div>;
}
