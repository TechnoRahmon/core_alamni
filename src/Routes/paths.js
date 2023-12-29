export const paths = {
  HOME_PAGE: "/",
  LOGIN_PAGE: "/login",
  REGISTER_PAGE: "/register",
  MENTOR_PAGE: "/mentor",
  ADD_COURSE:'add-course'
};
export const getMentorPath = (path)=> `${paths.MENTOR_PAGE}/${path}`