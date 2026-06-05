const services = [
  {
    title: "IT Talent Hiring",
    desc: "Hire pre-screened IT engineers trained in modern technologies and Japanese work culture.",
    jp: "最新技術と日本のビジネス文化に精通したエンジニアをご紹介します。",
  },
  {
    title: "Japanese Language Trained Developers",
    desc: "Developers with JLPT certification ensuring smooth communication.",
    jp: "日本語能力試験（JLPT）資格を持つエンジニアにより、円滑なコミュニケーションを実現します。",
  },
  {
    title: "Remote & Onsite Hiring",
    desc: "Flexible hiring options for remote or relocation-based roles.",
    jp: "リモートおよび現地採用の両方に対応可能です。",
  },
  {
    title: "Dedicated Hiring Support",
    desc: "We assist throughout the hiring process from screening to onboarding.",
    jp: "選考から採用後まで、全面的にサポートします。",
  },
  {
    title: "Cultural Training",
    desc: "Candidates are trained in Japanese business etiquette and communication.",
    jp: "日本のビジネスマナーや文化について教育された人材をご提供します。",
  },
  {
    title: "Fast Hiring Process",
    desc: "Quick turnaround with shortlisted candidates ready for interview.",
    jp: "迅速な選考プロセスで、すぐに面接可能な人材をご紹介します。",
  },
];

const process = [
  {
    title: "1. Requirement",
    desc: "Share your hiring needs",
    jp: "採用要件の共有",
  },
  {
    title: "2. Shortlist",
    desc: "Get selected candidates",
    jp: "候補者の選定",
  },
  {
    title: "3. Interview",
    desc: "Conduct interviews",
    jp: "面接の実施",
  },
  {
    title: "4. Hire",
    desc: "Finalize hiring",
    jp: "採用決定",
  },
];
export const metadata = {
  title: "Our Services | Nihongo Max Talent",
  description:
    "We provide Japanese-speaking IT engineers from India. Hire JLPT-certified developers ready for Japanese companies.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800 px-6 md:px-16 pb-16 pt-4">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Services
        </h1>

        <p className="text-gray-600">
          Helping Japanese companies hire skilled IT engineers from India.
        </p>

        <p className="jp mt-4 text-gray-600">
          日本企業向けに、優秀なITエンジニアの採用をサポートします。
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-3">{service.title}</h3>

            <p className="text-gray-600 text-sm mb-3">{service.desc}</p>

            <p className="jp text-gray-600 text-sm">{service.jp}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Hiring Process / 採用プロセス
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {process.map((step, i) => (
            <div key={i} className="p-5 border rounded-lg">
              <h4 className="font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
              <p className="jp text-sm text-gray-500 mt-2">{step.jp}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Build Your Team Today</h2>
        <p className="text-gray-600 mb-6">
          Get access to Japanese-speaking IT professionals.
        </p>

        <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700">
          Request Talent Profiles
        </button>
      </section>
    </main>
  );
}
