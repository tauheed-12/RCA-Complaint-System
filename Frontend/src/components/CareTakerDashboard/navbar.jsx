import { Link } from "react-router-dom";
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";

export function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Hostel 1
        </span>
      </Navbar.Brand>
      <div className="flex items-center space-x-4 md:order-2">
        <DarkThemeToggle />
        <Button>Notifications</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/">
          Dashboard
        </Navbar.Link>
        <Navbar.Link as={Link} to="/check-status">
          Check Status
        </Navbar.Link>
        <Navbar.Link as={Link} to="/feedback">
          Feedback
        </Navbar.Link>
        <Navbar.Link as={Link} to="#">
          Suggestions
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
