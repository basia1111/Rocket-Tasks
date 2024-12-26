import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { IoExit, IoRocket } from "react-icons/io5";

function Header() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-full py-4 border-b border-space-primary/20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <h1 className="font-Montserrat text-xl font-bold text-space-primary-dark hover:text-space-primary transition-colors duration-300">
              RocketTasks
            </h1>
          </Link>
          <div>
            {user ? (
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-space-primary/10  flex items-center justify-center border border-space-primary/30">
                    <span className="text-space-primary-dark text-sm font-medium">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-space-primary-dark font-medium hidden sm:block">
                    {user.name}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-space-primary-dark hover:text-space-primary  transition-colors duration-300 text-sm font-medium"
                >
                  <span>Sign out</span>
                  <IoExit className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <Link
                  to="/login"
                  className="text-space-primary-dark hover:text-space-primary  transition-colors duration-300 text-base font-medium  relative group"
                >
                  <span>Sign in</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-primary group-hover:w-full transition-all duration-300" />
                </Link>

                <Link
                  to="/register"
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-primary/10 hover:bg-space-primary/15 border border-space-primary/30 hover:border-space-primary/50 text-space-primary-dark hover:text-space-primary transition-all duration-300"
                >
                  <span className="text-base font-medium">Sign up</span>
                  <IoRocket className="w-3.5 h-3.5 group-hover:rotate-12   transition-transform duration-300" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
