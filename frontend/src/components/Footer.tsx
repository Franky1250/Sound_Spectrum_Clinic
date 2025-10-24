import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
            <a href="#" className="flex items-center">
              <img 
                src="/images/sound_spectrum_logo.png" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain transition-all duration-300" 
                alt="Sound Spectrum Clinic Logo" 
              />
            </a>
            </div>
            <p className="text-gray-600 mb-4">
              Your trusted partner in comprehensive ear healthcare. We're
              dedicated to improving your hearing and quality of life.
            </p>
            <div className="flex space-x-4">
              {/* // facebook */}
              <a
                href="#"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaFacebook className="w-6 h-6 text-blue-500" />
              </a>
              {/* // instagram */}
              <a
                href="https://www.instagram.com/soundspectrum_hearing_clinic?igsh=Y3lyOHlhcXh5ajAx&utm_source=qr"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaInstagram className="w-6 h-6 text-pink-500" />
              </a>
              {/* // twitter */}
              <a
                href="#"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaXTwitter className="w-6 h-6 text-black" />
              </a>

              {/* // Youtube */}
              <a
                href="#"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaYoutube className="w-6 h-6 text-red-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#appointment"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Hearing Assessments
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Hearing Aid trial & Fitting 
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Ear Wax Removal
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Tinnitus Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Speech Therapy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Occupational Therapy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CiLocationOn className="h-5 w-5 text-clinic-primary mt-1" />
                <span className="text-gray-600">
                  Branch 1:
                  Plot no. 33, <br />
                  Old Ag Colony, <br />
                  Unit 4, <br />
                  Madhusudan Nagar, Bhubaneswar, Odisha, <br />
                  751022
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CiLocationOn className="h-5 w-5 text-clinic-primary mt-1" />
                <span className="text-gray-600">
                  Branch 2:
                  1st Floor, <br />
                  Dhala Market Complex, <br />
                  College Road, <br />
                  Nimapada, Puri, Odisha, <br />
                  752106
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <IoCallOutline className="h-5 w-5 text-clinic-primary" />
                <span className="text-gray-600">+91 916 717 7765</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdOutlineEmail className="h-5 w-5 text-clinic-primary" />
                <span className="text-gray-600">
                  soundspectrumhearingclinic@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Sound Spectrum Hearing Clinic. All rights
              reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-clinic-primary text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-clinic-primary text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-clinic-primary text-sm"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
