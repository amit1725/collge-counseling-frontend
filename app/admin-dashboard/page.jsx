"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4 border-b border-gray-300">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Button onClick={() => router.push("/auth/logout")} className="bg-red-600 text-white">
          Logout
        </Button>
      </nav>

      {/* Admin Panel */}
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-3xl font-semibold mb-6">Welcome, Admin</h2>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
            <h3 className="text-xl font-semibold">Total Users</h3>
            <p className="text-2xl font-bold">2,530</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
            <h3 className="text-xl font-semibold">Total Enrollments</h3>
            <p className="text-2xl font-bold">1,200</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
            <h3 className="text-xl font-semibold">Active Counselors</h3>
            <p className="text-2xl font-bold">85</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold">Manage Users</h3>
          <div className="mt-4 flex space-x-4">
            <Button onClick={() => router.push("/admin/users")} className="bg-black text-white">
              View Users
            </Button>
            <Button onClick={() => router.push("/admin/counselors")} className="bg-gray-800 text-white">
              Manage Counselors
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
