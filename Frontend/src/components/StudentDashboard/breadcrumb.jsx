import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useLocation } from "react-router-dom";

export function BreadcrumbComponent() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="/" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Breadcrumb.Item key={to}>{value}</Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={to} href={to}>
            {value}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}
