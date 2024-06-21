const Footer = () => {
    return (
      <footer className=" bg-gray-800 p-4 min-h-[100px] flex justify-between items-center text-gray-300">
        <div className="flex space-x-4">
            <div>
          <a href="https://facebook.com" className="">
          <i class="ri-facebook-box-line bg-white"></i>
          </a>
          </div>
          <a href="https://twitter.com" className="hover:text-white">Twitter</a>
          <a href="https://instagram.com" className="hover:text-white">Instagram</a>
        </div>
        <div className="text-sm">&copy; 2024 Your Company. All rights reserved.</div>
        <div>
          <a href="/contact" className="hover:text-white">Contact Us</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  