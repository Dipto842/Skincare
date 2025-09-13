import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const MyPieChart = () => {
  const data = [
    { name: "Total Products", value: 120 },
    { name: "Add to Cart", value: 35 },
    { name: "Add to whailist", value: 50 },
  ];
  const COLORS = ["#8884d8", "#82ca9d"];

  return (
   <div>
     <div className="w-full h-screen shadow-lg rounded-xl p-4">
      <h2 className="text-lg font-bold mb-3 text-center">Products Distribution</h2>
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={200}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
   </div>
  );
};

export default MyPieChart;
