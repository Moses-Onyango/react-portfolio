import React from 'react';

const Services = () => {
  return (
    <section
      id="services"
      className="py-8 px-5 bg-[#58a6ff] text-center"
    >
      <h2 className="text-[2.5rem] text-[#333] font-bold mb-6 inline-block border-b-2 border-[#ccc] pb-2">
        Services
      </h2>
      <ul className="space-y-3 text-lg text-white mt-6">
        <li>Web Development</li>
        <li>UI/UX Design</li>
        <li>Responsive Design</li>
      </ul>
    </section>
  );
};

export default Services;
