import React from "react";

const Dashboard = () => {
  return (
    <div>
      {/* Dashboard Overview Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Completed Bookings This Month", value: "256" },
          { title: "Upcoming Bookings", value: "45" },
          { title: "Total Reviews", value: "1,102" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-gray-700"
          >
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Property Info Section */}
      <section className="bg-white shadow-lg rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Property Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Basic Details
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <strong>Location:</strong> Mumbai, India
              </li>
              <li>
                <strong>Rooms:</strong> 25
              </li>
              <li>
                <strong>Floors:</strong> 3
              </li>
              <li>
                <strong>Status:</strong> Active
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Owner Details
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <strong>Owner Name:</strong> John Doe
              </li>
              <li>
                <strong>Contact:</strong> +91 123 456 789
              </li>
              <li>
                <strong>Email:</strong> johndoe@hotel.com
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Promotions & Offers Section */}
      <section className="bg-white shadow-lg rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Promotions & Offers
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Summer Sale",
              description:
                "Get 20% off on all bookings made before the end of June.",
              discount: "20% Off",
            },
            {
              title: "Weekend Getaway",
              description:
                "Enjoy 10% off on weekend stays from Friday to Sunday. Valid for 3-day bookings.",
              discount: "10% Off",
            },
          ].map((promo, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{promo.title}</h3>
                <span className="text-green-600 font-bold">
                  {promo.discount}
                </span>
              </div>
              <p className="text-gray-600">{promo.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscriptions Section */}
      <section className="bg-white shadow-lg rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Subscriptions
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Premium Package</h3>
            <span className="text-green-600 font-bold">Active</span>
          </div>
          <p className="text-gray-600">
            Includes access to advanced analytics, additional room listings, and
            priority support.
          </p>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Basic Package</h3>
            <span className="text-gray-600 font-bold">Expired</span>
          </div>
          <p className="text-gray-600">
            Standard access to room listings and basic support. Upgrade to
            Premium for better features.
          </p>
        </div>
      </section>

      {/* Events & Notifications Section */}
      <section className="bg-white shadow-lg rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Events & Notifications
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Business Summit</h3>
            <span className="text-blue-600 font-bold">Dec 15, 2024</span>
          </div>
          <p className="text-gray-600">
            Join us for an exclusive summit where we discuss the latest trends
            in hospitality. RSVP required.
          </p>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Maintenance Notice</h3>
            <span className="text-orange-600 font-bold">Dec 10, 2024</span>
          </div>
          <p className="text-gray-600">
            Scheduled maintenance for the swimming pool. Please inform guests
            about the temporary closure.
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-white p-6 text-center text-gray-600">
        <p>&copy; 2024 Property Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
