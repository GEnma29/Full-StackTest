import Header from "../components/Header";
import * as StylesLayout from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={StylesLayout.Layout}>
        <Header />
        <div className={StylesLayout.Container}>{children}</div>
    </div>
  );
};

export default Layout;
