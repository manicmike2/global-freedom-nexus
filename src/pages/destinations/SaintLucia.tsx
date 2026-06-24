import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const SaintLucia = () => <DestinationPageTemplate data={getDestination("saint-lucia")} />;
export default SaintLucia;
