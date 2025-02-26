import React, { useState, useEffect } from "react";
import ProgressBar from "../../common/ProgressBar";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

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
        label:"Zoho",
        image:
          "https://www.bitrix24.in/images/content_en/icons/alternatives/i-zoho.svg?1734079210752",
      },
      {
        id: 1,
        label:"Salesforce",
        image:
          "https://www.bitrix24.in/images/content_en/icons/alternatives/i-saleforce.svg?1734079210752",
      },
      {
        id: 2,
        label:"Hubspot",
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
        label: "clickup",
        image:
          "https://www.bitrix24.in/images/content_en/icons/alternatives/i-clickup.svg?1734079210752",
      },
      {
        id: 1,
        label: "sharepoint",
        image:
          "https://www.bitrix24.in/images/content_en/icons/alternatives/i-sharepoint.svg?1734079210752",
      },
      {
        id: 2,
        label:"smarsheet",
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
        label:"jira",
        image:
          "https://www.bitrix24.in/images/content_en/icons/alternatives/i-jira.svg?1734079210752",
      },
      {
        id: 1,
        label:"trello",
        image:
          "https://www.bitrix24.in/images/content_en/icons/alternatives/i-trello.svg?1734079210752",
      },
      {
        id: 2,
        label:"asana",
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
        label:"wix",
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
        label:"OrangeHRM",
        image:
          "https://www.bitrix24.in/images/content_en/icons/alternatives/i-orangehrm.svg?1734079210752",
      },
      {
        id: 1,
        label:"twilio",
        image:
          "https://www.bitrix24.in/images/content_en/icons/alternatives/i-twilio.svg?1734079210752",
      },
      {
        id: 2,
        label:"bamboo hr",
        image:
          "https://www.bitrix24.in/images/content_en/icons/alternatives/i-bamboohr.svg?1734079210752",
      },
    ],
  },
];

const HeroTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isProgressActive, setProgressActive] = useState(true);

  useEffect(() => {
    if (isProgressActive) {
      setProgress(0);
      const interval = setInterval(() => {
        setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
      }, 5000); // Change hero every 5 seconds

      const interval2 = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 1
        );
      }, 50); // Change hero every 5 seconds

      return () => {
        clearInterval(interval);
        clearInterval(interval2);
      };
    }
  }, [activeTab, isProgressActive]);

  return (
    <div className="relative h-[47rem] md:h-[35rem] lg:h-[36rem] w-full mx-auto lg:w-full my-5 font-semibold flex flex-col items-center">
      {/* ----------tabs for desktop view--------- */}
      <div className="relative hidden w-full justify-between text-blue-main lg:flex lg:order-1 gap-5 ">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`pb-3 ${
              activeTab === tab.id && "relative cursor-pointer text-blue-dark pb-3"
            }`}
            onMouseEnter={() => {
              setActiveTab(tab.id);
              setProgressActive(false);
              setProgress(100);
            }}
            onMouseLeave={() => {
              setProgress(0);
              setActiveTab(tab.id);
              setProgressActive(true);
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="text-font-xl">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-[0.18rem] bg-blue-main bg-opacity-30">
                <ProgressBar progress={progress} />
              </div>
            )}
          </div>
        ))}
        <div className="absolute bottom-0 w-full h-[2px] bg-blue-main bg-opacity-20"></div>
      </div>
      {/* ----------tabs for mobile and tablet view--------- */}
      <div className="w-full order-2 ">
        <div className="relative lg:h-32 lg:mb-28 lg:w-2/5 flex justify-center lg:justify-start p-4 mt-3">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`absolute w-full top-56 md:-top-3 flex flex-col items-center lg:justify-start lg:flex-row transition-opacity duration-500 ease-in-out ${
                activeTab === tab.id ? " opacity-100" : " opacity-0"
              } `}
            >
              <div className="lg:hidden w-full text-font-2xl text-blue-dark flex justify-between items-center mb-3 ">
                <MdKeyboardArrowLeft
                  className="hover:cursor-pointer opacity-40"
                  onClick={() => {
                    if (activeTab === 0) {
                      setActiveTab(tabs.length - 1);
                    } else {
                      setActiveTab((prevTab) => (prevTab - 1) % tabs.length);
                    }
                  }}
                />
                <div>{tab.label}</div>
                <MdKeyboardArrowRight
                  className="hover:cursor-pointer opacity-40"
                  onClick={() =>
                    setActiveTab((prevTab) => (prevTab + 1) % tabs.length)
                  }
                />
              </div>
              <div className="w-full order-3 flex flex-col items-center md:items-start text-black-2">
                <ul className="marker:text-blue-main list-disc list-outside w-fit text-left text-[1rem] lg:text-font-xl ml-10 md:mt-10">
                  {tab.services.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 my-4 items-center md:self-start">
                  Replaces:
                  {tab.replaces.map((item) => (
                    <a href={`/alternatives/free-${item.label.trim()}`}><img key={item.id} src={item.image} alt="logo" /></a>
                    
                  ))}{" "}
                  and{" "}
                  <a href="#_" className="underline underline-offset-1">
                    more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ----------hero image for mobile, tablet & desktop view---------- */}
      <div className="w-full flex justify-center order-1 md:order-3">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`absolute top-0 md:top-20 flex md:justify-end md:ml-2 transition-opacity duration-500 ease-in-out ${
              activeTab === tab.id ? " opacity-100" : " opacity-0"
            }`}
          >
            <img src={tab.image} alt="__" className=" w-96 md:w-3/5" />
          </div>
        ))}
      </div>
      <button className="absolute bottom-0 order-4 w-96 flex justify-center md:self-start md:w-fit rounded-full px-10 py-4 text-font-xl font-semibold bg-green-button mb-10">
        START FOR FREE
      </button>
    </div>
  );
};

export default HeroTabs;
