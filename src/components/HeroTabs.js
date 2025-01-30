import React, { useState } from "react";

const HeroTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "CRM",
      services: [
        "Leads, Deals, Contacts, Companies",
        "Quotes, Invoices",
        "Online payments",
        "Sales automation",
        "Rules and triggers",
        "Contact center",
        "Marketing",
        "Sales Intelligence",
      ],
      image:
        "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/crm.png.webp?1734079210752",
      replaces: [
        {
          id: 0,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-zoho.svg?1734079210752",
        },
        {
          id: 1,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-saleforce.svg?1734079210752",
        },
        {
          id: 2,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-hubspot.svg?1734079210752",
        },
      ],
    },
    {
      id: 1,
      label: "Collaboration",
      services: [
        "Chats & video calls",
        "Online meetings",
        "Feed",
        "Calendar",
        "Online documents",
        "Drive",
        "Webmail",
        "Workgroups",
      ],
      image:
        "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/workspace.png.webp?1734079210752",
      replaces: [
        {
          id: 0,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-clickup.svg?1734079210752",
        },
        {
          id: 1,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-sharepoint.svg?1734079210752",
        },
        {
          id: 2,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-smarsheet.svg?1734079210752",
        },
      ],
    },
    {
      id: 2,
      label: "Tasks & Projects",
      services: [
        "Tasks",
        "Projects",
        "Gantt chart",
        "Kanban board",
        "Time tracking",
        "Task and project templates",
        "Task automation",
        "CRM integration",
      ],
      image:
        "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/tasks.png.webp?1734079210752",
      replaces: [
        {
          id: 0,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-jira.svg?1734079210752",
        },
        {
          id: 1,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-trello.svg?1734079210752",
        },
        {
          id: 2,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-asana.svg?1734079210752",
        },
      ],
    },
    {
      id: 3,
      label: "Sites & Stores",
      services: [
        "Free website builder",
        "Online store",
        "Free templates",
        "Mobile & SEO friendly",
        "Web forms",
        "Web widgets",
        "CRM integration",
        "Google Analytics integration",
      ],
      image:
        "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/sites.png.webp?1734079210752",
      replaces: [
        {
          id: 0,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-wix.svg?1734079210752",
        },
      ],
    },
    {
      id: 4,
      label: "HR & Automation",
      services: [
        "Employee directory",
        "Worktime tracking & reports",
        "Absence management",
        "Announcements & appreciations",
        "Workflow automation",
        "Requests & approvals",
        "No-code RPA",
        "Knowledge base",
      ],
      image:
        "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/hr.png.webp?1734079210752",
      replaces: [
        {
          id: 0,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-orangehrm.svg?1734079210752",
        },
        {
          id: 1,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-twilio.svg?1734079210752",
        },
        {
          id: 2,
          image:
            "https://www.bitrix24.in/images/content_en/icons/alternatives/i-bamboohr.svg?1734079210752",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto mt-10 font-semibold">
      <div className="box-border flex justify-between text-xl text-blue border-b-2 border-blue border-opacity-20 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` ${
              activeTab === tab.id
                ? "border-b-[2px] border-blue-2 text-blue-2 border-opacity-20"
                : "border-b-0 "
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 ml-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${
              activeTab === tab.id ? "block" : "hidden"
            } w-full flex justify-between`}
          >
            <div className="flex flex-col text-black-2 py-3">
              <ul className="marker:text-blue list-disc list-outside text-left text-xl">
                {tab.services.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 mt-4 items-center">
                Replaces:
                {tab.replaces.map((item) => (
                  <img key={item.id} src={item.image} alt="logo" />
                ))}{" "}
                and{" "}
                <a href="#" className="underline underline-offset-1">
                  more
                </a>
              </div>
            </div>
            <img src={tab.image} alt="service_image" className="w-3/5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroTabs;
