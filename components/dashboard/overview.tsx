"use client";

import {
  Bar,
  BarChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    category: "Non-vascular",
    total: 240,
    fullMark: 360,
  },
  {
    category: "Vascular",
    total: 80,
    fullMark: 360,
  },
  {
    category: "Musculoskeletal",
    total: 82,
    fullMark: 360,
  },
  {
    category: "Oncology",
    total: 63,
    fullMark: 360,
  },
  {
    category: "Neurointervention",
    total: 33,
    fullMark: 360,
  },
  {
    category: "Paediatric",
    total: 65,
    fullMark: 360,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis domain={[0, 360]} />
        <Radar
          name="Procedures"
          dataKey="total"
          stroke="#D3500C"
          fill="#D3500C"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
