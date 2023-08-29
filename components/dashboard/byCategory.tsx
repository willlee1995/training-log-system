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
  {
    category: "Non-vascular",
    Current: 240,
    Target: 360,
  },
  {
    category: "Vascular",
    Current: 80,
    Target: 360,
  },
  {
    category: "Musculoskeletal",
    Current: 82,
    Target: 360,
  },
  {
    category: "Oncology",
    Current: 63,
    Target: 360,
  },
  {
    category: "Neurointervention",
    Current: 33,
    Target: 360,
  },
  {
    category: "Paediatric",
    Current: 65,
    Target: 360,
  },
];

export function ByCategory() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Current" fill="#8884d8" />
        <Bar dataKey="Target" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
