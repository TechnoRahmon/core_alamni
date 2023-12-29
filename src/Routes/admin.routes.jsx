import AddCourseScreen from "../Screens/AddCourseScreen";
import DashboardScreen from "../Screens/DashboardScreen";
import { paths } from "./paths";

export const adminRoutes = [
  {
    path: "",
    element: <DashboardScreen />,
  },
  {
    path: paths.ADD_COURSE,
    element: <AddCourseScreen />,
  }
];
