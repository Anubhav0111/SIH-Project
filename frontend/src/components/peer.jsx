import { useState } from 'react';
import { Users, MessageCircle, Heart, Shield, Plus, Search, Filter, ArrowLeft, Clock, ThumbsUp, Eye, Star } from 'lucide-react';

export default function PeerSupportPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const categories = [
    { id: 'all', name: 'All Discussions', count: 156, color: 'bg-gray-100' },
    { id: 'academic', name: 'Academic Stress', count: 45, color: 'bg-blue-100' },
    { id: 'anxiety', name: 'Anxiety Support', count: 38, color: 'bg-green-100' },
    { id: 'relationships', name: 'Relationships', count: 29, color: 'bg-purple-100' },
    { id: 'depression', name: 'Depression Support', count: 22, color: 'bg-yellow-100' },
    { id: 'social', name: 'Social Connection', count: 18, color: 'bg-pink-100' },
    { id: 'wellness', name: 'General Wellness', count: 14, color: 'bg-indigo-100' }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Feeling overwhelmed with midterm exams - any study tips?',
      category: 'academic',
      author: 'Anonymous Student',
      isVolunteer: false,
      timeAgo: '2 hours ago',
      replies: 12,
      likes: 8,
      views: 45,
      preview: 'I have 4 midterms next week and I\'m feeling really stressed. Has anyone found effective study strategies that help manage the workload?',
      tags: ['study-tips', 'stress-management', 'midterms'],
      isAnonymous: true
    },
    {
      id: 2,
      title: 'Breathing exercises that actually work for anxiety',
      category: 'anxiety',
      author: 'Sarah M.',
      isVolunteer: true,
      timeAgo: '4 hours ago',
      replies: 18,
      likes: 25,
      views: 89,
      preview: 'As a trained peer volunteer, I wanted to share some breathing techniques that have helped me and others manage anxiety attacks...',
      tags: ['breathing', 'anxiety', 'coping-strategies'],
      isAnonymous: false
    },
    {
      id: 3,
      title: 'Making friends in college - feeling isolated',
      category: 'social',
      author: 'Anonymous Student',
      isVolunteer: false,
      timeAgo: '6 hours ago',
      replies: 15,
      likes: 12,
      views: 67,
      preview: 'I\'m a sophomore and still struggling to make meaningful connections. Everyone seems to already have their friend groups...',
      tags: ['friendship', 'social-anxiety', 'loneliness'],
      isAnonymous: true
    },
    {
      id: 4,
      title: 'Dealing with homesickness - especially during holidays',
      category: 'wellness',
      author: 'Alex K.',
      isVolunteer: false,
      timeAgo: '8 hours ago',
      replies: 9,
      likes: 16,
      views: 34,
      preview: 'Being far from home during the holidays is hitting me harder than expected. How do others cope with homesickness?',
      tags: ['homesickness', 'holidays', 'coping'],
      isAnonymous: false
    },
    {
      id: 5,
      title: 'Healthy ways to handle relationship stress',
      category: 'relationships',
      author: 'Jordan P.',
      isVolunteer: true,
      timeAgo: '12 hours ago',
      replies: 22,
      likes: 31,
      views: 98,
      preview: 'Relationships in college can be complicated. Here are some healthy communication strategies I\'ve learned...',
      tags: ['relationships', 'communication', 'boundaries'],
      isAnonymous: false
    },
    {
      id: 6,
      title: 'Sleep schedule completely messed up - help!',
      category: 'wellness',
      author: 'Anonymous Student',
      isVolunteer: false,
      timeAgo: '1 day ago',
      replies: 14,
      likes: 19,
      views: 56,
      preview: 'My sleep schedule is all over the place and it\'s affecting my mood and concentration. Any tips for getting back on track?',
      tags: ['sleep', 'routine', 'wellness'],
      isAnonymous: true
    }
  ];

  const volunteers = [
    {
      id: 1,
      name: 'Sarah M.',
      specialties: ['Anxiety', 'Study Skills', 'Mindfulness'],
      yearsActive: 2,
      helpedStudents: 45,
      rating: 4.9,
      isOnline: true
    },
    {
      id: 2,
      name: 'Jordan P.',
      specialties: ['Relationships', 'Social Skills', 'Communication'],
      yearsActive: 1,
      helpedStudents: 28,
      rating: 4.8,
      isOnline: true
    },
    {
      id: 3,
      name: 'Alex R.',
      specialties: ['Academic Stress', 'Time Management', 'Goal Setting'],
      yearsActive: 3,
      helpedStudents: 67,
      rating: 4.9,
      isOnline: false
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.history.back()}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-600 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Peer Support Community</h1>
                  <p className="text-sm text-gray-600">Connect with trained student volunteers</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm text-green-600 font-medium">Moderated</span>
              </div>
              <button 
                onClick={() => setShowNewPost(true)}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Community Guidelines */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
            <div>
              <h3 className="text-blue-900 font-semibold">Safe Space Guidelines</h3>
              <p className="text-blue-800 text-sm mt-1">
                This is a supportive, moderated community. Be respectful, maintain confidentiality, 
                and remember that peer support complements but doesn't replace professional help.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-orange-100 text-orange-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Online Volunteers */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trained Volunteers</h3>
              <div className="space-y-3">
                {volunteers.map((volunteer) => (
                  <div key={volunteer.id} className="flex items-start space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-orange-600" />
                      </div>
                      {volunteer.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900">{volunteer.name}</p>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-500 ml-1">{volunteer.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">{volunteer.specialties.slice(0, 2).join(', ')}</p>
                      <p className="text-xs text-gray-500">{volunteer.helpedStudents} students helped</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-orange-600 text-sm font-medium hover:text-orange-700">
                View All Volunteers
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Discussions */}
            <div className="space-y-4">
              {filteredDiscussions.map((discussion) => (
                <div key={discussion.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        {discussion.isAnonymous ? (
                          <Users className="h-5 w-5 text-gray-400" />
                        ) : (
                          <span className="text-sm font-medium text-gray-600">
                            {discussion.author.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-medium text-gray-900">{discussion.author}</p>
                          {discussion.isVolunteer && (
                            <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
                              Volunteer
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">{discussion.timeAgo}</p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      categories.find(c => c.id === discussion.category)?.color || 'bg-gray-100'
                    }`}>
                      {categories.find(c => c.id === discussion.category)?.name}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-orange-600 cursor-pointer">
                    {discussion.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {discussion.preview}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {discussion.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{discussion.likes} likes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{discussion.views} views</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-500 hover:text-orange-600 p-1">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-orange-700">
                        Join Discussion
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredDiscussions.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No discussions found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or browse different categories.
                </p>
                <button 
                  onClick={() => setShowNewPost(true)}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700"
                >
                  Start a New Discussion
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-red-600 mt-0.5 mr-3" />
            <div className="flex-1">
              <h3 className="text-red-900 font-semibold mb-2">Need Immediate Help?</h3>
              <p className="text-red-800 mb-4">
                If you're experiencing a mental health crisis, please reach out for professional help immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700">
                  Crisis Helpline: 988
                </button>
                <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-50">
                  Campus Counseling Center
                </button>
                <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-50">
                  Emergency Services: 911
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Start a New Discussion</h2>
                <button 
                  onClick={() => setShowNewPost(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option value="">Select a category</option>
                    {categories.slice(1).map((category) => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    rows="6"
                    placeholder="Share your thoughts, experiences, or questions..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-700">
                    Post anonymously
                  </label>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700"
                  >
                    Post Discussion
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNewPost(false)}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}