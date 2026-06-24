import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const Greece = () => <DestinationPageTemplate data={getDestination("greece")} />;
export default Greece;
