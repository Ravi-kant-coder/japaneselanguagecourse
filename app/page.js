import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Learn Japanese for JLPT",
  description:
    "We provide highly effective Japanese language (JLPT) and culture training.",
  icons: {
    icon: "/fujisan.png",
  },
  keywords: [
    "Japanese language course",
    "Study Visa for Japan",
    "JLPT",
    "Study Japanese language",
  ],
  alternates: {
    canonical: "https://www.japaneselanguagecourse.com",
  },
  openGraph: {
    title: "Learn Japanese Language | Japanese Language Course",
    description:
      "We provide highly effective Japanese language (JLPT) and culture training.",
    url: "https://www.japaneselanguagecourse.com",
    siteName: "Japanese Language Course",
    images: [
      {
        url: "Logo-Japanese-language-course.png",
        width: 1200,
        height: 630,
        alt: "Japanese language in Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function JapaneseLanguageCourse() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    description:
      "We provide highly effective Japanese language (JLPT) and culture training.",
    name: "Japanese Language Course",
    url: "https://www.japaneselanguagecourse.com",
    telephone: "+91-7678461209",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/nihongomax",
      "https://www.instagram.com/nihongomax",
    ],
  };

  return (
    <main className="bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="w-full flex items-center justify-center md:mt-10 px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
          <div className="space-y-4">
            <h1 className="text-xl md:text-4xl">
              Best Japanese Language Courses <br />
              from NIHONGOMAX
            </h1>
            <h2 className="md:text-xl md:mb-8">With lowest Cost in India</h2>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-900 cursor-pointer font-bold"
              >
                Take a FREE Demo
              </Link>
              <Link
                href="/contact"
                className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-300 cursor-pointer "
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image
              src="/nihongomax-institute.jpeg"
              alt="Japanese language Course in Delhi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="pt-20 pb-10 bg-gray-50 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            After a few years of experience, students get jobs where they earn
            <br /> 5 Million Yen per year in Japan
          </h2>

          <p className="text-gray-600 text-xl">
            By learning Japanese language you can land with a Job in Japanese
            companies in India or even in Japan.
            <br /> Our courses focus on Japanese language (JLPT) with Japanese
            business etiquette and Japanese work environments training.
          </p>
        </div>
      </section>

      <section className="py-10 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Nihongomax Japanese Language Course in Delhi
            </h3>
            <ul className="text-gray-700 leading-relaxed list-disc pl-5 space-y-2 text-xl">
              <li>
                Besides many other things, Nihongomax is famous for its three
                qualities. Fastest curriculum, lowest costs and Best results.
              </li>
              <li>
                Lowest Costs incurred. We understand the heart of a student. By
                our experience we know that the cost charged at any other place
                is very high compared to their services offered.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Nihongomax Best Japanese Institute
            </h3>
            <ul className="text-gray-700 leading-relaxed list-disc pl-5 space-y-2 text-xl">
              <li>
                Great Ambience. Reason of good results. Here a student is not
                treated as once fee payment is done, we forgot you! Every
                student is cared by the trainer for its performance and doubts
                regularly so as to keep up the motivation alive.
              </li>
              <li>
                Fastest Curriculum Offered. No time waste! You get instant
                start-up with everything like course schedule, components and
                tests explained by our experienced trainers once you are
                enrolled.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-200 text-center px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Take a FREE trial class?
        </h2>
        <p className="mb-8 text-gray-700">
          Connect with us and get FREE Japanese trial class classes so that you
          can judge us better.
        </p>
        <Link
          href="/talent"
          className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition cursor-pointer text-white font-bold"
        >
          Get FREE Demo Class
        </Link>
      </section>
      <section className="w-full flex items-center justify-center md:mt-10 px-4">
        <div className="hidden md:grid md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
          {/* LEFT CONTENT */}
          <div className="space-y-4">
            <h1 className="text-xl md:text-4xl">
              Attend class and ask questions <br />
              from Teachers
            </h1>
            <h2 className="text-xl md:mb-8 md:text-2xl">
              And get your all doubts cleared
            </h2>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-900 cursor-pointer font-bold"
              >
                Take a FREE Demo
              </Link>
              <Link
                href="/contact"
                className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-300 cursor-pointer "
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[660px]">
            <Image
              src="/Japanese-language-course.png"
              alt="IT engineers From India trained in Japanese language and culture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl object-cover"
              priority
            />

            <div className="absolute -left-4 top-10 text-black">
              <p
                className="text-2xl md:text-3xl font-semibold tracking-widest jp"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                }}
              >
                日本語を勉強しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-16">
        <h1 className="text-4xl text-center font-semibold p-10">
          What levels you will achieve in our Japanese Language Course
        </h1>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-2 md:gap-30">
          <div>
            <div>
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
                <Image
                  src="/JLPT-N5.png"
                  alt="Japanese language Course in Delhi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Beginners japanese (JLPT N5)
              </h3>
              <p className="mb-4">
                {" "}
                JLPT N5 will be CRACKED! A student is able to read listen and
                recognize each word given in JLPT N5 so that the exam is easily
                cracked This course enables one to frame basic sentences.
                Hiragana, katakana, and 110 kanji are understood. He can
                communicate on a fundamental level. For Example: I go to office
                everyday at 8 am. Though I work with a travel company, I don’t
                like to visit overseas. Would you like to have dinner with me? I
                plan to travel Japan next month. My Job is very tough.
              </p>
            </div>
            <div>
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
                <Image
                  src="/JLPT-N4.png"
                  alt="Japanese language Course in Delhi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Basic japanese (JLPT N4)
              </h3>
              <p className="mb-4">
                {" "}
                JLPT N4 will be CRACKED! This is the continuation of N5. After
                this course, one is able to read and understand passages on
                familiar daily topics written in basic vocabulary and KANJI. One
                is able to generally follow the contents of Japanese sentences,
                provided that they are spoken slowly. He can communicate on a
                basic level. For Example: Since we are new in Japan, we don’t
                know the traffic rules so we should take due care while roaming
                there.
              </p>
            </div>
            <div>
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
                <Image
                  src="/JLPT-N3.png"
                  alt="Japanese language Course in Delhi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Intermediate Japanese (JLPT N3)
              </h3>
              <p className="mb-4">
                {" "}
                JLPT N3 will be CRACKED! One is able to read and understand
                written materials with specific contents concerning everyday
                topics. Also, one is also able to read slightly difficult
                writings encountered in everyday situations and understand the
                main points of the content if some alternative phrases are
                available to aid one’s understanding. This course It enhances
                the communication level which helps in getting a starting job in
                Japanese companies.
              </p>
            </div>
          </div>

          <div>
            <div>
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
                <Image
                  src="/JLPT-N2.png"
                  alt="Japanese language Course in Delhi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Advanced Japanese (JLPT N2)
              </h3>
              <p className="mb-4">
                {" "}
                JLPT N2 will be CRACKED! This course helps one to be able to
                read written materials on general topics and follow their
                narratives as well as understand the intent of the writers. One
                is able to comprehend orally presented materials such as
                coherent conversations and news reports, spoken at nearly
                natural speed in everyday situations as well as in a variety of
                settings. It completes the communication level sufficient to get
                a highly paid job in Japanese companies and in Japan.
              </p>
            </div>
            <div>
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
                <Image
                  src="/JLPT-N1.png"
                  alt="Japanese language Course in Delhi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Super Advanced Japanese (JLPT N1)
              </h3>
              <p className="mb-4">
                {" "}
                JLPT N1 will be CRACKED! One is able to read Japanese writings
                with logical complexity and/or abstract writings on a variety of
                topics, such as newspaper editorials and critiques, coherent
                conversations, news reports and lectures, spoken at natural
                speed in a broad variety of settings, and is able to follow
                their ideas and comprehend both their structures and contents
                comprehensively. One is also able to understand the details of
                the presented materials such as the relationships among the
                people involved the logical structures, and the essential
                points. It completes the communication level sufficient to get a
                highly paid job in Japanese companies and in Japan.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
            <Image
              src="/groovy.png"
              alt="IT engineers from India trained in Japanese language and culture"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
          <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
            <Image
              src="/zombieing.png"
              alt="IT engineers from India trained in Japanese language and culture"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
