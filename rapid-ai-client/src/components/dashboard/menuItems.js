import {
    FiHome,
    FiFileText,
    FiType,
    FiFile,
    FiClock,
    FiInfo,
    FiSettings,
    FiUsers
} from "react-icons/fi";

const menuItems = [
    {
        section: "MAIN",
        items: [
            {
                name: "Dashboard",
                path: "/dashboard",
                icon: FiHome
            }
        ]
    },
    {
        section: "AI TOOLS",
        items: [
            {
                name: "Article Generator",
                path: "/article",
                icon: FiFileText
            },
            {
                name: "Title Generator",
                path: "/titles",
                icon: FiType
            },
            {
                name: "Resume Review",
                path: "/resume",
                icon: FiFile
            }
        ]
    },
    {
        section: "MORE",
        items: [
            {
                name: "History",
                path: "/history",
                icon: FiClock
            },
            {
                name: "Community",
                path: "/community",
                icon: FiUsers
            },
            {
                name: "About",
                path: "/about",
                icon: FiInfo
            },
            {
                name: "Settings",
                path: "/settings",
                icon: FiSettings
            }
        ]
    }
];

export default menuItems;