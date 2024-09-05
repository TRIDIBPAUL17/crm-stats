import './globals.css';
const StatsCard = ({ title, value }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-gray-500">{title}</h2>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    );
  };
  
  export default StatsCard;
  