import { useState, useEffect } from "react";
import { onTTFB, onFCP, onLCP } from "web-vitals";

export function PerformanceStats() {
  const [TTFB, setTTFB] = useState(null);
  const [LCP, setLCP] = useState(null);
  const [FCP, setFCP] = useState(null);

  useEffect(() => {
    onTTFB((metric) => setTTFB(metric.value.toFixed(2) + " ms"));
    onLCP((metric) => setLCP(metric.value.toFixed(2) + " ms"));
    onFCP((metric) => setFCP(metric.value.toFixed(2) + " ms"));
  }, []);

  return (
    <div className="flex-col-justify-between">
      Informations à propos de l'app - React
      <div>TTFB : {TTFB}</div>
      <div>FCP : {FCP}</div>
      <div>LCP : {LCP}</div>
      <div>TTI : via Lighthouse</div>
      <div>TBT : via Lighthouse</div>
    </div>
  );
}
