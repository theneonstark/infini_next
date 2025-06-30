"use client"

export default function ServicesPage() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Create intuitive and beautiful user interfaces that provide exceptional user experiences. Our design process focuses on user research, wireframing, prototyping, and testing.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      price: "Starting at $2,500",
      icon: "🎨",
    },
    {
      title: "App Development",
      description:
        "Build powerful mobile and web applications using cutting-edge technologies. From concept to deployment, we handle the entire development lifecycle.",
      features: ["React Native", "Flutter", "Progressive Web Apps", "API Integration"],
      price: "Starting at $5,000",
      icon: "📱",
    },
    {
      title: "Branding",
      description:
        "Develop a strong brand identity that resonates with your target audience. We create comprehensive brand guidelines and visual assets.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"],
      price: "Starting at $1,500",
      icon: "🎯",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to meet your business needs. From design to development,
            we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                <button className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
            <p className="text-gray-600 mb-8">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <button className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors">
              Contact Us for Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
