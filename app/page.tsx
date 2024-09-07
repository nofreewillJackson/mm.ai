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
            <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-blue-400 align-bottom animate-typing">
              unfolding
            </span>
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

        {/* Adjusted grid layout and button sizes */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center w-full max-w-4xl mx-auto">
          {[
            "https://malleablemind.ai/j-garden",
            "https://draw.malleablemind.ai/",
            "https://malleablemind.ai/bot",
            "https://malleablemind.ai/404",
          ].map((href, index) => (
            <a
              key={index}
              href={href}
              className="group flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0">
                {index === 0 ? (
                  <>
                    <Image
                      src="/button1.svg"
                      alt="X"
                      fill
                      className="absolute transition-opacity duration-300 group-hover:opacity-0 object-contain"
                    />
                    <Image
                      src="/button1_2.svg"
                      alt="Y"
                      fill
                      className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 object-contain"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src="/button2.svg"
                      alt="X"
                      fill
                      className="absolute transition-opacity duration-300 group-hover:opacity-0 object-contain"
                    />
                    <Image
                      src="/button2_2.svg"
                      alt="Y"
                      fill
                      className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 object-contain"
                    />
                  </>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
