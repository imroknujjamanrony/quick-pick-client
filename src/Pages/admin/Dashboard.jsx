import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

const salesData = [
  { date: "01 May", sales: 75, orders: 60 },
  { date: "02 May", sales: 68, orders: 55 },
  { date: "03 May", sales: 74, orders: 62 },
  { date: "04 May", sales: 71, orders: 59 },
  { date: "05 May", sales: 77, orders: 63 },
  { date: "06 May", sales: 69, orders: 57 },
  { date: "07 May", sales: 73, orders: 61 },
  { date: "08 May", sales: 76, orders: 64 },
  { date: "09 May", sales: 70, orders: 58 },
  { date: "10 May", sales: 74, orders: 60 },
  { date: "11 May", sales: 72, orders: 59 },
  { date: "12 May", sales: 75, orders: 62 },
];

const channelData = [
  { name: "Social Media", value: 48 },
  { name: "Google", value: 30 },
  { name: "Email", value: 22 },
];

const barData = [
  { day: "Mon", value: 10 },
  { day: "Tue", value: 25 },
  { day: "Wed", value: 20 },
  { day: "Thu", value: 25 },
  { day: "Fri", value: 15 },
  { day: "Sat", value: 20 },
  { day: "Sun", value: 30 },
];

const COLORS = ["#6C63FF", "#00C49F", "#FF8042"];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="bg-white p-5 rounded-2xl shadow w-full col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Sales Chart</h2>
            <select className="text-sm border rounded px-2 py-1">
              <option>May</option>
              <option>April</option>
              <option>March</option>
            </select>
          </div>
          <p className="text-2xl font-bold mb-2">$10,552.40 <span className="text-green-500 text-sm">+8.30%</span></p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={salesData}>
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#6C63FF" strokeWidth={2} />
              <Line type="monotone" dataKey="orders" stroke="#00C49F" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Channels */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Channels</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={channelData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90}>
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-around text-sm mt-2">
            <span className="text-purple-600">48% Social Media</span>
            <span className="text-green-600">30% Google</span>
            <span className="text-orange-500">22% Email</span>
          </div>
          <button className="mt-3 px-4 py-2 border rounded-xl text-sm text-gray-600 hover:bg-gray-100">Download Report</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow">
          <h3 className="text-sm text-gray-500">Orders</h3>
          <p className="text-2xl font-bold">310</p>
          <p className="text-green-500 text-xs">Over last month 1.4% ↑</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow">
          <h3 className="text-sm text-gray-500">Sales</h3>
          <p className="text-2xl font-bold">$3,759.00</p>
          <p className="text-red-500 text-xs">Over last month 2.4% ↓</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow">
          <h3 className="text-sm text-gray-500">Customer Rating</h3>
          <p className="text-2xl font-bold">3.0</p>
          <p className="text-yellow-500">★★★☆☆</p>
          <p className="text-green-500 text-xs">+0.35 from last month</p>
          <button className="mt-2 px-4 py-1 border rounded-xl text-xs text-gray-600 hover:bg-gray-100">Download Report</button>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow">
          <h3 className="text-sm text-gray-500 mb-2">Products Sold</h3>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#6C63FF" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-center text-sm mt-1">89 Sold</p>
        </div>
      </div>

      {/* Reviews & Countries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Review */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3">Recent Reviews</h2>
          <div className="flex items-start gap-3">
            <div className="bg-purple-200 text-purple-700 w-10 h-10 flex items-center justify-center rounded-full font-bold">J</div>
            <div>
              <p className="font-semibold">Johnath Siddeley</p>
              <p className="text-yellow-500">★★★★★</p>
              <p className="text-sm text-gray-600">Very nice glasses. I ordered for my friend.</p>
            </div>
          </div>
        </div>

        {/* Top Countries */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3">Your Top Countries</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between"><span>🇺🇸 United States</span> <span>$1,671.10</span></li>
            <li className="flex justify-between"><span>🇻🇪 Venezuela</span> <span>$1,064.75</span></li>
            <li className="flex justify-between"><span>🇸🇻 Salvador</span> <span>$1,059.98</span></li>
            <li className="flex justify-between"><span>🇷🇺 Russia</span> <span>$1,042.00</span></li>
          </ul>
        </div>
      </div>

      {/* Activity & Recent Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Overview */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Activity Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="p-3 border rounded-xl text-center">
              <p className="font-semibold">Delivered</p>
              <p className="text-gray-600">15 New Packages</p>
            </div>
            <div className="p-3 border rounded-xl text-center">
              <p className="font-semibold">Ordered</p>
              <p className="text-gray-600">72 New Items</p>
            </div>
            <div className="p-3 border rounded-xl text-center">
              <p className="font-semibold">Reported</p>
              <p className="text-gray-600">50 Support New Cases</p>
            </div>
            <div className="p-3 border rounded-xl text-center">
              <p className="font-semibold">Arrived</p>
              <p className="text-gray-600">34 Upgraded Boxes</p>
            </div>
          </div>
        </div>

        {/* Recent Products */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Products</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th>Photo</th>
                <th>Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td>🍪</td>
                <td>Cookie</td>
                <td className="text-red-500">Out of Stock</td>
                <td>$10.50</td>
                <td>...</td>
              </tr>
              <tr className="border-b">
                <td>🥽</td>
                <td>Glass</td>
                <td className="text-green-500">In Stock</td>
                <td>$70.20</td>
                <td>...</td>
              </tr>
              <tr className="border-b">
                <td>🎧</td>
                <td>Headphone</td>
                <td className="text-green-500">In Stock</td>
                <td>$870.50</td>
                <td>...</td>
              </tr>
              <tr>
                <td>🌸</td>
                <td>Perfume</td>
                <td className="text-green-500">In Stock</td>
                <td>$170.50</td>
                <td>...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;