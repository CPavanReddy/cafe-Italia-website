import React from "react";

const PrivateDining = () => (
  <section className="flex flex-col md:flex-row items-center bg-black text-white py-16 px-8">
    <img src="https://media.istockphoto.com/id/468069883/photo/serving-in-restaurant-without-food-near-the-window.jpg?s=612x612&w=is&k=20&c=gKasWbClykXTPAkp6N8-wUgj0wAi2LKCPpBg_U-L2n4=" alt="Private Dining" className="w-full md:w-1/2 rounded-lg" />
    <div className="md:ml-12 mt-8 md:mt-0">
      <h2 className="text-3xl font-bold mb-4">Private & Group Dining</h2>
      <p className="text-gray-300 mb-6">
        Enjoy an exclusive dining experience with our private rooms, perfect for celebrations or meetings.
      </p>
      <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
        Book Now
      </button>
    </div>
  </section>
);

export default PrivateDining;
