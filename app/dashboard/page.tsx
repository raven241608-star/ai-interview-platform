import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">
        Welcome, {session.user.name} 👋
      </h1>

      <p className="mt-4 text-gray-600">
        {session.user.email}
      </p>
    </main>
  );
}