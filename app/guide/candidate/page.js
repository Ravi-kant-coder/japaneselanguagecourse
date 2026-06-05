export default function CandidateGuide() {
  const tips = [
    {
      title: "Research the Company",
      content:
        "Understand the company's business, products, culture, and recent developments before attending the interview.",
    },
    {
      title: "Prepare Your Introduction",
      content:
        "Be ready to explain your background, technical skills, projects, and career goals confidently.",
    },
    {
      title: "Know Your Projects",
      content:
        "Recruiters expect detailed explanations of your role, technologies used, challenges faced, and solutions implemented.",
    },
    {
      title: "Demonstrate Problem Solving",
      content:
        "Explain how you approach technical challenges and make decisions under pressure.",
    },
    {
      title: "Show Communication Skills",
      content:
        "Japanese companies value teamwork and communication as much as technical ability.",
    },
    {
      title: "Be Honest",
      content:
        "If you do not know an answer, explain how you would learn or solve the problem rather than guessing.",
    },
    {
      title: "Display Adaptability",
      content:
        "Show your willingness to learn Japanese culture, business etiquette, and new technologies.",
    },
    {
      title: "Explain Why Japan",
      content:
        "Recruiters often ask why you want to work in Japan. Prepare a sincere and thoughtful answer.",
    },
    {
      title: "Ask Intelligent Questions",
      content:
        "Questions about team structure, technologies, growth opportunities, and expectations create a positive impression.",
    },
    {
      title: "Follow Up Professionally",
      content:
        "Send a polite thank-you message after the interview if appropriate.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-500">
          Candidate Interview Guide
        </h1>

        <p className="text-center text-gray-600 text-xl mb-12">
          How to Successfully Interview for IT Jobs in Japan
        </p>

        <div className="bg-white rounded-xl shadow p-8 mb-12 text-gray-700">
          <p className="leading-8 text-lg">
            Japanese companies look beyond technical skills. They evaluate
            communication, teamwork, professionalism, adaptability, and
            long-term commitment.
          </p>
        </div>

        <div className="space-y-8 text-gray-500">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-8">
              <h2 className="text-2xl font-bold mb-3">
                {index + 1}. {tip.title}
              </h2>

              <p className="text-gray-700 leading-8">{tip.content}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-8 mt-12 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">
            What Recruiters Actually Look For
          </h2>

          <ul className="space-y-3 list-disc list-inside">
            <li>Technical Competence</li>
            <li>Communication Skills</li>
            <li>Problem Solving Ability</li>
            <li>Japanese Language Ability</li>
            <li>Professional Attitude</li>
            <li>Adaptability</li>
            <li>Long-Term Commitment</li>
            <li>Team Collaboration</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
