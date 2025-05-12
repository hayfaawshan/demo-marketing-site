import React from "react";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";

const people = [
  { name: "Person 1", img: "/avatars/avatar-1.png" },
  { name: "Person 2", img: "/avatars/avatar-2.png" },
  { name: "Person 3", img: "/avatars/avatar-3.png" },
  { name: "Person 4", img: "/avatars/avatar-4.png" },
  { name: "Person 5", img: "/avatars/avatar-5.png" },
  { name: "Person 6", img: "/avatars/avatar-6.png" },
];

export function HeroSection() {
  return (
    <section className="relative bg-blue-50 py-16 px-4 flex flex-col items-center text-center overflow-hidden">
      <div className="text-xs font-semibold tracking-widest text-blue-800 mb-4">
        CAREERS AT INTERCOM
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Be a part of<br />something great
      </h1>
      <Button className="mb-10" size="lg">
        See open roles &rarr;
      </Button>
      {/* Floating Avatars */}
      <div className="absolute inset-0 pointer-events-none">
        {/* You can position avatars in a circle or random for demo */}
        <div className="absolute left-10 top-8 animate-float-slow">
          <Avatar>
            <img src={people[0].img} alt={people[0].name} />
          </Avatar>
        </div>
        <div className="absolute right-10 top-20 animate-float">
          <Avatar>
            <img src={people[1].img} alt={people[1].name} />
          </Avatar>
        </div>
        <div className="absolute left-1/4 top-1/2 animate-float-fast">
          <Avatar>
            <img src={people[2].img} alt={people[2].name} />
          </Avatar>
        </div>
        <div className="absolute right-1/4 bottom-12 animate-float-faster">
          <Avatar>
            <img src={people[3].img} alt={people[3].name} />
          </Avatar>
        </div>
        <div className="absolute left-24 bottom-20 animate-float">
          <Avatar>
            <img src={people[4].img} alt={people[4].name} />
          </Avatar>
        </div>
        <div className="absolute right-24 bottom-8 animate-float-slow">
          <Avatar>
            <img src={people[5].img} alt={people[5].name} />
          </Avatar>
        </div>
        {/* You can add SVGs for lines and sparkles as background decoration */}
      </div>
      <div className="relative z-10 mt-32 max-w-2xl mx-auto bg-white/80 rounded-lg p-8 shadow">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Your next big career move
        </h2>
        <p className="text-gray-700">
          We’re an innovative, fast-growing company—with all the opportunity for impact and career growth that comes with the territory. There’s a lot of great work being done here by a lot of great people.
        </p>
      </div>
      <style jsx global>{`
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-fast { animation: float 5s ease-in-out infinite; }
        .animate-float-faster { animation: float 3s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0px);}
          50% { transform: translateY(-20px);}
        }
      `}</style>
    </section>
  );
}