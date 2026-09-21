'use client';
import React, { useEffect, useRef } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
/** 温かな紙の厚みと、持ち上がる小さな角。 The content is yours. */
export default function FoldedPaper({ children, className = '', ...props }) {
    const element = useRef(null);
    useEffect(() => {
        if (!element.current)
            return;
        const controller = createSurfaceController(element.current, { tilt: false });
        return () => controller.destroy();
    }, []);
    return <div {...props} ref={element} className={`sop-surface sop-folded-paper ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
