import React from 'react';

export const CreatorRankings: React.FC = () => (
  <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
    <h2 className="text-2xl font-bold mb-6">Creator Rankings</h2>
    <table className="w-full text-left">
      <thead>
        <tr className="text-slate-400 text-xs uppercase tracking-widest">
          <th className="pb-4">Creator</th>
          <th className="pb-4">Score</th>
          <th className="pb-4">Tier</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-slate-50">
          <td className="py-4 font-medium">@creator_one</td>
          <td className="py-4">85</td>
          <td className="py-4 text-emerald-600 font-bold">Elite</td>
        </tr>
      </tbody>
    </table>
  </div>
);