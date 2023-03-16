import Logo from "./util/Logo";

const Nav = () => {
  return (
    <div className="w-full h-20 fixed flex justify-center items-center overflow-hidden">
      <div className="max-w-7xl w-full h-full flex-1 relative flex justify-between items-center px-2 py-2">
        <div className="h-full relative">
          <Logo />
        </div>
        {/* // btn  */}
        <div className="relative">
          <button className="btn btn-square bg-logoSun hover:bg-logoRay hover:shadow-lg ring-0 border-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
