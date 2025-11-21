import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import Jumbotron from "../components/landing/Jumbotron";
import ServicesCard from "../components/landing/ServicesCard";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <Jumbotron />
        <div className="flex justify-center gap-4">
          <ServicesCard
            imgSrc="https://www.partbargain.com/wp-content/uploads/demo/placeholder.svg"
            imgAlt="service1"
            title="Service 1"
            description="Lorem ipsum dolor sit amet"
            button="Call to Action"
          />
          <ServicesCard
            imgSrc="https://www.partbargain.com/wp-content/uploads/demo/placeholder.svg"
            imgAlt="service1"
            title="Service 1"
            description="Lorem ipsum dolor sit amet"
            button="Call to Action"
          />
          <ServicesCard
            imgSrc="https://www.partbargain.com/wp-content/uploads/demo/placeholder.svg"
            imgAlt="service1"
            title="Service 1"
            description="Lorem ipsum dolor sit amet"
            button="Call to Action"
          />
        </div>
        <div className="h-96 bg-amber-400"></div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
