import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800 px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Discover <span className="text-blue-600">ShopEase</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your ultimate destination for quality, convenience, and unforgettable shopping experiences.
          </p>
        </motion.div>

        {/* Image + Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="relative w-full md:w-1/2">
            <img
              src="https://as1.ftcdn.net/v2/jpg/03/20/68/66/1000_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg"
              alt="Our Story"
              className="rounded-3xl  w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-white/10 to-transparent rounded-3xl backdrop-blur-sm" />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At ShopEase, we’re committed to redefining online shopping. We offer curated collections, lightning-fast delivery, and the support you need — when you need it.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-10" />

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 text-center"
        >
          {[
            {
              title: "✨ Quality First",
              desc: "Hand-picked, rigorously tested, and always trusted. We don’t compromise.",
              icon: "🛍️",
            },
            {
              title: "💸 Smart Pricing",
              desc: "Affordable doesn’t mean average. Our pricing is optimized for value.",
              icon: "🏷️",
            },
            {
              title: "📞 Always Here",
              desc: "24/7 human support to help with anything — anytime.",
              icon: "📱",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-3xl py-16 px-6 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Thousands of Happy Shoppers
          </h2>
          <p className="text-lg mb-6">
            Feel the difference. Shop smarter, faster, and better — with ShopEase.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-blue-600 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow"
          >
            Start Shopping
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
