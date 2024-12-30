import React from "react";
import {
  Home as MdHome,
  Business as MdBusiness,
  LocalOffer as MdLocalOffer,
  Subscriptions as MdSubscriptions,
  Event as MdEvent,
  Notifications as MdNotifications,
  Settings as MdSettings,
  ExitToApp as MdExitToApp,
} from "@mui/icons-material";

const Sidebar = () => {
  const menuItems = [
    { icon: <MdHome />, label: "Dashboard", link: "#" },
    { icon: <MdBusiness />, label: "Property Info", link: "#" },
    { icon: <MdLocalOffer />, label: "Promotions", link: "#" },
    { icon: <MdSubscriptions />, label: "Subscriptions", link: "#" },
    { icon: <MdEvent />, label: "Events", link: "#" },
    { icon: <MdNotifications />, label: "Notifications", link: "#" },
    { icon: <MdSettings />, label: "Settings", link: "#" },
    { icon: <MdExitToApp />, label: "Logout", link: "#" },
  ];

  return (
    <nav className="w-64 bg-blue-800 text-white p-6 flex flex-col">
      <h1 className="text-2xl font-semibold mb-10">Property Dashboard</h1>
      <ul className="space-y-6">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="flex items-center hover:text-blue-200"
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
