"use client"
import Layout from "@/components/layouts/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <Layout>
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="text-5xl">Welcome to chat Time</div>
        <div>
          {JSON.stringify(session.data?.user)}
        </div>
      </div>
    </div>
    </Layout>
  );
}
