import {
  AnalisysIcon,
  Assistance_24_7_Icon,
  CMSIcon,
  CodeSSlashIcon,
  FeedbackIntegationIcon,
  IssueResoulutionIcon,
  ProblemSolvingIcon,
  ProtoAndWirefIcon,
  RegularUpdateIcon,
  ScrumIcon,
  SecurityTestIcon,
  SprintsIcon,
  TaskAssignmentIcon,
  TerminalBoxIcon,
  TestPlanificationIcon,
  TimeLineDevIcon,
  UIIcon,
  UXIcon,
} from "@/public/assets/icons/icons";
import {
  RiAlarmWarningFill,
  RiCodeSSlashFill,
  RiTerminalBoxFill,
  RiTimeFill,
} from "@remixicon/react";

type ServiceItem = {
  title: string;
  description?: string;
  icon: React.ReactNode;
};

type ServiceSubCategory = {
  title: string;
  items: ServiceItem[];
};

type Service = {
  mainTitle?: string;
  description?: string;
  intro?: string;
  subCategories?: ServiceSubCategory[];
};

export const servicesObject: Service[] = [
  {
    mainTitle: "Ingénierie",
    description: `Notre équipe d’ingénieurs allie expertise technique et passion pour l’innovation pour créer des solutions numériques robustes et évolutives. Nous exploitons les dernières technologies et les meilleures pratiques pour fournir des applications hautes performances adaptées à vos besoins spécifiques.`,
    intro: "Nos services d’ingénierie comprennent :",
    subCategories: [
      {
        title: "Développement web",
        items: [
          {
            icon: <CodeSSlashIcon className="icon" />,
            title: "Développement Front-End",
            description: "HTML, CSS, JavaScript, React.js, Next.js",
          },
          {
            icon: <TerminalBoxIcon className="icon" />,
            title: "Développement Back-End",
            description: "Node.js, Express.js, Next.js",
          },
          {
            icon: <CMSIcon className="icon" />,
            title:
              "Développement de systèmes de gestion de contenu (CMS) et de plateformes de commerce électronique",
            description: "WordPress",
          },
        ],
      },
    ],
  },

  {
    mainTitle: "Conception",
    description: `Nous créons des designs esthétiques et fonctionnels qui captivent vos utilisateurs et reflètent l’identité de votre marque.`,
    intro: "Nos services de conception comprennent :",
    subCategories: [
      {
        title: "Design UX/UI",
        items: [
          {
            icon: <UIIcon className="icon" />,
            title: "Design d'interface utilisateur",
            description: "UI",
          },
          {
            icon: <UXIcon className="icon" />,
            title: "Expérience utilisateur",
            description: "UX",
          },
          {
            icon: <ProtoAndWirefIcon className="icon" />,
            title: "Prototypage et wireframing",
            description: "",
          },
        ],
      },
    ],
  },

  {
    mainTitle: "Support et Maintenance",
    description: `Assurez la continuité et la performance de vos solutions numériques avec notre support technique et services de maintenance.`,
    intro: "Nos services de support et maintenance comprennent :",
    subCategories: [
      {
        title: "Support technique continu",
        items: [
          {
            icon: <Assistance_24_7_Icon className="icon" />,
            title: "Assistance 24/7",
            description: "",
          },
          {
            icon: <ProblemSolvingIcon className="icon" />,
            title: "Résolution de problèmes",
            description: "",
          },
          {
            icon: <RegularUpdateIcon className="icon" />,
            title: "Mises à jour régulières et maintenance préventive",
            description: "",
          },
        ],
      },
    ],
  },

  {
    mainTitle: "Gestion de projet",
    description: `Notre équipe de gestion de projet expérimentée veille à ce que vos projets soient livrés à temps, dans les limites du budget et selon vos spécifications. Nous suivons les méthodologies standard de l’industrie et employons des outils de communication et de collaboration efficaces pour vous tenir informé tout au long du processus de développement.`,
    intro: "Nos services de gestion de projet comprennent :",
    subCategories: [
      {
        title: "Planification du projet",
        items: [
          {
            icon: <AnalisysIcon className="icon" />,
            title: "Recueil et analyse des besoins.",
            description: "",
          },
          {
            icon: <TimeLineDevIcon className="icon" />,
            title: "Feuille de route du projet et élaboration du calendrier.",
            description: "",
          },
          {
            icon: <TaskAssignmentIcon className="icon" />,
            title: "Allocation des ressources et affectation des tâches.",
            description: "",
          },
        ],
      },
      {
        title: "Développement agile",
        items: [
          {
            icon: <SprintsIcon className="icon" />,
            title: "Développement itératif et sprints.",
            description: "",
          },
          {
            icon: <ScrumIcon className="icon" />,
            title: "Implémentation de la méthodologie Scrum.",
            description: "",
          },
          {
            icon: <FeedbackIntegationIcon className="icon" />,
            title: "Amélioration continue et intégration des commentaires.",
            description: "",
          },
        ],
      },
      {
        title: "Assurance qualité et tests",
        items: [
          {
            icon: <TestPlanificationIcon className="icon" />,
            title: "Planification et exécution des tests.",
            description: "",
          },
          {
            icon: <SecurityTestIcon className="icon" />,
            title: "Tests de performances et de sécurité.",
            description: "",
          },
          {
            icon: <IssueResoulutionIcon className="icon" />,
            title: "Suivi des bogues et résolution des problèmes.",
            description: "",
          },
        ],
      },
    ],
  },
];
// git
