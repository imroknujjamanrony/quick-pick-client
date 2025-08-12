import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import googlePlay from '../../assets/download app/792.png';
import appStore from '../../assets/download app/793.png';
import visa from '../../assets/paymentSvg/Clip path group.png';
import mastercard from '../../assets/paymentSvg/List Item SVG.png';
import paypal from '../../assets/paymentSvg/List Item SVG (1).png';
import skrill from '../../assets/paymentSvg/List Item SVG (2).png';
import klarna from '../../assets/paymentSvg/List Item SVG (3).png';
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      {/* Newsletter */}
      <div className="max-w-[80%] mx-auto px-4 py-8 border-b">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Join our newsletter for £10 offs</h3>
            <p className="text-gray-500">
              Register now to get latest updates on promotions & coupons. Don’t worry, we not spam!
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border rounded px-3 py-2 w-64 focus:outline-none"
            />
            <button className="bg-purple-600 text-white px-5 rounded">SEND</button>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          By subscribing you agree to our{" "}
          <a href="#" className="text-purple-600">Terms & Conditions</a> and{" "}
          <a href="#" className="text-purple-600">Privacy & Cookies Policy</a>.
        </p>
      </div>

      {/* Footer Links */}
      <div className="max-w-[80%] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 border-b">
        {/* Help */}
        <div>
          <h4 className="text-xl font-bold mb-3">Do You Need Help?</h4>
          <p className="text-gray-500 mb-3">
            Autoseligen syr. Nek diarsak fröbomba. När antelpol kynoda nynat. Pressa fåmoska.
          </p>
          <p className="font-semibold">Monday-Friday: 08am-9pm</p>
          <p className="text-lg font-bold">0 800 300-353</p>
          <p className="mt-2">Need help with your order?</p>
          <a href="mailto:info@example.com" className="font-semibold">
            info@example.com
          </a>
        </div>

        {/* Make Money */}
        <div>
          <h4 className="text-xl font-bold mb-3">Make Money with Us</h4>
          <ul className="space-y-1">
            <li><a href="#">Sell on Grogin</a></li>
            <li><a href="#">Sell Your Services on Grogin</a></li>
            <li><a href="#">Sell on Grogin Business</a></li>
            <li><a href="#">Sell Your Apps on Grogin</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Sell-Publish with Us</a></li>
            <li><a href="#">Become an Blowwe Vendor</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="text-xl font-bold mb-3">Let Us Help You</h4>
          <ul className="space-y-1">
            <li><a href="#">Accessibility Statement</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Returns & Replacements</a></li>
            <li><a href="#">Shipping Rates & Policies</a></li>
            <li><a href="#">Refund and Returns Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Cookie Settings</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>

        {/* Get to Know */}
        <div>
          <h4 className="text-xl font-bold mb-3">Get to Know Us</h4>
          <ul className="space-y-1">
            <li><a href="#">Careers for Grogin</a></li>
            <li><a href="#">About Grogin</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Grogin Devices</a></li>
            <li><a href="#">Customer reviews</a></li>
            <li><a href="#">Social Responsibility</a></li>
            <li><a href="#">Store Locations</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h4 className="text-xl font-bold mb-3">Download our app</h4>
          <div className="space-y-2">
            <img src={googlePlay} alt="Google Play" className="w-40" />
            <img src={appStore} alt="App Store" className="w-40" />
          </div>
          <div className="flex gap-2 mt-4">
            <a href="#" className="p-2 bg-gray-200 rounded"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-200 rounded"><FaXTwitter /></a>
            <a href="#" className="p-2 bg-gray-200 rounded"><FaInstagram /></a>
            <a href="#" className="p-2 bg-gray-200 rounded"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[80%] mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>
          Copyright © 2024 © Jinstore WooCommerce WordPress Theme. All rights reserved.
          Powered by <a href="#" className="text-purple-600">BlackRise Themes</a>.
        </p>
        <div className="flex gap-3">
          <img src={visa} alt="Visa" className="h-4" />
          <img src={mastercard} alt="Visa" className="h-4" />
          <img src={paypal} alt="PayPal" className="h-4" />
          <img src={skrill} alt="Skrill" className="h-4" />
          <img src={klarna} alt="Klarna" className="h-4" />
        </div>
        <div className="flex gap-4">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Order Tracking</a>
        </div>
      </div>
    </footer>
  );
}
