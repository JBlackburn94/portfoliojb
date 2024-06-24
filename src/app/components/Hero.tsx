export default function Hero() {
  return (
    <section className="flex flex-col items-center px-[41px] py-[50px]">
      <div className="">
        <h2 className="font-bold">Creative</h2>
        <h1 className="heading uppercase">
          Full Stack <br /> Developer
        </h1>
        <div className="flex">
          <p className="font-bold text-[16px]">React</p>
          <p className="ml-[20px] font-bold text-[16px]">Next.js</p>
          <p className="ml-[20px] font-bold text-[16px]">TypeScript</p>
          <p className="ml-[20px] font-bold text-[16px]">GSAP</p>
        </div>
      </div>
    </section>
  );
}
