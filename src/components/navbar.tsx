const Navbar = () => {
  return (
    <div className="navbar bg-base-100 drop-shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost font-bold italic text-xl">Wheels</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
