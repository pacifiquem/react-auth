import React, { createContext, useContext, useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import axios from "../utils/axiosUtil";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (userData) => {
    const response = await axios.post(`${baseUrl}/login`, {
      email: userData.email,
      password: userData.password,
    });
    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
    }
  };

  const signup = async (userData) => {
    const response = await axios.post(`${baseUrl}/signup`, {
      email: userData.email,
      password: userData.password,
    });
    if (response.status === 201) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      navigate("/dashboard");
    } else {
      setUser(null);
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
