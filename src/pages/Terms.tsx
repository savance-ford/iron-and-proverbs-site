/**
 * Terms of Service Page
 * Route: /terms
 * SEO: Add metadata later if needed
 */


export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-gray-200 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Terms of Service — Iron & Proverbs
        </h1>

        <p className="text-gray-400 mb-6">
          Effective date: March 5, 2026
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">
          <p>
            By downloading or using Iron & Proverbs (“the App”), you agree to
            these Terms of Service.
          </p>

          <section>
            <h3 className="font-semibold text-lg mb-2">1) Use of the App</h3>
            <p>
              The App provides Bible verses, devotional-style content, and
              encouragement for personal use. You agree to use the App lawfully
              and not to misuse or interfere with the App.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">
              2) No Professional Advice
            </h3>
            <p>
              Content in the App is provided for inspirational and informational
              purposes only and is not a substitute for pastoral counseling,
              medical, mental health, legal, or professional advice.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">
              3) User Content & Sharing
            </h3>
            <p>
              If you share verse cards or text from the App, you are responsible
              for what you share and where you share it.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">
              4) Intellectual Property
            </h3>
            <p>
              The App’s design, layout, and original content (such as category
              organization and application text) are owned by the developer.
              Bible verse text may be subject to the terms of the applicable
              translation.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">
              5) Availability and Changes
            </h3>
            <p>
              We may update or change the App over time, including adding,
              removing, or modifying features.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">
              6) Disclaimer of Warranties
            </h3>
            <p>
              The App is provided “as is” without warranties of any kind. We do
              not guarantee that the App will always be available or error-free.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">
              7) Limitation of Liability
            </h3>
            <p>
              To the maximum extent permitted by law, we are not liable for any
              indirect, incidental, or consequential damages arising from your
              use of the App.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">8) Termination</h3>
            <p>
              We may suspend or terminate access to the App if required for legal
              or safety reasons.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">9) Contact</h3>
            <p>
              If you have questions about these Terms, contact:
              <br />
              <a
                href="mailto:quoteverseapps@gmail.com"
                className="text-blue-400 underline"
              >
                quoteverseapps@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}