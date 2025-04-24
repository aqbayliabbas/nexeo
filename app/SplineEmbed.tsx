

import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: string; height: string }>({ width: '119vw', height: '119vw' });

  useEffect(() => {
    const updateDimensions = () => {
      const isTabletOrMobile = window.innerWidth <= 900;
      setDimensions({
        width: isTabletOrMobile ? '238vw' : '119vw',
        height: isTabletOrMobile ? '238vw' : '119vw',
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'transparent',
        margin: '32px 0',
        pointerEvents: 'none', // If you want to keep it non-interactive
      }}
    >
      <Spline
        scene="https://prod.spline.design/mGrwVQh01patLlw9/scene.splinecode"
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      />
    </div>
  );
};

export default SplineEmbed;
