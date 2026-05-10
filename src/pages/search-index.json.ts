
import { getCollection } from 'astro:content';

export async function GET() {
    // Manually defined important pages
    const mainPages = [
        { title: "Home", slug: "/", description: "EU-Führerschein legal erwerben – professionelle Begleitung" },
        { title: "Über Uns", slug: "/uber-uns", description: "Koeln-Fuehrerschein - Ihr Partner für EU-Führerscheine" },
        { title: "Kontakt", slug: "/kontakt", description: "Kontaktieren Sie Uns" },
        { title: "FAQs", slug: "/faqs", description: "Häufig Gestellte Fragen" },
        { title: "Deutscher Führerschein Kaufen", slug: "/eu-fuhrerschein-kaufen/fuhrerschein-kaufen", description: "Kaufen Deutschen Führerschein" },
        { title: "Österreichischer Führerschein Kaufen", slug: "/eu-fuhrerschein-kaufen/fuhrerschein-in-osterreich-kaufen", description: "Führerschein in Österreich kaufen" },
        { title: "Schweizer Führerschein Kaufen", slug: "/eu-fuhrerschein-kaufen/neu-fuhrerausweis-schweiz-kaufen", description: "Schweizer Führerschein kaufen" },
        { title: "Polnischer Führerschein Kaufen", slug: "/eu-fuhrerschein-kaufen/fuhrerschein-in-polen-kaufen", description: "Führerschein in Polen kaufen" },
        { title: "Tschechischer Führerschein Kaufen", slug: "/eu-fuhrerschein-kaufen/fuhrerschein-in-tschechien-legal-kaufen", description: "Führerschein in Tschechien kaufen" },
        { title: "Russischer Führerschein Kaufen", slug: "/eu-fuhrerschein-kaufen/russischer-fuehrerschein-kaufen", description: "Führerschein aus Russland kaufen" },
        { title: "Ukrainischer Führerschein Kaufen", slug: "/eu-fuhrerschein-kaufen/ukrainischer-fuehrerschein-kaufen", description: "Führerschein aus der Ukraine kaufen" },
        { title: "Angelschein Kaufen", slug: "/eu-fuhrerschein-kaufen/angelschein-kaufen", description: "Angelschein kaufen" },
        { title: "Bootsführerschein Kaufen", slug: "/eu-fuhrerschein-kaufen/bootsfuhrerschein-kaufen", description: "Bootsführerschein kaufen" },
        { title: "MPU-Coaching & EU-Führerschein-Beratung", slug: "/mpu-gutachten-kaufen", description: "Professionelle MPU-Vorbereitung & EU-Alternative" },
    ];

    const blogPosts = [
        { title: "EU Führerschein Rechtslage 2025", slug: "/blog/eu-fuehrerschein-rechtslage-2025", description: "Aktuelle Rechtslage zum EU Führerschein" },
        { title: "Führerschein aus Tschechien Gültigkeit", slug: "/blog/fuehrerschein-aus-tschechien-gueltigkeit", description: "Ist der CZ Führerschein in DE gültig?" },
        { title: "EU-Führerschein als MPU-Alternative", slug: "/blog/mpu-umgehen-legal", description: "Legale Optionen nach einer MPU-Anordnung" },
        { title: "EU-Führerschein erwerben mit Begleitservice", slug: "/blog/fuehrerschein-erwerben-ohne-pruefung", description: "So vereinfachen wir den Prozess für Sie" },
        { title: "Echten Führerschein kaufen", slug: "/blog/echten-fuehrerschein-kaufen", description: "Woran Sie Originale erkennen" },
        { title: "Internationalen Führerschein kaufen", slug: "/blog/internationalen-fuehrerschein-kaufen", description: "Weltweit mobil sein" },
        { title: "Führerschein kaufen legal", slug: "/blog/fuehrerschein-kaufen-legal", description: "Rechtliche Hintergründe" },
        { title: "Motorrad Führerschein kaufen", slug: "/blog/motorrad-fuehrerschein-kaufen", description: "Klasse A legal erwerben mit Begleitservice" },
        { title: "PKW Führerschein kaufen", slug: "/blog/pkw-fuehrerschein-kaufen", description: "Klasse B schnell und sicher" },
        { title: "Führerschein zurück ohne MPU", slug: "/blog/fuehrerschein-zurueck-ohne-mpu", description: "Der Weg zurück auf die Straße" },
        { title: "Führerschein umschreiben lassen", slug: "/blog/fuehrerschein-umschreiben-lassen-ohne-pruefung", description: "EU-Führerschein umschreiben – wir begleiten Sie" },
        { title: "Führerschein Klasse B kaufen Preis", slug: "/blog/fuehrerschein-klasse-b-kaufen-preis", description: "Kosten & Infos" },
        { title: "Polnischen Führerschein legal kaufen", slug: "/blog/polnischen-fuehrerschein-legal-kaufen", description: "Legal in Deutschland fahren" }
    ];

    return new Response(
        JSON.stringify([...mainPages, ...blogPosts]),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}
