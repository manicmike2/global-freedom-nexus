import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const Dominica = () => <DestinationPageTemplate data={getDestination("dominica")} />;
export default Dominica;
