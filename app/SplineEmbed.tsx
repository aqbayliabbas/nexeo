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
      ref={(ref: HTMLElement | null) => {
        if (ref) {
          const isMobile = window.innerWidth <= 600;
          ref.style.width = isMobile ? '160vw' : '120vw';
          ref.style.height = isMobile ? '160vh' : '120vh';
          ref.style.position = 'absolute';
          ref.style.left = '50%';
          ref.style.top = '50%';
          ref.style.transform = 'translate(-50%, -50%)';
          ref.style.background = 'transparent';
          ref.style.pointerEvents = 'none';
        }
      }}
      url="https://prod.spline.design/mGrwVQh01patLlw9/scene.splinecode"
      background="transparent"
    />
  );
};

export default SplineEmbed;
