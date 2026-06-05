export const metadata = {
  title: "Contact Us | Nihongo Max Talent",
  description:
    "Contact Nihongo Max Talent to hire Japanese-speaking IT engineers from India.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800 px-6 md:px-16 pb-16 pt-4">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Let’s connect and discuss your hiring needs.
        </p>

        <p className="jp mt-4 text-gray-600">
          採用に関するご相談はお気軽にお問い合わせください。
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Send us a message{" "}
            <span className="font-normal">メッセージお願いいたします。</span>
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Name / お名前</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Email / メールアドレス
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Company / 会社名</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Requirement / ご要望</label>
              <textarea
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 cursor-pointer transition-colors">
              Send 送信
            </button>
          </form>
        </div>

        {/* INFO */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Contact Info <span className="font-normal">連絡先</span>
            </h3>
            <p className="text-gray-600">nihongomaxtalent@gmail.com</p>
            <p className="text-gray-600">+91-7805092279</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Business Hours <span className="font-normal">営業時間</span>
            </h3>
            <p className="text-gray-600">
              Mon–Fri: 10:00 AM – 5:00 PM (INDIA Time)
            </p>
            <p className="jp text-gray-600">
              月曜日～金曜日：午前10時～午後5時 (インド時間帯)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
