
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">MediaElite</div>
      <div className="flex items-center">
        <Link href="/" className="text-gray-300 hover:text-white mx-2">Home</Link>
        <Link href="/about" className="text-gray-300 hover:text-white mx-2">About</Link>
        <input
          type="text"
          placeholder="Search..."
          className="ml-4 px-2 py-1 rounded bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
  );
};

export default Navbar;

