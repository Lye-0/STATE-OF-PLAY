'use client';
import React, { useEffect, useRef } from 'react';
import { createSurfaceController } from './surface-controller';
import './styles.css';
/** 精密な輪郭と、指先を追う金属の反射。 The content is yours. */
export default function MachinedPanel({ children, className = '', ...props }) {
    const element = useRef(null);
    useEffect(() => {
        if (!element.current)
            return;
        const controller = createSurfaceController(element.current, { tilt: false });
        return () => controller.destroy();
    }, []);
    return <div {...props} ref={element} className={`sop-surface sop-machined-panel ${className}`}>
    <span className="sop-hardware" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
