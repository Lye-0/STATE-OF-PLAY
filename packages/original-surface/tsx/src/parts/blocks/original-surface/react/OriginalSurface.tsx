'use client';
import React, { useEffect, useRef, type HTMLAttributes } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface OriginalSurfaceProps extends HTMLAttributes<HTMLDivElement> {
}
/** 今のギャラリーを包む、オリジナルの面。 The content is yours. */
export default function OriginalSurface({ children, className = '', ...props }: OriginalSurfaceProps) {
    const element = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!element.current)
            return;
        const controller = createSurfaceController(element.current, { tilt: false });
        return () => controller.destroy();
    }, []);
    return <div {...props} ref={element} className={`sop-surface sop-original-surface ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
