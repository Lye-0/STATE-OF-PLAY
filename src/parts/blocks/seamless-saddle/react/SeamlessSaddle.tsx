import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface SeamlessSaddleProps extends HTMLAttributes<HTMLDivElement> {}
/** サドルの両肩を本文の外に設け、近づくと肩だけが静かに開く。本文を横切る面を廃止。 */
export default function SeamlessSaddle({children, className = '', ...props}: SeamlessSaddleProps) {
  return <div {...props} className={`sop-surface sop-seamless-saddle ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
