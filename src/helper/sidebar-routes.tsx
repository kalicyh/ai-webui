import { JSX } from 'react';
import { HiSquares2X2,HiInboxArrowDown,HiDocumentText,HiTableCells,HiCodeBracketSquare,HiWallet,HiUsers,HiCog6Tooth } from "react-icons/hi2";
import { SidebarMenuObj } from './types';

// Import other icons similarly

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;



const routes: SidebarMenuObj[] = [
    {
        path: '/dashboard',
        icon: <HiSquares2X2 className={iconClasses} />,
        pageName: 'Dashboard',
        pageTitle: 'Dashboard',
    },
    {
        path: '/leads',
        icon: <HiInboxArrowDown className={iconClasses} />,
        pageName: 'Leads',
        pageTitle : "Leads"
    },
    {
        path: '/settings',
        icon: <HiCog6Tooth className={`${iconClasses} inline`} />,
        pageName: 'Settings',
        pageTitle : "",
        submenu: [
            {
                path: '/settings/billing',
                icon: <HiWallet className={submenuIconClasses} />,
                pageName: 'Billing',
                pageTitle : "Bills",
            },
            {
                path: '/settings/team',
                icon: <HiUsers className={submenuIconClasses} />,
                pageName: 'Team',
                pageTitle : "Team",
            }
        ],
    },
];

export default routes;
