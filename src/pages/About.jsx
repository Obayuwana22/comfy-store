import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        At Comfy, comfort isn’t just a feeling, it’s a lifestyle. We bring you
        beautifully crafted furniture that blends modern style with everyday
        ease. Whether you're furnishing your first apartment or redesigning your
        dream home, our pieces are made to fit your space, your style, and your
        life. From cozy sofas and elegant dining sets to smart storage and
        minimalist accents, Comfy is here to help you create a home you’ll love
        to live in, effortlessly.
        <div className="font-bold">
          Comfort meets craftsmanship. Welcome to Comfy.
        </div>
      </p>
    </>
  );
};

export default About;
