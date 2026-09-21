'use client';
import React, { useEffect, useRef } from 'react';
import { createSurfaceController } from './surface-controller';
import './styles.css';
/** 曇ったガラスの向こうに、色と奥行き。 The content is yours. */
export default function FrostedGlass({ children, className = '', ...props }) {
    const element = useRef(null);
    useEffect(() => {
        if (!element.current)
            return;
        const controller = createSurfaceController(element.current, { tilt: true });
        return () => controller.destroy();
    }, []);
    return <div {...props} ref={element} className={`sop-surface sop-frosted-glass ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
