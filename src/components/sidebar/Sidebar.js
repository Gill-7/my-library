import Header from "../header/Header";
import Link from "../Link/Link";

function Sidebar() {
  const links = [
    { url: "reading", title: "Reading Now", id: 0 },
    { url: "future-reading", title: "Wants to Read", id: 1 },
    { url: "past-reading", title: "Read", id: 2 },
    { url: "collection", title: "Collection", id: 3 },
    { url: "search", title: "Search", type: "search", id: 4 },
    { url: "auth", title: "Sign in", type: "auth", id: 5 },
  ];

  return (
    <nav>
      <Header />
      <ul>
        {links.map((link) => (
          <li>
            <Link url={link.url} title={link.title} type={link.type} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
