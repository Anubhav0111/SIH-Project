import { useState } from 'react';
import { Calendar, Clock, User, Shield, CheckCircle, ArrowLeft, Phone, Video, MapPin } from 'lucide-react';

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCounselor, setSelectedCounselor] = useState('');
  const [sessionType, setSessionType] = useState('in-person');
  const [reason, setReason] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [contactInfo, setContactInfo] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const counselors = [
    {
      id: 'dr-smith',
      name: 'Dr. Sarah Smith',
      title: 'Licensed Clinical Psychologist',
      specialties: ['Anxiety', 'Depression', 'Academic Stress'],
      availability: 'Mon-Fri 9AM-5PM',
      image: '/api/placeholder/64/64'
    },
    {
      id: 'dr-johnson',
      name: 'Dr. Michael Johnson',
      title: 'Licensed Professional Counselor',
      specialties: ['Relationship Issues', 'Social Anxiety', 'Self-Esteem'],
      availability: 'Tue-Sat 10AM-6PM',
      image: '/api/placeholder/64/64'
    },
    {
      id: 'dr-patel',
      name: 'Dr. Priya Patel',
      title: 'Licensed Marriage & Family Therapist',
      specialties: ['Family Issues', 'Cultural Adjustment', 'Trauma'],
      availability: 'Mon-Thu 8AM-4PM',
      image: '/api/placeholder/64/64'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const reasons = [
    'Academic stress and pressure',
    'Anxiety and worry',
    'Depression and mood issues',
    'Relationship problems',
    'Family issues',
    'Social anxiety and isolation',
    'Sleep problems',
    'Eating concerns',
    'Substance use concerns',
    'Grief and loss',
    'Identity and self-esteem',
    'Other (please specify)'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    setShowConfirmation(true);
  };

  const generateBookingId = () => {
    return 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your confidential counseling session has been scheduled successfully.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Booking Details:</h3>
            <p className="text-sm text-gray-600">Booking ID: {generateBookingId()}</p>
            <p className="text-sm text-gray-600">Date: {selectedDate}</p>
            <p className="text-sm text-gray-600">Time: {selectedTime}</p>
            <p className="text-sm text-gray-600">Type: {sessionType === 'in-person' ? 'In-Person' : sessionType === 'video' ? 'Video Call' : 'Phone Call'}</p>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Return to Home
            </button>
            <button 
              onClick={() => setShowConfirmation(false)}
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
            >
              Book Another Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.history.back()}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Book Counseling Session</h1>
                  <p className="text-sm text-gray-600">Confidential and secure booking</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm text-green-600 font-medium">Secure</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Privacy Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
            <div>
              <h3 className="text-blue-900 font-semibold">Your Privacy is Protected</h3>
              <p className="text-blue-800 text-sm mt-1">
                All booking information is kept strictly confidential. You can choose to book anonymously 
                or provide contact details for appointment reminders.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Counselor Selection */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Select a Counselor</h2>
            <div className="grid gap-4">
              {counselors.map((counselor) => (
                <div
                  key={counselor.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedCounselor === counselor.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedCounselor(counselor.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{counselor.name}</h3>
                      <p className="text-gray-600 text-sm">{counselor.title}</p>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          <strong>Specialties:</strong> {counselor.specialties.join(', ')}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Available:</strong> {counselor.availability}
                        </p>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      selectedCounselor === counselor.id
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedCounselor === counselor.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Session Type */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Session Type</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { id: 'in-person', icon: MapPin, label: 'In-Person', desc: 'Meet at the counseling center' },
                { id: 'video', icon: Video, label: 'Video Call', desc: 'Secure video session' },
                { id: 'phone', icon: Phone, label: 'Phone Call', desc: 'Audio-only session' }
              ].map((type) => {
                const IconComponent = type.icon;
                return (
                  <div
                    key={type.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      sessionType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSessionType(type.id)}
                  >
                    <div className="text-center">
                      <IconComponent className={`h-8 w-8 mx-auto mb-2 ${
                        sessionType === type.id ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <h3 className="font-semibold text-gray-900">{type.label}</h3>
                      <p className="text-sm text-gray-600">{type.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Date and Time */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Date & Time</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Reason for Visit */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Reason for Visit</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What would you like to discuss? (Optional)
                </label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a reason (optional)</option>
                  {reasons.map((reasonOption) => (
                    <option key={reasonOption} value={reasonOption}>{reasonOption}</option>
                  ))}
                </select>
              </div>
              <p className="text-sm text-gray-600">
                This information helps your counselor prepare for the session but is completely optional.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="text-sm text-gray-700">
                  Book anonymously (no contact information required)
                </label>
              </div>
              
              {!isAnonymous && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Information (for appointment reminders)
                  </label>
                  <input
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="Email or phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    We'll only use this to send appointment reminders. All information remains confidential.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <button
              type="submit"
              disabled={!selectedCounselor || !selectedDate || !selectedTime}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Book Confidential Session
            </button>
            <p className="text-sm text-gray-600 text-center mt-3">
              By booking, you agree to our confidentiality policy and terms of service.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}