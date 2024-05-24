import { 
  BarChart, 
  ResponsiveContainer, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  Bar 
} from "recharts";

const data = [
  // {
  //   name: "Jan",
  //   Penurunan: 3,
  //   Kenaikanv: 7
  // },
  // {
  //   name: "Feb",
  //   Penurunan: 12,
  //   Kenaikan: 6
  // },
  // {
  //   name: "Mar",
  //   Penurunan: 7,
  //   Kenaikan: 15
  // },
  // {
  //   name: "Apr",
  //   Penurunan: 7,
  //   Kenaikan: 2
  // },
  // {
  //   name: "Mei",
  //   Penurunan: 8,
  //   Kenaikan: 9
  // },
  // {
  //   name: "Jun",
  //   Penurunan: 19,
  //   Kenaikan: 2
  // },
  {
    name: "Jul",
    Penurunan: 11,
    Kenaikan: 6
  },
  {
    name: "Ags",
    Penurunan: 6,
    Kenaikan: 7
  },
  {
    name: "Sep",
    Penurunan: 18,
    Kenaikan: 2
  },
  {
    name: "Okt",
    Penurunan: 17,
    Kenaikan: 2
  },
  {
    name: "Nov",
    Penurunan: 8,
    Kenaikan: 15
  },
  {
    name: "Des",
    Penurunan: 1,
    Kenaikan: 8
  },
]

function GrafikPelatihan () {
  return (
    <div className="w-[20rem] md:w-[27rem] h-[22rem] bg-white p-4 shadow-md shadow-gray-400 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Grafik Pelatihan</strong>
      <div className="w-full mt-3 flex-1 text-sm">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertikal={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Kenaikan" fill='rgb(21 128 61)' />
            <Bar dataKey="Penurunan" fill='rgb(34 197 94)' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GrafikPelatihan;
