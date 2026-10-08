import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface ArchivalChannelProps extends HTMLAttributes<HTMLDivElement> {}
/** 紙の下端を、開口が見える丸い金属の収納溝へ差し込む。溝の前の唇と左右の留めが紙をまたぎ、上の幅広い索引片だけが外へ出る。本文は紙面に固定する。 Content and layout remain yours. */
export default function ArchivalChannel({children, className = '', ...props}: ArchivalChannelProps) {
  return <div {...props} className={`sop-surface sop-archival-channel ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
