import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/Firebase";

function Link({ title, url, type }) {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <NavLink
        to={`${url}`}
        className={({ isActive }) =>
          isActive
            ? `font-sans xl:text-md block text-sidebar-link flex-wrap no-underline my-[4px] mx-0 text-base tracking-wider transition-all duration-200ms ease-in-out pr-0 py-2 hover:text-sidebar-link-hover hover:bg-sidebar-link-bg-hover focus:text-sidebar-link-hover focus:bg-sidebar-link-bg-hover pl-10`
            : "font-sans xl:text-md block text-sidebar-link flex-wrap no-underline my-[4px] mx-0 text-base tracking-wider transition-all duration-200ms ease-in-out pr-0 py-2 hover:text-sidebar-link-hover hover:bg-sidebar-link-bg-hover pl-10 "
        }
      >
        {!type && title}
        {type === "search" && (
          <div className="flex">
            <div className="pt-[1px]">{title}</div>
            <div className="text-lg pt-[2px] absolute left-[104px]">
              <ion-icon name="search-outline"></ion-icon>
            </div>
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
