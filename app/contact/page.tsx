"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for reaching out! I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-background)] to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[var(--color-primary)] mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)]">
              Taking the first step toward therapy requires courage. I'm here to
              answer your questions and help you determine if we're a good fit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-6">
                Get in Touch
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Fill out the form below or call to schedule a free 15-minute
                consultation. I typically respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none"
                    placeholder="Tell me a bit about what brings you to therapy..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[var(--color-primary)] text-white text-lg font-semibold rounded hover:bg-[var(--color-primary-dark)] transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                * Required fields. Your information is kept confidential and secure.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+13105551234"
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        (310) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:maya@reynoldstherapy.com"
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        maya@reynoldstherapy.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                        Office Location
                      </h3>
                      <p className="text-[var(--color-text-secondary)]">
                        123th Street 45 W
                        <br />
                        Santa Monica, CA 90401
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                        Office Hours
                      </h3>
                      <p className="text-[var(--color-text-secondary)]">
                        Monday – Friday: 9:00am – 6:00pm
                        <br />
                        <span className="text-sm">
                          Extended hours available by appointment
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-[var(--color-primary)]/5 rounded-lg p-6">
                <h3 className="font-serif font-semibold text-[var(--color-primary)] mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Free 15-minute phone consultation available</li>
                  <li>• In-person and telehealth options throughout California</li>
                  <li>• I typically respond within 24 hours</li>
                  <li>• All inquiries are confidential</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}