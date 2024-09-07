// app/page.tsx
import Image from 'next/image';

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-blue-400">
      <div className="flex flex-col items-center justify-center w-full px-4 py-12 sm:p-24">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="mb-12 w-full max-w-sm sm:max-w-lg">
            <Image
              src="/Logo.svg"
              alt="Malleable Mind Logo"
              width={600}
              height={144}
              priority
              className="w-full"
            />
          </div>

          <div className="definition-container mb-12 text-center sm:text-left w-full max-w-xs sm:max-w-md text-monospace text-blue-400">
            <span className="font-bold">malleable</span> (mal-ee-uh-buhl) <br />
            <span>adj. A canvas for infinite possibilities, forever </span>
            <span id="unfolding" className="unfolding">unfolding</span>
          </div>

          <div className="mb-12 w-full max-w-sm sm:max-w-lg">
            <Image
              src="/hellscapeLogo.svg"
              alt="Surviving the hellscape of post·mod·ern·ism"
              width={450}
              height={450}
              priority
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-6 w-full">
          {[
            "https://malleablemind.ai/j-garden",
            "https://malleablemind.ai/learn",
            "https://malleablemind.ai/templates",
            "https://malleablemind.ai/deploy",
          ].map((href, index) => (
            <a
              key={index}
              href={href}
              className="group rounded-lg border border-transparent px-6 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl sm:text-3xl font-semibold flex items-center justify-center">
                <span className="transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                  {">"}
                </span>
              </h2>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes typing {
          0% {
            width: 0;
          }
          70% {
            width: 9ch;
          }
          85% {
            width: 9ch;
          }
          100% {
            width: 0;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #4dabf7;
          }
        }

        .unfolding {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 4s steps(40, end) infinite, blink-caret 0.75s step-end infinite;
          border-right: 2px solid #4dabf7;
          vertical-align: bottom;
        }
      `}</style>
    </main>
  );
}
