
import type { Project } from "@/utils/types";
import {
  openLinkPI1,
  openLinkPI2,
  openLinkPI3Backend,
  openLinkPI3Frontend,
  openLinkPI4Backend,
  openLinkPI4FrontendAdm,
  openLinkPI4FrontendClient,
  openLinkPI5Backend,
  openLinkPI5FrontendAdm,
  openLinkPI5FrontendClient,
  openLinkPI6Backend,
  openLinkPI6FrontendTenant,
  openLinkPI6FrontendLandLord,
  pi1Images,
  pi2Images,
  pi3Images,
  pi4Images,
  pi5Images,
  pi6Images,
} from "../viewModel/PortfolioViewModel";

export const projects: Project[] = [
  {
    images: pi1Images,
    title: "1° PI - Debian redesign",
    description: `
      Projeto de redesign da página inicial do site debian.org, se resume na criação 
      de uma página web estática para reforçar fundamentos web. Inclui layout responsivo,
      estrutura semântica e interatividade básica.
    `,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    myParticipation: "Eu tive participação integral no desenvolvimento desta página.",
    links: [{ text: "Ir para o repositório - Debian redesign", link: openLinkPI1() }]
  },
  {
    images: pi2Images,
    title: "2° PI - Simple CRUD PHP",
    description: `
      Projeto CRUD simples desenvolvido sob orientação do professor Faustino, permitindo 
      criar, ler, atualizar e excluir registros de Usuários e Produtos. Proporciona prática 
      em integração frontend-backend e persistência de dados. Possui integração com ViaCEP 
      e recursos de mapa.
    `,
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQLite"],
    myParticipation: `
      A base inicial do projeto foi desenvolvida pelo professor Faustino, eu tive participação
      no desenvolvimento do CRUD de produtos e no design geral do projeto.
     `,
    links: [{ text: "Ir para o repositório - Simple CRUD PHP", link: openLinkPI2() }]
  },
  {
    images: pi3Images,
    title: "3° PI - WB Assessoria",
    description: `
      O sistema WB Assessoria foi desenvolvido para uma empresa que trabalha no processo de naturalização de
      imigrantes que chegam ao Brasil. O sistema permite cadastro de usuários, visualização de mensalidades e acompanhamento de 
      processos migratórios, com envio automático de notificações por e-mail. A arquitetura 
      está organizada em dois repositórios, separando o back-end do front-end.
    `,
    technologies: [
      "Java 21", "Gradle", "Spring Boot", "Spring Security", "Java Mail Sender", "JWT", "MongoDB",
      "HTML5", "CSS3", "JavaScript"
    ],
    myParticipation: `
      O projeto foi desenvolvido numa equipe de 5 desenvolvedores. Eu atuei na implementação do Spring Security com JWT,
      no envio de E-mail com Java Mail Sender e algumas integrações entre front-end e back-end, além de uma série de ajustes
      tanto no back-end quanto no front-end.
     `,
    links: [
      { text: "Ir para o repositório - back-end WB", link: openLinkPI3Backend() },
      { text: "Ir para o repositório - front-end WB", link: openLinkPI3Frontend() },
    ]
  },
  {
    images: pi4Images,
    title: "4° PI - Mistergold",
    description: `
      O projeto Mister Gold é um e-commerce com back-end utilizando arquitetura hexagonal, desenvolvido
      para uma empresa que trabalha com venda de joias. O front-end é dividido em duas partes: uma voltada 
      para o administrador e outra para o cliente.
    `,
    technologies: [
      "Java 21", "Gradle", "Spring Boot", "Spring Security", "Java Mail Sender",
      "JWT", "MongoDB", "HTML5", "CSS3", "JavaScript", "MDBootStrap", "Docker"
    ],
    myParticipation: `
      O projeto foi desenvolvido numa equipe de 4 desenvolvedores, no qual eu era o Líder. Eu atuei, integralmente, na construção do back-end, 
      implementando todos os CRUDs, autenticação, validações, envio de e-mail, entre outros.
      Desenvolvi, integralmente, a integração entre front-end e back-end e também desenvolvi algumas telas do sistema.
    `,
    links: [
      { text: "Ir para o repositório - back-end Mistergold", link: openLinkPI4Backend() },
      { text: "Ir para o repositório - front-end adm  Mistergold", link: openLinkPI4FrontendAdm() },
      { text: "Ir para o repositório - front-end customer Mistergold", link: openLinkPI4FrontendClient() },
    ]
  },
  {
    images: pi5Images,
    title: "5° PI - Bemtevi",
    description: `
      O projeto Bemtevi é um sistema de automação para pet shops integrados com serviços como Mercado Pago para 
      pagamento online por meio do pix. O front-end, focado em Android, é divido em dois repositórios, um voltado
      para o administrador e outro para o cliente. O sistema permite que administradores gerenciem produtos, pedidos 
      e serviços, e que clientes façam compras, contratem serviços e utilizem o chat. O sistema foi hospedado usando 
      serviços da AWS. 
    `,
    technologies: [
      "Java 21", "Gradle", "Spring Boot", "Spring Security", "Java Mail Sender", "JWT",
      "MongoDB", "PostgreSQL", "React Native", "Docker & Docker Compose", "Amazon EC2", "Amazon S3", "Red Hat Enterprise Linux", "WebSocket"
    ],
    myParticipation: `
      O projeto foi desenvolvido numa equipe de 4 desenvolvedores, no qual eu era o Líder. Eu atuei, integralmente, na construção do back-end,
      implementando todos os CRUDs, autenticação, validações, upload de imagens na Amazon S3, entre outros. Desenvolvi 
      parte da integração entre front-end e back-end, e também desenvolvi algumas telas, além de realizar a hospedagem 
      do projeto na AWS.
    `,
    links: [
      { text: "Ir para o repositório - back-end Bemtevi", link: openLinkPI5Backend() },
      { text: "Ir para o repositório - front-end adm Bemtevi", link: openLinkPI5FrontendAdm() },
      { text: "Ir para o repositório - front-end customer Bemtevi", link: openLinkPI5FrontendClient() },
    ]
  },
  {
    images: pi6Images,
    title: "6° PI - Imobly",
    description: `
      O projeto Imobly é um sistema de gerenciamento de imóveis desenvolvido para atender locadores e locatários. O front-end foi construído 
      para três plataformas distintas: Web, Mobile e Desktop, sendo organizado em dois repositórios independentes, um voltado ao locador e outro ao locatário.
      O sistema permite que o locador gerencie suas propriedades, acompanhe pagamentos e reportações, além de visualizar e administrar agendamentos 
      de visitas. Já o locatário pode visualizar imóveis disponíveis, agendar visitas e acessar informações relacionadas a contratos e pagamentos.
      A aplicação foi hospedada utilizando serviços da AWS, garantindo escalabilidade e disponibilidade.
    `,
    technologies: [
      "Kotlin", "Gradle", "Spring Boot", "Spring Security", "Java Mail Sender", "JWT",
      "PostgreSQL", "Kotlin Multiplataform", "Compose Multiplatform", "Amazon EC2", "Amazon S3", "Ubuntu"
    ],
    myParticipation: `
      O projeto foi desenvolvido numa equipe de 4 desenvolvedores, no qual eu era o Líder. Atuei implementando o back-end e fazendo o deployment
      na AWS (EC2). Além de desenvolver algumas telas e implementar a lógica nas ViewModel.
    `,
    links: [
      { text: "Ir para o repositório - back-end Imobly", link: openLinkPI6Backend() },
      { text: "Ir para o repositório - front-end landlord Imobly", link: openLinkPI6FrontendLandLord() },
      { text: "Ir para o repositório - front-end tenant Imobly", link: openLinkPI6FrontendTenant() },
    ]
  }
]