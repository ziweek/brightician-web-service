export default function MemberView() {
  return (
    <>
      <div className="lg:flex-grow px-5 md:py-24 flex flex-col  md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Meet our Team
          </h2>

          <p className="text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-20 gap-y-8 lg:gap-y-12">
          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Radu Florin"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                John McCulling
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                Founder / CEO
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by christian ferrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                Kate Berg
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                CFO
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Ayo Ogunseinde"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                Greg Jackson
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                CTO
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Midas Hofstra"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                Robert Greyson
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                Creative Director
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Elizeu Dias"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                John Roberts
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                Investor Relations
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Elizeu Dias"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                John Roberts
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                Investor Relations
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Elizeu Dias"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                John Roberts
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                Investor Relations
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Elizeu Dias"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                John Roberts
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                Investor Relations
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Elizeu Dias"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                John Roberts
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                Investor Relations
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Matheus Ferrero"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                Judy Amandez
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                Senior Art Director
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Leilani Angel"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                Rahul Williams
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                Creative Director
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1562904403-a5106bef8319?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Jernej Graj"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 md:text-lg font-bold text-center">
                Ari Ferris
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                Marketing Analyst
              </p>

              <div className="flex justify-center">
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
