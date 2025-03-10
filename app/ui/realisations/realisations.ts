type Work = {
  titleProject: string;
  urlImgProject: string;
  nameOfSite: string;
  urlOfSite: string;
  descriptionOfProject: string;
  technologies: string;
  dateRealisation: string;
};

export const ourWorks: Work[] = [
  {
    titleProject: `Site vitrine pour le DADE RDC`,
    urlImgProject: `/assets/images/work-page/image-of-works/image-work-1.webp`,
    nameOfSite: `DADE RDC`,
    urlOfSite: `https://daderdc.com/`,
    descriptionOfProject: `Nous avons développé le site vitrine pour le DADE RDC (Dîner d'Affaire et Diplomatie Économique en République Démocratique du Congo) qui leur sert de se présenter et également d'afficher la gallerie pour les éditions passées.`,
    technologies: `Wordpress, Elementor`,
    dateRealisation: `Août - Septembre 2024`,
  },

  {
    titleProject: `Plateforme E-Commerce pour Cabukaka`,
    urlImgProject: `/assets/images/work-page/image-of-works/image-work-2.webp`,
    nameOfSite: `Cabukaka Shop`,
    urlOfSite: `https://cabukaka.shop/`,
    descriptionOfProject: `Nous avons développé une plateforme e-commerce visuellement attrayante et facile à utiliser pour Cabukaka, un détaillant renommé de produits électroniques et électroménagers. La plateforme intègre une navigation fluide des produits, un système de gestion des stocks et un système de parrainage, ce qui a entraîné une augmentation des ventes en ligne et la satisfaction des clients.`,
    technologies: `Wordpress, Elementor, WooCommerce`,
    dateRealisation: `Janvier - Mars 2024`,
  },

  {
    titleProject: `Portail Web pour Etudiants Congolais`,
    urlImgProject: `/assets/images/work-page/image-of-works/image-work-3.webp`,
    nameOfSite: `Etudiant 2.0`,
    urlOfSite: `https://etudiant2-0.vercel.app/`,
    descriptionOfProject: `Etudiant 2.0 est une plateforme conçue pour rassembler les étudiants congolais, leur permettant de partager et de télécharger des documents pédagogiques variés tels que des livres, des notes de cours, des exercices, des TP et TD, etc. La plateforme prévoit également d'ajouter des fonctionnalités de chat direct, des forums universitaires, un système de mentorat, et bien plus encore.`,
    technologies: `React.js, TailwindCss, Material UI, Express.js, Node.js`,
    dateRealisation: `Avril - Mai 2024`,
  },

  // {
  //   titleProject: `Site de Tourisme Spatial Fictif`,
  //   urlImgProject: `/assets/images/work-page/image-of-works/image-work-4.webp`,
  //   nameOfSite: `Space Tourism`,
  //   urlOfSite: `https://space-touriiism.vercel.app/`,
  //   descriptionOfProject: `Space Tourism était un défi publié sur le site Frontend Mentor. Nous avons développé un site fictif de tourisme spatial, avec une interface utilisateur captivante et des fonctionnalités interactives, permettant aux utilisateurs d'explorer des destinations spatiales imaginaires.`,
  //   technologies: `HTML5, CSS3, JavaScript`,
  //   dateRealisation: `Août 2023`,
  // },

  {
    titleProject: `Générateur de Conseils`,
    urlImgProject: `/assets/images/work-page/image-of-works/image-work-4.webp`,
    nameOfSite: `Advice Generatory`,
    urlOfSite: `https://advice-generatory.vercel.app/`,
    descriptionOfProject: `Advice Generatory est un site interactif qui génère des conseils éclairants pour vous guider à travers la vie. Laissez-vous surprendre par une nouvelle perspective à chaque visite et découvrez des conseils variés pour toutes les situations.`,
    technologies: `React.js, TailwindCss`,
    dateRealisation: `Janvier 2024`,
  },
];
