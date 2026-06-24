import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const Uae = () => <DestinationPageTemplate data={getDestination("uae")} />;
export default Uae;
