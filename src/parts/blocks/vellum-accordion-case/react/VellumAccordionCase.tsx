import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface VellumAccordionCaseProps extends HTMLAttributes<HTMLDivElement> {}
/** 半透明の折り端を左右に重ね、本文の平面をくっきり残す。 Content and layout remain yours. */
export default function VellumAccordionCase({children, className = '', ...props}: VellumAccordionCaseProps) {
  return <div {...props} className={`sop-surface sop-vellum-accordion-case ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
