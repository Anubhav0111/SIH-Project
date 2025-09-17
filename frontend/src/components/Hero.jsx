export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white py-24 px-6">
            <div className="container mx-auto flex flex-col items-center text-center relative z-10">

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                    Because Every Student <br />
                    Deserves a Safe Space 🧠💙
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl max-w-2xl text-gray-200 mb-10">
                    MindCare Campus is your companion for mental wellness — blending
                    <span className="font-semibold"> AI guidance, peer connections, confidential counseling,</span>
                    and a <span className="font-semibold">resource hub</span> designed just for college life.
                </p>

                {/* Call to Actions */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <a
                        href="#features"
                        className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
                    >
                        Explore Features
                    </a>
                    <a
                        href="#contact"
                        className="bg-indigo-900 px-8 py-3 rounded-lg font-semibold shadow hover:bg-indigo-800 transition"
                    >
                        Get Support Now
                    </a>
                </div>

                {/* Feature Preview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl">
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
                        <span className="text-3xl">🤖</span>
                        <h3 className="text-lg font-semibold mt-3">AI First Aid</h3>
                        <p className="text-sm text-gray-200">24/7 intelligent chat for immediate help.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
                        <span className="text-3xl">📅</span>
                        <h3 className="text-lg font-semibold mt-3">Private Booking</h3>
                        <p className="text-sm text-gray-200">Confidential sessions with counselors.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
                        <span className="text-3xl">📚</span>
                        <h3 className="text-lg font-semibold mt-3">Resource Hub</h3>
                        <p className="text-sm text-gray-200">Guides, videos, and wellness tools.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
                        <span className="text-3xl">👥</span>
                        <h3 className="text-lg font-semibold mt-3">Peer Support</h3>
                        <p className="text-sm text-gray-200">Connect with trained student volunteers.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
                        <span className="text-3xl">📊</span>
                        <h3 className="text-lg font-semibold mt-3">Admin Dashboard</h3>
                        <p className="text-sm text-gray-200">Monitor, analyze, and improve mental health support at scale.</p>
                    </div>
                </div>
            </div>

            {/* Decorative Background Blobs */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
        </section>
    );
}
