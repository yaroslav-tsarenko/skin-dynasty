import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default AccountPage;
