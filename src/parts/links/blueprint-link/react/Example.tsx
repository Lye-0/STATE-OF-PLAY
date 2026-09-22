'use client';
import React,{useId} from 'react';
import BlueprintLink from './BlueprintLink';
export default function Example(){
 const target=useId();
 return <div><BlueprintLink href={`#${target}`}>VIEW THE BLUEPRINT</BlueprintLink><section id={target} tabIndex={-1} style={{marginTop:120,padding:24,border:'1px solid #727d76'}}><h2>リンク先</h2><p>hrefを実際のページやアンカーに変更して使います。</p></section></div>;
}
