import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      <Link
        className={`nav-link   ${match && "active fw-bolder"}`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default CustomLink;
