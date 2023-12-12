import Header from "../header/Header";
import Link from "../Link/Link";

function Sidebar() {
  const links = [
    { url: "/user/reading", title: "Reading Now", id: 0 },
    { url: "/user/future-reading", title: "Wants to Read", id: 1 },
    { url: "/user/past-reading", title: "Read", id: 2 },
    { url: "/user/collection", title: "Collection", id: 3 },
    { url: "/user/search", title: "Search", type: "search", id: 4 },
    { url: "/auth/sign-in", title: "Sign in", type: "auth", id: 5 },
  ];

  return (
    <nav className="sticky top-0 left-0">
      <Header />
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link url={link.url} title={link.title} type={link.type} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
