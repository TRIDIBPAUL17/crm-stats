// components/Card.js
export default function Card({ title, children }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        {children}
      </div>
    );
  }
  