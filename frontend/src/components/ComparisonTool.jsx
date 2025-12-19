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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Compare Our Packages</h2>
          <p className="text-gray-600">Find the perfect fit for your partnership journey</p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-900">Features</th>
                {packages.map((pkg, index) => (
                  <th
                    key={index}
                    onMouseEnter={() => setHoveredPackage(index)}
                    onMouseLeave={() => setHoveredPackage(null)}
                    className={`p-4 transition-all duration-300 ${
                      hoveredPackage === index ? 'bg-amber-50' : ''
                    } ${pkg.popular ? 'bg-amber-50' : ''}`}
                  >
                    <div className="text-center">
                      {pkg.popular && (
                        <span className="inline-block px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full mb-2">
                          Popular
                        </span>
                      )}
                      <div className="text-lg font-bold text-gray-900 mb-1">{pkg.name}</div>
                      <div className="text-xs text-amber-600 mb-1">{pkg.subtitle}</div>
                      <div className="text-sm text-gray-600">{pkg.sessions} Sessions</div>
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