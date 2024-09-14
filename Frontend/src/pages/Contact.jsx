import { SidebarComponent } from "../components/sidebar";
import { BreadcrumbComponent } from "../components/breadcrumb";

const Contact= () => {
  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-800">
      <div className="flex grow">
        {/* Sidebar on the left with fixed width */}
        <aside className="h-full w-64 shrink-0 bg-gray-800">
          <SidebarComponent />
        </aside>

        {/* Main content area */}
        <div className="flex grow flex-col">
          {/* Breadcrumb below the banner and to the right of the sidebar */}
          <div className="bg-gray-800 p-4">
            <BreadcrumbComponent />
          </div>

          {/* Contact Form */}
          <main className="flex-1 p-6">
            <h1 className="mb-4 text-2xl font-bold text-gray-100">
              Contact Us
            </h1>
            <form className="rounded-lg bg-gray-900 p-6 shadow-md">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100"
                  rows={4}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Contact;
