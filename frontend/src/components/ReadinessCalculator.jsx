import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { CheckCircle, XCircle, AlertCircle, Calculator, X } from 'lucide-react';

const ReadinessCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Have you discussed your long-term financial goals together?",
      category: "financial"
    },
    {
      id: 2,
      question: "Do you know each other's debt situation and credit scores?",
      category: "financial"
    },
    {
      id: 3,
      question: "Have you talked about whether or when to have children?",
      category: "family"
    },
    {
      id: 4,
      question: "Do you have a clear understanding of each other's career ambitions?",
      category: "career"
    },
    {
      id: 5,
      question: "Have you discussed how to handle conflicts and disagreements?",
      category: "communication"
    },
    {
      id: 6,
      question: "Do you agree on roles and responsibilities in the household?",
      category: "lifestyle"
    },
    {
      id: 7,
      question: "Have you talked about boundaries with extended family?",
      category: "family"
    },
    {
      id: 8,
      question: "Do you have similar values regarding saving and spending?",
      category: "financial"
    },
    {
      id: 9,
      question: "Have you discussed your intimacy expectations and boundaries?",
      category: "intimacy"
    },
    {
      id: 10,
      question: "Do you know how each other handles stress and emotions?",
      category: "communication"
    },
    {
      id: 11,
      question: "Have you talked about religious or spiritual beliefs?",
      category: "values"
    },
    {
      id: 12,
      question: "Do you have a plan for where you'll live and potential relocations?",
      category: "lifestyle"
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    setResult(null);
  };

  const calculateReadiness = () => {
    const totalQuestions = questions.length;
    const answeredYes = Object.values(answers).filter(a => a === 'yes').length;
    const percentage = (answeredYes / totalQuestions) * 100;

    let recommendation = '';
    let packageSuggestion = '';
    let color = '';
    let icon = null;

    if (percentage >= 80) {
      recommendation = "Excellent! You've covered most essential topics. You're well-prepared for marriage.";
      packageSuggestion = "Consider our Saamanjasya (Foundational) package to formalize your agreements.";
      color = 'text-green-600';
      icon = CheckCircle;
    } else if (percentage >= 50) {
      recommendation = "Good progress! You've discussed many important topics, but there's room for deeper alignment.";
      packageSuggestion = "We recommend our Sammati (Consent & Clarity) package for comprehensive exploration.";
      color = 'text-amber-600';
      icon = AlertCircle;
    } else {
      recommendation = "You have significant gaps in pre-marital discussions. Don't worry - that's why we're here!";
      packageSuggestion = "Our Sankalp (Commitment & Alignment) package will guide you through all essential conversations.";
      color = 'text-orange-600';
      icon = AlertCircle;
    }

    setResult({
      percentage,
      recommendation,
      packageSuggestion,
      color,
      icon
    });
    setShowResult(true);
  };

  const isComplete = Object.keys(answers).length === questions.length;

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Readiness Calculator</h2>
          <p className="text-xl text-gray-600 mb-8">Assess your pre-marital preparation in just 2 minutes</p>
          
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-10 shadow-xl border-2 border-amber-200">
            <Calculator className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How Ready Are You for Marriage?</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Take our quick 12-question assessment to understand your partnership readiness and get personalized package recommendations.
            </p>
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Start Assessment
            </Button>
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-4xl w-full my-8 relative max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
                <h3 className="text-2xl font-bold text-gray-900">Partnership Readiness Assessment</h3>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowResult(false);
                  }}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {!showResult ? (
                  <div className="max-w-3xl mx-auto">
                    <div className="space-y-4 mb-8">
                      {questions.map((q, index) => (
                        <Card key={q.id} className="p-4 border-2 border-gray-200 hover:border-amber-300 transition-colors">
                          <div className="mb-3">
                            <span className="inline-block w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center mr-2 float-left">
                              {index + 1}
                            </span>
                            <p className="text-gray-900 font-medium">{q.question}</p>
                          </div>
                          <div className="flex gap-3 ml-9">
                            <Button
                              onClick={() => handleAnswer(q.id, 'yes')}
                              variant={answers[q.id] === 'yes' ? 'default' : 'outline'}
                              className={`flex-1 ${answers[q.id] === 'yes' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                              size="sm"
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Yes
                            </Button>
                            <Button
                              onClick={() => handleAnswer(q.id, 'no')}
                              variant={answers[q.id] === 'no' ? 'default' : 'outline'}
                              className={`flex-1 ${answers[q.id] === 'no' ? 'bg-gray-600 hover:bg-gray-700' : ''}`}
                              size="sm"
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              No
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={calculateReadiness}
                        disabled={!isComplete}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 text-lg rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Calculate My Readiness Score
                      </Button>
                      {!isComplete && (
                        <p className="text-gray-500 mt-4 text-sm">Please answer all questions to see your results</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="max-w-2xl mx-auto">
                    {result && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-10 border-2 border-amber-200 animate-slide-up">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg mb-6">
                  {React.createElement(result.icon, { className: `w-12 h-12 ${result.color}` })}
                </div>
                <div className={`text-6xl font-bold ${result.color} mb-4`}>
                  {Math.round(result.percentage)}%
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Readiness Score</h3>
                <p className="text-xl text-gray-700 mb-6">{result.recommendation}</p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-amber-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Recommendation:</h4>
                <p className="text-lg text-gray-700 mb-6">{result.packageSuggestion}</p>
                <Button
                  onClick={() => window.location.href = '/packages'}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-full font-semibold"
                >
                  View Our Packages
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReadinessCalculator;