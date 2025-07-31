import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Shield, AlertCircle, Mail, Phone } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gray-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white">Terms and Conditions</h1>
          <p className="text-xl text-gray-400">
            Please read these terms and conditions carefully before using our services
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-400">
            <span>Last updated: January 15, 2025</span>
            <span>•</span>
            <span>Effective date: February 18, 2025</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <Card className="mb-8 bg-white/5 backdrop-blur-md border border-white/10 text-white">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              Quick Navigation
            </CardTitle>
            <CardDescription>Jump to specific sections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#acceptance" className="text-gray-400 hover:underline text-sm">
                1. Acceptance of Terms
              </a>
              <a href="#services" className="text-gray-400 hover:underline text-sm">
                2. Description of Services
              </a>
              <a href="#user-accounts" className="text-gray-400 hover:underline text-sm">
                3. User Accounts
              </a>
              <a href="#payment" className="text-gray-400 hover:underline text-sm">
                4. Payment Terms
              </a>
              <a href="#intellectual-property" className="text-gray-400 hover:underline text-sm">
                5. Intellectual Property
              </a>
              <a href="#prohibited-uses" className="text-gray-400 hover:underline text-sm">
                6. Prohibited Uses
              </a>
              <a href="#termination" className="text-gray-400 hover:underline text-sm">
                7. Termination
              </a>
              <a href="#disclaimers" className="text-gray-400 hover:underline text-sm">
                8. Disclaimers
              </a>
              <a href="#limitation" className="text-gray-400 hover:underline text-sm">
                9. Limitation of Liability
              </a>
              <a href="#governing-law" className="text-gray-400 hover:underline text-sm">
                10. Governing Law
              </a>
              <a href="#changes" className="text-gray-400 hover:underline text-sm">
                11. Changes to Terms
              </a>
              <a href="#contact" className="text-gray-400 hover:underline text-sm">
                12. Contact Information
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section id="acceptance">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>
                  By accessing and using InfiniMorph Consulting&apos; website and services, you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                  this service.
                </p>
                <p>
                  These Terms and Conditions (&quot;Terms&quot;) govern your use of our website located at InfiniMorph Consulting.com (the
                  &quot;Service&quot;) operated by InfiniMorph Consulting (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
                </p>
                <p>
                  Your access to and use of the Service is conditioned on your acceptance of and compliance with these
                  Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 2 */}
          <section id="services">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>2. Description of Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>InfiniMorph Consulting provides the following services:</p>
                <ul>
                  <li>Web Design and Development</li>
                  <li>Mobile Application Development</li>
                  <li>UI/UX Design Services</li>
                  <li>Graphic Design Services</li>
                  <li>Digital Marketing Services</li>
                  <li>Branding and Trademark Services</li>
                  <li>Video Editing Services</li>
                  <li>3D Modeling Services</li>
                  <li>Accounting Consultation</li>
                  <li>Custom Software Development</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without
                  prior notice. We also reserve the right to impose limits on certain features or restrict access to
                  parts or all of our services without notice or liability.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 3 */}
          <section id="user-accounts">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>3. User Accounts</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>
                  When you create an account with us, you must provide information that is accurate, complete, and
                  current at all times. You are responsible for safeguarding the password and for all activities that
                  occur under your account.
                </p>
                <p>
                  You agree not to disclose your password to any third party. You must notify us immediately upon
                  becoming aware of any breach of security or unauthorized use of your account.
                </p>
                <p>
                  We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 4 */}
          <section id="payment">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>4. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <h4>4.1 Payment Methods</h4>
                <p>
                  We accept various payment methods including credit cards, bank transfers, and digital payment
                  platforms. All payments must be made in the currency specified in your service agreement.
                </p>
                <h4>4.2 Payment Schedule</h4>
                <p>Unless otherwise agreed upon in writing, our standard payment terms are:</p>
                <ul>
                  <li>50% deposit required before project commencement</li>
                  <li>Remaining 50% due upon project completion</li>
                  <li>For ongoing services, monthly payments are due within 30 days of invoice date</li>
                </ul>
                <h4>4.3 Late Payments</h4>
                <p>
                  Late payments may result in suspension of services and may incur additional fees. We reserve the right
                  to charge interest on overdue amounts at a rate of 1.5% per month.
                </p>
                <h4>4.4 Refunds</h4>
                <p>
                  Refunds are handled on a case-by-case basis. Generally, deposits are non-refundable once work has
                  commenced. Please refer to your specific service agreement for detailed refund policies.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 5 */}
          <section id="intellectual-property">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>5. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <h4>5.1 Client-Owned Content</h4>
                <p>
                  You retain ownership of all content, materials, and intellectual property that you provide to us for
                  use in your project. By providing such materials, you grant us a non-exclusive license to use them for
                  the purpose of completing your project.
                </p>
                <h4>5.2 Work Product</h4>
                <p>
                  Upon full payment, you will own the final deliverables created specifically for your project. However,
                  we retain the right to use general methodologies, know-how, and techniques developed during the
                  project for other clients.
                </p>
                <h4>5.3 Third-Party Materials</h4>
                <p>
                  Any third-party materials (stock photos, fonts, plugins, etc.) used in your project remain the
                  property of their respective owners. You are responsible for obtaining proper licenses for continued
                  use of such materials.
                </p>
                <h4>5.4 Portfolio Rights</h4>
                <p>
                  We reserve the right to display completed work in our portfolio and marketing materials unless
                  otherwise agreed upon in writing.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 6 */}
          <section id="prohibited-uses">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>6. Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>You may not use our services:</p>
                <ul>
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>
                    To violate any international, federal, provincial, or state regulations, rules, laws, or local
                    ordinances
                  </li>
                  <li>
                    To infringe upon or violate our intellectual property rights or the intellectual property rights of
                    others
                  </li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To collect or track the personal information of others</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  <li>For any obscene or immoral purpose</li>
                  <li>To interfere with or circumvent the security features of our services</li>
                </ul>
                <p>
                  We reserve the right to terminate your use of the service for violating any of the prohibited uses.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 7 */}
          <section id="termination">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>7. Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>
                  We may terminate or suspend your account and bar access to the service immediately, without prior
                  notice or liability, under our sole discretion, for any reason whatsoever, including but not limited
                  to a breach of the Terms.
                </p>
                <p>
                  If you wish to terminate your account, you may simply discontinue using the service and provide
                  written notice of termination.
                </p>
                <p>
                  Upon termination, your right to use the service will cease immediately. If you paid for a service and
                  your account is terminated for breach of these terms, no refund will be provided.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 8 */}
          <section id="disclaimers">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>8. Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>
                  The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by
                  law, this Company:
                </p>
                <ul>
                  <li>
                    Excludes all representations and warranties relating to this website and its contents, including
                    liability for damages arising from the use of this website
                  </li>
                  <li>
                    Excludes all liability for damages arising out of or in connection with your use of this website
                  </li>
                </ul>
                <p>
                  We do not warrant that the service will be uninterrupted, timely, secure, or error-free. We do not
                  warrant that the results that may be obtained from the use of the service will be accurate or
                  reliable.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 9 */}
          <section id="limitation">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>
                  In no event shall InfiniMorph Consulting, nor its directors, employees, partners, agents, suppliers, or
                  affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                  resulting from your use of the service.
                </p>
                <p>
                  Our total liability to you for all claims arising out of or relating to these terms or your use of the
                  service shall not exceed the amount you paid us for the service in the twelve (12) months preceding
                  the claim.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 10 */}
          <section id="governing-law">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>10. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>
                  These Terms shall be interpreted and governed by the laws of the State of [Your State/Country],
                  without regard to its conflict of law provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                  rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the
                  remaining provisions of these Terms will remain in effect.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 11 */}
          <section id="changes">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>11. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p>
                  What constitutes a material change will be determined at our sole discretion. By continuing to access
                  or use our service after any revisions become effective, you agree to be bound by the revised terms.
                </p>
                <p>
                  It is your responsibility to review these Terms periodically for changes. Your continued use of the
                  service following the posting of any changes constitutes acceptance of those changes.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 12 */}
          <section id="contact">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>12. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                <div className="not-prose">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-400">info@InfiniMorph Consulting.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-gray-400">(+91) 92115-79757</p>
                        <p className="text-gray-400">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/privacy">
              <Button className="bg-purple-700 text-white">
                <Shield className="w-4 h-4 mr-2" />
                Privacy Policy
              </Button>
            </Link>
            <Link href="/contact">
              <Button>
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            By using our services, you acknowledge that you have read and understood these terms and conditions.
          </p>
        </div>
      </div>
    </div>
  )
}
