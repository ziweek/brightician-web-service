import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between">
          <Link href="/">
            <a className="flex title-font font-medium items-center mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Brightician</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex">
            <Link href="/">
              <a className="mr-7 hidden md:flex">Home</a>
            </Link>
            <Link href="/about">
              <a className="mr-7 hidden md:flex">About</a>
            </Link>
            <Link href="/project">
              <a className="mr-7 hidden md:flex">Project</a>
            </Link>
            <Link href="/member">
              <a className="mr-7 hidden md:flex">Member</a>
            </Link>
            <Link href="https://ziweek.github.io/">
              <a className="mr-7 hidden md:flex">Contact</a>
            </Link>
          </nav>

          <div className="md:hidden flex items-start">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
