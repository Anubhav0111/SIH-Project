import { useState } from 'react';
import { BarChart3, Users, MessageCircle, Calendar, TrendingUp, TrendingDown, AlertTriangle, Download, Filter, ArrowLeft, Eye, Heart, Clock } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

export default function AdminDashboardPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');


  // Sample data for charts
  const usageData = [
    { name: 'Jan', chatSessions: 120, bookings: 45, resources: 89, peerSupport: 67 },
    { name: 'Feb', chatSessions: 145, bookings: 52, resources: 95, peerSupport: 78 },
    { name: 'Mar', chatSessions: 189, bookings: 68, resources: 112, peerSupport: 89 },
    { name: 'Apr', chatSessions: 234, bookings: 78, resources: 134, peerSupport: 102 },
    { name: 'May', chatSessions: 267, bookings: 89, resources: 156, peerSupport: 118 },
    { name: 'Jun', chatSessions: 298, bookings: 95, resources: 178, peerSupport: 134 }
  ];

  const issueDistribution = [
    { name: 'Anxiety', value: 35, color: '#8884d8' },
    { name: 'Academic Stress', value: 28, color: '#82ca9d' },
    { name: 'Depression', value: 18, color: '#ffc658' },
    { name: 'Relationships', value: 12, color: '#ff7300' },
    { name: 'Sleep Issues', value: 7, color: '#00ff00' }
  ];

  const weeklyTrends = [
    { day: 'Mon', sessions: 45, crisis: 2 },
    { day: 'Tue', sessions: 52, crisis: 1 },
    { day: 'Wed', sessions: 48, crisis: 3 },
    { day: 'Thu', sessions: 61, crisis: 2 },
    { day: 'Fri', sessions: 55, crisis: 4 },
    { day: 'Sat', sessions: 38, crisis: 1 },
    { day: 'Sun', sessions: 42, crisis: 2 }
  ];

  const satisfactionData = [
    { month: 'Jan', satisfaction: 4.2, responseTime: 12 },
    { month: 'Feb', satisfaction: 4.3, responseTime: 11 },
    { month: 'Mar', satisfaction: 4.5, responseTime: 10 },
    { month: 'Apr', satisfaction: 4.4, responseTime: 9 },
    { month: 'May', satisfaction: 4.6, responseTime: 8 },
    { month: 'Jun', satisfaction: 4.7, responseTime: 7 }
  ];

  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Chat Sessions',
      value: '1,298',
      change: '+8.2%',
      trend: 'up',
      icon: MessageCircle,
      color: 'bg-green-500'
    },
    {
      title: 'Bookings',
      value: '427',
      change: '+15.3%',
      trend: 'up',
      icon: Calendar,
      color: 'bg-purple-500'
    },
    {
      title: 'Crisis Interventions',
      value: '15',
      change: '-5.2%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'bg-red-500'
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'crisis',
      message: 'Crisis keywords detected in chat session',
      timestamp: '2 minutes ago',
      severity: 'high',
      status: 'resolved'
    },
    {
      id: 2,
      type: 'usage',
      message: 'Unusual spike in anxiety-related discussions',
      timestamp: '1 hour ago',
      severity: 'medium',
      status: 'monitoring'
    },
    {
      id: 3,
      type: 'system',
      message: 'High response time in peer support forum',
      timestamp: '3 hours ago',
      severity: 'low',
      status: 'investigating'
    }
  ];

  const topResources = [
    { title: 'Managing Exam Stress', views: 1245, category: 'Academic' },
    { title: 'Breathing Exercises for Anxiety', views: 987, category: 'Anxiety' },
    { title: 'Sleep Hygiene Guide', views: 756, category: 'Wellness' },
    { title: 'Building Social Connections', views: 623, category: 'Social' },
    { title: 'Mindfulness for Students', views: 589, category: 'Mindfulness' }
  ];

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
                <div className="bg-red-600 p-2 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>
                  <p className="text-sm text-gray-600">Mental health analytics and insights</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
            return (
              <div key={stat.title} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <TrendIcon className={`h-4 w-4 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                  <span className={`text-sm font-medium ml-2 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">vs last month</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Usage Trends */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Usage Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="chatSessions" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="bookings" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="resources" stroke="#8B5CF6" strokeWidth={2} />
                <Line type="monotone" dataKey="peerSupport" stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Issue Distribution */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Issues Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={issueDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {issueDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Trends and Satisfaction */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Weekly Activity */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Activity Pattern</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sessions" fill="#3B82F6" />
                <Bar dataKey="crisis" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Satisfaction Metrics */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Quality Metrics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={satisfactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="satisfaction" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                <Line yAxisId="right" type="monotone" dataKey="responseTime" stroke="#F59E0B" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts and Resources */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Alerts */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
              <button className="text-red-600 text-sm font-medium hover:text-red-700">View All</button>
            </div>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    alert.severity === 'high' ? 'bg-red-500' :
                    alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">{alert.timestamp}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        alert.status === 'resolved' ? 'bg-green-100 text-green-700' :
                        alert.status === 'monitoring' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {alert.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Resources */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Most Accessed Resources</h3>
              <button className="text-red-600 text-sm font-medium hover:text-red-700">View All</button>
            </div>
            <div className="space-y-4">
              {topResources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{resource.title}</p>
                    <p className="text-xs text-gray-500">{resource.category}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">{resource.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Early Intervention Success</h3>
            <p className="text-3xl font-bold mb-2">87%</p>
            <p className="text-blue-100 text-sm">
              Students report improved wellbeing after using platform resources
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Crisis Prevention</h3>
            <p className="text-3xl font-bold mb-2">23</p>
            <p className="text-green-100 text-sm">
              Potential crisis situations identified and addressed this month
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Community Engagement</h3>
            <p className="text-3xl font-bold mb-2">94%</p>
            <p className="text-purple-100 text-sm">
              Active participation rate in peer support discussions
            </p>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <Eye className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
            <div>
              <h3 className="text-blue-900 font-semibold">Privacy & Anonymity Protected</h3>
              <p className="text-blue-800 text-sm mt-1">
                All data shown is aggregated and anonymized. Individual user information is never displayed 
                or stored in identifiable formats. This dashboard helps improve services while maintaining 
                complete student confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}