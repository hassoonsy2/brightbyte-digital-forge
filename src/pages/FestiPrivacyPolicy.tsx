import React from 'react';
import LegalDocumentLayout, { type LegalSection } from '../components/LegalDocumentLayout';

const sections: LegalSection[] = [
  {
    title: 'Inleiding',
    content: (
      <p>
        Deze privacyverklaring legt uit hoe Festi persoonsgegevens verzamelt, gebruikt en beschermt.
        Wij verwerken gegevens zorgvuldig en in lijn met de Algemene Verordening Gegevensbescherming
        (AVG/GDPR).
      </p>
    ),
  },
  {
    title: 'Gegevensverantwoordelijke',
    content: (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
        <p><strong className="text-white">Bedrijfsnaam:</strong> Bright-Byte</p>
        <p><strong className="text-white">KVK:</strong> 66739179</p>
        <p><strong className="text-white">BTW:</strong> NL001453936B46</p>
        <p><strong className="text-white">E-mail:</strong> contact@ambisgroup.nl</p>
        <p><strong className="text-white">Telefoon:</strong> +31657694468</p>
        <p><strong className="text-white">Adres:</strong> Utrecht, Nederland</p>
      </div>
    ),
  },
  {
    title: 'Welke Gegevens Wij Verwerken',
    content: (
      <>
        <p>Afhankelijk van uw gebruik van Festi kunnen wij onder andere deze gegevens verwerken:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Contactgegevens zoals naam, e-mailadres en telefoonnummer</li>
          <li>Account- en profielgegevens die u zelf invult</li>
          <li>Gebruiksinformatie, interacties en logbestanden</li>
          <li>Technische gegevens zoals IP-adres, browser en apparaat</li>
          <li>Cookie- en voorkeurgegevens</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Doeleinden en Rechtsgronden',
    content: (
      <>
        <p>Wij verwerken persoonsgegevens uitsluitend voor legitieme doeleinden, zoals:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Het leveren, beveiligen en verbeteren van het platform</li>
          <li>Klantenservice, communicatie en supportverzoeken</li>
          <li>Analyse van gebruik en prestaties van de dienst</li>
          <li>Naleving van wettelijke verplichtingen</li>
        </ul>
        <p>
          De juridische basis is meestal uitvoering van een overeenkomst, gerechtvaardigd belang,
          wettelijke verplichting of toestemming (waar van toepassing).
        </p>
      </>
    ),
  },
  {
    title: 'Delen met Derden',
    content: (
      <p>
        Wij verkopen geen persoonsgegevens. Indien nodig delen wij gegevens met verwerkers of leveranciers
        die ons ondersteunen bij hosting, analyse of support. Met deze partijen worden passende
        verwerkersafspraken gemaakt.
      </p>
    ),
  },
  {
    title: 'Internationale Doorgifte',
    content: (
      <p>
        Wanneer gegevens buiten de EER worden verwerkt, treffen wij passende waarborgen zoals
        standaardcontractbepalingen of andere wettelijk toegestane mechanismen.
      </p>
    ),
  },
  {
    title: 'Bewaartermijnen',
    content: (
      <p>
        Persoonsgegevens worden niet langer bewaard dan noodzakelijk voor het doel waarvoor ze zijn
        verzameld, tenzij een wettelijke bewaarplicht een langere termijn vereist.
      </p>
    ),
  },
  {
    title: 'Beveiliging',
    content: (
      <p>
        Wij gebruiken technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen
        ongeautoriseerde toegang, verlies of misbruik. Geen systeem is 100% risicovrij, maar wij blijven
        onze beveiliging actief verbeteren.
      </p>
    ),
  },
  {
    title: 'Uw Rechten Onder de AVG',
    content: (
      <>
        <p>U kunt, binnen de wettelijke kaders, gebruikmaken van de volgende rechten:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Recht op inzage van uw persoonsgegevens</li>
          <li>Recht op correctie van onjuiste of onvolledige gegevens</li>
          <li>Recht op verwijdering van gegevens</li>
          <li>Recht op beperking van verwerking</li>
          <li>Recht op overdraagbaarheid van gegevens</li>
          <li>Recht van bezwaar tegen bepaalde verwerkingen</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Cookies en Tracking',
    content: (
      <p>
        Festi gebruikt cookies en vergelijkbare technieken voor basisfunctionaliteit, prestaties en
        gebruikerservaring. U kunt cookie-instellingen beheren via uw browser of via onze cookievoorkeuren
        (indien beschikbaar).
      </p>
    ),
  },
  {
    title: 'Wijzigingen in deze Privacyverklaring',
    content: (
      <p>
        Deze privacyverklaring kan worden bijgewerkt wanneer onze dienstverlening of wettelijke vereisten
        wijzigen. De meest actuele versie staat altijd op deze pagina, inclusief bijgewerkte datum.
      </p>
    ),
  },
  {
    title: 'Contact en Klachten',
    content: (
      <>
        <p>
          Voor vragen over privacy of het uitoefenen van uw rechten kunt u contact opnemen via de
          onderstaande gegevens.
        </p>
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
          <p><strong className="text-white">E-mail:</strong> contact@ambisgroup.nl</p>
          <p><strong className="text-white">Telefoon:</strong> +31657694468</p>
          <p><strong className="text-white">Adres:</strong> Utrecht, Nederland</p>
          <p>
            <strong className="text-white">Toezichthouder:</strong> U kunt ook een klacht indienen bij de
            Autoriteit Persoonsgegevens.
          </p>
        </div>
      </>
    ),
  },
];

const FestiPrivacyPolicy = () => {
  return (
    <LegalDocumentLayout
      badge="Festi Privacy"
      title="Privacyverklaring - Festi"
      subtitle="In dit beleid staat hoe Festi persoonsgegevens verwerkt, beveiligt en respecteert volgens de AVG."
      lastUpdated="Februari 2026"
      sections={sections}
    />
  );
};

export default FestiPrivacyPolicy;
