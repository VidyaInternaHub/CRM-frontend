import {siteLogoAuthIcon,ProjectManagementIcon,CommunicateViaIcon,WareHouseIcon,AnalyticsIcon,SalesIcon1,
 InvoiceIcon1,PaymentsServiceIcon, ProductCatalogIcon,
 ArrowTargetIcon,
 AutomationIcon,
 AdsIcon,
 TwoPersonsIcon,
 LiveChatIcon,
 NotificationIcon,
 callbackIcon1,
 HrIcon,
 ClockIcon,
 LockIcon,
 SpeakerIcon,
 SettingIcon,
 HandShakeIcon,
} from './svgs'
import projectManagementImage from '../assets/images/Project_management_image_crm.webp';
import salesImage from '../assets/images/sales image crm.webp';
import marketingImage from '../assets/images/marketing image crm.webp';
import hrImage from '../assets/images/HR image crm.webp';
import customerServiceImage from '../assets/images/customer service img cmr.webp';
import personsImage from '../assets/images/bitrix24_solutions_persons_image.webp';
import mobileImage from '../assets/images/bitrix24_solutions_mobile_image.webp';
import meetingImage from '../assets/images/bitrix24_solutions_meeting_image.jpg';
import marketingHeroImage from '../assets/images/marketing_hero-image.png';
import AutomationImage from '../assets/images/marketing_automation-image.jpg';
import Leadgeneration from '../assets/images/marketing_lead-generations.jpg';
import Clientmanagement from '../assets/images/marketing_client-management.jpg.webp';
import SalesAnalytics from '../assets/images/marketing_sales-analytics.1600w.jpg';
import TeamCollabration from '../assets/images/marketing_team-colabration.jpg';
import Tasks_Projects from '../assets/images/marketing_tasks-and-projects.jpg';
import DocumentManagement from '../assets/images/marketing-management.jpg';
import SocialNetworks from '../assets/images/marketing_integrations-with-social-network.1600w.jpg';
import AIbotImage from '../assets/images/bots-and-ai.jpg';
import GroupCalenderImage from '../assets/images/group-calenders.jpg';
import CrmWebFromsImage from '../assets/images/marketing-crm-web-forms.jpg';
import marketingBenifitsImage from '../assets/images/marketing_benefits.jpg.webp';
import blueTicksvg from '../assets/svg/blueTick.svg';
import quotesOpenSvg from '../assets/svg/quotesOpen.svg';

export const forgotPasswordData = {
  logo: siteLogoAuthIcon,
  backLink: {
    text: 'Back to site',
    href: '/',
  },
  textSection: {
    title: 'Your Company. United',
    points: ['Free.', 'Unlimited.', 'Online.'],
  },
  languageOptions: [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
  ],
  mainContent: {
    heading: 'Bitrix24 sign in',
    message: 'Please log on using your login and password (or use social login) to enter www.bitrix24.in.',
    submitButton: {
      text: 'NEXT'
    },
    helpButton: {
      link: '',
      text: 'Need Help?'
    }
  },
};

export const HeroContentData = {
  title: "Bitrix24 has something for every team and department",
  tabs: [
    {
      id: 1,
      label: "Project Management",
      icon: <ProjectManagementIcon width={40} height={40} />,
      content: {
        title: "Get work done easier and faster with a full set of task and project management tools.",
        points: [
          {
            description: "Choose whichever works best for you: Kanban, Gantt chart, Scrum, etc.",
            icon: <ProjectManagementIcon width={25} height={25}/>,
          },
          {
            description: "Communicate with your team via chat and video calls.",
            icon: <CommunicateViaIcon width={25} height={25}/>
          },
          {
            description: "Track, audit, and manage your stock across multiple warehouses",
            icon: WareHouseIcon
          },
          {
            description: "Analyze your campaign results to maximize ROI",
            icon: <AnalyticsIcon width={25} height={25}/>
          },
        ],
        image: projectManagementImage,
      }
    },
    {
      id: 2,
      label: "Sales",
      icon:SalesIcon1,
      content: {
        title: "Everything you need to power up your sales is here.",
        points: [
          {
            description: "Create and send invoices from your CRM to close deals faster",
            icon: InvoiceIcon1
          },
          {
            description: "Receive payments for your products and services online",
            icon:PaymentsServiceIcon
          },
          {

            description: "Track, audit, and manage your stock across multiple warehouses",
            icon: WareHouseIcon
          },
          {

            description: "Organize and manage your product catalog",
            icon:ProductCatalogIcon
          },
        ],
        image: salesImage,
      }

    },
    {
      id: 3,
      label: 'Marketing',
      icon: <ArrowTargetIcon width={40} height={40} />,
      content: {
        title: "Reach out to your potential and existing clients via a wide variety of channels.",
        points: [
          {
            description: "Launch segment-based email marketing campaigns",
            icon:<ProjectManagementIcon width={25} height={25}/>
          },
          {
            description: "Create custom web forms to collect leads and add them to your CRM",
            icon:<AutomationIcon width={25} height={25} />
          },
          {
            description: "Set up and launch Facebook Ads and Google Ads campaigns",
            icon: AdsIcon
          },
          {
            description: "Analyze your campaign results to maximize ROI",
            icon: <AnalyticsIcon width={25} height={25}/>
          },
        ],
        image: marketingImage,
      }
    },
    {
      id: 4,
      label: 'Customer Service',
      icon: <TwoPersonsIcon width={40} height={40} />,
      content: {
        title: "Stay in touch with your clients and provide top-notch customer service.",
        points: [
          {
            description: "Use our live chat widget to accept customer requests on your website",
            icon:LiveChatIcon
          },
          {
            description: "Set up automation rules to notify your customers via SMS or email",
            icon: NotificationIcon
          },
          {
            description: "Create and place a custom CRM form on your website to collect requests	",
            icon:<AutomationIcon width={25} height={25} />
          },
          {
            description: "Use a callback request widget to stay in touch with your site visitors",
            icon: callbackIcon1
          },
        ],
        image: customerServiceImage,
      }
    },
    {
      id: 5,
      label: 'HR',
      icon: <HrIcon width={40} height={40} />,
      content: {
        title: "Build a stronger team and manage employee data like a boss.									",
        points: [
          {
            description: "Track work time to introduce discipline without pressure",
            icon: <ClockIcon width={25} height={25} />
          },
          {
            description: "Manage all HR documents and employee profiles in one place",
            icon:<HrIcon width={25} height={25} />
          },
          {
            description: "Set up company structure and manage access permissions",
            icon:<LockIcon width={25} height={25} />
          },
          {
            description: "Post memos and company-wide announcements",
            icon: SpeakerIcon
          },
        ],
        image: hrImage,
      }
    },
  ],

  solutionTab: {
    icon:<SettingIcon width={40} height={40} />,
    link: "/solutions",
    text: "See all solution"
  },
  solutionButton: {
    link: "/",
    text: "TRY THIS SOLUTION"
  }
}

export const NavPartnersData = {
  tabs: [
    {
      id: 1,
      label: "FOR CLIENTS",
      icon:<TwoPersonsIcon width={28} height={28}/>,
      content: ["Partner directory", "For personal consultation"]
    },
    {
      id: 2,
      label: "FOR PARTNERS",
      icon:<HandShakeIcon width={28} height={28} />,
      content: ["Become Bitrix24 partner", "Partner login"],
    }
  ]
}

export const NavResourcesData = {
  tabs: [
    {
      id: 1,
      label: "LEARN",
      icon: (
        <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 16.203c0 .343-.29.621-.646.621H4.038c-.74 0-1.345.583-1.347 1.294 0 .712.606 1.294 1.347 1.294h13.316c.357 0 .646.278.646.621v1.346c0 .343-.29.621-.646.621H4.038C1.817 22 0 20.253 0 18.118V3.882C0 1.747 1.817 0 4.038 0h13.316c.357 0 .646.278.646.621v15.582z"></path></svg>
      ),
      content: ["Webinars", "Helpdesk", "Guides & API Documentation"]
    },
    {
      id: 2,
      label: "CONNECT",
      icon: (
        <svg width="25" height="23" viewBox="0 0 25 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M21.07 7.62H3.92c-.338 0-.61-.226-.61-.507v-2.08c0-.28.272-.505.61-.505h17.15c.34 0 .61.225.61.506v2.08c.068.28-.27.505-.61.505zm0 6.198H3.92c-.338 0-.61-.225-.61-.506v-2.08c0-.28.272-.505.61-.505h17.15c.34 0 .61.224.61.505v2.08c.068.281-.27.506-.61.506zM22.192.655H2.745C1.248.655 0 1.78 0 3.128v12.647c0 1.35 1.248 2.473 2.746 2.473h12.607c.188 0 .312.056.437.169l3.87 3.766c.374.337.998.112.998-.337v-3.092c0-.28.25-.506.562-.506h1.034c1.498 0 2.746-1.124 2.746-2.473V3.128C24.938 1.78 23.69.655 22.192.655z"></path></svg>
      ),
      content: ["Submit Ticket", "Contact local bitrix partner"],

    },
    {
      id: 3,
      label: "READ",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.243 20V3.132C5.786.852 2.618.23 1.043.062.483.004 0 .468 0 1.056v14.648c0 .502.364.915.841.982 3.272.46 6.071 1.566 8.402 3.315zM2.652 9.188c1.856.287 3.452.787 4.787 1.506a.909.909 0 0 1 .366 1.2.837.837 0 0 1-1.15.381C5.497 11.652 4.08 11.208 2.4 10.95c-.466-.072-.789-.525-.72-1.011.07-.486.504-.822.97-.75zm4.787-2.332c-1.335-.72-2.931-1.22-4.787-1.507-.467-.072-.901.264-.97.75-.07.487.253.94.72 1.011 1.679.26 3.096.704 4.252 1.327a.838.838 0 0 0 1.151-.382.908.908 0 0 0-.366-1.2zM19.196 16.562c-1.66.262-5.552 1.089-8.439 3.35V3.129c2.218-1.676 4.937-2.716 8.157-3.12C19.488-.065 20 .39 20 .995V15.58c0 .49-.338.91-.804.983zm-6.688-5.868c1.335-.72 2.931-1.22 4.787-1.506.467-.072.901.264.97.75.07.486-.253.939-.72 1.01-1.679.26-3.096.704-4.252 1.327a.837.837 0 0 1-1.151-.382.908.908 0 0 1 .366-1.199zm4.787-5.345c-1.856.287-3.452.787-4.787 1.507a.908.908 0 0 0-.366 1.199.837.837 0 0 0 1.15.382c1.157-.623 2.574-1.067 4.254-1.327.466-.072.788-.524.72-1.01-.07-.487-.504-.823-.97-.75z"></path></svg>
      ),
      content: ["Latest articles", "Bitrix24 tips & updates",]
    }
  ]
};

export const NavSolutionsData = {
  tabs: [
    {
      id: 1,
      label: "ROLE",
      icon: (
        <svg width="24" height="19" viewBox="0 0 24 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.592 13.086s.705 2.557 1.084 4.374a.484.484 0 0 1-.339.565c-2.129.62-4.555.972-7.13.975h-.075c-3.253-.004-6.27-.566-8.749-1.52a.49.49 0 0 1-.301-.557c.255-1.26.561-2.732.713-3.307.285-1.087 1.887-1.895 3.36-2.516.385-.162.617-.292.852-.423a8.06 8.06 0 0 1 .842-.42 2.4 2.4 0 0 0 .052-.609l.652-.076s.086.153-.052-.745c0 0-.732-.188-.766-1.619 0 0-.55.18-.584-.687a2.23 2.23 0 0 0-.096-.5c-.104-.382-.197-.723.28-1.02l-.345-.899S4.63.627 6.216.91c-.644-.998 4.786-1.829 5.146 1.232.142.922.142 1.86 0 2.783 0 0 .811-.091.27 1.42 0 0-.298 1.086-.756.84 0 0 .074 1.375-.647 1.608 0 0 .052.732.052.782l.602.09s-.016.61.102.677c.55.348 1.152.611 1.786.781 1.872.466 2.82 1.264 2.82 1.963z"></path><path d="m23.913 13.77.067 1.295a.493.493 0 0 1-.346.499c-1.611.493-3.47.889-5.503 1.16h-.585c-.035-.477-.484-2.129-.744-3.087-.103-.38-.177-.652-.183-.697-.034-.903-.86-1.71-2.27-2.26.107-.14.198-.289.273-.446a1.83 1.83 0 0 1 .749-.532l.022-.707-1.548-.466s-.398-.179-.438-.179c.046-.108.104-.212.171-.31.03-.076.218-.643.218-.643-.226.28-.49.527-.786.736.27-.46.5-.943.686-1.44a8.84 8.84 0 0 0 .246-1.46 20.32 20.32 0 0 1 .496-2.656c.16-.436.444-.82.819-1.111.553-.37 1.199-.591 1.87-.64h.08c.673.048 1.32.27 1.874.64a2.5 2.5 0 0 1 .82 1.11c.223.875.389 1.761.495 2.656.048.481.134.958.259 1.426.186.507.411 1 .675 1.474a3.916 3.916 0 0 1-.788-.735s.146.515.175.59c.08.116.152.236.214.36-.038 0-.438.18-.438.18l-1.548.466.022.707c.293.112.551.295.749.532.093.227.242.43.433.59.373.126.733.285 1.075.477a4.77 4.77 0 0 0 1.674.527c.593.094.967 1.016.967 1.016l.048.924v.004z"></path></svg>
      ),
      content: ["Marketing", "Project management", "HR", "Customer service"]
    },
    {
      id: 2,
      label: "INDUSTRY",
      icon: (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.165 0a2 2 0 0 0-2 2v1.504h-3.72C.647 3.504 0 4.15 0 4.948v3.604l8.21 1.495v-.79c0-.398.324-.722.723-.722h3.134c.399 0 .722.324.722.723v.79L21 8.551V4.948c0-.798-.647-1.444-1.445-1.444h-3.717V2a2 2 0 0 0-2-2H7.165zM8.21 11.52v1.43c0 .398.323.722.722.722h3.134a.722.722 0 0 0 .722-.723v-1.43L21 10.026v8.617c0 .798-.647 1.445-1.445 1.445H1.445A1.445 1.445 0 0 1 0 18.642v-8.618l8.21 1.495zm-.913-8.016h6.408v-.995a.722.722 0 0 0-.723-.723H8.02a.722.722 0 0 0-.722.723v.995z"></path></svg>
      ),
      content: ["Legal", "Retail", "Travel", "Transport & storage", "Restaurant", "Remote work"]
    },
    {
      id: 3,
      label: "GOAL",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m10.89 9.673 4.34-4.297-.572-2.265L17.8 0l.838 3.318-.024.023.012.012.023-.024L22 4.16l-3.142 3.11-2.153-.533-4.315 4.273c.074.212.114.439.114.675 0 1.14-.934 2.065-2.086 2.065a2.075 2.075 0 0 1-2.085-2.065c0-1.14.933-2.065 2.085-2.065.163 0 .32.019.473.054zm2.132-7.979v1.85a8.695 8.695 0 0 0-2.604-.396c-4.761 0-8.621 3.822-8.621 8.536 0 4.714 3.86 8.536 8.62 8.536 4.762 0 8.622-3.822 8.622-8.536a8.45 8.45 0 0 0-.462-2.763l1.6-.852c.426 1.125.659 2.343.659 3.615C20.835 17.381 16.17 22 10.418 22 4.664 22 0 17.381 0 11.684 0 5.987 4.664 1.37 10.418 1.37c.9 0 1.772.113 2.604.325zm-.665 3.641-1.643 1.626a4.895 4.895 0 0 0-.296-.009c-2.639 0-4.779 2.119-4.779 4.732 0 2.614 2.14 4.732 4.78 4.732 2.639 0 4.778-2.118 4.778-4.732 0-.058 0-.116-.003-.173l1.665-1.65c.167.58.257 1.191.257 1.823 0 3.663-2.999 6.632-6.698 6.632-3.698 0-6.697-2.97-6.697-6.632 0-3.662 2.999-6.63 6.697-6.63a6.76 6.76 0 0 1 1.939.281z"></path></svg>
      ),
      content: ["Productivity", "Communication", "Mobility", "Management & relationship"]
    },
    {
      id: 4,
      label: "TOOL",
      icon: (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.408 14.54A4.146 4.146 0 0 1 6.46 9.592C6.761 8.18 8.18 6.761 9.592 6.46a4.145 4.145 0 0 1 4.948 4.947 4.077 4.077 0 0 1-3.132 3.133zm6.743-5.916a7.846 7.846 0 0 0-.64-1.723.064.064 0 0 1 .008-.07l1.305-1.618a.918.918 0 0 0-.028-1.188l-.827-.932a.919.919 0 0 0-1.177-.167l-1.779 1.118a7.825 7.825 0 0 0-2.584-1.175.065.065 0 0 1-.048-.052l-.34-2.05A.918.918 0 0 0 11.133 0H9.887a.916.916 0 0 0-.905.768l-.342 2.05a.064.064 0 0 1-.049.052 7.823 7.823 0 0 0-2.13.885.064.064 0 0 1-.071-.002L4.733 2.57a.92.92 0 0 0-1.184.098l-.88.881a.919.919 0 0 0-.098 1.184l1.186 1.66c.015.021.016.05.002.071-.39.65-.687 1.36-.878 2.115a.064.064 0 0 1-.052.048L.768 8.97A.918.918 0 0 0 0 9.877v1.246c0 .45.326.833.768.906l2.061.344a.065.065 0 0 1 .052.048c.155.616.376 1.205.666 1.753.012.023.01.05-.006.071l-1.3 1.609a.919.919 0 0 0 .029 1.187l.827.931a.92.92 0 0 0 1.176.168l1.77-1.11a.064.064 0 0 1 .07 0c.755.51 1.607.886 2.52 1.11l.35 2.092a.916.916 0 0 0 .904.768h1.247c.45 0 .833-.325.906-.768l.342-2.05a.065.065 0 0 1 .048-.052 7.814 7.814 0 0 0 2.105-.87.064.064 0 0 1 .071.003l1.728 1.234a.917.917 0 0 0 1.183-.098l.881-.882a.916.916 0 0 0 .097-1.183l-1.23-1.724a.064.064 0 0 1-.003-.071c.391-.652.69-1.364.88-2.121a.065.065 0 0 1 .052-.049l2.038-.34a.917.917 0 0 0 .768-.906V9.877a.918.918 0 0 0-.768-.906l-2.08-.347z"></path></svg>
      ),
      content: ["Telephony", "CRM", "Calendar", "Contact center", "Tasks & projects", "Website builder"]
    },
    {
      id: 5,
      label: "BUSINESS SIZE",
      icon: (
        <svg width="23" height="20" viewBox="0 0 23 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.813 8.091a.862.862 0 0 1 1.072-.842l4.024 1.013a.867.867 0 0 1 .654.842v8.003H23V20H0v-2.893h1.438V3.093c0-.71.51-1.315 1.206-1.428L12.707.019a1.442 1.442 0 0 1 1.668 1.428v15.66h1.438V8.09zm-8.598 9.016v-4.34H4.323v4.34h2.892zm4.36-1.521v-2.82h-2.89v2.82h2.89zm8.55-4.012H17.25v2.893h2.875v-2.893zM11.5 4.086H8.625V6.98H11.5V4.086zm-4.313 0H4.313V6.98h2.875V4.086zm4.313 4.34H8.625v2.894H11.5V8.426zm-4.313 0H4.313v2.894h2.875V8.426z"></path></svg>
      ),
      content: ["Solo entrepreneurs", "Small business", "Enterprise"]
    },
  ],
  solutionButton: {
    link: "/solutions",
    text: "See all solutions"
  }
};

export const SolutionPageData = {
  title: "Bitrix24 solutions",
  solutionsCards: [
    {
      id: 1,
      title: "Role",
      content: [
        {
          link: "/solutions/roles/marketing",
          name: "Marketing"
        },
        {
          link: "/solutions/roles/hr",
          name: "HR"
        },
        {
          link: "/solutions/roles/project-management",
          name: "Project Management"
        },
        {
          link: "/solutions/roles/customer-service",
          name: "Customer Service"
        },
      ],
      image: personsImage
    },
    {
      id: 2,
      title: "Need",
      content: [
        {
          link: "",
          name: "Productivity"
        },
        {
          link: "",
          name: "Communication"
        },
        {
          link: "",
          name: "Mobility"
        },
        {
          link: "",
          name: "Management & leadership"
        }
      ],
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1204_181)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7504 24.5116L12.0882 14.7534L6.99479 16.0394L-1.74955e-06 8.97506L7.46111 7.09124L7.51325 7.1439L7.53878 7.11811L7.48664 7.06545L9.35192 -0.469835L16.3467 6.5945L15.148 11.4369L24.7561 21.1405C25.2318 20.9744 25.7425 20.8842 26.2741 20.8842C28.8386 20.8842 30.9174 22.9837 30.9174 25.5737C30.9174 28.1636 28.8386 30.2632 26.2741 30.2632C23.7097 30.2632 21.6308 28.1636 21.6308 25.5737C21.6308 25.2084 21.6721 24.8529 21.7504 24.5116V24.5116ZM3.80971 19.7175L7.97111 19.7175C7.392 21.5652 7.07962 23.5328 7.07962 25.574C7.07962 36.2803 15.6734 44.9596 26.2744 44.9596C36.8753 44.9596 45.4691 36.2803 45.4691 25.574C45.4691 14.8676 36.8753 6.18841 26.2744 6.18841C24.1 6.18841 22.01 6.55355 20.0613 7.22644L18.1453 3.62693C20.675 2.67078 23.4142 2.14797 26.2744 2.14797C39.0848 2.14797 49.4698 12.6361 49.4698 25.574C49.4698 38.5118 39.0848 49 26.2744 49C13.4639 49 3.07895 38.5118 3.07895 25.574C3.07895 23.5517 3.33267 21.5893 3.80971 19.7175V19.7175ZM11.9974 21.2151L15.6542 24.9083C15.6409 25.1284 15.6342 25.3504 15.6342 25.5739C15.6342 31.509 20.3981 36.3203 26.2748 36.3203C32.1515 36.3203 36.9154 31.509 36.9154 25.5739C36.9154 19.6388 32.1515 14.8275 26.2748 14.8275C26.144 14.8275 26.0137 14.8298 25.884 14.8346L22.1763 11.0901C23.4785 10.7149 24.8534 10.5141 26.2748 10.5141C34.5102 10.5141 41.1863 17.2566 41.1863 25.5739C41.1863 33.8912 34.5102 40.6337 26.2748 40.6337C18.0394 40.6337 11.3633 33.8912 11.3633 25.5739C11.3633 24.0582 11.585 22.5949 11.9974 21.2151Z" fill="white"></path>
          </g>
          <defs>
            <clipPath id="clip0_1204_181">
              <rect width="50" height="50" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      id: 3,
      title: "Industry",
      content: [
        {
          link: "",
          name: "Legal"
        },
        {
          link: "",
          name: "Retail"
        },
        {
          link: "",
          name: "Travel"
        },
        {
          link: "",
          name: "Transport & storage"
        },
        {
          link: "",
          name: "Resturant"
        },
        {
          link: "",
          name: "Remote"
        }
      ],
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8372 21.6745C18.2702 21.6745 22.6745 17.2702 22.6745 11.8372C22.6745 6.40428 18.2702 2 12.8372 2C7.40429 2 3 6.40428 3 11.8372C3 17.2702 7.40429 21.6745 12.8372 21.6745ZM34.481 47.2515C41.0005 47.2515 46.2857 41.9664 46.2857 35.4468C46.2857 28.9273 41.0005 23.6421 34.481 23.6421C27.9614 23.6421 22.6763 28.9273 22.6763 35.4468C22.6763 41.9664 27.9614 47.2515 34.481 47.2515ZM42.3499 11.8371C42.3499 16.1834 38.8264 19.7069 34.4801 19.7069C30.1337 19.7069 26.6103 16.1834 26.6103 11.8371C26.6103 7.49071 30.1337 3.96728 34.4801 3.96728C38.8264 3.96728 42.3499 7.49071 42.3499 11.8371ZM12.843 41.3474C16.1027 41.3474 18.7453 38.7048 18.7453 35.445C18.7453 32.1852 16.1027 29.5427 12.843 29.5427C9.58318 29.5427 6.94061 32.1852 6.94061 35.445C6.94061 38.7048 9.58318 41.3474 12.843 41.3474Z" fill="white"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Tools",
      content: [
        {
          link: "",
          name: "Telephony"
        },
        {
          link: "",
          name: "CRM"
        },
        {
          link: "",
          name: "Calenders"
        },
        {
          link: "",
          name: "Contact center"
        },
        {
          link: "",
          name: "Tasks & Projects"
        },
        {
          link: "",
          name: "Website Builders"
        }
      ],
      image: mobileImage

    },
    {
      id: 5,
      title: "Business size",
      content: [
        {
          link: "",
          name: "Solo enterpreneur"
        },
        {
          link: "",
          name: "Small business"
        },
        {
          link: "",
          name: "enterprise"
        }
      ],

    },
  ],
  meetingImage: meetingImage,

  AllSolutions: [
    {
      catagory: "roles",
      type: [
        {
          title: "MARKETING",
          tagline: "World-class marketing tools any business can afford",
          Image: marketingHeroImage,
          marketingContainerText: "Measure, collaborate, automate. If your marketing team is struggling with any of these, Bitrix24 can help. We will help you generate more leads, improve conversion rates, provide superior customer service and put marketing on autopilot.",
          features: {
            title: "Bitrix24 Features",
            description: "If you are looking to take your marketing to the next level, our CRM software can help. With tools built to assist companies of every size and industry, here are a few of the most popular Bitrix24 features.",
            content: [
              {
                titile: "Marketing automation",
                icon: <AutomationIcon width={35} height={35} />,
                image: AutomationImage,
                description: "Automate your marketing efforts by setting up email marketing campaigns, ads, and more, all through the Bitrix24 CRM marketing software."
              },
              {
                titile: "Contact center",
                icon: (
                  <svg width="35" height="35" fill="url(#svg_gradient_headset_2)">
                    <defs>
                      <linearGradient id="svg_gradient_headset_2" x1="12.2654" y1="4.79825" x2="12.2654" y2="19.0852" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2FC7F7"></stop>
                        <stop offset="1" stop-color="#409EEF"></stop>
                      </linearGradient>
                    </defs>
                    <use href="/images/content_common/icons/bxw_svg_icons.svg?1740147748005#headset"></use>
                  </svg>
                ),
                image: AutomationImage,
                description: "Businesses of all sizes need a contact center. Let Bitrix24 help you manage your communication channels with our CRM software. Integrate all chats, web forms, emails, and phone calls into one space."
              },
              {
                titile: "Lead generation & nurturing",
                icon: (
                  <svg width="35" height="35" fill="url(#svg_gradient_person_care_3)">
                    <defs>
                      <linearGradient id="svg_gradient_person_care_3" x1="12.2654" y1="4.79825" x2="12.2654" y2="19.0852" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2FC7F7"></stop>
                        <stop offset="1" stop-color="#409EEF"></stop>
                      </linearGradient>
                    </defs>
                    <use href="/images/content_common/icons/bxw_svg_icons.svg?1740147748005#person_care"></use>
                  </svg>
                ),
                image: Leadgeneration,
                description: "Bitrix24 brings teams together with multiple communication avenues and planning materials. Use Gantt charts, tasks, to-do lists, and calendars to collaborate on projects."
              },
              {
                titile: "Client management",
                icon: (
                  <svg width="35" height="35" fill="url(#svg_gradient_person_card_4)">
                    <defs>
                      <linearGradient id="svg_gradient_person_card_4" x1="12.2654" y1="4.79825" x2="12.2654" y2="19.0852" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2FC7F7"></stop>
                        <stop offset="1" stop-color="#409EEF"></stop>
                      </linearGradient>
                    </defs>
                    <use href="/images/content_common/icons/bxw_svg_icons.svg?1740147748005#person_card"></use>
                  </svg>
                ),
                image: Clientmanagement,
                description: "Keeping all the information for each interaction and communication with a lead or client helps sales teams to stay current on relationships. All information for clients is kept in one central location for easy access, right in the CRM software."
              },
              {
                titile: "Sales analytics",
                icon: <AnalyticsIcon width={35} height={35} />,
                image: SalesAnalytics,
                description: "Better data leads to better decisions. Use Bitrix24 to optimize your site, focus on your marketing plan, and make better sales decisions."
              },
              {
                titile: "Marketing team collaboration",
                icon: (
                  <svg width="35" height="35" fill="url(#svg_gradient_3_persons_6)">
                    <defs>
                      <linearGradient id="svg_gradient_3_persons_6" x1="12.2654" y1="4.79825" x2="12.2654" y2="19.0852" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2FC7F7"></stop>
                        <stop offset="1" stop-color="#409EEF"></stop>
                      </linearGradient>
                    </defs>
                    <use href="/images/content_common/icons/bxw_svg_icons.svg?1740147748005#3_persons"></use>
                  </svg>
                ),
                image: TeamCollabration,
                description: "Bitrix24 brings teams together with multiple communication avenues and planning materials. Use Gantt charts, tasks, to-do lists, and calendars to collaborate on projects."
              },
              {
                titile: "Tasks and projects",
                icon: (
                  <svg width="35" height="35" fill="url(#svg_gradient_window_double_check_7)">
                    <defs>
                      <linearGradient id="svg_gradient_window_double_check_7" x1="12.2654" y1="4.79825" x2="12.2654" y2="19.0852" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2FC7F7"></stop>
                        <stop offset="1" stop-color="#409EEF"></stop>
                      </linearGradient>
                    </defs>
                    <use href="/images/content_common/icons/bxw_svg_icons.svg?1740147748005#window_double_check"></use>
                  </svg>
                ),
                image: Tasks_Projects,
                description: "Create customer tasks and projects to fulfill work for your company. The CRM marketing software from Bitrix24 will help your team accomplish more by organizing your work and increasing communication."
              },
              {
                titile: "Document management",
                icon: (
                  <svg width="35" height="35" fill="url(#svg_gradient_file_8)">
                    <defs>
                      <linearGradient id="svg_gradient_file_8" x1="12.2654" y1="4.79825" x2="12.2654" y2="19.0852" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2FC7F7"></stop>
                        <stop offset="1" stop-color="#409EEF"></stop>
                      </linearGradient>
                    </defs>
                    <use href="/images/content_common/icons/bxw_svg_icons.svg?1740147748005#file"></use>
                  </svg>
                ),
                image: DocumentManagement,
                description: "Manage documents easily with Bitrix24's CRM software. Cloud storage allows you to store and organize your documents for easier access. Use access permissions to protect private or sensitive information."
              },
              {
                titile: "Integration with social networks",
                icon: (
                  <svg width="35" height="35" fill="url(#svg_gradient_global_integration_9)">
                    <defs>
                      <linearGradient id="svg_gradient_global_integration_9" x1="12.2654" y1="4.79825" x2="12.2654" y2="19.0852" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2FC7F7"></stop>
                        <stop offset="1" stop-color="#409EEF"></stop>
                      </linearGradient>
                    </defs>
                    <use href="/images/content_common/icons/bxw_svg_icons.svg?1740147748005#global_integration"></use>
                  </svg>
                ),
                image: SocialNetworks,
                description: "Customers communicate with companies in a variety of ways, including social networks. Provide faster responses by integrating social networks into your CRM software."
              },
              {
                titile: "Bots and AI",
                icon: (
                  <svg width="35" height="35" fill="url(#svg_gradient_robophone_10)">
                    <defs>
                      <linearGradient id="svg_gradient_robophone_10" x1="12.2654" y1="4.79825" x2="12.2654" y2="19.0852" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2FC7F7"></stop>
                        <stop offset="1" stop-color="#409EEF"></stop>
                      </linearGradient>
                    </defs>
                    <use href="/images/content_common/icons/bxw_svg_icons.svg?1740147748005#robophone"></use>
                  </svg>
                ),
                image: AIbotImage,
                description: "Increase your company capabilities by adding bots and artificial intelligence (AI) to your site. This tool helps stretch your resources while still caring for your customers."
              },
              {
                titile: "Group calendars",
                icon: (
                  <svg width="35" height="35" fill="url(#svg_gradient_calendar_11)">
                    <defs>
                      <linearGradient id="svg_gradient_calendar_11" x1="12.2654" y1="4.79825" x2="12.2654" y2="19.0852" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2FC7F7"></stop>
                        <stop offset="1" stop-color="#409EEF"></stop>
                      </linearGradient>
                    </defs>
                    <use href="/images/content_common/icons/bxw_svg_icons.svg?1740147748005#calendar"></use>
                  </svg>
                ),
                image: GroupCalenderImage,
                description: "Help everyone communicate more and stay in contact with expectations by posting due dates and team meetings in a calendar that everyone on the team can view."
              },
              {
                titile: "CRM web forms",
                icon: (
                  <svg width="35" height="35" fill="url(#svg_gradient_web_design_12)">
                    <defs>
                      <linearGradient id="svg_gradient_web_design_12" x1="12.2654" y1="4.79825" x2="12.2654" y2="19.0852" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2FC7F7"></stop>
                        <stop offset="1" stop-color="#409EEF"></stop>
                      </linearGradient>
                    </defs>
                    <use href="/images/content_common/icons/bxw_svg_icons.svg?1740147748005#web_design"></use>
                  </svg>
                ),
                image: CrmWebFromsImage,
                description: "Capture more leads by using CRM web forms. Not only can Bitrix24 help build your website, but you can also add in great sales tools, like web forms."
              },
            ]
          },
          benifits: {
            heroPortion: {
              imaage: marketingBenifitsImage,
              quote: `“Bitrix24 pretty much does everything, but run your company for you.”`,
              quoteEdition: "Inc. Magazine",
              quotesicon:quotesOpenSvg,
            },
            mainPortion: {
              title: "Benefits of Bitrix24",
              description: "Using Bitrix24 can take your marketing plans to the next level by helping you organize your efforts. View your company data for work hours, SEO efforts, and track ROI with our CRM software. Other benefits of using Bitrix24 include being able to do the following:",
              points: [
                {
                  icon:blueTicksvg,
                  text: "Automate routine tasks and free your time for what's really important"
                },
                {
                  icon:blueTicksvg,
                  text: "Know what your customers want before they do"
                },
                {
                  icon:blueTicksvg,
                  text: "DIY (Doesn't require automation consultants)"
                },
                {
                  icon:blueTicksvg,
                  text: "Save money on having all the tools in one place"
                },
              ]
            }
          }
        }
      ]
    }
  ],

}