import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with a service like Formspree or EmailJS
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'belaatiknizar@gmail.com',
      href: 'mailto:belaatiknizar@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+212 650341124',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Casablanca, Morocco',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/NizarBelaatik',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/nizar-belaatik',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/NBelaatik',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:belaatiknizar@gmail.com',
      color: 'hover:text-red-400'
    }
  ]

  return (
  <section id="contact" className="py-20 bg-gradient-to-b from-primary-dark to-primary-dark/80">
    <div className="container mx-auto px-6">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="section-title text-gradient">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
      </div>

      {/* One Column Layout */}
      <div className="max-w-5xl mx-auto space-y-12 mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
          <p className="text-gray-400 mb-8">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and data science.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent-blue/20 rounded-lg mr-4 group-hover:bg-accent-blue/30 transition-colors">
                    <Icon size={20} className="text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{label}</div>
                    <div className="text-gray-400">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Card */}
            <div className="card flex flex-col justify-center space-y-4 mb-8 p-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Let’s Work Together</h3>

              <p className="text-gray-400 mb-8">
                Reach out anytime — I’ll get back to you as soon as possible.
              </p>

              <a
                href="mailto:belaatiknizar@gmail.com"
                className="btn-primary w-full inline-flex items-center justify-center"
              >
                Email Me
                <Mail size={18} className="ml-2" />
              </a>
            </div>
        </div>
        {/* Social Links */}
        <div className="text-center">
          <h4 className="text-white font-semibold mb-4">Follow Me</h4>
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, color, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 ${color}`}
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
)

}

export default Contact