'use client';
import { useMemo, useState } from 'react';

type Mode = 'mileage' | 'fuel' | 'emi';
export function Calculator({ mode }: { mode: Mode }) {
  const [a, setA] = useState(''); const [b, setB] = useState(''); const [c, setC] = useState('');
  const result = useMemo(() => {
    const x = Number(a), y = Number(b), z = Number(c);
    if (!a || !b || (mode !== 'mileage' && !c) || !Number.isFinite(x+y+z)) return null;
    if (mode === 'mileage') return y > 0 ? `${(x / y).toFixed(2)} km/l` : null;
    if (mode === 'fuel') return y > 0 ? `₹${((x / y) * z).toFixed(2)}` : null;
    if (x <= 0 || y <= 0 || z <= 0) return null;
    const r = y / 1200; const n = z * 12; const emi = x * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);
    return Number.isFinite(emi) ? `₹${emi.toLocaleString('en-IN',{maximumFractionDigits:0})} / month` : null;
  }, [a,b,c,mode]);
  const fields = mode === 'mileage' ? [['Distance travelled (km)',a,setA],['Fuel used (litres)',b,setB]] as const : mode === 'fuel' ? [['Distance (km)',a,setA],['Mileage (km/l)',b,setB],['Petrol price (₹/litre)',c,setC]] as const : [['Loan amount (₹)',a,setA],['Annual interest rate (%)',b,setB],['Loan tenure (years)',c,setC]] as const;
  return <div className="calculator"><div className="calc-fields">{fields.map(([label,value,set])=><label key={label}>{label}<input type="number" min="0" inputMode="decimal" value={value} onChange={e=>set(e.target.value)} placeholder="Enter value" /></label>)}</div><div className="calc-result"><span>YOUR ESTIMATE</span><strong>{result ?? '—'}</strong><small>Indicative calculation only. Actual costs and lender terms may differ.</small></div><button className="text-button" onClick={()=>{setA('');setB('');setC('');}}>Reset calculator ↺</button></div>;
}
