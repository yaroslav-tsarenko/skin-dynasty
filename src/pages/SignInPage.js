import HeaderDesktop1 from "../components/HeaderDesktop1";
import SignInBanner from "../components/SignInBanner";
import Footer from "../components/Footer";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <HeaderDesktop1 />
      <SignInBanner />
      <Footer />
    </div>
  );
};

export default SignInPage;
