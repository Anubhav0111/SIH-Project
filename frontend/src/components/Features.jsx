import React from "react";
import { MessageCircle, Calendar, BookOpen, Users, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    bg: "bg-blue-500",
    title: "AI-Guided First Aid",
    desc: "Get immediate support through our intelligent chat system",
    link: "/Aid",
  },
  {
    icon: <Calendar className="w-6 h-6 text-white" />,
    bg: "bg-green-500",
    title: "Confidential Booking",
    desc: "Schedule appointments with counselors privately",
    link: "/bookings",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    bg: "bg-purple-500",
    title: "Resource Hub",
    desc: "Access videos, audio, and guides in your language",
    link: "/resources",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-orange-500",
    title: "Peer Support",
    desc: "Connect with trained student volunteers",
    link: "/peer-support",
  },
  {
    icon: <BarChart className="w-6 h-6 text-white" />,
    bg: "bg-red-500",
    title: "Admin Dashboard",
    desc: "Data-driven insights for institutional planning",
    link: "/dashboard",
  },
];


const Features = () => {
  return (
    <section id="features" className="px-6 py-21 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Comprehensive Mental Health Support
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Our platform offers multiple pathways to mental wellness, designed
        specifically for the college environment
      </p>

      {/* Feature Cards */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto cursor-pointer">
        {features.map((f, idx) => (
          <Link key={idx} to={f.link}>
            <div className="bg-gray-50 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${f.bg} mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-lg text-gray-600">{f.desc}</p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default Features;
