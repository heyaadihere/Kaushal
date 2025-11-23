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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Readiness Calculator</h2>
          <p className="text-xl text-gray-600">Answer these questions to assess your pre-marital preparation</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-8">
            {questions.map((q, index) => (
              <Card key={q.id} className="p-6 border-2 border-gray-200 hover:border-amber-300 transition-colors">
                <div className="mb-4">
                  <span className="inline-block w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center mr-3 float-left">
                    {index + 1}
                  </span>
                  <p className="text-lg text-gray-900 font-medium pt-1">{q.question}</p>
                </div>
                <div className="flex gap-4 ml-11">
                  <Button
                    onClick={() => handleAnswer(q.id, 'yes')}
                    variant={answers[q.id] === 'yes' ? 'default' : 'outline'}
                    className={`flex-1 ${answers[q.id] === 'yes' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Yes
                  </Button>
                  <Button
                    onClick={() => handleAnswer(q.id, 'no')}
                    variant={answers[q.id] === 'no' ? 'default' : 'outline'}
                    className={`flex-1 ${answers[q.id] === 'no' ? 'bg-gray-600 hover:bg-gray-700' : ''}`}
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    No
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mb-8">
            <Button
              onClick={calculateReadiness}
              disabled={!isComplete}
              className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-6 text-lg rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Calculate My Readiness Score
            </Button>
            {!isComplete && (
              <p className="text-gray-500 mt-4">Please answer all questions to see your results</p>
            )}
          </div>

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