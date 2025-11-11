import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <React.Fragment>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </React.Fragment>
  );
}
