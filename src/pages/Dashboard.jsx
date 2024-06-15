import React from "react";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <nav className="bg-white shadow p-4 w-full">
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
      <main className=" flex justify-center items-center w-full h-[50%] mx-auto mt-8 flex-grow">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Happy Coding!
          </h3>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
