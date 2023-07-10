import FooterDashboard from "../components/FooterDashboard";
import NavbarDashboard from "../components/NavbarDashboard";
// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
// import { Menu, Transition } from "@headlessui/react";

export default function Dashboard() {
  //   const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
   
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900"
      >
       
        <NavbarDashboard />
        {/* END Page Header */}

        {/* Page Content */}
        <main id="page-content" className="flex justify-center items-center min-h-[87vh]">
          <h2 className="text-5xl font-bold">Analytics</h2>
        
        </main>
       
            <FooterDashboard />
        {/* END Page Footer */}
      </div>
      {/* END Page Container */}
    </>
  );
}
