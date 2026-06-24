import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const Grenada = () => <DestinationPageTemplate data={getDestination("grenada")} />;
export default Grenada;
