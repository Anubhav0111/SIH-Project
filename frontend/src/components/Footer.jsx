import React from "react";

const Footer = () => {
    return (
        <>
            <div id="about-us" className="flex flex-col items-center justify-center bg-blue-600 text-center py-20 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to Start Your Wellness Journey?
                </h2>
                <p className="text-white text-lg mb-6">
                    Join thousands of students who have found support through our platform
                </p>
                <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
                    Access Support Services
                </button>
            </div>
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-white text-2xl font-bold">🧠</span>
                            <span className="text-white font-bold text-lg">MindCare Campus</span>
                        </div>
                        <p className="text-gray-400">
                            Supporting student mental health through technology and compassion.
                        </p>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-2">Support</h3>
                        <ul className="space-y-1">
                            <li className="hover:text-white cursor-pointer">Crisis Helpline</li>
                            <li className="hover:text-white cursor-pointer">Emergency Resources</li>
                            <li className="hover:text-white cursor-pointer">FAQ</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-2">Resources</h3>
                        <ul className="space-y-1">
                            <li className="hover:text-white cursor-pointer">Mental Health Guides</li>
                            <li className="hover:text-white cursor-pointer">Wellness Videos</li>
                            <li className="hover:text-white cursor-pointer">Meditation Audio</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div id="contact">
                        <h3 className="text-white font-semibold mb-2">Contact</h3>
                        <ul className="space-y-1">
                            <li>Student Welfare Department</li>
                            <li>counseling@college.edu</li>
                            <li>24/7 Support Available</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                    © 2024 MindCare Campus. All Rights Reserved. |{" "}
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span> |{" "}
                    <span className="hover:text-white cursor-pointer">Terms of Service</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
