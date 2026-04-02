import { LegalPage } from '../components/LegalPage';
import { legalDocuments } from '../data/siteContent';

export default function Terms() {
  return <LegalPage document={legalDocuments.terms} />;
}
