import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import Jumbotron from "../components/services/Jumbotron";
import ServicesDetail from "../components/services/ServicesDetail";

const Services = () => {
	return (
		<>
			<Header />
			<Jumbotron />
			<ServicesDetail
				imgSrc="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				imgAlt="service-1"
				title="Headline for Service 1"
				description="Detailed description for Service 1 goes here. This service offers exceptional value and quality. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			/>
			<ServicesDetail
				imgSrc="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				imgAlt="service-2"
				title="Headline for Service 2"
				description="Detailed description for Service 1 goes here. This service offers exceptional value and quality. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			/>
			<ServicesDetail
				imgSrc="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				imgAlt="service-3"
				title="Headline for Service 3"
				description="Detailed description for Service 1 goes here. This service offers exceptional value and quality. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			/>
			<Footer />
		</>
	);
};

export default Services;
