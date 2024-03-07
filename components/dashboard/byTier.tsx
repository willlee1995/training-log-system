import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { Category: "NVIR", current: 120 },
  {
    Category: "IR",
    current: 80,
  },
  {
    Category: "Subtotal",
    target: 360,
    current: 200,
  },
];

export function ByTier() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="current" fill="#8884d8" barSize={40} />

        <Bar dataKey="target" fill="#8884d8" barSize={0} />
      </BarChart>
    </ResponsiveContainer>
  );
}
