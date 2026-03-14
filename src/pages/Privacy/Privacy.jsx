import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#faf6f0] flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#a32638] focus:font-semibold focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <section className="max-w-3xl mx-auto px-8 py-16">
          <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-2">Legal</p>
          <h1 className="text-2xl md:text-4xl font-bold text-[#2c1a0e] mb-8">Privacy Policy</h1>
          <p className="text-xs text-[#7a6555] mb-10">Effective Date: March 14, 2026</p>

          <div className="space-y-8 text-sm text-[#2c1a0e] leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-[#2c1a0e] mb-2">1. Who We Are</h2>
              <p>
                This website is operated by the International Graduate Student Christian Fellowship (IGSCF),
                a community serving international graduate students, postdocs, and visiting scholars in Hoboken, NJ.
                This Privacy Policy explains how we collect, use, and protect your personal information when you
                visit our website or interact with our services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#2c1a0e] mb-2">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-[#7a6555]">
                <li>
                  <span className="font-semibold text-[#2c1a0e]">Contact form submissions:</span> When you fill out a contact or signup form on our site,
                  we collect the information you provide, such as your name, email address, and any message content.
                </li>
                <li>
                  <span className="font-semibold text-[#2c1a0e]">Server logs:</span> Our hosting provider may automatically
                  collect basic technical data such as your IP address, browser type, and access timestamps.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#2c1a0e] mb-2">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-[#7a6555]">
                <li>To respond to your inquiries and messages</li>
                <li>To connect you with our community programs and events</li>
                <li>To improve and maintain our website</li>
              </ul>
              <p className="mt-3">We do <span className="font-semibold">not</span> sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#2c1a0e] mb-2">4. Data Storage &amp; Access</h2>
              <p>
                Information submitted through our contact or signup forms is stored securely and is only
                accessible to authorized IGSCF team members who need it to respond to your inquiry or
                manage community activities. We retain your data only for as long as necessary to fulfill
                the purpose for which it was collected.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#2c1a0e] mb-2">5. Cookies</h2>
              <p>
                This website does not use cookies for tracking or advertising. If this changes in the future,
                we will update this policy and notify users accordingly.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#2c1a0e] mb-2">6. Third-Party Links</h2>
              <p>
                Our website contains links to external platforms including Instagram, WhatsApp, WeChat,
                and Facebook. These third-party services have their own privacy policies and data practices.
                We are not responsible for the content or privacy practices of these external sites.
                We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#2c1a0e] mb-2">7. External Services</h2>
              <p>
                We use Google Fonts to display typography on our website. Google may collect your IP address
                and browser information when fonts are loaded. You can review{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a32638] underline hover:text-[#8a1e2f]"
                >
                  Google's Privacy Policy
                </a>{' '}
                for more details.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#2c1a0e] mb-2">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2 text-[#7a6555]">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction or deletion of your personal data</li>
                <li>Withdraw consent for us to use your information at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the information below.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#2c1a0e] mb-2">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page
                with an updated effective date. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#2c1a0e] mb-2">10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or how your data is handled,
                please reach out to us:
              </p>
              <div className="mt-3 bg-white border border-[#e8ddd4] rounded-xl p-5">
                <p className="font-semibold text-[#2c1a0e]">International Graduate Student Christian Fellowship</p>
                <p className="text-[#7a6555] mt-1">Hoboken, NJ</p>
                <p className="text-[#7a6555] mt-1">
                  Email:{' '}
                  <a href="mailto:igscf@example.com" className="text-[#a32638] underline hover:text-[#8a1e2f]">
                    igscf@example.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
