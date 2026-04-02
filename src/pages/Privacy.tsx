import { LegalPage } from '../components/LegalPage';
import { legalDocuments } from '../data/siteContent';

export default function Privacy() {
  return <LegalPage document={legalDocuments.privacy} />;
}
