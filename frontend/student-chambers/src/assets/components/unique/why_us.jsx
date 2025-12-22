import { useEffect } from "react";

export default function WhyUs() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section className="section-padding bg-primary-White">
      <div className="max-w-container mx-auto px-4">

        {/* Heading */}
        <div className="mb-12">
          <h2>Why Student Chambers</h2>
          <p className="mt-2 max-w-xl">
            Comfortable, secure, and conveniently located accommodation designed
            for focused student living.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* Features */}
          <ul className="space-y-6">

            <li className="flex items-center gap-4">
              <i data-lucide="wifi" className="w-6 h-6 text-secondary-teal"></i>
              <p>Free 24/7 high-speed Wi-Fi</p>
            </li>

            <li className="flex items-center gap-4">
              <i data-lucide="map-pin" className="w-6 h-6 text-secondary-teal"></i>
              <p>Multiple transport options nearby</p>
            </li>

            <li className="flex items-center gap-4">
              <i data-lucide="shopping-bag" className="w-6 h-6 text-secondary-teal"></i>
              <p>Walking distance to malls and shops</p>
            </li>

            <li className="flex items-center gap-4">
              <i data-lucide="shield-check" className="w-6 h-6 text-secondary-teal"></i>
              <p>Secure access and tight on-site security</p>
            </li>

          </ul>

          {/* Visual placeholder */}
          {/* <div > */}
           <img className=" flex items-center justify-center text-center" src={" https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"}/>

          {/* </div> */}

        </div>
      </div>
    </section>
  );
}
