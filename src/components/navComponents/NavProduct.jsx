import React, { useState } from "react";
import ProductMenu from "./ProductMenu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Dropdown from "./Dropdown";

const tabs = [
  {
    id: 0,
    label: "CRM",
    iconColor: "text-[#409EEF]",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 3.5h21.385a1.002 1.002 0 0 1 .944 1.334L23.683 6.7a1 1 0 0 1-.944.674H2.641a1 1 0 0 1-.945-.676l-.641-1.865A1.005 1.005 0 0 1 2 3.5zm3.522 7.16h14.34a1.002 1.002 0 0 1 .936 1.357l-.696 1.865a1 1 0 0 1-.935.651H6.18a1 1 0 0 1-.941-.668L4.579 12a1.005 1.005 0 0 1 .943-1.34zm4.452 7.181h5.437a1.002 1.002 0 0 1 .957 1.293l-.557 1.865a1 1 0 0 1-.957.715h-4.263a1 1 0 0 1-.948-.687l-.617-1.865a1.005 1.005 0 0 1 .948-1.32z"
          fill="currentColor"
          // className="fill-current text-[#409EEF] group-hover:text-white"
        ></path>
      </svg>
    ),
    tag: "Manage sales and clients effectively",
    content: [
      {
        id: 0,
        title: "Sales management",
        description:
          "Manage leads deals, contents pipelines, access permissions & roles ",
      },
      {
        id: 1,
        title: "Contact center",
        description:
          "Omnichannel communications via CRM forms, website widget, live chat, WhatsApp, Instagram, telephony, email",
      },
      {
        id: 2,
        title: "Sales team collaboration",
        description:
          "Work with chat, video calls, tasks, calendar, file storage, online documents",
      },
      {
        id: 3,
        title: "Sales enablement",
        description:
          "Get estimates, invoices, payments, catalog, inventory, e-signature, CRM store",
      },
      {
        id: 4,
        title: "Analytics & reports",
        description:
          "Analyze sales funnel, employee performance, Sales Intelligence, Bi Builder dashboards",
      },
      {
        id: 5,
        title: "Mobile CRM",
        description:
          "Leads, deals, invoices, payments, telephony, emails, inventory, calender your fingertips",
      },
      {
        id: 6,
        title: "Marketing",
        description:
          "Use email campaigns, social media ads, SMS, telemarketing, landing pages",
      },
      {
        id: 7,
        title: "Automation & integrations",
        description:
          "Set CRM rules and triggers, workflow automation, automated funnels, API",
      },
      {
        id: 8,
        title: "CoPilot in CRM",
        description:
          "Call audio-to-text transcription, call summary, field autocompletion in deals",
      },
    ],
  },
  {
    id: 1,
    label: "Tasks & Projects",
    iconColor: "text-[#BDF300]",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.382 20.265V16.06h3.882V4.736H4.735v11.323h3.882v4.206h7.765zM3.442 1.5h18.117c1.072 0 1.941.87 1.941 1.941V21.56c0 1.072-.87 1.941-1.941 1.941H3.44A1.941 1.941 0 0 1 1.5 21.559V3.44C1.5 2.37 2.37 1.5 3.441 1.5zm6.026 8.364 1.811 1.877 4.53-4.594 1.588 1.647-6.118 6.117-3.235-3.235 1.424-1.812z"
          fill="currentColor"
          // className="fill-current text-[#BDF300] "
        ></path>
      </svg>
    ),
    tag: "Get work done easier & faster",
    content: [
      {
        id: 0,
        title: "Task management",
        description:
          "Choose between Kanban board, Gantt chart, Scrum, task list",
      },
      {
        id: 1,
        title: "Task tracking",
        description:
          "Take advantage of checklists & sub-tasks, task summary, time tracking, focus & supervisor mode",
      },
      {
        id: 2,
        title: "API & integrations",
        description:
          "Connect your task to other services via API integration for advanced task automation",
      },
      {
        id: 3,
        title: "Project management",
        description:
          "Use projects, workgroups, project planning, roles, access permissions",
      },
      {
        id: 4,
        title: "Employee performance",
        description:
          "Get productive with task reports, workload management, task efficiency & KPI",
      },
      {
        id: 5,
        title: "Mobile tasks",
        description:
          "Task creation, task tracking notifications, comments, chat on the go",
      },
      {
        id: 6,
        title: "Project collaboration",
        description:
          "Work faster with chat, video calls, comments, file storage, documents, external users, task templates",
      },
      {
        id: 7,
        title: "Automation",
        description:
          "Save time with automatic task creation and workflow automation",
      },
      {
        id: 8,
        title: "CoPilot in Tasks",
        description:
          "AI-generated task descriptions, task summaries, checklists, comments",
      },
    ],
  },
  {
    id: 2,
    label: "Collaboration",
    iconColor: "text-[#FFB45C]",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#a)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.144 13.325c-.148.246-.435.256-.606.025-.078-.105-.13-.23-.207-.335-.653-.906-1.31-1.81-1.967-2.712-.12-.166-.247-.326-.364-.48L4.323 3.25c.16.08.33.166.501.248 1.15.544 2.332.984 3.588 1.187.767.123 1.111.12 2.057-.004-.061.1-.093.196-.159.246-.222.17-.455.324-.687.48-.064.043-.14.068-.205.107-.356.214-.75.177-1.135.167-1.246-.034-2.42-.344-3.496-1.008-.01-.006-.022-.009-.053-.02L1.402 9.814l-.055-.027c.026.036.05.072.077.107.575.764 1.145 1.532 1.612 2.374.13.233.234.478.205.754a.751.751 0 0 1-.097.302zm17.69.309 1.123-.118c.166.4.212.83.135 1.267-.133.755-.527 1.33-1.18 1.706-.097.056-.128.116-.14.226-.113 1-.63 1.696-1.543 2.056-.201.079-.298.173-.369.377a2.274 2.274 0 0 1-1.372 1.422 2.09 2.09 0 0 1-1.556.002c-.076-.03-.116-.025-.166.049-.387.574-.918.908-1.595.999a2.044 2.044 0 0 1-1.489-.364c-.365-.254-.73-.506-1.104-.764l.547-.916c.383.265.756.514 1.119.777.66.478 1.569.101 1.806-.642l-.105-.076c-.856-.592-1.71-1.185-2.567-1.775-.14-.097-.226-.22-.214-.4a.416.416 0 0 1 .28-.383c.147-.06.282-.015.409.073l2.174 1.504c.399.276.803.545 1.196.831.243.177.508.195.77.119.506-.146.82-.498.946-1.025.025-.106.003-.17-.091-.234-1.586-1.092-3.169-2.188-4.752-3.284-.197-.136-.276-.306-.234-.498a.412.412 0 0 1 .616-.276c.038.023.074.05.111.075 1.607 1.112 3.217 2.22 4.818 3.34.181.128.336.132.514.048.506-.24.777-.646.812-1.217.005-.089-.026-.15-.104-.204-1.84-1.27-3.678-2.542-5.516-3.814-.301-.209-.288-.615.027-.771a.383.383 0 0 1 .412.038l.886.613c1.527 1.055 3.055 2.108 4.578 3.169.115.08.2.078.316.022.69-.33.985-1.242.523-1.914-.009-.013-.015-.028-.02-.038zm-10.315 3.56c.81.102 1.326.972 1.002 1.708-.084.19-.205.365-.313.544-.222.366-.425.746-.673 1.092-.348.485-1.027.58-1.512.244-.858-.594-1.66-1.262-2.44-1.96-.906-.813-1.808-1.634-2.711-2.452-.247-.224-.46-.475-.576-.795-.115-.314-.107-.622.075-.913.22-.353.441-.705.657-1.06.294-.483.973-.684 1.52-.444.296.13.492.318.691.674.27-.247.583-.344.928-.327.258.013.497.105.702.268.412.329.667.889.392 1.56.589-.21 1.114-.12 1.52.37.411.496.406 1.033.036 1.6.248-.107.47-.138.702-.109zm14.685-6.942c.064.1.027.166-.022.244-.48.754-1.133 1.296-1.924 1.672a6.502 6.502 0 0 1-1.42.479c-.253.028-.505.06-.758.081a.294.294 0 0 1-.167-.042c-.597-.364-1.192-.733-1.788-1.1l-1.788-1.098c-.516-.317-1.031-.636-1.547-.954l-1.8-1.103c-.173-.106-.343-.219-.52-.318a.2.2 0 0 0-.163-.003c-.702.338-1.392.707-2.106 1.015-.814.351-1.657.433-2.5.076-.433-.183-.771-.49-1.05-.87-.248-.338-.045-.778.235-.924.982-.514 1.916-1.112 2.857-1.696.343-.213.68-.436 1.028-.637A3.07 3.07 0 0 1 12.89 4.7a.636.636 0 0 1 .19.01c1.463.246 2.925.496 4.388.74a.394.394 0 0 0 .228-.038 479.7 479.7 0 0 0 2.74-1.397c.07-.036.117-.045.186.018.54.49.995 1.055 1.44 1.632 1.13 1.47 2.146 3.02 3.143 4.586z"
            fill="currentColor"
            // className="fill-current text-[#FFB45C] group-hover:text-white"
          ></path>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h25v25H0z"></path>
          </clipPath>
        </defs>
      </svg>
    ),
    tag: "Get work done easier & faster",
    content: [
      {
        id: 0,
        title: "Online workspace",
        description:
          "Use chat, activity feed, comments reactions, company-wide video announcements",
      },
      {
        id: 1,
        title: "Online documents & file storage",
        description:
          "Store, share and edit documents online easily with co-workers using company drive",
      },
      {
        id: 2,
        title: "Workgroups",
        description:
          "Create workgroups, invite external users, set access permissions and work on tasks and projects",
      },
      {
        id: 3,
        title: "Online meetings",
        description:
          "Do more with video calls, video conferencing, screen sharing, call recording and custom backgrounds",
      },
      {
        id: 4,
        title: "Shared calendars",
        description:
          "Plan with company & personal calendar, open time slots, meeting room booking, calendar sync",
      },
      {
        id: 5,
        title: "Mobile communications",
        description:
          "Team messenger, video calls, comments, calendar, notifications anywhere",
      },
      {
        id: 6,
        title: "CoPilot in Chat",
        description:
          "Unlimited source of ideas, AI-generated texts, brainstorming, and more",
      },
    ],
  },
  {
    id: 3,
    label: "Site & Stores",
    iconColor: "text-[#F36DAB]",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m5.164 2.245.672 3.075 18.252-.033c.28.002.545.14.716.372.174.234.236.537.171.826l-1.711 10.068c-.098.435-.465.743-.886.745H7.394c-.421-.002-.788-.31-.886-.745L3.545 3.443H.97a.971.971 0 1 1 0-1.943h3.307c.422.003.787.31.886.745zM10.047 23.318c-1.281 0-2.321-1.102-2.321-2.46 0-1.359 1.04-2.46 2.321-2.46 1.283 0 2.323 1.1 2.323 2.46 0 1.358-1.04 2.46-2.323 2.46zM19.658 23.318c-1.282 0-2.321-1.102-2.321-2.46 0-1.359 1.04-2.46 2.321-2.46 1.283 0 2.323 1.1 2.323 2.46 0 1.358-1.04 2.46-2.323 2.46z"
          fill="currentColor"
          // className="fill-current text-[#F36DAB] group-hover:text-white"
        ></path>
      </svg>
    ),
    tag: "Create websites that sell",
    content: [
      {
        id: 0,
        title: "Website builder",
        description:
          "Use our free CMS, templates, hosting, AI-generated images and texts to create awesome sites",
      },
      {
        id: 1,
        title: "Social selling",
        description:
          "Sell your products directly via Facebook, Instagram, WhatsApp or Telegram",
      },
      {
        id: 2,
        title: "Website forms",
        description:
          "Capture leads with custom order forms, registration & feedback forms, and forms with conditional fields",
      },
      {
        id: 3,
        title: "Landing pages",
        description:
          "Generate leads with capture forms, automated funnels and Google Analytics integration",
      },
      {
        id: 4,
        title: "Online store",
        description:
          "Maximize ecommerce with inventory management, order processing, delivery and online payments",
      },
      {
        id: 5,
        title: "Mobile sites & online stores",
        description:
          "Responsive design, online orders, client management in your pocket",
      },
      {
        id: 6,
        title: "Website widget",
        description:
          "Enable widget to chat with site visitors, use popular messengers and accept callback requests",
      },
      {
        id: 7,
        title: "Online marketing tolls",
        description:
          "Increase sales with email marketing, Facebook or Google Ads, marketing automation, CRM integration",
      },
      {
        id: 8,
        title: "CoPilot in Sites & Stores",
        description:
          "Compelling copy on demand, AI-generated images, detailed prompts, text translation",
      },
    ],
  },
  {
    id: 4,
    label: "HR & Automation",
    iconColor: "text-[#66D74A]",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.877 6.46a1.79 1.79 0 0 1 1.802 1.78v11.496a1.79 1.79 0 0 1-1.802 1.78H3.302a1.79 1.79 0 0 1-1.802-1.78V8.24c0-.982.807-1.779 1.802-1.779h18.575zM8.072 9.623c-1.056-.165-.815 1.859-.815 1.859l.229.523c-.41.223-.188.488-.133.792l.01.093c.023.505.39.4.39.4.022.833.51.942.51.942l.038.246c.033.245-.004.188-.004.188l-.434.044c.006.12-.006.238-.034.355-.512.191-.621.304-1.128.49l-.455.175c-.833.336-1.621.755-1.782 1.29l-.75 2.588H15.19c0-.659-.877-2.896-.877-2.896 0-.407-.632-.872-1.878-1.143a4.649 4.649 0 0 1-1.188-.455c-.079-.038-.068-.394-.068-.394l-.401-.052-.034-.455c.48-.136.43-.936.43-.936.213.1.375-.18.452-.357l.051-.133c.36-.88-.18-.827-.18-.827a4.67 4.67 0 0 0 0-1.62c-.24-1.782-3.853-1.298-3.425-.717zm12.141 3.567h-4.159a.69.69 0 0 0-.681.56l-.012.124v.995c0 .336.246.615.569.673l.125.011h4.158c.34 0 .623-.242.682-.561l.011-.123v-.995a.689.689 0 0 0-.693-.684zm0-3.993h-4.159a.69.69 0 0 0-.681.561l-.012.123v.995c0 .336.246.615.569.673l.125.011h4.158c.34 0 .623-.242.682-.561l.011-.123V9.88a.689.689 0 0 0-.693-.684zm.344-5.447c.851 0 1.565.583 1.753 1.367H2.87A1.798 1.798 0 0 1 4.622 3.75h15.934z"
          fill="currentColor"
          // className="fill-current text-[currentColor] group-hover:text-white"
        ></path>
      </svg>
    ),
    tag: "Optimize workflows & manage HR data",
    content: [
      {
        id: 0,
        title: "Employee management",
        description:
          "Use employee profiles, company structure, access permissions, Active Directory",
      },
      {
        id: 1,
        title: "Culture & engagement",
        description:
          "Get company news, polls, appreciation badges, tags, personal notifications",
      },
      {
        id: 2,
        title: "Mobile HR",
        description:
          "Chat video calls, employee profiles, approvals, notifications on the go",
      },
      {
        id: 3,
        title: "Work management",
        description:
          "Track employee performance with KPI work reports, supervisor view",
      },
      {
        id: 4,
        title: "Internal communications",
        description:
          "Communicate via video announcements, memos, public and private chats",
      },
      {
        id: 5,
        title: "CoPilot in fee",
        description:
          "Thread Summaries, AI-generated ideas, text editing & creation, AI-written responses, text translation",
      },
      {
        id: 6,
        title: "Information management",
        description:
          "Work with knowledge bases, online documents, file storage, access permissions",
      },
      {
        id: 7,
        title: "Automation",
        description:
          "Streamline operations with requests, approvals, expense reports, RPA, workflow automation",
      },
    ],
  },
  {
    id: 5,
    label: "CoPilot",
    iconColor: "text-[#8E52EC]",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#a)" fill="currentColor">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.563 19.92c4.117 0 7.454-3.32 7.454-7.417 0-4.095-3.337-7.415-7.454-7.415-4.117 0-7.454 3.32-7.454 7.415 0 4.096 3.337 7.416 7.454 7.416zM11.37 6.95a.209.209 0 0 0-.39 0l-.743 1.996a2.08 2.08 0 0 1-1.232 1.226l-2.005.738a.207.207 0 0 0 0 .389l2.005.738a2.08 2.08 0 0 1 1.232 1.226l.742 1.995c.067.18.324.18.391 0l.743-1.995a2.08 2.08 0 0 1 1.232-1.226l2.005-.738a.207.207 0 0 0 0-.39l-2.005-.737a2.08 2.08 0 0 1-1.232-1.226L11.37 6.95zm4.26 5.766a.12.12 0 0 0-.226 0l-.428 1.152a1.202 1.202 0 0 1-.712.709l-1.159.426a.12.12 0 0 0 0 .225l1.159.427c.33.121.59.38.712.708l.428 1.152a.12.12 0 0 0 .227 0l.428-1.152c.122-.328.383-.587.712-.708l1.159-.427a.12.12 0 0 0 0-.225l-1.159-.426c-.33-.122-.59-.38-.712-.709l-.428-1.152z"
            fill="currentColor"
            // className="fill-current text-[#8E52EC] group-hover:text-white"
          ></path>
          <path
            d="M23.288 12.954c.733.032 1.309.65 1.198 1.37-.883 5.762-5.885 10.176-11.924 10.176C5.901 24.5.5 19.127.5 12.5S5.9.5 12.562.5c3.174 0 6.062 1.22 8.215 3.213.538.497.471 1.34-.085 1.816-.556.477-1.39.407-1.942-.074a9.397 9.397 0 0 0-6.188-2.31c-5.194 0-9.405 4.189-9.405 9.356 0 5.168 4.211 9.356 9.405 9.356 4.607 0 8.44-3.295 9.248-7.645.134-.72.745-1.29 1.479-1.258z"
            fill="currentColor"
            // className="fill-current text-[#8E52EC] group-hover:text-white"
          ></path>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h25v25H0z"></path>
          </clipPath>
        </defs>
      </svg>
    ),
    tag: "Your AI-powered assistant in Bitrix24",
    content: [
      {
        id: 0,
        title: "CoPilot in CRM",
        description:
          "Call audio-to-text transcription, call summary, field autocompletion in deals",
      },
      {
        id: 1,
        title: "CoPilot in Tasks",
        description:
          "AI-generated task descriptions, task summaries, checklists, comments",
      },
      {
        id: 2,
        title: "CoPilot in Chat",
        description:
          "Unlimited source of ideas, AI-generated texts, brainstorming, and more",
      },
      {
        id: 3,
        title: "CoPilot in Sites & Stores",
        description:
          "Compelling copy on demand, AI-generated images, detailed prompts, text translation",
      },
      {
        id: 4,
        title: "CoPilot in Feed",
        description:
          "Thread summaries, AI-generated ideas, text editing & creation, AI-written responses, text translation",
      },
    ],
  },
];

const NavProduct = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
    {/* -------------for large screen---------- */}
    <div className="hidden lg:block container px-2 text-black-2">
      <div className="flex max-w-[1330px]">
        {/* -------menu buttons container------- */}
        <div className="min-w-[22.5rem] mr-3 flex flex-col gap-[0.3rem]">
          {tabs.map((tab) => (
            <a
              href={`/tools/${tab.label.toLowerCase()}/`}
              className="flex items-center"
              onMouseEnter={() => setActiveTab(tab.id)}
            >
              <ProductMenu
                key={tab.id}
                className={
                  activeTab === tab.id
                    ? "bg-blue-main text-white"
                    : "bg-gray-menu"
                }
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`icon ${
                      activeTab === tab.id ? "text-white" : tab.iconColor
                    }`}
                  >
                    {tab.icon}
                  </span>
                  <span className="uppercase">{tab.label}</span>
                </div>
                <MdOutlineKeyboardArrowRight className={`text-font-3xl font-normal ${tab.id===activeTab ? "text-white" :"text-gray-1" }`} />
              </ProductMenu>
            </a>
          ))}
          <div className=" text-font-base font-semibold flex justify-end gap-1 items-center mt-2.5">
            <div className="hover:text-blue-main w-fit flex cursor-pointer items-center">
              <span>See all tools</span>
              <MdOutlineKeyboardArrowRight className="text-blue-main text-font-3xl font-light" />
            </div>
          </div>
        </div>

        {/* ------menu content------- */}
        <div className="max-w-[56.625rem] border-l-4 border-opacity-40 border-gray-1 bg-white pl-8 pr-5 ">
          {/* --------menu content title-------- */}
          <div className="container xl:pb-8 pb-5">
            <div
              className="w-fit bg-white cursor-pointer group"
            >
              <div className="text-font-2xl font-bold flex gap-3 items-center mb-1">
                <span className={`icon ${tabs[activeTab].iconColor}`}>{tabs[activeTab].icon}</span>
                <span className={`capitalize group-hover:text-blue-main`}>
                  {tabs[activeTab].label}
                </span>
              </div>
              <div className="text-left text-gray-2">{tabs[activeTab].tag}</div>
            </div>
          </div>

          {/* --------menu content items in grid view -------- */}
          <div className=" bg-white">
            <div className="max-h-[17rem] xl:max-h-[19.5rem] overflow-y-auto">
              <div className="grid grid-rows-3 grid-cols-2 xl:grid-cols-3 gap-2 text-left ">
                {tabs[activeTab].content.map((item) => (
                  <div
                    key={item.id}
                    className=" pt-1.5 pb-3 pr-6 xl:pb-4 group cursor-pointer"
                  >
                    <div className="text-font-base font-semibold mb-1 group-hover:text-blue-main">
                      {item.title}
                    </div>
                    <div className="text-font-sm leading-4">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" text-font-base font-semibold flex justify-end gap-1 items-center mt-2.5 ">
              <div className="hover:text-blue-main w-fit flex cursor-pointer items-center ">
                <span>See all {tabs[activeTab].label} features</span>
                <MdOutlineKeyboardArrowRight className="text-blue-main text-font-3xl font-light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ------------for small screen----------- */}
    <div className="lg:hidden container px-2 text-black-2">

    </div>

    </>
  );
};

export default NavProduct;
