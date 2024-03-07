import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const dataPre = [
  {
    category: "Neuro-IR",
    Current: 10,
  },
  {
    category: "Arterial IR",
    Current: 15,
  },
  {
    category: "Venous&Dialysis IR",
    Current: 20,
  },
  {
    category: "Thoracic IR",
    Current: 10,
  },
  {
    category: "GI IR",
    Current: 25,
  },
  {
    category: "Urogenital IR",
    Current: 30,
  },
  {
    category: "MSK IR",
    Current: 1,
  },
  {
    category: "Paed IR",
    Current: 25,
  },
  {
    category: "Oncology IR",
    Current: 12,
  },
  {
    category: "Vascular Anomalies",
    Current: 6,
  },
  {
    category: "MR guided IR",
    Current: 1,
  },
];
const dataForSubtotal = {
  category: "Subtotal",
  //@ts-ignore
  Current: dataPre.reduce((acc, item) => {
    return acc + item.Current;
  }, 0),
  Target: 240,
};

const data = [...dataPre, dataForSubtotal];

export function ByCategory() {
  //@ts-ignore
  console.log(dataPre.reduce((acc, curr) => acc.Current + curr, 0));
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
        <Bar dataKey="Current" fill="#f97316" barSize={100} />
        <Bar dataKey="Target" fill="#f97316" barSize={0} />
        <Text>Hello</Text>
      </BarChart>
    </ResponsiveContainer>
  );
}
