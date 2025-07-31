import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Eye, Lock, Database, Cookie, Mail, Phone, AlertTriangle } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-xl text-gray-400">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-400">
            <span>Last updated: January 15, 2025</span>
            <span>•</span>
            <span>Effective date: February 18, 2025</span>
          </div>
        </div>
    
        {/* Privacy Summary */}
        <Card className="mb-8 bg-white/5 backdrop-blur-md border border-white/10 text-white">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Eye className="w-5 h-5 mr-2" />
              Privacy at a Glance
            </CardTitle>
            <CardDescription>Key points about how we handle your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Lock className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p className="font-semibold text-white">Data Security</p>
                  <p className="text-sm text-gray-400">
                    We use industry-standard encryption and security measures
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Database className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-semibold text-white">Data Minimization</p>
                  <p className="text-sm text-gray-400">We only collect data necessary for our services</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Eye className="w-5 h-5 text-purple-500 mt-1" />
                <div>
                  <p className="font-semibold text-white">Transparency</p>
                  <p className="text-sm text-gray-400">Clear information about data collection and use</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-white">Your Rights</p>
                  <p className="text-sm text-gray-400">Access, modify, or delete your personal data anytime</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Navigation */}
        <Card className="mb-8 bg-white/5 backdrop-blur-md border border-white/10 text-white">
          <CardHeader>
            <CardTitle>Quick Navigation</CardTitle>
            <CardDescription>Jump to specific sections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#information-collection" className="text-gray-400 hover:underline text-sm">
                1. Information We Collect
              </a>
              <a href="#how-we-use" className="text-gray-400 hover:underline text-sm">
                2. How We Use Information
              </a>
              <a href="#information-sharing" className="text-gray-400 hover:underline text-sm">
                3. Information Sharing
              </a>
              <a href="#data-security" className="text-gray-400 hover:underline text-sm">
                4. Data Security
              </a>
              <a href="#cookies" className="text-gray-400 hover:underline text-sm">
                5. Cookies & Tracking
              </a>
              <a href="#your-rights" className="text-gray-400 hover:underline text-sm">
                6. Your Rights
              </a>
              <a href="#data-retention" className="text-gray-400 hover:underline text-sm">
                7. Data Retention
              </a>
              <a href="#international-transfers" className="text-gray-400 hover:underline text-sm">
                8. International Transfers
              </a>
              <a href="#children-privacy" className="text-gray-400 hover:underline text-sm">
                9. Children&apos;s Privacy
              </a>
              <a href="#changes" className="text-gray-400 hover:underline text-sm">
                10. Policy Changes
              </a>
              <a href="#contact" className="text-gray-400 hover:underline text-sm">
                11. Contact Us
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section id="information-collection">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <h4>1.1 Personal Information</h4>
                <p>We collect personal information that you voluntarily provide to us when you:</p>
                <ul>
                  <li>Register for an account</li>
                  <li>Request our services</li>
                  <li>Contact us for support</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p>This information may include:</p>
                <ul>
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Company information</li>
                  <li>Payment information (processed securely by third-party providers)</li>
                  <li>Project requirements and preferences</li>
                  <li>Communication history with our team</li>
                </ul>

                <h4>1.2 Automatically Collected Information</h4>
                <p>When you visit our website, we automatically collect certain information:</p>
                <ul>
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral sources</li>
                  <li>Usage patterns and preferences</li>
                </ul>

                <h4>1.3 Third-Party Information</h4>
                <p>
                  We may receive information about you from third-party services such as social media platforms,
                  analytics providers, and marketing partners, in accordance with their privacy policies.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 2 */}
          <section id="how-we-use">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>We use the collected information for the following purposes:</p>

                <h4>2.1 Service Provision</h4>
                <ul>
                  <li>Deliver and manage our services</li>
                  <li>Process payments and transactions</li>
                  <li>Provide customer support</li>
                  <li>Communicate about your projects</li>
                  <li>Send service-related notifications</li>
                </ul>

                <h4>2.2 Business Operations</h4>
                <ul>
                  <li>Improve our services and website</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Conduct research and development</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h4>2.3 Marketing and Communications</h4>
                <ul>
                  <li>Send newsletters and promotional materials (with your consent)</li>
                  <li>Personalize your experience</li>
                  <li>Conduct surveys and gather feedback</li>
                  <li>Display relevant advertisements</li>
                </ul>

                <p>
                  We will only use your personal information for the purposes for which we collected it, unless we
                  reasonably consider that we need to use it for another reason compatible with the original purpose.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 3 */}
          <section id="information-sharing">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information in the following circumstances:
                </p>

                <h4>3.1 Service Providers</h4>
                <p>We may share information with trusted third-party service providers who assist us in:</p>
                <ul>
                  <li>Payment processing</li>
                  <li>Email delivery and marketing</li>
                  <li>Analytics and website optimization</li>
                  <li>Customer support tools</li>
                  <li>Cloud hosting and data storage</li>
                </ul>

                <h4>3.2 Legal Requirements</h4>
                <p>We may disclose your information if required by law or in response to:</p>
                <ul>
                  <li>Court orders or legal processes</li>
                  <li>Government investigations</li>
                  <li>Requests from law enforcement</li>
                  <li>Protection of our rights and property</li>
                  <li>Prevention of fraud or illegal activities</li>
                </ul>

                <h4>3.3 Business Transfers</h4>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the
                  new entity, subject to the same privacy protections.
                </p>

                <h4>3.4 Consent</h4>
                <p>
                  We may share your information with your explicit consent for specific purposes not covered in this
                  policy.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 4 */}
          <section id="data-security">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>We implement comprehensive security measures to protect your personal information:</p>

                <h4>4.1 Technical Safeguards</h4>
                <ul>
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Encrypted data storage</li>
                  <li>Regular security audits and updates</li>
                  <li>Secure server infrastructure</li>
                  <li>Multi-factor authentication</li>
                </ul>

                <h4>4.2 Administrative Safeguards</h4>
                <ul>
                  <li>Limited access to personal information</li>
                  <li>Employee training on data protection</li>
                  <li>Regular security policy reviews</li>
                  <li>Incident response procedures</li>
                  <li>Background checks for personnel</li>
                </ul>

                <h4>4.3 Physical Safeguards</h4>
                <ul>
                  <li>Secure data centers</li>
                  <li>Access controls and monitoring</li>
                  <li>Environmental protections</li>
                  <li>Equipment disposal procedures</li>
                </ul>

                <p>
                  While we strive to protect your personal information, no method of transmission over the internet or
                  electronic storage is 100% secure. We cannot guarantee absolute security but will notify you of any
                  data breaches as required by law.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 5 */}
          <section id="cookies">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cookie className="w-5 h-5 mr-2" />
                  5. Cookies and Tracking Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <h4>5.1 What Are Cookies</h4>
                <p>
                  Cookies are small text files stored on your device when you visit our website. They help us provide a
                  better user experience and analyze website usage.
                </p>

                <h4>5.2 Types of Cookies We Use</h4>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> Required for website functionality
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> Help us analyze website usage
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Remember your preferences
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used for targeted advertising
                  </li>
                </ul>

                <h4>5.3 Third-Party Cookies</h4>
                <p>We may use third-party services that set cookies, including:</p>
                <ul>
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing features</li>
                  <li>Advertising networks for targeted ads</li>
                  <li>Customer support tools</li>
                </ul>

                <h4>5.4 Managing Cookies</h4>
                <p>
                  You can control cookies through your browser settings. However, disabling certain cookies may affect
                  website functionality. Most browsers allow you to:
                </p>
                <ul>
                  <li>View and delete cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear all cookies when closing the browser</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Section 6 */}
          <section id="your-rights">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>6. Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>You have the following rights regarding your personal information:</p>

                <h4>6.1 Access and Portability</h4>
                <ul>
                  <li>Request a copy of your personal information</li>
                  <li>Receive your data in a portable format</li>
                  <li>Transfer your data to another service provider</li>
                </ul>

                <h4>6.2 Correction and Updates</h4>
                <ul>
                  <li>Correct inaccurate personal information</li>
                  <li>Update your contact details</li>
                  <li>Modify your communication preferences</li>
                </ul>

                <h4>6.3 Deletion</h4>
                <ul>
                  <li>Request deletion of your personal information</li>
                  <li>Close your account</li>
                  <li>Remove specific data entries</li>
                </ul>

                <h4>6.4 Restriction and Objection</h4>
                <ul>
                  <li>Restrict processing of your information</li>
                  <li>Object to marketing communications</li>
                  <li>Opt-out of data collection</li>
                </ul>

                <h4>6.5 How to Exercise Your Rights</h4>
                <p>To exercise any of these rights, please contact us at:</p>
                <ul>
                  <li>Email: info@infinimorphconsulting.com</li>
                  <li>Phone: (+91) 92115-79757</li>
                  <li>Customer portal: Account settings</li>
                </ul>

                <p>
                  We will respond to your request within 30 days. Some requests may require identity verification for
                  security purposes.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 7 */}
          <section id="data-retention">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>7. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>We retain your personal information for different periods depending on the purpose:</p>

                <h4>7.1 Account Information</h4>
                <ul>
                  <li>Active accounts: Retained while account is active</li>
                  <li>Inactive accounts: Deleted after 3 years of inactivity</li>
                  <li>Closed accounts: Deleted within 90 days unless legally required</li>
                </ul>

                <h4>7.2 Project Data</h4>
                <ul>
                  <li>Project files: Retained for 2 years after project completion</li>
                  <li>Communication records: Retained for 5 years</li>
                  <li>Payment records: Retained for 7 years for tax purposes</li>
                </ul>

                <h4>7.3 Marketing Data</h4>
                <ul>
                  <li>Newsletter subscriptions: Until you unsubscribe</li>
                  <li>Marketing analytics: Aggregated data retained indefinitely</li>
                  <li>Campaign data: Retained for 2 years</li>
                </ul>

                <h4>7.4 Legal Requirements</h4>
                <p>
                  Some information may be retained longer if required by law, regulation, or for legitimate business
                  purposes such as fraud prevention or legal proceedings.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 8 */}
          <section id="international-transfers">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>8. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place:
                </p>

                <h4>8.1 Adequacy Decisions</h4>
                <p>
                  We transfer data to countries with adequate data protection laws as recognized by relevant
                  authorities.
                </p>

                <h4>8.2 Standard Contractual Clauses</h4>
                <p>
                  For transfers to countries without adequacy decisions, we use standard contractual clauses approved by
                  data protection authorities.
                </p>

                <h4>8.3 Other Safeguards</h4>
                <ul>
                  <li>Binding corporate rules</li>
                  <li>Certification schemes</li>
                  <li>Codes of conduct</li>
                  <li>Explicit consent where appropriate</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Section 9 */}
          <section id="children-privacy">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>9. Children&apos;s Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13.
                </p>
                <p>
                  If we become aware that we have collected personal information from a child under 13 without parental
                  consent, we will take steps to delete that information promptly.
                </p>
                <p>
                  If you are a parent or guardian and believe your child has provided us with personal information,
                  please contact us immediately.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 10 */}
          <section id="changes">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>10. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none text-gray-400">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons.
                </p>
                <p>When we make changes, we will:</p>
                <ul>
                  <li>Update the &quot;Last updated&quot; date at the top of this policy</li>
                  <li>Notify you via email for material changes</li>
                  <li>Post a notice on our website</li>
                  <li>Provide 30 days notice for significant changes</li>
                </ul>
                <p>
                  Your continued use of our services after any changes indicates your acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 11 */}
          <section id="contact">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle>11. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="not-prose">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-white mt-1" />
                      <div>
                        <p className="font-semibold">Privacy Officer</p>
                        <p className="text-gray-400">info@infinimorphconsulting.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-white mt-1" />
                      <div>
                        <p className="font-semibold">Phone Support</p>
                        <p className="text-gray-400">(+91) 92115-79757</p>
                        <p className="text-gray-400">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-semibold">Data Protection Officer</p>
                        <p className="text-white">For EU residents: dpo@infinimorphconsulting.com</p>
                        <p className="text-white">
                          ModernServices, 123 Business Ave, Suite 100, New York, NY 10001
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/terms">
              <Button className="bg-purple-700">
                <Shield className="w-4 h-4 mr-2" />
                Terms & Conditions
              </Button>
            </Link>
            <Link href="/contact">
              <Button>
                <Mail className="w-4 h-4 mr-2" />
                Contact Privacy Team
              </Button>
            </Link>
          </div>
          <p className="text-sm text-white">
            We are committed to protecting your privacy and handling your data responsibly.
          </p>
        </div>
      </div>
    </div>
  )
}
