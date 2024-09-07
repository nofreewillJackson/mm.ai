import Image from 'next/image';

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-blue-400">
      {/* ... */}

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
            <div className="relative w-8 h-8">
              <Image
                src="/button1.svg"
                alt="X"
                width={32}
                height={32}
                className="absolute transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/button1_2.svg"
                alt="Y"
                width={32}
                height={32}
                className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
