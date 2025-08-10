import { useState } from "react";

export default function TrailerModal({trailerkey,trailerName} : {trailerkey : string,trailerName: string}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="text-white cursor-pointer px-4 py-2 rounded-lg shadow-md"
      >
        ▶ Play Trailer
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.7)] z-50">
          <div className="bg-black rounded-xl overflow-hidden shadow-lg w-[90%] max-w-3xl">
            <div className="flex justify-end p-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[500px]"
                src={`https://www.youtube.com/embed/${trailerkey}`}
                title={trailerName}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
