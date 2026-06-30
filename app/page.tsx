import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Welcome to InterviewAI 🚀
        </h1>
      </main>
    </>
  );
}