import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import SponsorDetails from "../components/SponsorDetails/SponsorDetails";
import Banner from "../pages/Home/Banner";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Banner></Banner>
      <Outlet />
      <SponsorDetails></SponsorDetails>
      <Footer></Footer>
    </div>
  );
};

export default Main;
