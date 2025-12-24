import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import Jumbotron from "../components/landing/Jumbotron";
import ServicesCard from "../components/landing/ServicesCard";
import Banner from "../components/landing/Banner";

const LandingPage = () => {
	return (
		<>
			<Header />
			<Jumbotron />
			<div className="flex justify-center gap-4">
				<ServicesCard
					imgSrc="https://www.partbargain.com/wp-content/uploads/demo/placeholder.svg"
					imgAlt="service1"
					title="Service 1"
					description="Lorem ipsum dolor sit amet"
					button="Call to Action"
					cardDetail="With less than a month to go before the European Union
										enacts new consumer privacy laws for its citizens, companies
										around the world are updating their terms of service
										agreements to comply"
				/>
				<ServicesCard
					imgSrc="https://www.partbargain.com/wp-content/uploads/demo/placeholder.svg"
					imgAlt="service2"
					title="Service 2"
					description="Lorem ipsum dolor sit amet"
					button="Call to Action"
					cardDetail="With less than a month to go before the European Union
										enacts new consumer privacy laws for its citizens, companies
										around the world are updating their terms of service
										agreements to comply"
				/>
				<ServicesCard
					imgSrc="https://www.partbargain.com/wp-content/uploads/demo/placeholder.svg"
					imgAlt="service3"
					title="Service 3"
					description="Lorem ipsum dolor sit amet"
					button="Call to Action"
					cardDetail="With less than a month to go before the European Union
										enacts new consumer privacy laws for its citizens, companies
										around the world are updating their terms of service
										agreements to comply"
				/>
			</div>
			<Banner />
      
			<Footer />
		</>
	);
};

export default LandingPage;
