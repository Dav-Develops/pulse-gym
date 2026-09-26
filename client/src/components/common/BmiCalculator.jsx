import React, { useState } from 'react';

function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const handleCompute = (e) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const bmi = (w / (h * h)).toFixed(1);
      let cat = 'Normal Weight';
      let catColor = 'text-brand-neonLime';

      if (bmi < 18.5) {
        cat = 'Underweight';
        catColor = 'text-yellow-400';
      } else if (bmi >= 25 && bmi < 29.9) {
        cat = 'Overweight';
        catColor = 'text-orange-400';
      } else if (bmi >= 30) {
        cat = 'Obese Range';
        catColor = 'text-red-400';
      }

      const cals = Math.round(w * 24 * 1.35);

      setResult({
        bmi,
        cat,
        catColor,
        cals: cals.toLocaleString(),
      });
    }
  };

  return (
    <div className="mt-16 glass-card p-8 sm:p-12 rounded-3xl border border-white/10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs font-black uppercase text-brand-neonLime tracking-widest">
            Interactive Health Metric
          </span>
          <h2 className="text-3xl font-black uppercase text-white mt-1 mb-4">
            BMI & CALORIC ESTIMATOR
          </h2>
          <p className="text-gray-400 text-xs leading-relaxed mb-6">
            Enter your details to calculate body mass index and estimated daily
            caloric expenditure for your target weight goals.
          </p>

          <form onSubmit={handleCompute} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                  Height (cm)
                </label>
                <input
                  type="number"
                  required
                  min="120"
                  max="230"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="180"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold focus:border-brand-neonLime"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  required
                  min="40"
                  max="200"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="78"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold focus:border-brand-neonLime"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-brand-neonLime text-black font-extrabold uppercase text-xs tracking-wider hover:bg-white transition-all shadow-neon-lime"
            >
              Compute My Metrics <i className="fa-solid fa-calculator ml-2"></i>
            </button>
          </form>
        </div>

        {/* Results display box */}
        <div className="bg-black/50 p-6 rounded-2xl border border-white/10 space-y-4">
          {!result ? (
            <div className="text-center py-6 text-gray-500 text-xs font-bold uppercase tracking-wider">
              Submit form to see your score & targets
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-gray-400 uppercase">
                  BMI Score
                </span>
                <span className="text-3xl font-black text-brand-neonLime">
                  {result.bmi}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-gray-400 uppercase">
                  Status Category
                </span>
                <span className={`text-sm font-bold ${result.catColor}`}>
                  {result.cat}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 uppercase">
                  Estimated Maintenance Cals
                </span>
                <span className="text-lg font-bold text-brand-neonCyan">
                  {result.cals} kcal/day
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BmiCalculator;
