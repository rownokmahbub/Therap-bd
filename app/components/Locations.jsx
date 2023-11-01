import React from "react";

export default function Locations() {
  return (
    <div id="contactus" className="container mx-auto">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-5">
        Contact Us
      </h2>
      <div className="text-lg bg-yellow-100 dark:bg-yellow-600 dark:text-yellow-100 font-semibold max-w-xl mx-auto w-full my-5 px-6 py-4 rounded-lg text-yellow-600">House 47, Road 4, Block C, Banani, Dhaka-1213, Bangladesh</div>
      <div className="text-lg bg-yellow-100 dark:bg-yellow-600 dark:text-yellow-100 font-semibold max-w-xl mx-auto w-full my-5 px-6 py-4 rounded-lg text-yellow-600">House 51, Road 4, Block C, Banani,
Dhaka-1213, Bangladesh</div>
      <div className="google-maps rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7577009036977!2d90.39858897595244!3d23.791641078642318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7118f15b685%3A0xb3d328e9144e1518!2sTherap%20(BD)%20Ltd.!5e0!3m2!1sen!2sbd!4v1698682988697!5m2!1sen!2sbd"
          width="500"
          height={400}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
