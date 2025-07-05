import Bentodemo from './bentogrid';
import { Workflow } from './Workflow';

export const Features = () => {
  return (
    <div className="bg-black text-white py-8 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter">
          Our Process
        </h2>
        <div className="max-w-2xl mx-auto mt-4 sm:mt-6">
          <p className="text-center text-base sm:text-lg md:text-xl text-white/70">
            We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-12 sm:mt-16 md:mt-24 lg:mt-32">
          <Workflow />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-24">
        <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-2xl mx-auto mt-4 sm:mt-6">
          <p className="text-center text-base sm:text-lg md:text-xl text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, odit in facilis mollitia dolorum rerum.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-12 sm:mt-16 md:mt-24 lg:mt-32">
          <Bentodemo />
        </div>
      </div>
    </div>
  );
};