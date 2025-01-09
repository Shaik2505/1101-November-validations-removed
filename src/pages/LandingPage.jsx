import React from "react";
import {
  FaPen,
  FaTools,
  FaVideo,
  FaComments,
  FaSync,
  FaMedal,
} from "react-icons/fa";

const features = [
  {
    title: "Creative Writing Tools",
    description: "Powerful features to craft, edit, and polish your stories.",
    icon: <FaPen className="text-4xl mb-4 text-blue-500" />,
    image:
      "https://img.freepik.com/free-photo/speech-bubbles-with-businessman-working-his-tablet_1134-58.jpg?t=st=1736244038~exp=1736247638~hmac=64953e8cbbfe19245db29c788312cb35eea10c8926da96cdd0423727845aa40c&w=826",
  },
  {
    title: "Interactive Chat Interface",
    description: "Engage with an intuitive chat-style storytelling experience.",
    icon: <FaTools className="text-4xl mb-4 text-blue-500" />,
    image:
      "https://img.freepik.com/free-photo/speech-bubbles-with-businessman-working-his-tablet_1134-58.jpg?t=st=1736244038~exp=1736247638~hmac=64953e8cbbfe19245db29c788312cb35eea10c8926da96cdd0423727845aa40c&w=826",
  },
  {
    title: "Multimedia Support",
    description:
      "Seamlessly integrate images, videos, and audio into your stories.",
    icon: <FaVideo className="text-4xl mb-4 text-blue-500" />,
    image:
      "https://img.freepik.com/free-photo/speech-bubbles-with-businessman-working-his-tablet_1134-58.jpg?t=st=1736244038~exp=1736247638~hmac=64953e8cbbfe19245db29c788312cb35eea10c8926da96cdd0423727845aa40c&w=826",
  },
  {
    title: "Collaborative Features",
    description: "Work together with friends and colleagues in real-time.",
    icon: <FaComments className="text-4xl mb-4 text-blue-500" />,
    image:
      "https://img.freepik.com/free-photo/speech-bubbles-with-businessman-working-his-tablet_1134-58.jpg?t=st=1736244038~exp=1736247638~hmac=64953e8cbbfe19245db29c788312cb35eea10c8926da96cdd0423727845aa40c&w=826",
  },
  {
    title: "Feedback and Reviews",
    description:
      "Get constructive feedback to enhance your storytelling skills.",
    icon: <FaSync className="text-4xl mb-4 text-blue-500" />,
    image:
      "https://img.freepik.com/free-photo/speech-bubbles-with-businessman-working-his-tablet_1134-58.jpg?t=st=1736244038~exp=1736247638~hmac=64953e8cbbfe19245db29c788312cb35eea10c8926da96cdd0423727845aa40c&w=826",
  },
  {
    title: "Achievements and Rewards",
    description: "Unlock badges and achievements as you progress.",
    icon: <FaMedal className="text-4xl mb-4 text-blue-500" />,
    image:
      "https://img.freepik.com/free-photo/speech-bubbles-with-businessman-working-his-tablet_1134-58.jpg?t=st=1736244038~exp=1736247638~hmac=64953e8cbbfe19245db29c788312cb35eea10c8926da96cdd0423727845aa40c&w=826",
  },
];

const testimonials = [
  {
    name: "Alice B.",
    age: 30,
    quote: "Creating stories has never been this fun and easy!",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-holding-phone_171337-2820.jpg",
  },
  {
    name: "Mark T.",
    age: 25,
    quote: "The chat interface is so engaging, I love it!",
    image:
      "https://img.freepik.com/free-photo/smiling-man-holding-phone_171337-2841.jpg",
  },
  {
    name: "Sophia L.",
    age: 28,
    quote: "Collaborating with friends has made storytelling even better.",
    image:
      "https://img.freepik.com/free-photo/young-woman-laughing_171337-2839.jpg",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Unleash Your Storytelling Creativity
            </h2>
            <p className="text-xl mb-8">
              Transform your ideas into captivating chat-based stories.
            </p>
            <a
              href="#"
              className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
            >
              Get Started
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/top-view-smartphone-template-workspace_23-2148175196.jpg?t=st=1736243938~exp=1736247538~hmac=8eb6cf880b125ea5fe8f72dfae1fa3d5f97d5d4d317ffcb9fe3a356edadbe541&w=826"
              alt="Storytelling creativity"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-700 dark:text-gray-300">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-900 transition-transform transform hover:scale-105 duration-300"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-700 dark:text-gray-300">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border-2 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 duration-300"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                  {testimonial.name}, {testimonial.age}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Story?
          </h2>
          <p className="text-xl mb-8">
            Join our community of storytellers and let your creativity shine.
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Download Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
