export default function Navbar() {
  return (
    <header className="h-[100px]">
      <nav className="flex items-center justify-between px-[20px] py-[40px] fixed w-full z-10 backdrop-blur-sm">
        <h1 className="heading text-[16px] uppercase">Jason Blackburn</h1>
        <button className="uppercase font-bold">Menu</button>
      </nav>
    </header>
  );
}
