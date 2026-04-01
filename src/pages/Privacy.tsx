export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-gray-200 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Privacy Policy — Iron & Proverbs
        </h1>

        <p className="text-gray-400 mb-6">
          Effective date: March 5, 2026
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">
          <p>
            Iron &amp; Proverbs (“the App”) is a Bible-based daily discipline
            app. Your privacy matters. This Privacy Policy explains what
            information the App collects and how it is used.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  1) Information You Provide
                </h3>
                <p>
                  The App does not require you to create an account and does not
                  ask you to submit personal information such as your name,
                  email address, or phone number.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  2) Information Stored on Your Device
                </h3>
                <p className="mb-2">
                  To provide core features, the App stores the following
                  information <strong>locally on your device</strong>:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Saved/bookmarked verses</li>
                  <li>App usage preferences (if any)</li>
                  <li>Streak and last-opened date data</li>
                </ul>
                <p className="mt-2">
                  This information is stored locally and is not transmitted to
                  us.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  3) Automatically Collected Information
                </h3>
                <p>
                  The App does <strong>not</strong> collect analytics,
                  advertising identifiers, precise location, contacts, or device
                  identifiers for tracking purposes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              How We Use Information
            </h2>
            <p className="mb-2">Local on-device data is used only to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Show your saved verses</li>
              <li>Track streaks and progress</li>
              <li>Maintain your app preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Sharing</h2>
            <p>
              We do <strong>not</strong> sell, trade, rent, or share your
              personal information. The App does not transmit your saved verses
              or streak data to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Third-Party Services
            </h2>
            <p className="mb-2">
              The App may use standard platform services such as the Google Play
              Store to distribute the App. Those services may collect
              information as described in their own privacy policies.
            </p>
            <p>
              If the App includes optional features like sharing a verse image,
              that content is shared only when you choose to share it using your
              device’s sharing options.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
            <p>
              Because your saved verses and streak data are stored locally on
              your device, you control it. You can remove this data by clearing
              the App’s storage/data in your device settings, or by uninstalling
              the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Children’s Privacy
            </h2>
            <p>
              The App is not directed to children under 13. We do not knowingly
              collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Security</h2>
            <p>
              We take reasonable steps to minimize data collection. Because data
              is stored locally on your device, protecting your device helps
              protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:
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