export default function Navbar() {
  return (
    <header className="h-[100px] backdrop-blur-sm fixed w-full z-10">
      <nav className="flex items-center justify-between px-[20px] py-[40px]">
        <h1 className="heading text-[16px] uppercase">Jason Blackburn</h1>
        <button className="uppercase font-bold">Menu</button>
      </nav>
    </header>
  );
}
