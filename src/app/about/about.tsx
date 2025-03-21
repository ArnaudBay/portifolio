
//import Menu from '../menu';

export default function About() {
  return (
    <div>
      
      <main className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title */}
            <h1 className="text-6xl font-serif leading-tight">
              Who We Are
            </h1>

            {/* Right Column - Content */}
            <div className="space-y-8 text-xl leading-relaxed">
  {/* Section "À propos de moi" */}
  <p>
    Je suis Arnaud Bayale, un développeur passionné originaire de la Centrafrique. 
    Spécialisé dans le développement web et mobile, j'aime concevoir des solutions 
    innovantes pour répondre aux besoins des utilisateurs. Mon objectif est de 
    continuer à apprendre et à évoluer dans le domaine de la technologie.
  </p>

  {/* Section sur mon parcours et mes ambitions */}
  <p>
    Avec une formation en informatique de gestion, j'ai travaillé sur divers projets, 
    allant de la gestion scolaire à la digitalisation des bibliothèques universitaires. 
    Je cherche constamment à améliorer mes compétences, notamment en développement 
    d'applications Android et en intégration de nouvelles technologies comme Flutter et Node.js.
  </p>
</div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-serif mb-8">Bergen</h3>
            <address className="not-italic">
              <p>123 Demo Street</p>
              <p>Brooklyn, NY 12345</p>
            </address>
            <p className="mt-8">
              Made with{' '}
              <a href="#" className="underline hover:text-gray-600">
                Squarespace
              </a>
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl font-serif mb-8">About</h3>
            <nav className="flex flex-col space-y-4">
              <a href="/work" className="hover:underline">Work</a>
              <a href="/who-we-are" className="hover:underline">Who We Are</a>
              <a href="/contact" className="hover:underline">Contact Us</a>
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-serif mb-8">Projects</h3>
            <nav className="flex flex-col space-y-4">
              <a href="/residential" className="hover:underline">Residential Design</a>
              <a href="/commercial" className="hover:underline">Commercial Design</a>
              <a href="/experiential" className="hover:underline">Experiential Design</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}