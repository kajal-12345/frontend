import { atom } from "recoil";
const sidebarState = atom({
    key: 'sidebar', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });
  export default sidebarState;