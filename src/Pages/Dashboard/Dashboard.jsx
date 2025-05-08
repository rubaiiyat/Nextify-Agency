import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useAuth } from "../../Context/AuthProvider";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 800 },
  { name: "Mar", users: 650 },
  { name: "Apr", users: 900 },
  { name: "May", users: 730 },
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-900 p-6 md:min-h-screen shadow-md">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav className="flex flex-col gap-4 text-gray-300">
          <a href="#" className="hover:text-white transition">
            Overview
          </a>
          <a href="#" className="hover:text-white transition">
            Analytics
          </a>
          <a href="#" className="hover:text-white transition">
            Trending
          </a>
          <a href="#" className="hover:text-white transition">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-10 bg-gray-950 space-y-8">
        {/* Top bar */}
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Welcome, {user?.displayName || "User"}
          </h1>
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </header>

        {/* Statistic Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { title: "Users", value: "1,240" },
            { title: "Sales", value: "$3,450" },
            { title: "Orders", value: "350" },
            { title: "Traffic", value: "12K" },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-lg text-gray-300">{card.title}</h3>
              <p className="text-3xl font-bold mt-2">{card.value}</p>
            </div>
          ))}
        </section>

        {/* Chart Section */}
        <section className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Monthly User Growth</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#888" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#111", border: "none" }}
                />
                <Bar
                  dataKey="users"
                  fill="#3b82f6"
                  radius={[6, 6, 0, 0]}
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
