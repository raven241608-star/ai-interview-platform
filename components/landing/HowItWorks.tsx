const steps = [
  {
    number: "01",
    title: "Create an Interview",
    description:
      "Choose your role, experience level, and technologies to generate a personalized interview.",
  },
  {
    number: "02",
    title: "Practice with AI",
    description:
      "Answer AI-generated technical and behavioral questions in a realistic interview environment.",
  },
  {
    number: "03",
    title: "Receive Feedback",
    description:
      "Get detailed AI feedback, performance scores, and suggestions to improve.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <p className="mt-4 text-muted-foreground">
          Three simple steps to prepare for your next interview.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border p-8 shadow-sm"
          >
            <span className="text-5xl font-bold text-primary">
              {step.number}
            </span>

            <h3 className="mt-6 text-2xl font-semibold">
              {step.title}
            </h3>

            <p className="mt-4 text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}