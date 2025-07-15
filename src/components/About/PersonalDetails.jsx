import AboutList from "./AboutList";

const PersonalDetails = () => {
  return (
    <section className="align-element flex flex-col items-center justify-center py-10 lg:mt-0 mt-20">
      <div className="max-w-6xl ">
        <h1 className="text-3xl font-black mb-10 ">About Me</h1>

        <div className="flex flex-col gap-5 mt-8">
          <div className="flex flex-col self-start">
            <div className="flex flex-col items-start justify-start gap-1">
              <h5 className="text-xl font-black">CANSU UGUR</h5>
              <h6 className="text-gray-500 font-medium">Front-end Developer</h6>
            </div>
          </div>
          <hr className="border-1 w-full border-gray-200" />
          <div>
            <p className="text-gray-500 text-base font-medium ">
              Hi, I'm Cansu Uğur — a passionate Frontend Developer focused on
              building modern, scalable, and user-friendly web applications.
              <br /> <br />I specialize in React, Next.js, TypeScript, and UI/UX
              design, crafting seamless and responsive digital experiences. My
              approach blends clean, maintainable code with visually compelling
              interfaces, ensuring both performance and aesthetics.
              <br /> <br />
              Driven by a love for turning ideas into functional products, I
              create high-performance web solutions that enhance user engagement
              and meet real-world needs. With a solid foundation in modern web
              technologies, I strive to deliver intuitive, optimized, and
              future-proof applications.
            </p>
          </div>
          <hr className="border-1 w-full border-gray-200" />
          <AboutList />
        </div>
      </div>
    </section>
  );
};
export default PersonalDetails;
