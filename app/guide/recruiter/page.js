export default function RecruiterGuide() {
  const sections = [
    {
      enTitle: "Technical Skills",
      jpTitle: "技術スキル",
      enContent:
        "Verify whether the candidate possesses practical skills required for the role. Ask about real projects, architecture decisions, debugging experience, and technologies used.",
      jpContent:
        "応募者が業務に必要な実践的スキルを持っているか確認してください。実際のプロジェクト経験、設計判断、デバッグ経験、使用技術について質問しましょう。",
    },
    {
      enTitle: "Problem Solving Ability",
      jpTitle: "問題解決能力",
      enContent:
        "Present a real-world scenario and observe how the candidate approaches the problem rather than focusing only on the final answer.",
      jpContent:
        "実際の業務に近い課題を提示し、回答そのものではなく問題へのアプローチ方法を評価してください。",
    },
    {
      enTitle: "Communication Skills",
      jpTitle: "コミュニケーション能力",
      enContent:
        "Evaluate how clearly the candidate explains technical concepts and collaborates with team members.",
      jpContent:
        "技術的な内容を分かりやすく説明できるか、チームとの連携が取れるかを確認してください。",
    },
    {
      enTitle: "Japanese Language Ability",
      jpTitle: "日本語能力",
      enContent:
        "Assess practical communication ability rather than grammar perfection. Daily workplace communication is most important.",
      jpContent:
        "文法の正確さよりも、職場での実践的なコミュニケーション能力を重視してください。",
    },
    {
      enTitle: "Adaptability",
      jpTitle: "適応力",
      enContent:
        "Ask about situations where the candidate learned new technologies or worked in unfamiliar environments.",
      jpContent:
        "新しい技術の習得や未知の環境への適応経験について質問してください。",
    },
    {
      enTitle: "Long-Term Commitment",
      jpTitle: "長期的なキャリア意識",
      enContent:
        "Understand the candidate's motivation for working in Japan and long-term career plans.",
      jpContent: "日本で働く理由や将来のキャリアプランを確認してください。",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-500">
          Recruiter Interview Guide
        </h1>

        <h2 className="text-2xl text-center mb-12 text-gray-600">
          採用担当者向け面接ガイド
        </h2>

        <div className="bg-white p-8 rounded-xl shadow mb-12 text-gray-700">
          <p className="leading-8">
            This guide helps Japanese recruiters evaluate international IT
            professionals effectively.
          </p>

          <hr className="my-4" />

          <p className="leading-8">
            本ガイドは、日本企業の採用担当者が海外IT人材を適切に評価するための参考資料です。
          </p>
        </div>

        {sections.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-500">
                  {item.enTitle}
                </h3>

                <p className="leading-8 text-gray-700 ">{item.enContent}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-500">
                  {item.jpTitle}
                </h3>

                <p className="leading-8 text-gray-700">{item.jpContent}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-indigo-50 border border-indigo-200 p-8 rounded-xl mt-12 text-gray-700">
          <h3 className="text-2xl font-bold mb-4">
            Recommended Interview Flow
          </h3>

          <ol className="space-y-4 list-decimal list-inside">
            <li>Self Introduction</li>
            <li>Project Experience Discussion</li>
            <li>Technical Assessment</li>
            <li>Japanese Communication Check</li>
            <li>Cultural Adaptability Questions</li>
            <li>Future Career Goals</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
