import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4 text-gray-700">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mb-4 text-gray-700">
        We value your privacy and are committed to protecting your personal
        information. This Privacy Policy outlines how we collect, use, and
        safeguard your data when you use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Name and email address when you register</li>
        <li>Password (stored securely)</li>
        <li>Profile data (such as profile picture)</li>
        <li>Cookies and usage data</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>To create and manage your account</li>
        <li>To improve our services and user experience</li>
        <li>To send notifications or important updates</li>
        <li>To ensure security and prevent fraud</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
      <p className="text-gray-700">
        We do not sell or share your personal data with third parties, except
        when required by law or to protect our rights.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="text-gray-700">
        We use cookies to enhance your experience. You can disable cookies in
        your browser settings, but some features may not work properly.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="text-gray-700">
        We take all reasonable measures to protect your data. However, no
        method of transmission over the internet is completely secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>You can request to update or delete your data</li>
        <li>You can delete your account at any time</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
      <p className="text-gray-700">
        We may update this Privacy Policy from time to time. Any changes will be
        posted here with an updated date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about this Privacy Policy, please contact us
        at: <span className="font-semibold">support@example.com</span>
      </p>
    </div>
  );
}
