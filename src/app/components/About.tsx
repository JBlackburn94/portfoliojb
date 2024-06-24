export default function About() {
  const mainSkills = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "JavaScript",
    },
    {
      id: 4,
      name: "TypeScript",
    },
    {
      id: 5,
      name: "React",
    },
    {
      id: 6,
      name: "Next.js",
    },
    {
      id: 7,
      name: "GSAP",
    },
    {
      id: 8,
      name: "TailwindCSS",
    },
    {
      id: 9,
      name: "SQL",
    },
  ];

  return (
    <section className="about-bg h-screen mt-[61px]">
      <svg
        width="430"
        height="41"
        viewBox="0 0 430 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M430 0H0L319.723 41L430 0Z" fill="black" />
      </svg>
      <div className="px-[41px]">
        <h1 className="heading text-[48px] uppercase text-mainPink mb-[18px]">
          Skills
        </h1>
        <div className="flex flex-wrap">
          {mainSkills.map((mainSkill) => (
            <p
              className="bg-mainPink mb-[42px] px-[12px] py-[10px] rounded-md mr-[14px] font-bold"
              key={mainSkill.id}
            >
              {mainSkill.name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
