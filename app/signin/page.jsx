"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import signIn from "@/firebase/auth/signin";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { result } = await signIn(email, password);
      if (result) {
        console.log(result);
        router.push("/");
      }
    } catch (error) {}
  };
  return (
    <div className="w-screen h-screen bg-light flex justify-center items-center">
      <div className="md:w-3/5 w-5/6 flex h-4/5 rounded-2xl">
        <div className="lg:w-1/2 w-full bg-white flex flex-col items-center gap-6 md:gap-10 py-8 lg:rounded-l-2xl rounded-2xl">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-center">Login</h1>
          </div>
          <div className="text-center p-6">
            <h2 className="font-semibold text-lg p-2">Welcome to Namma SKIT</h2>
            <p>Enter your login details to continue</p>
          </div>
          <form
            className="flex flex-col gap-2 p-6 w-72"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="email"
                required
                className="border-b-2 border-gray-400 w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                required
                type="password"
                className="border-b-2 border-gray-400 w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center py-4">
              <button
                type="submit"
                className="text-center bg-main rounded-2xl text-white px-12 p-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-full h-full object-cover rounded-r-2xl"
            alt="Login image"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
