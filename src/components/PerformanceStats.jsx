import { useState, useEffect } from "react";
import { onTTFB, onFCP, onLCP } from "web-vitals";

export function PerformanceStats() {
  const [metrics, setMetrics] = useState({
    TTFB: null,
    LCP: null,
    FCP: null,
  });

  useEffect(() => {
    onTTFB((metric) =>
      setMetrics((m) => ({ ...m, TTFB: metric.value.toFixed(2) + " ms" }))
    );
    onLCP((metric) =>
      setMetrics((m) => ({ ...m, LCP: metric.value.toFixed(2) + " ms" }))
    );
    onFCP((metric) =>
      setMetrics((m) => ({ ...m, FCP: metric.value.toFixed(2) + " ms" }))
    );
  }, []);

  return (
    <div className="flex-col-justify-between">
      Informations à propos de l'app - React
      <div>TTFB : {metrics.TTFB}</div>
      <div>FCP : {metrics.FCP}</div>
      <div>LCP : {metrics.LCP}</div>
      <div>TTI : via Lighthouse</div>
      <div>TBT : via Lighthouse</div>
    </div>
  );
}
