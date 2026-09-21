'use client';
import React, { useEffect, useRef } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
/** 見る位置で揺らぐ、偏光のスペクトル。 The content is yours. */
export default function IridescentSurface({ children, className = '', ...props }) {
    const element = useRef(null);
    useEffect(() => {
        if (!element.current)
            return;
        const controller = createSurfaceController(element.current, { tilt: true });
        return () => controller.destroy();
    }, []);
    return <div {...props} ref={element} className={`sop-surface sop-iridescent-surface ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
