import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const Malta = () => <DestinationPageTemplate data={getDestination("malta")} />;
export default Malta;
