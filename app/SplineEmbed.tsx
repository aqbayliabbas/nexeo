// Allow custom <spline-viewer> element in TSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { url?: string };
    }
  }
}

import React, { useEffect } from 'react';

const SplineEmbed = () => {
  useEffect(() => {
    // Dynamically load the Spline Viewer script only once on mount
    const scriptId = 'spline-viewer-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.85/build/spline-viewer.js';
      script.id = scriptId;
      document.body.appendChild(script);
    }
    // Inject CSS to hide the Spline logo
    const styleId = 'hide-spline-logo-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .spline-viewer__logo { display: none !important; }
        .spline-viewer__built-with, .spline-viewer__branding, [class*='built-with'], .spline-viewer__badge { display: none !important; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <spline-viewer
      url="https://prod.spline.design/mGrwVQh01patLlw9/scene.splinecode"
      background="transparent"
      style={{
        width: '120vw',
        height: '120vh',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'transparent',
        pointerEvents: 'none',
      }}
    />
  );
};

export default SplineEmbed;
