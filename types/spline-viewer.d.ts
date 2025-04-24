// This file allows TypeScript to recognize the <spline-viewer> custom element in JSX.
declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { url?: string };
  }
}
