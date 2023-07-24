function Navbar() {

    const listItems = ['Home','Skills','Projects','Contact Us']
  return (
    <nav className="bg-slate-700 text-white flex py-6 justify-between text-xl">
      <div className="ml-10">LOGO</div>
        <ul className="flex mr-10 space-x-4">
          {listItems.map((e,i)=><li href={`#${e}`} key={i} className="cursor-pointer">{e}</li>)}
        </ul>
    </nav>
  );
}

export default Navbar;
