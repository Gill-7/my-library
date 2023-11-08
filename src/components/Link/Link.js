import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/Firebase";

function Link({ title, url, type }) {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <NavLink
        to={`/${url}`}
        className={({ isActive }) =>
          isActive
            ? `block text-sidebar-link flex-wrap no-underline my-[5px] mx-0 text-base tracking-wider transition-all duration-200ms ease-in-out pr-0 py-2 hover:text-sidebar-link-hover hover:bg-sidebar-link-bg-hover focus:text-sidebar-link-hover focus:bg-sidebar-link-bg-hover sm:pl-4 md:pl-8 lg:pl-12`
            : "block text-sidebar-link flex-wrap no-underline my-[5px] mx-0 text-base tracking-wider transition-all duration-200ms ease-in-out pr-0 py-2 hover:text-sidebar-link-hover hover:bg-sidebar-link-bg-hover sm:pl-4 md:pl-8 lg:pl-12"
        }
      >
        {!type && title}
        {type === "search" && (
          <div className="flex">
            <div className="mr-1.5 text-base pt-1">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <div>{title}</div>
          </div>
        )}
        {type === "auth" && (
          <div>
            {currentUser ? <span onClick={signOutUser}>Sign out</span> : title}
          </div>
        )}
      </NavLink>
    </div>
  );
}

export default Link;
