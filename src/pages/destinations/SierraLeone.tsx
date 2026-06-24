import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const SierraLeone = () => <DestinationPageTemplate data={getDestination("sierra-leone")} />;
export default SierraLeone;
