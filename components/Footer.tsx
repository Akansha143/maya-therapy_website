import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[var(--color-primary)]">
              Dr. Maya Reynolds
            </h3>
            <div className="space-y-2 text-[var(--color-text-secondary)]">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="mt-4">
                <a
                  href="mailto:maya@reynoldstherapy.com"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  maya@reynoldstherapy.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+13105551234"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  (310) 555-1234
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[var(--color-primary)]">
              Hours
            </h3>
            <div className="space-y-2 text-[var(--color-text-secondary)]">
              <p>Monday – Friday</p>
              <p>9:00am – 6:00pm</p>
              <p className="mt-4 text-sm">
                Evening and weekend appointments available upon request
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[var(--color-primary)]">
              Navigate
            </h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="block text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="block text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-secondary)]">
          <p>© 2026 Dr. Maya Reynolds, PsyD. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}