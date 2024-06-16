import React from "react";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "../components/Table";
import { columns, data } from "../utils/fakeData";
import { CSVLink } from "react-csv";

const Dashboard = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
  };

  // Calculate statistics
  const totalUsers = data.length;
  const averageAge = (
    data.reduce((acc, user) => acc + user.age, 0) / totalUsers
  ).toFixed(1);
  const countries = new Set(data.map((user) => user.country)).size;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary-dark"
          >
            Logout
          </button>
        </div>
      </nav>
      <main className="container mx-auto mt-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
            <p className="text-2xl font-bold text-primary">{totalUsers}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Average Age</h3>
            <p className="text-2xl font-bold text-primary">{averageAge}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Countries</h3>
            <p className="text-2xl font-bold text-primary">{countries}</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
          <Table columns={columns} data={data} />
        </div>
        <div className="text-center">
          <CSVLink
            data={data}
            filename={"report.csv"}
            className="px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary-dark"
          >
            Download Report
          </CSVLink>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
