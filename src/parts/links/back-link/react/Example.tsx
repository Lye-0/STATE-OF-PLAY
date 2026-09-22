'use client';
import React,{useId} from 'react';
import BackLink from './BackLink';
export default function Example(){
 const target=useId();
 return <div><BackLink href={`#${target}`}>一覧に戻る</BackLink><section id={target} tabIndex={-1} style={{marginTop:120,padding:24,border:'1px solid #727d76'}}><h2>リンク先</h2><p>hrefを実際のページやアンカーに変更して使います。</p></section></div>;
}
