import { useState } from 'react';
import {
  Play, Download, BookOpen, Headphones, Globe, Search, Filter, ArrowLeft, Clock, Star, Link as LinkIcon
} from 'lucide-react';

// Resource links mapping
const resourceLinks = {
  1: {
    view: "https://www.youtube.com/watch?v=FfSbWc3O_5M", // Fight Flight Freeze – Anxiety
    alt: "https://schools.kidshelpline.com.au/resources/videos-anxiety" // More guides
  },
  2: {
    view: "https://www.soulsensei.in/play/prachi-mehta-guided-deep-breathing-exercise-for-stress-relief"
  },
  3: {
    download: "https://www.docs.sasg.ed.ac.uk/StudentCounselling/SCSbooklets/SCSstressbooklet.pdf"
  },
  4: {
    view: "https://www.youtube.com/watch?v=X9Cu3Qv9lwY", // Técnicas de Relajación (video, ES)
    alt: "https://www.mayoclinic.org/es/healthy-lifestyle/stress-management/in-depth/relaxation-technique/art-20045368" // Mayo Clinic guide
  },
  5: {
    view: "https://www.youtube.com/watch?v=LE65X-xZLg8",
    alt: "https://translate.google.com/translate?u=https%3A%2F%2Fpositivepsychology.com%2Fstress-management-techniques-tips-burn-out%2F&hl=hi&sl=en&tl=hi&client=srp"
  },
  6: {
    view: "https://www.nmhealth.org/news/healthy/2025/1/?view=2174",
    alt: "https://www.youtube.com/watch?v=N5QaA6og2Rg"
  },
  7: {
    download: "https://choc.org/wp-content/uploads/2016/04/Sleep-Hygiene-Children-Handout.pdf",
    alt: "https://www.uhs.nhs.uk/Media/UHS-website-2019/Patientinformation/Other/Sleep-hygiene-3276-PIL.pdf"
  },
  8: {
    view: "https://www.mindful.org/audio-resources-for-mindfulness-meditation/",
    alt: "https://jodiettenberg.com/meditation/"
  }
};

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 6 },
    { id: 'anxiety', name: 'Anxiety & Stress', count: 1 },
    { id: 'depression', name: 'Depression & Mood', count: 0 },
    { id: 'academic', name: 'Academic Stress', count: 1 },
    { id: 'relationships', name: 'Relationships', count: 1 },
    { id: 'sleep', name: 'Sleep & Wellness', count: 1 },
    { id: 'mindfulness', name: 'Mindfulness', count: 2 }
  ];

  const languages = [
    { id: 'english', name: 'English', flag: '🇺🇸' },
    { id: 'spanish', name: 'Español', flag: '🇪🇸' },
    { id: 'hindi', name: 'हिंदी', flag: '🇮🇳' },
    { id: 'mandarin', name: '中文', flag: '🇨🇳' },
    { id: 'arabic', name: 'العربية', flag: '🇸🇦' },
    { id: 'french', name: 'Français', flag: '🇫🇷' }
  ];

  const resources = [
    {
      id: 1,
      title: "Understanding Anxiety: A Student's Guide",
      type: 'video',
      category: 'anxiety',
      language: 'english',
      duration: '15 min',
      rating: 4.8,
      views: 1250,
      description: 'Learn about anxiety symptoms, triggers, and coping strategies specifically for college students.',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Deep Breathing for Stress Relief',
      type: 'audio',
      category: 'mindfulness',
      language: 'english',
      duration: '10 min',
      rating: 4.9,
      views: 890,
      description: 'Guided breathing exercise to help reduce stress and promote relaxation.',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Managing Academic Pressure',
      type: 'guide',
      category: 'academic',
      language: 'english',
      duration: '8 min read',
      rating: 4.7,
      views: 2100,
      description: 'Practical strategies for handling academic stress and maintaining work-life balance.',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Técnicas de Relajación',
      type: 'video',
      category: 'mindfulness',
      language: 'spanish',
      duration: '12 min',
      rating: 4.6,
      views: 650,
      description: 'Aprende técnicas de relajación para manejar el estrés y la ansiedad.',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 5,
      title: 'तनाव प्रबंधन की तकनीकें',
      type: 'guide',
      category: 'anxiety',
      language: 'hindi',
      duration: '6 min read',
      rating: 4.5,
      views: 420,
      description: 'छात्रों के लिए तनाव प्रबंधन और मानसिक स्वास्थ्य की जानकारी।',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 6,
      title: 'Building Healthy Relationships',
      type: 'video',
      category: 'relationships',
      language: 'english',
      duration: '18 min',
      rating: 4.8,
      views: 1100,
      description: 'Learn how to build and maintain healthy relationships during college years.',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 7,
      title: 'Sleep Hygiene for Students',
      type: 'guide',
      category: 'sleep',
      language: 'english',
      duration: '5 min read',
      rating: 4.7,
      views: 980,
      description: 'Essential tips for better sleep quality and establishing healthy sleep routines.',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 8,
      title: 'Mindful Meditation for Beginners',
      type: 'audio',
      category: 'mindfulness',
      language: 'english',
      duration: '20 min',
      rating: 4.9,
      views: 1500,
      description: 'Introduction to mindfulness meditation with guided practice sessions.',
      thumbnail: '/api/placeholder/300/200'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || resource.language === selectedLanguage;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLanguage && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Play;
      case 'audio': return Headphones;
      case 'guide': return BookOpen;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-600';
      case 'audio': return 'bg-green-100 text-green-600';
      case 'guide': return 'bg-blue-100 text-blue-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  // Featured Collections buttons filter by category
  const handleFeaturedFilter = (cat) => {
    setSelectedCategory(cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                <div className="bg-purple-600 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Resource Hub</h1>
                  <p className="text-sm text-gray-600">Mental wellness guides and materials</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-purple-600 font-medium">Multilingual</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Language Filter */}
            <div className="lg:w-48">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Languages</option>
                {languages.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                      ? 'bg-purple-100 text-purple-700 font-medium'
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
          </div>
          {/* Resources Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'all'
                  ? 'All Resources'
                  : categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} available
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResources.map(resource => {
                const TypeIcon = getTypeIcon(resource.type);
                const links = resourceLinks[resource.id] || {};
                // Select correct main link and text
                const hasDownload = !!links.download;
                const mainLink = links.download || links.view || links.alt || '#';
                const mainTarget = hasDownload ? '_self' : '_blank';
                let mainText =
                  resource.type === 'guide'
                    ? hasDownload
                      ? 'Download PDF'
                      : 'Read'
                    : resource.type === 'video'
                      ? 'Watch'
                      : 'Listen';
                return (
                  <div key={resource.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative">
                      <div className="relative w-full h-48">
                        <img
                          src={resource.thumbnail}
                          alt={resource.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                          <TypeIcon className="h-12 w-12 text-white" />
                        </div>
                      </div>

                      <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                        {resource.type}
                      </div>
                      <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                        {resource.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{resource.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{resource.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{resource.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{resource.views} views</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={mainLink}
                          target={mainTarget}
                          rel="noopener noreferrer"
                          className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
                          download={hasDownload}
                        >
                          <TypeIcon className="h-4 w-4 mr-2" />
                          {mainText}
                        </a>
                        {/* If it's a downloadable guide, show Download icon */}
                        {hasDownload && (
                          <a
                            href={links.download}
                            download
                            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                          >
                            <Download className="h-4 w-4 text-gray-600" />
                          </a>
                        )}
                        {/* If there's an alt link, show alternate icon */}
                        {links.alt && (
                          <a
                            href={links.alt}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                            title="Alternate Resource"
                          >
                            <LinkIcon className="h-4 w-4 text-gray-600" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Featured Collections */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Collections</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Exam Stress Toolkit</h3>
              <p className="text-blue-100 mb-4">Complete guide to managing academic pressure during exams</p>
              <button
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50"
                onClick={() => handleFeaturedFilter('academic')}
              >
                Explore Collection
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Mindfulness Journey</h3>
              <p className="text-green-100 mb-4">7-day guided meditation and mindfulness practice</p>
              <button
                className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50"
                onClick={() => handleFeaturedFilter('mindfulness')}
              >
                Start Journey
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Social Connection</h3>
              <p className="text-purple-100 mb-4">Building meaningful relationships and overcoming loneliness</p>
              <button
                className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50"
                onClick={() => handleFeaturedFilter('relationships')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
