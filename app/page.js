"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4 border-b border-gray-300">
        <h1 className="text-2xl font-bold text-black">College Counseling for All Exams</h1>
        <div className="space-x-4">
          <Button onClick={() => router.push("/auth/login")} className="bg-black text-white">
            Login
          </Button>
          <Button onClick={() => router.push("/auth/signup")} className="bg-gray-800 text-white">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-black mb-4">Expert College Counseling for Your Success</h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          Get personalized guidance, study strategies, and expert support to secure admission in top colleges 
          for exams like JEE, NEET, MHTCET, and more.
        </p>
        <Button onClick={() => router.push("/auth/signup")} className="mt-6 bg-black text-white px-6 py-3">
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-black mb-6">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
              <h4 className="text-xl font-semibold text-black">Personalized Counseling</h4>
              <p className="text-gray-700 mt-2">Tailored guidance for JEE, NEET, MHTCET, and other entrance exams.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
              <h4 className="text-xl font-semibold text-black">Expert Mentors</h4>
              <p className="text-gray-700 mt-2">Learn from top educators and experienced professionals.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
              <h4 className="text-xl font-semibold text-black">Real-time Progress Tracking</h4>
              <p className="text-gray-700 mt-2">Monitor your performance and improve efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-gray-200 text-black">
        <h3 className="text-2xl font-semibold">Start Your College Counseling Journey Today</h3>
        <Button onClick={() => router.push("/auth/signup")} className="mt-4 bg-black text-white px-6 py-3">
          Join Now
        </Button>
      </section>
    </div>
  );
}
