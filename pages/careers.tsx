import Image from "next/image"
import Link from "next/link"

import testimonials from "./testimonials.ts"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CareersPage() {
  return (
    <section>
      <header>
        <h1 className="font-alt my-4 text-3xl font-extrabold leading-tight lg:text-4xl">
          Join{" "}
          <span className="relative bg-gradient-to-r from-red-500 to-red-700 bg-clip-text pr-1 font-normal text-transparent">
            Brainwave 🧠{" "}
          </span>{" "}
          - Innovate with Us!
        </h1>
      </header>

      <section className="container my-8 flex flex-col items-center gap-8">
        <h2
          className=" bg-clip-text font-alt text-3xl font-extrabold leading-tight text-muted-foreground lg:text-4xl"
          role="img"
          aria-label="brain waves"
        >
          💡 Discover the Benefits of{" "}
          <span className="relative bg-gradient-to-r from-red-500 to-red-700 font-normal text-transparent">
            Joining Us
          </span>
        </h2>
        <article className="grid w-full gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a3 3 0 011.804 5.392v1.303c0 1.484.905 2.775 2.197 3.34a.441.441 0 00.033.014 2.25 2.25 0 11-4.07 0 .425.425 0 00.033-.015 3.751 3.751 0 002.197-3.34V6.892A3 3 0 0112 1.5zm.75 3a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-1.685 11.764a3 3 0 01.93 6.736V23.5a.75.75 0 01-1.5 0v-.499a3 3 0 01.93-6.736.75.75 0 10.64-1.357 3.75 3.75 0 00-2.451 3.417v4.174a.75.75 0 001.5 0v-4.174a2.25 2.25 0 114.297 0v4.174a.75.75 0 001.5 0v-4.174a3.75 3.75 0 00-2.451-3.417.75.75 0 10-.64 1.357z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              title: "Work-life Balance",
              description:
                "Flexible hours, mandatory vacations, and remote work possibilities.",
              ariaLabel: "An icon representing work life balance",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.003 7.6V9h14.5v-.9a5.5 5.5 0 00-5.5-5.5h-.5a5.5 5.5 0 00-5.5 5.5H8V3.6a3.5 3.5 0 00-3.48 3.2H8zm0 1.5v9.3a3.5 3.5 0 01-3.5-3.5h1.5v-4H4.37a5.5 5.5 0 005.13 4v-5.8H8zm9.18 6.24H12.5v-1.5h4.19a.66.66 0 100-1.32H12.5v-1.5h4.19a2.16 2.16 0 010 4.32zM8 19.5v-1.4h5.72c.192.184.4.349.62.49H8zm4.01-11.9h2.5a3.5 3.5 0 01-2.28 3.28zm3.78 3.28a4.98 4.98 0 001.73-3.28h-1.53a3.373 3.373 0 01-1.735 2.258A4.854 4.854 0 0015.79 10.9z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              title: "Professional Growth",
              description:
                "Access to industry events, courses, mentors, and internal promotions.",
              ariaLabel: "An icon representing professional growth",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.25 18.5a.75.75 0 010-1.5H8a7.5 7.5 0 106.603-3.75H17a.75.75 0 010 1.5h-2.052c-.004 0-.008 0-.012-.002h-.012a.75.75 0 01-.72-.748V12.5a.75.75 0 111.5 0v.281A8.937 8.937 0 0118.409 10.5H16.75a.75.75 0 110-1.5h1.749a8.938 8.938 0 01-1.84-3.991L15.566 5v1.03a7.467 7.467 0 00-5.696 2.5H5.25a.75.75 0 010-1.5h4.328C10.59 5.564 12.185 4.496 14 4.13V2.25a.75.75 0 011.39-.315l1.97 3.287a.75.75 0 01-.642 1.13h-1.718a7.478 7.478 0 001.333 2.5h.719a8.983 8.983 0 003.455 3.032A9 9 0 114 12.25a.75.75 0 111.5 0v1.031c-.003.166-.013.33-.033.493l-.465.057V12.5a.75.75 0 111.5 0v3.5a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h1.205a7.555 7.555 0 01-.054-.781V12.95a8.996 8.996 0 001.85 3.828v.222a2.25 2.25 0 104.5 0v-.222a8.96 8.96 0 002.6-.427 7.463 7.463 0 001.791 1.448H16.75a.75.75 0 010 1.5H7.25zm6.659-6.5a7.462 7.462 0 00-.02 1.678c.367.043.744.073 1.111.088a7.43 7.43 0 00.033-.768 8.949 8.949 0 00-1.123-4.425 5.967 5.967 0 01-5.342 2.918h-.738a8.803 8.803 0 00-.602 3h.842a7.467 7.467 0 005.739-2.491zm.091 2.97a5.98 5.98 0 01.02-1.682 6.03 6.03 0 01-1.5-1.065 5.974 5.974 0 01-4.447 2.547c-.367.021-.744.02-1.111 0a6.39 6.39 0 01-.044.77h1.022a7.478 7.478 0 005.725-.57c.11-.042.22-.088.331-.137zm-3.72 3.42H8.406A6.467 6.467 0 0014.358 15H15.5a5.955 5.955 0 01-.7.985 5.97 5.97 0 01-4.52 2h-.193a1.682 1.682 0 010-.594 5.967 5.967 0 002.853-1.502z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M9.431 12.042a2.68 2.68 0 002.553-1.693 7.5 7.5 0 00-5.274-.776 3.164 3.164 0 00-.383 1.3zm7.325 5.297a.75.75 0 111.423.495 2.25 2.25 0 01-1.625 1.588 2.265 2.265 0 01-1.392-.068V20.75a.75.75 0 11-1.5 0v-2a.75.75 0 011.042-.696c.212.093.442.141.675.14h.196c.334-.04.633-.22.881-.472a.75.75 0 01.7-.383zm-.864 1.031c-.089.09-.187.17-.298.237H16.5c.301 0 .588-.188.392-.677-.343.203-.756.391-1.168.44z"
                  />
                </svg>
              ),
              title: "Travel Perks",
              description:
                "Inclusive travel allowances, conference trips, and international collaborations.",
              ariaLabel: "An icon representing travel perks",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.572 14.796C2.4 14.456 2.25 14.073 2.25 13.53V5a.75.75 0 01.75-.75h18a.75.75 0 01.75.75v8.53c0 .543-.15.926-.322 1.266-.159.32-.352.614-.523.896-2.04 3.47-3.905 5-6.155 5h-4.5c-1.176 0-1.694-.392-2.217-1.068-.296-.387-.633-.927-1.061-1.433-.561-.646-1.272-1.195-2.28-1.195a1.989 1.989 0 00-1.195.395l-.01.008c-.222.18-.513-.062-.423-.332zm13.918 1.055c-2.04 1.18-5.941 1.18-7.98 0-1.765 0-2.935 1.316-3.897 2.469-.278.33-.838.053-.676-.38a2.884 2.884 0 011.853-1.8c.733-.244 1.508-.222 1.994.195.264.228.519.552.766.871.236.308.458.594.69.872.417.548.794.952 1.379.952h4.5c1.497 0 3.12-1.355 5.06-4.231a12.033 12.033 0 00.458-.702c.187-.319.042-.751-.546-.373-2.542 1.537-5.58 1.537-8.121 0-.227-.137-.291-.443-.097-.667a.492.492 0 01.553-.148c2.452.864 5.194.346 7.07-.41A.492.492 0 0121.5 13.53V5.75h-17V13.53c0 .192.082.42.225.668.197.353.484.717.78 1.158.126-.62.486-1.21 1.041-1.654.925-.75 2.1-.88 3.253-.475 2.04 1.18 5.941 1.18 7.98 0 .2-.189.51-.184.7.012.19.195.184.51-.012.7a.497.497 0 01-.07.055 10.49 10.49 0 01-.675.384zm-8.44-8.876a.5.5 0 00-.68.023L7.07 8.278l-.94-.941a.502.502 0 00-.707 0l-.353.354a.5.5 0 000 .707L6.365 9.8a.502.502 0 00.728-.022l1.525-1.47a.5.5 0 00-.024-.707l-.544-.517zm5 0a.5.5 0 00-.68.023L12.07 8.278l-.94-.941a.502.502 0 00-.707 0l-.354.354a.501.501 0 000 .707L11.365 9.8a.502.502 0 00.728-.022l1.525-1.47a.5.5 0 00-.024-.707l-.544-.517zm2.698 1.135a.5.5 0 01.708 0l.354.353a.501.501 0 010 .707L17.525 9.8a.502.502 0 01-.728-.022l-1.525-1.47a.5.5 0 01.024-.707l.544-.518a.5.5 0 01.68.023L17.43 8.278l.818-.818z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              title: "Modern Office",
              description:
                "Located in London, with cutting-edge facilities, stocked kitchen, and creative spaces.",
              ariaLabel: "An icon representing a well equipped office",
            },
          ].map(({ title, description, icon, ariaLabel }, idx) => (
            <div
              className="relative cursor-pointer rounded-lg border-r-bg p-6 text-center shadow-md transition-all hover:scale-[0.99] hover:shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-300"
              role="contentinfo"
              key={idx}
            >
              <div
                role="img"
                aria-label={ariaLabel}
                className="artoise-gradient mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-white"
              >
                {icon}
              </div>
              <h3 className="font-alt text-xl font-bold mb-1">{title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </article>
      </section>

      <div className="my-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <section className="relative block h-full w-full overflow-auto rounded-lg border-r-bg mix-blend-multiply transition-all">
          <video
            className="flex h-[32rem] w-full items-center justify-center object-cover transition-opacity duration-500"
            loop
            autoPlay
            muted
          >
            <source
              src="https://res.cloudinary.com/doisduek1/video/upload/v1689711288/examples/pexels-mart-production-8403781-1_fbqciq.mp4"
              type="video/mp4"
            />
          </video>
        </section>
        <section className="rounded-lg bg-[rgba(253,202,86,.1)] p-8 backdrop-blur-lg backdrop-soft-light backdrop-filter lg:col-span-2">
          <article className="flex items-start justify-start md:justify-between">
            <div
              className={cn(
                "bg-background -mr-5 rounded-lg p-4 shadow-xl shadow-[rgba(0,0,0,0.4)]",
                testimonials[0].signature === "Mike" &&
                  "bg-green-200 dark:bg-green-800"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-16 w-16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.08 1.15c.23-.33.61-.53 1.02-.5.98.07 1.74.3 2.37.68.65.38 1.16.94 1.52 1.58.81 1.35.99 3.32.83 4.73a16.5 16.5 0 01-.37 1.87c.39-.02.8-.01 1.22.02.24-1.7.22-3.42.05-4.48-.1-.53-.25-.9-.38-1.14-.13-.23-.23-.32-.28-.35-.13-.1-.3-.25-.38-.29-.24-.12-.51-.02-.65.12-.19.2-.28.27-.6.08-.12-.07-.18-.16-.21-.17-.03-.02-.08.05-.29.13-.25.1-.5.12-.73.08-.23-.03-.44-.14-.6-.31-.27-.28-.36-.64-.42-.96l-.1-.55c-.03-.16-.07-.32-.12-.43a.771.771 0 00-.28-.31 1.16 1.16 0 01-.32-.96c.01-.04.01-.08.02-.13.08-.36.19-.83-.14-1.24a4.083 4.083 0 00-1.3-1.06c-.37-.2-.92.185-1.26.456a6.99 6.99 0 00-1.55 1.72c-.55.842-.6 1.47-.63 1.98-.01.285-.02.513-.07.734a4.72 4.72 0 01-.86.76c-.32.24-1.01.345-1.63.455-.82.145-1.67.295-2.09.94-.28.43-.49 1.16-.66 1.94l-.02.09-.61.06-1.13 5.99c-.16.83.7 1.47 1.45 1.03.06.01.12.02.19.03.46-.56.67-.88 1.12-1.17zM12 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-8 text-left">
              <h2 className="font-alt mb-1 text-xl font-bold uppercase">
                {testimonials[0].role}
              </h2>
              <div role="img" aria-label="green square icon">
                {testimonials[0].signature}
                <ItemCounter />
              </div>
            </div>
          </article>
          <p className="artrata-gradient mb-6 mt-4 text-lg leading-snug text-colorCon background-alt w-full p-[1px] ">
            “{" "}
            <span
              className={cn(
                "bg-popover block w-full whitespace-break-spaces rounded-lg p-4 text-black shadow",
                testimonials[0].signature === "Mike" &&
                  "bg-[rgb(242,113,45)] dark:bg-[rgb(255,45,0)]"
              )}
            >
              {testimonials[0].quote}
            </span>
            ”
          </p>
          <footer className="flex items-center">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="mr-3 h-3 w-3 cursor-pointer rounded-full bg-slate-200 transition-all hover:shadow-lg focus-visible:shadow-lg"
              />
            ))}
          </footer>
        </section>
      </div>

      <section className="container my-8 flex flex-col items-center gap-8">
        <h2
          className="font-alt bg-clip-text text-3xl font-extrabold leading-tight text-muted-foreground lg:text-4xl"
          role="img"
          aria-label="london bridge with blue skies"
        >
          🌉 Co-Create in{" "}
          <span className="relative bg-gradient-to-r from-red-500 to-red-700 font-normal text-transparent">
            London{" "}
          </span>
          with Us
        </h2>
        <article className="grid w-full gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              imagePath: `https://res.cloudinary.com/doisduek1/image/upload/v1689711288/examples/photo-of-people-walking-on-sidewalk_dijihm.jpg`,
              title: "Creativity",
              description: "Inspiration is around every corner.",
              ariaLabel:
                "A group of people walking next to a red double decker bus",
            },
            {
              imagePath: `https://res.cloudinary.com/doisduek1/image/upload/v1689711288/examples/black-led-flat-screen-tv-computer_onwbz5.jpg`,
              title: "Innovation",
              description: "Tech hub of Europe.",
              ariaLabel:
                "A black LED flat screened TV computer mounted on the wall",
            },
            {
              imagePath: `https://res.cloudinary.com/doisduek1/image/upload/v1689711288/examples/group-of-people-inside-room_ehtxee.jpg`,
              title: "Networking",
              description: "Meet great minds at events.",
              ariaLabel: "A group of people talking in a conference room",
            },
            {
              imagePath: `https://res.cloudinary.com/doisduek1/image/upload/v1689711288/examples/architectural-photography-of-city-607058_grzns0.jpg`,
              title: "Diversity",
              description: "Meet people from all over the world.",
              ariaLabel:
                "A group of skyscrapers in London with the Swiss Re tower in the centre",
            },
          ].map(({ imagePath, title, description, ariaLabel }, idx) => (
            <div
              key={idx}
              className="relative h-[32rem] cursor-pointer overflow-hidden rounded-lg border-r-bg shadow-md transition-all hover:scale-[0.99] hover:shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-300"
            >
              <Image
                fill
                src={imagePath}
                alt={ariaLabel}
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover mix-blend-multiply"
              />
              <div className="relative z-10 p-6 text-center text-white">
                <h3 className="font-alt text-xl font-bold mb-1">{title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </article>
      </section>
      <section className="relative my-24 text-center ">
        <h2
          className="font-alt text-3xl font-extrabold leading-tight lg:text-4xl"
          role="contentinfo"
        >
          <span className="relative bg-gradient-to-r from-indigo-500 to-blue-500 font-normal text-transparent">
            🚀{" "}
          </span>
          We&apos;re Hiring!
        </h2>
        <p className="text-muted-foreground text-lg">
          Join us on our mission to transform the future. View open positions:
        </p>
        <div className="mt-6">
          <Link
            href="/careers"
            role="link"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            See Jobs
          </Link>
        </div>
      </section>
    </section>
  )
}

function ItemCounter() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="flex items-center space-x-2">
      <button
        disabled={count === 0}
        onClick={() => setCount(count - 1)}
        className={cn(
          buttonVariants({ size: "lg" }),
          "mr-2 inline-flex items-center rounded bg-slate-100 p-2 text-slate-900 hover:bg-slate-200 disabled:opacity-50"
        )}
      >
        <MinusIcon className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="inline-flex flex-1 items-center text-center text-lg font-bold">
        {count}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className={cn(
          buttonVariants({ size: "lg" }),
          "mr-2 inline-flex items-center rounded bg-slate-100 p-2 text-slate-900 hover:bg-slate-200"
        )}
      >
        <PlusIcon className="h-4 w-4 disabled:opacity-50" aria-hidden="true" />
      </button>
    </div>
  )
}

function MinusIcon({ className, ...props }) {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5z"></path>
    </svg>
  )
}

function PlusIcon({ className, ...props }) {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M13 7v4h6v2h-6v4h-2v-4H5v-2h6V7z"></path>
    </svg>
  )
}