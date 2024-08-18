import React from 'react';

function AboutUs() {
  return (
    <div className="bg-[#0E0F14] text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-pink-500 mb-6">About Us</h2>
        <p className="text-gray-400 mb-4">
          At StockExchange App, we are committed to providing the best trading experience to our users. Our platform is designed to be intuitive, efficient, and secure. We believe that everyone should have access to the tools and resources needed to succeed in the stock market.
        </p>
        <p className="text-gray-400 mb-4">
          Our team of experts has years of experience in the financial industry and technology development. We work tirelessly to bring the most innovative solutions to our users, ensuring that our platform is always at the cutting edge of trading technology.
        </p>
        <p className="text-gray-400 mb-4">
          Whether you are a seasoned trader or just getting started, the StockExchange App offers the tools, insights, and support you need to achieve your financial goals. Join us on this journey to financial success!
        </p>

        <h3 className="text-3xl font-semibold text-pink-500 mt-8">Our Mission</h3>
        <p className="text-gray-400 mb-4">
          Our mission is to democratize access to the financial markets by providing an easy-to-use platform for everyone, regardless of their experience level. We strive to create a community of empowered traders who can make informed decisions and grow their wealth.
        </p>

        {/* <h3 className="text-3xl font-semibold text-pink-500 mt-8">Our Vision</h3>
        <p className="text-gray-400 mb-4">
          We envision a world where financial knowledge and tools are accessible to everyone. We aim to be the leading platform that drives this change by offering the best trading experience and customer support.
        </p>

        <h3 className="text-3xl font-semibold text-pink-500 mt-8">Our Values</h3>
        <ul className="text-gray-400 mb-4 list-disc list-inside">
          <li className="mb-2"><strong>Integrity:</strong> We operate with the highest level of integrity, ensuring that our users can trust us with their financial journeys.</li>
          <li className="mb-2"><strong>Innovation:</strong> We constantly innovate to provide the most advanced and user-friendly tools for trading.</li>
          <li className="mb-2"><strong>Community:</strong> We believe in fostering a strong community where traders can share knowledge and support each other.</li>
          <li className="mb-2"><strong>Customer Success:</strong> Our success is measured by the success of our users, and we are dedicated to helping them achieve their goals.</li>
        </ul> */}

        <h3 className="text-3xl font-semibold text-pink-500 mt-8">Our History</h3>
        <p className="text-gray-400 mb-4">
          StockExchange App was founded in 2020 by a team of passionate traders and developers who saw a gap in the market for an intuitive and powerful trading platform. What started as a small project quickly grew into a full-fledged platform used by thousands of traders worldwide.
        </p>
        <p className="text-gray-400 mb-4">
          Over the years, we have continued to grow and evolve, adding new features and expanding our user base. Our journey has been marked by constant learning and adaptation, always striving to meet the needs of our users in an ever-changing market.
        </p>

        <h3 className="text-3xl font-semibold text-pink-500 mt-8">Our Team</h3>
        <p className="text-gray-400 mb-4">
          Our team is our greatest asset. We are a diverse group of professionals with backgrounds in finance, technology, and customer support, all working together to deliver the best possible experience for our users.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <img src="/userMia.jpeg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h4 className="text-xl font-bold text-pink-500">Jane Doe</h4>
            <p className="text-gray-400">CEO & Founder</p>
          </div>
          <div className="text-center">
            <img src="userShylie.jpeg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h4 className="text-xl font-bold text-pink-500">John Smith</h4>
            <p className="text-gray-400">CTO</p>
          </div>
          <div className="text-center">
            <img src="userStenfie.jpeg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h4 className="text-xl font-bold text-pink-500">Emily Johnson</h4>
            <p className="text-gray-400">Head of Marketing</p>
          </div>
        </div>

        <h3 className="text-3xl font-semibold text-pink-500 mt-8">Why Choose Us?</h3>
        <p className="text-gray-400 mb-4">
          Choosing StockExchange App means choosing a partner who is dedicated to your financial success. Our platform is built with the user in mind, offering a seamless and powerful trading experience. Here’s why our users love us:
        </p>
        <ul className="text-gray-400 mb-4 list-disc list-inside">
          <li className="mb-2">User-friendly interface with powerful features.</li>
          <li className="mb-2">Dedicated customer support available 24/7.</li>
          <li className="mb-2">Constant updates and new features based on user feedback.</li>
          <li className="mb-2">Secure and reliable platform with top-notch security measures.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
