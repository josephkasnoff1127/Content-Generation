import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-6xl font-bold mb-4">
        Content{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          GenAI
        </span>
      </h1>
      <p className="text-lg text-black
       mb-8">
        Generate engaging and high-traffic content using AI in seconds! 
      </p>
      <Link href="/dashboard">
        <Button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
