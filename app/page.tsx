"use client";
import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState<number>(0);
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [tipTotal, setTipTotal] = useState<number>(0);
  const [billTotal, setBillTotal] = useState<number>(0);

  const calculate = () => {
    const tip = bill * (tipPercent / 100);
    setTipTotal(tip);
    setBillTotal(bill + tip);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-10 gap-6">
      <h1 className="text-4xl font-bold text-blue-600">Tip Calculator</h1>

     
      <div className="flex items-center gap-4">
        <h2 className="text-5xl font-bold">bill</h2>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="bg-yellow-300 text-center text-2xl font-bold p-3 w-40"
        />
      </div>


      <div className="flex items-center gap-6">
        <h2 className="text-5xl font-bold">Tip</h2>

        <button
          onClick={() => setTipPercent(5)}
          className={`p-6 text-xl w-32 ${
            tipPercent === 5 ? "bg-blue-400" : "bg-blue-200"
          }`}
        >
          5%
        </button>
      </div>

      <button
        onClick={calculate}
        className="bg-teal-200 px-10 py-4 text-xl font-bold rounded"
      >
        Calculate
      </button>

      <div className="mt-6 text-2xl flex flex-col gap-3">
        <p>
          Tip Total:{" "}
          <span className="bg-pink-200 px-6 py-2">{tipTotal.toFixed(2)}</span>
        </p>

        <p>
          Bill Total:{" "}
          <span className="bg-pink-200 px-6 py-2">{billTotal.toFixed(2)}</span>
        </p>
        <a
  href="https://github.com/072wit"
  target="_blank"
  className="mt-6 text-blue-600 underline"
>
  🔗 ดูโค้ดบน GitHub
</a>
      </div>
    </div>
  );
}
