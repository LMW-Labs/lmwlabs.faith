import React, { useState } from 'react';
import { Star, Send, ThumbsUp, MessageSquare, Users, Award } from 'lucide-react';

const ReviewsPage = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    project: '',
    rating: 0,
    review: '',
    role: '',
    company: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Mock existing reviews (you can replace with real data)
  const existingReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Inc.',
      project: 'THREADRIPPER',
      rating: 5,
      review: 'Absolutely incredible work! The AI analysis capabilities exceeded our expectations. The real-time viral thread detection has transformed how we monitor social media trends.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Real Estate Agent',
      company: 'Premier Properties',
      project: 'PropListAI',
      rating: 5,
      review: 'PropListAI has saved me hours of work every week. The AI-generated listings are professional and engaging. My clients love the quality of the descriptions!',
      date: '2024-01-10',
      verified: true
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Data Analyst',
      company: 'Analytics Pro',
      project: 'VECTR',
      rating: 4,
      review: 'Great data visualization platform. The interface is intuitive and the charting capabilities are robust. Looking forward to seeing more features!',
      date: '2024-01-08',
      verified: false
    }
  ];

  const projects = [
    'THREADRIPPER - AI Twitter Analysis',
    'PropListAI - Real Estate Listings',
    'VECTR - Data Analytics Platform',
    'Verbalize - Voice to Code',
    'General Portfolio Feedback'
  ];

  const handleRatingClick = (rating) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setNewReview({
        name: '',
        email: '',
        project: '',
        rating: 0,
        review: '',
        role: '',
        company: ''
      });
    }, 2000);
  };

  const renderStars = (rating, interactive = false, size = 'w-5 h-5') => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`${size} cursor-pointer transition-colors ${
          index < (interactive ? (hoverRating || newReview.rating) : rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
        onClick={interactive ? () => handleRatingClick(index + 1) : undefined}
        onMouseEnter={interactive ? () => setHoverRating(index + 1) : undefined}
        onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
      />
    ));
  };

  const averageRating = existingReviews.reduce((sum, review) => sum + review.rating, 0) / existingReviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Project Reviews</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Share your experience with our AI-powered solutions and help us improve
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
              </div>
              <div className="text-3xl font-bold mb-1">{averageRating.toFixed(1)}</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-center mb-2">
                <MessageSquare className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold mb-1">{existingReviews.length}</div>
              <div className="text-gray-300">Total Reviews</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-1">{existingReviews.filter(r => r.verified).length}</div>
              <div className="text-gray-300">Verified Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-center mb-2">
                <ThumbsUp className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Review Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Leave a Review</h2>
              <p className="text-gray-600">Help others by sharing your experience with our projects</p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">Your review has been submitted successfully.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Leave Another Review
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={newReview.email}
                      onChange={(e) => setNewReview(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role/Title
                    </label>
                    <input
                      type="text"
                      value={newReview.role}
                      onChange={(e) => setNewReview(prev => ({ ...prev, role: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., Product Manager"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={newReview.company}
                      onChange={(e) => setNewReview(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project *
                  </label>
                  <select
                    required
                    value={newReview.project}
                    onChange={(e) => setNewReview(prev => ({ ...prev, project: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a project</option>
                    {projects.map((project, index) => (
                      <option key={index} value={project}>{project}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating *
                  </label>
                  <div className="flex items-center gap-1">
                    {renderStars(newReview.rating, true)}
                    <span className="ml-2 text-gray-600">
                      {newReview.rating > 0 && `${newReview.rating} out of 5 stars`}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Review *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={newReview.review}
                    onChange={(e) => setNewReview(prev => ({ ...prev, review: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Share your experience with this project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !newReview.name || !newReview.email || !newReview.project || !newReview.rating || !newReview.review}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Review
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Existing Reviews */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What Our Users Say</h2>
              <p className="text-gray-600">Real feedback from real users</p>
            </div>

            <div className="space-y-6">
              {existingReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 rounded-full p-2">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900">{review.name}</h3>
                          {review.verified && (
                            <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              Verified
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {review.role} {review.company && `at ${review.company}`}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-medium">
                      {review.project}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;