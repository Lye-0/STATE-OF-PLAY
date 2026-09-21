'use client';
import React, { useEffect, useRef } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
/** 静かな面の輪郭を、光がゆっくり巡る。 The content is yours. */
export default function LuminousFrame({ children, className = '', ...props }) {
    const element = useRef(null);
    useEffect(() => {
        if (!element.current)
            return;
        const controller = createSurfaceController(element.current, { tilt: false });
        return () => controller.destroy();
    }, []);
    return <div {...props} ref={element} className={`sop-surface sop-luminous-frame ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
