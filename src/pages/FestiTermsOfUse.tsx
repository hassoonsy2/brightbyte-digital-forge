import React from 'react';
import LegalDocumentLayout, { type LegalSection } from '../components/LegalDocumentLayout';

const sections: LegalSection[] = [
  {
    title: 'Acceptatie van Voorwaarden',
    content: (
      <p>
        Door Festi te gebruiken, accepteert u deze Gebruiksvoorwaarden. Indien u niet akkoord gaat, dient u
        de service niet te gebruiken.
      </p>
    ),
  },
  {
    title: 'Beschrijving van de Service',
    content: (
      <p>
        Festi is een digitaal platform met functies die in de tijd kunnen wijzigen. Wij behouden ons het recht
        voor om onderdelen van de service aan te passen.
      </p>
    ),
  },
  {
    title: 'Gebruikersaccount',
    content: (
      <>
        <p>Voor bepaalde functies is een account vereist. U gaat akkoord met het volgende:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>U verstrekt correcte, actuele en volledige registratiegegevens</li>
          <li>U houdt uw accountgegevens up-to-date</li>
          <li>U beschermt uw inloggegevens en wachtwoord</li>
          <li>U bent verantwoordelijk voor activiteiten onder uw account</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Aanvaardbaar Gebruik',
    content: (
      <>
        <p>U gebruikt Festi niet voor handelingen die onrechtmatig of schadelijk zijn, zoals:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Overtreding van toepasselijke wet- en regelgeving</li>
          <li>Schending van rechten van derden</li>
          <li>Verspreiding van illegale, beledigende of schadelijke content</li>
          <li>Verstoring van de service, infrastructuur of beveiliging</li>
          <li>Pogingen tot ongeautoriseerde toegang</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Intellectueel Eigendom',
    content: (
      <p>
        Alle rechten op content, software, merkuitingen en functionaliteit van Festi behoren toe aan
        Bright-Byte of haar licentiegevers en worden beschermd door toepasselijke intellectuele eigendomsrechten.
      </p>
    ),
  },
  {
    title: 'Gebruikersinhoud',
    content: (
      <p>
        U behoudt eigendom van door u aangeleverde inhoud. Door content te plaatsen, verleent u Festi een
        niet-exclusieve, wereldwijde, royaltyvrije licentie om deze content te gebruiken voor het leveren en
        verbeteren van de service.
      </p>
    ),
  },
  {
    title: 'Privacy',
    content: (
      <p>
        Uw gebruik van Festi valt tevens onder de Festi Privacyverklaring. Raadpleeg dit document voor details
        over gegevensverwerking en uw rechten.
      </p>
    ),
  },
  {
    title: 'Beëindiging',
    content: (
      <p>
        Wij kunnen accounts tijdelijk opschorten of permanent beëindigen bij schending van deze voorwaarden of
        bij misbruik van de service.
      </p>
    ),
  },
  {
    title: 'Disclaimer',
    content: (
      <p>
        Festi wordt geleverd &quot;zoals het is&quot;, zonder expliciete of impliciete garanties over beschikbaarheid,
        veiligheid of foutloos functioneren.
      </p>
    ),
  },
  {
    title: 'Beperking van Aansprakelijkheid',
    content: (
      <p>
        Voor zover wettelijk toegestaan is Bright-Byte niet aansprakelijk voor indirecte of gevolgschade die
        voortvloeit uit gebruik van of onvermogen tot gebruik van Festi.
      </p>
    ),
  },
  {
    title: 'Wijzigingen in Voorwaarden',
    content: (
      <p>
        Wij mogen deze voorwaarden wijzigen. Bij significante wijzigingen publiceren wij een geactualiseerde
        versie op deze pagina met nieuwe datum van bijwerking.
      </p>
    ),
  },
  {
    title: 'Toepasselijk Recht',
    content: (
      <p>
        Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde
        rechter in Nederland, tenzij dwingend recht anders bepaalt.
      </p>
    ),
  },
  {
    title: 'Contactgegevens',
    content: (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
        <p><strong className="text-white">E-mail:</strong> contact@ambisgroup.nl</p>
        <p><strong className="text-white">Telefoon:</strong> +31657694468</p>
        <p><strong className="text-white">Adres:</strong> Utrecht, Nederland</p>
        <p><strong className="text-white">KVK:</strong> 66739179</p>
        <p><strong className="text-white">BTW:</strong> NL001453936B46</p>
      </div>
    ),
  },
];

const FestiTermsOfUse = () => {
  return (
    <LegalDocumentLayout
      badge="Festi Legal"
      title="Gebruiksvoorwaarden - Festi"
      subtitle="Deze voorwaarden beschrijven de rechten en plichten bij gebruik van het Festi-platform."
      lastUpdated="Februari 2026"
      sections={sections}
    />
  );
};

export default FestiTermsOfUse;
