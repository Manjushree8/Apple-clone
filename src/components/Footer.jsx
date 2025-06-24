import React, { useState } from 'react';

const Footer = () => {
  const footerData = [
    {
      title: 'Shop and Learn',
      items: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
      subSections: [
        {
          title: 'Apple Wallet',
          items: ['Wallet'],
        },
      ],
    },
    {
      title: 'Account',
      items: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'],
      subSections: [
        {
          title: 'Entertainment',
          items: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books', 'App Store'],
        },
      ],
    },
    {
      title: 'Apple Store',
      items: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Trade In', 'Ways to Buy', 'Recycling Programme', 'Order Status', 'Shopping Help'],
    },
    {
      title: 'For Business',
      items: ['Apple and Business', 'Shop for Business'],
      subSections: [
        {
          title: 'For Education',
          items: ['Apple and Education', 'Shop for Education', 'Shop for University'],
        },
        {
          title: 'For Healthcare',
          items: ['Apple in Healthcare', 'Mac in Healthcare', 'Health on Apple Watch'],
        },
      ],
    },
    {
      title: 'Apple Values',
      items: ['Accessibility', 'Education', 'Environment', 'Privacy', 'Supply Chain Innovation'],
      subSections: [
        {
          title: 'About Apple',
          items: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-gray-100 text-xs text-gray-600">
      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 border-b border-gray-300 space-y-4 leading-relaxed">
        <p>
          ◊ No Cost EMI is available with the purchase of an <a href="#" className="text-black underline">eligible product</a> made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. <a href="#" className="text-black underline">Terms apply.</a>
        </p>
        <p><strong>Representative example:</strong><br />
          A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6614.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.
        </p>
        <p>
          ‡Instant cashback is available with the purchase of an <a href="#" className="text-black underline">eligible product</a> with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. <a href="#" className="text-black underline">Click here</a> to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without prior notice. <a href="#" className="text-black underline">Additional terms apply.</a>
        </p>
        <p>*Apple Education Pricing is available to current and newly accepted college students and their parents, as well as teachers and staff at all levels. For more information, visit <a href="#" className="text-black underline">apple.com/in-edu/store</a>.</p>
        <p>1. Qualified Purchasers can receive Promotion Savings when they purchase an eligible Mac or iPad with their choice of a Promotion Product at a Qualifying Location. Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product can be obtained per eligible Mac or iPad per Qualified Purchaser. The offer is subject to availability, while supplies last. View full terms and conditions of offer <a href="#" className="text-black underline">here</a>.</p>
        <p>2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.</p>
        <p>Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK or US), French, German, Italian, Japanese, Korean, Portuguese (Brazil) or Spanish, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.</p>
        <p>A subscription is required for Apple TV+.</p>
        <p>Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</p>
      </div>

      {/* Link Section - Desktop */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {footerData.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold text-gray-800 mb-3">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
            {section.subSections && section.subSections.map((sub, j) => (
              <div key={j} className="mt-4">
                <h5 className="font-semibold text-gray-800 mb-2">{sub.title}</h5>
                <ul className="space-y-2">
                  {sub.items.map((subItem, k) => (
                    <li key={k}><a href="#" className="hover:underline">{subItem}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Link Section - Mobile */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 divide-y divide-gray-300">
        {footerData.map((section, index) => (
          <div key={index}>
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left font-semibold text-gray-800 py-3 flex justify-between items-center"
            >
              {section.title}
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="pb-3">
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx}><a href="#" className="hover:underline">{item}</a></li>
                  ))}
                </ul>
                {section.subSections && section.subSections.map((sub, j) => (
                  <div key={j} className="mt-4">
                    <h5 className="font-semibold text-gray-800 mb-2">{sub.title}</h5>
                    <ul className="space-y-2">
                      {sub.items.map((subItem, k) => (
                        <li key={k}><a href="#" className="hover:underline">{subItem}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 border-t border-gray-300">
        <p className="mb-4">
          More ways to shop:{" "}
          <a href="#" className="text-[#0267CC] underline">Find an Apple Store</a> or{" "}
          <a href="#" className="text-[#0267CC] underline">other retailer</a> near you. Or call{" "}
          <a href="#" className="text-[#0267CC] underline">000800 040 1966</a>.
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-gray-600 gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span>Copyright © 2025 Apple Inc. All rights reserved.</span>
            <div className="flex flex-wrap mt-1 sm:mt-0">
              {["Privacy Policy", "Terms of Use", "Sales Policy", "Legal", "Site Map"].map((item, i, arr) => (
                <React.Fragment key={item}>
                  <a href="#" className="hover:underline">{item}</a>
                  {i !== arr.length - 1 && <span className="mx-2">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="mt-2 sm:mt-0">India</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
