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
  { tier: "A", nvir: 240, ir: 80, target: 360 },
  {
    tier: "B",
    msk: 82,
    onco: 63,
    nir: 33,
    paed: 65,
    target: 360,
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
        <XAxis dataKey="tier" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="nvir" name="Non-Vascular" stackId="a" fill="#8884d8" />
        <Bar dataKey="ir" name="Vascular" stackId="a" fill="#82ca9d" />
        <Bar dataKey="nir" name="Neuro-IR" stackId="a" fill="#CADBC0" />
        <Bar dataKey="msk" name="MSK" stackId="a" fill="#C94277" />
        <Bar
          dataKey="onco"
          name="Interventional Oncology"
          stackId="a"
          fill="#A27E6F"
        />
        <Bar dataKey="paed" name="Paediatric" stackId="a" fill="#82ca9d" />
        <Bar dataKey="target" fill="#2F0A28" />
      </BarChart>
    </ResponsiveContainer>
  );
}
