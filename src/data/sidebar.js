import { FaTh  } from "react-icons/fa";
import { FcAbout,FcViewDetails, FcAddImage } from "react-icons/fc";
// import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <FcAddImage />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <FcViewDetails />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report a Problem",
    icon: <FcAbout />,
    path: "/contact-us",
  },
];

export default menu;