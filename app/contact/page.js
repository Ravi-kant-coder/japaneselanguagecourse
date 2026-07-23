export const metadata = {
  title: "Contact Us | Nihongo Max Talent",
  description:
    "Contact Nihongo Max Talent to hire Japanese-speaking IT engineers from India.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800 px-6 md:px-16 pt-10">
      <section className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact Us</h1>
      </section>
      <section className="max-w-6xl mx-auto">
        {/* INFO */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Contact Info{" "}
              <span className="font-normal mb-2">メール連絡先</span>
            </h3>
            <p className="text-gray-600 mb-8">nihongomax@gmail.com</p>
            <h3 className="text-lg font-semibold mb-2">
              Phone Number <span className="font-normal">電話番号</span>
            </h3>
            <p className="text-gray-600">7678461209</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Business Hours <span className="font-normal">営業時間</span>
            </h3>
            <p className="text-gray-600">
              Everyday 10:00 AM – 5:00 PM{" "}
              <span className="text-red-800"> (Tue & Thu is OFF)</span>
            </p>
            <p className="jp text-gray-600">
              月曜日～金曜日：午前10時～午後5時 (火曜日と木曜日は休業日)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
