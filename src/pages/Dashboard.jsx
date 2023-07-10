import FooterDashboard from "../components/FooterDashboard";
import NavbarDashboard from "../components/NavbarDashboard";
// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
// import { Menu, Transition } from "@headlessui/react";

export default function Dashboard() {
  //   const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900"
      >
        {/* Page Header */}
        <NavbarDashboard />
        {/* END Page Header */}

        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full">
          {/* Page Section */}
          <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
            {/*

            ADD YOUR MAIN CONTENT BELOW

            */}

            {/* Placeholder */}
            <div className="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64 dark:bg-gray-800 dark:border-gray-700">
              Content (max width 1280px)
            </div>
            {/*
      
            ADD YOUR MAIN CONTENT ABOVE
                  
            */}
          </div>
          {/* END Page Section */}
        </main>
        {/* END Page Content */}

        {/* Page Footer */}
            <FooterDashboard />
        {/* END Page Footer */}
      </div>
      {/* END Page Container */}
    </>
  );
}
