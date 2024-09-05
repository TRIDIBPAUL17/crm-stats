
// components/TimeSelector.js
export default function TimeSelector({ onChange }) {
  return (
    <div className="mb-6">
      <select
        onChange={(e) => onChange(e.target.value)}
        className="bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-700"
      >
        <option value="1d">1 Day</option>
        <option value="1w">1 Week</option>
        <option value="1m">1 Month</option>
      </select>
    </div>
  );
}
