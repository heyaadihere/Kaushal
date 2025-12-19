import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTool = () => {
  const [hoveredPackage, setHoveredPackage] = useState(null);

  const packages = [
    {
      name: "Saamanjasya",
      subtitle: "Foundational",
      sessions: 3,
      features: [
        { name: "Guided Sessions", included: true },
        { name: "Financial Planning", included: true },
        { name: "Communication Basics", included: true },
        { name: "Conflict Resolution", included: true },
        { name: "Digital Workbook", included: true },
        { name: "Partnership Accord", included: false },
        { name: "Intimacy Module", included: false },
        { name: "Career Alignment", included: false },
        { name: "Follow-up Sessions", included: false }
      ]
    },
    {
      name: "Sammati",
      subtitle: "Consent & Clarity",
      sessions: 5,
      popular: true,
      features: [
        { name: "Guided Sessions", included: true },
        { name: "Financial Planning", included: true },
        { name: "Communication Basics", included: true },
        { name: "Conflict Resolution", included: true },
        { name: "Digital Workbook", included: true },
        { name: "Partnership Accord", included: true },
        { name: "Intimacy Module", included: true },
        { name: "Career Alignment", included: true },
        { name: "Follow-up Sessions", included: false }
      ]
    },
    {
      name: "Sankalp",
      subtitle: "Commitment & Alignment",
      sessions: 8,
      features: [
        { name: "Guided Sessions", included: true },
        { name: "Financial Planning", included: true },
        { name: "Communication Basics", included: true },
        { name: "Conflict Resolution", included: true },
        { name: "Digital Workbook", included: true },
        { name: "Partnership Accord", included: true },
        { name: "Intimacy Module", included: true },
        { name: "Career Alignment", included: true },
        { name: "Follow-up Sessions", included: true }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Compare Our Packages</h2>
          <p className="text-xl text-gray-600">Find the perfect fit for your partnership journey</p>
        </div>

        <div className="max-w-7xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-6 font-semibold text-gray-900 text-lg">Features</th>
                {packages.map((pkg, index) => (
                  <th
                    key={index}
                    onMouseEnter={() => setHoveredPackage(index)}
                    onMouseLeave={() => setHoveredPackage(null)}
                    className={`p-6 transition-all duration-300 ${
                      hoveredPackage === index ? 'bg-amber-50 scale-105' : ''
                    } ${pkg.popular ? 'bg-amber-50' : ''}`}
                  >
                    <div className="text-center">
                      {pkg.popular && (
                        <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full mb-2">
                          Most Popular
                        </span>
                      )}
                      <div className="text-2xl font-bold text-gray-900 mb-1">{pkg.name}</div>
                      <div className="text-sm text-amber-600 mb-2">{pkg.subtitle}</div>
                      <div className="text-3xl font-bold text-amber-600">{pkg.price}</div>
                      <div className="text-sm text-gray-600 mt-1">{pkg.sessions} Sessions</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {packages[0].features.map((feature, featureIndex) => (
                <tr
                  key={featureIndex}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-6 font-medium text-gray-700">{feature.name}</td>
                  {packages.map((pkg, pkgIndex) => (
                    <td
                      key={pkgIndex}
                      className={`p-6 text-center transition-all duration-300 ${
                        hoveredPackage === pkgIndex ? 'bg-amber-50' : ''
                      } ${pkg.popular ? 'bg-amber-50/50' : ''}`}
                    >
                      {pkg.features[featureIndex].included ? (
                        <Check className="w-6 h-6 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-6"></td>
                {packages.map((pkg, index) => (
                  <td key={index} className="p-6 text-center">
                    <button
                      onClick={() => window.location.href = `/packages/${index + 1}`}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                        pkg.popular
                          ? 'bg-amber-600 hover:bg-amber-700 text-white'
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                    >
                      Choose {pkg.name}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTool;