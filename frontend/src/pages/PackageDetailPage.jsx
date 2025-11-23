import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Calendar, Clock, Video, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { packagesData } from '../mock';

const PackageDetailPage = () => {
  const { id } = useParams();
  const pkg = packagesData.find(p => p.id === parseInt(id));

  if (!pkg) {
    return <div className="pt-20 min-h-screen flex items-center justify-center">Package not found</div>;
  }

  const packageDetails = {
    1: {
      sessionBreakdown: [
        { session: 1, title: 'Financial Foundation', topics: ['Income & expenses', 'Debt discussion', 'Savings goals', 'Money values'] },
        { session: 2, title: 'Roles & Responsibilities', topics: ['Household tasks', 'Career priorities', 'Decision-making', 'Daily routines'] },
        { session: 3, title: 'Communication & Conflict', topics: ['Communication styles', 'Conflict triggers', 'Resolution strategies', 'Summary & takeaways'] }
      ],
      outcomes: [
        'Clear understanding of each other\'s financial values and habits',
        'Agreed-upon budget and financial management system',
        'Defined roles and responsibilities for household management',
        'Basic conflict resolution toolkit',
        'Written summary of all agreements'
      ]
    },
    2: {
      sessionBreakdown: [
        { session: 1, title: 'Deep Financial Alignment', topics: ['Long-term financial goals', 'Investment philosophy', 'Risk tolerance', 'Retirement planning'] },
        { session: 2, title: 'Career & Life Goals', topics: ['Career ambitions', 'Work-life balance', 'Relocation possibilities', 'Life timeline'] },
        { session: 3, title: 'Family Dynamics', topics: ['Parenting philosophy', 'Family planning', 'Extended family boundaries', 'Holiday traditions'] },
        { session: 4, title: 'Intimacy & Boundaries', topics: ['Emotional needs', 'Physical intimacy', 'Personal space', 'Privacy expectations'] },
        { session: 5, title: 'Partnership Accord', topics: ['Draft review', 'Final agreements', 'Implementation plan', 'Future check-ins'] }
      ],
      outcomes: [
        'Comprehensive Partnership Accord document',
        'Deep alignment on life goals and values',
        'Clear expectations for intimacy and boundaries',
        'Parenting philosophy framework',
        'Career and family balance strategy'
      ]
    },
    3: {
      sessionBreakdown: [
        { session: 1, title: 'Comprehensive Assessment', topics: ['Relationship history', 'Individual values', 'Family backgrounds', 'Future vision'] },
        { session: 2, title: 'Financial Mastery', topics: ['Complete financial picture', 'Investment strategy', 'Estate planning', 'Wealth building'] },
        { session: 3, title: 'Emotional Intelligence', topics: ['Attachment styles', 'Emotional triggers', 'Empathy training', 'Vulnerability practice'] },
        { session: 4, title: 'Conflict Transformation', topics: ['Advanced resolution', 'Repair strategies', 'Forgiveness framework', 'Prevention systems'] },
        { session: 5, title: 'Life Planning', topics: ['5-year roadmap', '10-year vision', 'Legacy planning', 'Purpose alignment'] },
        { session: 6, title: 'Family Integration', topics: ['Extended family', 'Cultural blending', 'Boundary setting', 'Tradition creation'] },
        { session: 7, title: 'Partnership Accord Finalization', topics: ['Complete review', 'Legal considerations', 'Implementation timeline', 'Success metrics'] },
        { session: 8, title: 'Launch & Follow-up', topics: ['Final Q&A', 'Resource handoff', '3-month check-in', 'Ongoing support'] }
      ],
      outcomes: [
        'Signed, comprehensive Partnership Accord',
        'Complete financial strategy and roadmap',
        'Advanced emotional intelligence skills',
        'Lifelong conflict resolution mastery',
        '5 and 10-year partnership roadmap',
        'Ongoing support and resources'
      ]
    }
  };

  const details = packageDetails[pkg.id];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <Link to="/packages" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Packages
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{pkg.name}</h1>
            <p className="text-2xl text-amber-600 font-semibold mb-6">{pkg.subtitle}</p>
            <div className="flex items-center gap-8 mb-6">
              <div>
                <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
              </div>
              <div className="text-gray-600">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-5 h-5" />
                  <span>{pkg.sessions} Guided Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>90 minutes each</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{pkg.description}</p>
          </div>
        </div>
      </section>

      {/* Session Breakdown */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Session Breakdown</h2>
            <div className="space-y-6">
              {details.sessionBreakdown.map((session, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-lg">
                        {session.session}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{session.title}</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {session.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pkg.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                  <Check className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Expected Outcomes</h2>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-2xl border border-amber-200">
              <ul className="space-y-4">
                {details.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-lg pt-1">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-white/90 mb-8">Book a free consultation to get started with {pkg.name}</p>
            <Link to="/contact">
              <Button className="bg-white hover:bg-gray-100 text-amber-700 px-10 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetailPage;