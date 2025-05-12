import Image from "next/image";

const avatars = [
  { src: "/avatars/avatar1.jpg", style: "top-0 left-1/4" },
  { src: "/avatars/avatar2.jpg", style: "top-10 right-20" },
  { src: "/avatars/avatar3.jpg", style: "bottom-14 left-5" },
  { src: "/avatars/avatar4.jpg", style: "bottom-0 right-1/3" },
  { src: "/avatars/avatar5.jpg", style: "top-1/2 left-0" },
  { src: "/avatars/avatar6.jpg", style: "bottom-6 right-10" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-blue-50 overflow-hidden pb-16">
      {/* Decorative doodles (SVG or absolute positioned shapes) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Example background shapes */}
        <div className="absolute w-96 h-96 bg-blue-100 rounded-full -top-24 -left-24 opacity-50"></div>
        <div className="absolute w-72 h-72 bg-blue-200 rounded-full top-40 right-0 opacity-40"></div>
        {/* Add SVG lines/doodles here */}
      </div>
      {/* Avatars */}
      {avatars.map((avatar, idx) => (
        <div
          key={idx}
          className={`absolute w-20 h-20 rounded-full ring-4 ring-white shadow-lg overflow-hidden ${avatar.style}`}
        >
          <Image
            src={avatar.src}
            alt={`Avatar ${idx + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      <div className="relative z-10 flex flex-col items-center pt-32">
        <span className="uppercase tracking-wide text-gray-500 font-semibold mb-2 text-sm">
          Careers at Intercom
        </span>
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">
          Be a part of <br />
          something great
        </h1>
        <button className="mt-2 mb-8 px-6 py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition">
          See open roles &rarr;
        </button>
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Your next big career move</h2>
          <p className="text-gray-600 text-lg">
            We’re an innovative, fast-growing company—with all the opportunity for impact and career growth that comes with the territory. There’s a lot of great work being done here by a lot of great people.
          </p>
        </div>
      </div>
    </section>
  );
}