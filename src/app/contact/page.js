import ContactUsForm from "@/components/contact_us_form";
import React from "react";

function ContactUs() {
  return (
    <div className="container mx-auto py-2 px-5 my-20 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-base md:text-lg text-gray-700 mb-4">
        We would love to hear from you! Please reach out to us using the form
        below:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start p-5 bg-blue-50/55 rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0)]  shadow-gray-400/50 w-full py-3  md:py-6 px-4 md:px-10 my-2 md:my-10">
        <ContactUsForm />
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Our Address:</h2>
          <p className="text-gray-600">Kegalle, Sri Lanka</p>
          <h2 className="text-lg font-semibold mt-4">Phone:</h2>
          <p className="text-gray-600">+94 77 6756287</p>
          <h2 className="text-lg font-semibold mt-4">Email:</h2>
          <p className="text-gray-600">afras975@gmail.com</p>
    
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
