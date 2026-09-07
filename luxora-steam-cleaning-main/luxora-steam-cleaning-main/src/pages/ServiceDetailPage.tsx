import { useParams, Navigate } from "react-router-dom";
import { getServiceBySlug } from "../data/services";
import ServiceLayout from "../components/ServiceLayout";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) return <Navigate to="/services" replace />;

  return <ServiceLayout service={service} />;
}
