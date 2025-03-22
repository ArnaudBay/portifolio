import Menu from '../menu';

export default function About() {
  return (
    <div>
      <main className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <h1 className="text-6xl font-serif leading-tight">
              Who We Are
            </h1>

            <div className="space-y-8 text-xl leading-relaxed">
              <p>
                Je suis Arnaud Bayale, un développeur passionné originaire de la Centrafrique. 
                Spécialisé dans le développement web et mobile, j&apos;aime concevoir des solutions 
                innovantes pour répondre aux besoins des utilisateurs. Mon objectif est de 
                continuer à apprendre et à évoluer dans le domaine de la technologie.
              </p>

              <p>
                Avec une formation en informatique de gestion, j&apos;ai travaillé sur divers projets, 
                allant de la gestion scolaire à la digitalisation des bibliothèques universitaires. 
                Je cherche constamment à améliorer mes compétences, notamment en développement 
                d&apos;applications Android et en intégration de nouvelles technologies comme Flutter et Node.js.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}