import Link from "next/link";

const services = [
  {
    title: "Begginers Japanese (JLPT N5)",
    desc: "Learn Japanese from very basics with Japanese work culture. Like I go to my office daily at 8 AM.",
  },
  {
    title: "Basic Japanese (JLPT N4)",
    desc: "Build on your Japanese skills with more complex grammar and vocabulary useful for Interviews.",
  },
  {
    title: "Intermediate Japanese (JLPT N3)",
    desc: "Learn the Japanese language up to a level that you can get a Job in India first.",
  },
  {
    title: "Advanced Japanese (JLPT N2)",
    desc: "Master the nuances of Japanese language and culture for professional communication and a High Salary.",
  },
  {
    title: "Super Advanced Japanese (JLPT N1)",
    desc: "This is the highest level of Japanese language and mostly it is not required for most jobs.",
  },
];

export const metadata = {
  title: "Our Services | Japanese Language Course",
  description:
    "We provide Japanese language courses for learners at all levels.",
};

export default function ServicesPage() {
  return (
    <main className="text-gray-800 px-6 md:px-16 pb-16 pt-4 bg-white">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Japanese Language Courses
        </h1>

        <p className="text-xl mb-4">
          Learn Japanese and get hired on a salary of 5 Million yen per year in
          Japan <br />
          (India will give you a low salary).
        </p>

        <p className="jp text-gray-600">
          Nihongomax
          は、日本語を学び、年収500万円で日本企業に採用されるための最適なコースを提供します。
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-3">{service.title}</h3>

            <p className="text-gray-700 mb-2">{service.desc}</p>

            <p className="jp text-gray-600 text-sm">{service.jp}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto mt-20 text-center">
        <Link
          href="/contact"
          className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-900 cursor-pointer font-bold"
        >
          Take a FREE Demo
        </Link>
        <div className="md:mt-10 mt-4  text-2xl">
          Many Institutes will say --- Ohh.. Yes Yes... We have Japanese
          language courses... (With No Hiragana)
          <br />
          <br />
          <p className="text-xl">
            {" "}
            But try Nihongomax at least once (With a FREE trial class) you will
            find that it is the best Japanese language course with the lowest
            cost in whole India.
          </p>
        </div>
      </section>
    </main>
  );
}
