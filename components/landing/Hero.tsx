export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <span className="rounded-full border px-4 py-2 text-sm font-medium">
        🚀 AI-Powered Interview Preparation
      </span>

      <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl">
        Ace Your Next
        <span className="text-primary"> Technical Interview</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Practice realistic AI-generated interviews, receive instant feedback,
        and track your progress to land your dream software engineering job.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="rounded-lg bg-primary px-6 py-3 text-primary-foreground">
          Start for Free
        </button>

        <button className="rounded-lg border px-6 py-3">
          Watch Demo
        </button>
      </div>
    </section>
  );
}