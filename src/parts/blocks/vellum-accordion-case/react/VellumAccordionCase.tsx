import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface VellumAccordionCaseProps extends HTMLAttributes<HTMLDivElement> {}
/** 左の蛇腹を段状に広げ、固定した本文面の背後に収納の厚みを見せる。 Content and layout remain yours. */
export default function VellumAccordionCase({children, className = '', ...props}: VellumAccordionCaseProps) {
  return <div {...props} className={`sop-surface sop-vellum-accordion-case ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
