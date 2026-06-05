export default function MaxExamPage() {
  const levels = [
    {
      level: "MAX-3",
      title: "Foundation Level",
      description:
        "Designed for candidates who have approximately JLPT N3-level Japanese ability and wish to demonstrate their understanding of Japanese workplace culture, communication etiquette, and practical business knowledge.",
    },
    {
      level: "MAX-2",
      title: "Professional Level",
      description:
        "Evaluates deeper business communication skills, cultural awareness, workplace adaptability, and the ability to handle more complex professional situations in Japanese environments.",
    },
    {
      level: "MAX-1",
      title: "Advanced Excellence Level",
      description:
        "The highest level of the MAX Examination. It certifies outstanding business Japanese competence, advanced cultural understanding, professional communication skills, and exceptional adaptability within Japanese organizations.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-600 leading-tight">
              MAX Examination
            </h1>
            <p className="py-2 rounded-full font-medium mb-6 text-gray-700 md:text-xl">
              Japanese Business & Cultural Competency Certification
            </p>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              The MAX Examination is a specialized assessment designed for
              Japanese language learners who have reached approximately JLPT N3
              level and wish to evaluate their readiness for working,
              communicating, and adapting successfully within Japanese
              professional environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#levels"
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Explore Levels
              </a>

              <a
                href="#overview"
                className="px-6 py-3 border border-gray-400 rounded-lg font-semibold hover:bg-gray-200 transition text-gray-700"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What is the MAX Examination?
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              While traditional Japanese language examinations primarily focus
              on grammar, vocabulary, listening, and reading abilities, the MAX
              Examination goes beyond language proficiency.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              It evaluates a candidate's understanding of Japanese business
              practices, workplace expectations, cultural awareness,
              professional etiquette, communication skills, and adaptability in
              real-world Japanese environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 border rounded-2xl shadow-sm border-gray-400">
              <h3 className="text-xl font-bold mb-4 text-gray-600">
                Business Knowledge
              </h3>
              <p className="text-gray-600">
                Understanding workplace behavior, business communication,
                meetings, reporting structures, and professional conduct.
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm border-gray-400">
              <h3 className="text-xl font-bold mb-4 text-gray-600">
                Cultural Understanding
              </h3>
              <p className="text-gray-600">
                Knowledge of Japanese values, customs, social expectations,
                etiquette, and cultural sensitivity.
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm border-gray-400">
              <h3 className="text-xl font-bold mb-4 text-gray-600">
                Adaptability
              </h3>
              <p className="text-gray-600">
                Ability to adjust and perform effectively in Japanese academic,
                social, and professional environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section id="levels" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Examination Levels
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              The MAX Examination consists of three progressive certification
              levels.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-14">
            {levels.map((item) => (
              <div
                key={item.level}
                className="bg-white rounded-2xl shadow-sm border border-gray-400 p-8 hover:shadow-lg transition"
              >
                <div className="font-bold text-3xl text-gray-700">
                  {item.level}
                </div>

                <h3 className="text-2xl font-bold mt-6  text-gray-500">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MAX */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Take the MAX Examination?
              </h2>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <span className="text-red-600 font-bold">✓</span>
                  <p className="text-gray-700">
                    Demonstrate practical readiness for Japanese workplaces.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-red-600 font-bold">✓</span>
                  <p className="text-gray-700">
                    Validate your cultural understanding beyond language skills.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-red-600 font-bold">✓</span>
                  <p className="text-gray-700">
                    Showcase adaptability and professional competence.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-red-600 font-bold">✓</span>
                  <p className="text-gray-700">
                    Strengthen your profile for study, employment, and career
                    opportunities connected with Japan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-100 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-gray-900">
                Recommended Eligibility
              </h3>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Candidates are generally expected to possess Japanese language
                proficiency around the JLPT N3 level or higher before attempting
                the MAX Examination.
              </p>

              <div className="mt-8 p-5 bg-white rounded-xl border">
                <p className="font-semibold text-gray-900">Focus Areas:</p>

                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>• Japanese Business Communication</li>
                  <li>• Workplace Etiquette</li>
                  <li>• Cultural Understanding</li>
                  <li>• Professional Conduct</li>
                  <li>• Adaptability & Practical Judgment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-300 text-black py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Build Your Future with Japan
          </h2>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            The MAX Examination recognizes not only your Japanese language
            ability but also your readiness to thrive in Japanese academic,
            social, and professional environments.
          </p>

          <button
            className="mt-10 px-8 py-4 bg-white text-green-700 rounded-xl font-bold hover:bg-gray-100 
          transition cursor-pointer hover:text-green-800"
          >
            Apply for MAX Examination
          </button>
        </div>
      </section>
    </main>
  );
}
