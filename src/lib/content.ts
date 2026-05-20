export const school = {
  name: 'Educandário Cecília Pinheiro',
  shortName: 'Cecília Pinheiro',
  tagline: 'Educação Completa',
  founded: 1992,
  director: 'Joana Lage',
  address: {
    street: 'Rua Santa Catarina, Nº 09',
    district: 'Vila Brasil — Manilha',
    landmark: 'Próximo à passarela do Apolo',
    zip: '24859-088',
  },
  phones: [
    { label: 'Secretaria', number: '(21) 2082-0155' },
    { label: 'WhatsApp', number: '(21) 97623-6086', whatsapp: true },
  ],
  email: 'contato@ceciliapinheiro.com.br',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.9517876145!2d-42.93263917233732!3d-22.782284267239078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11500d25d9d1f0aa!2sEducand%C3%A1rio%20Cec%C3%ADlia%20Pinheiro!5e0!3m2!1spt-BR!2sbr!4v1586915372334!5m2!1spt-BR!2sbr',
};

export const navigation = [
  { label: 'Início', href: '/' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Segmentos', href: '/segmentos' },
  { label: 'Estrutura', href: '/estrutura' },
  { label: 'Atividades', href: '/atividades' },
  { label: 'Contato', href: '/contato' },
];

export const heroContent = {
  eyebrow: 'Desde 1992',
  title: 'Uma educação que revela o melhor de cada aluno.',
  body:
    'Há mais de três décadas formamos cidadãos preparados para os desafios do tempo presente — unindo tradição pedagógica, valores cristãos e as mais novas formas de ensinar e aprender.',
  primaryCta: { label: 'Conheça nossa história', href: '/quem-somos' },
  secondaryCta: { label: 'Agende uma visita', href: '/contato' },
};

export const pillars = [
  {
    key: 'missao',
    title: 'Missão',
    body:
      'Ser referência em ensino, promovendo o desenvolvimento integral do educando e formando cidadãos autônomos, comprometidos com o bem-estar da comunidade, da pátria e com Deus.',
  },
  {
    key: 'visao',
    title: 'Visão',
    body:
      'Ser uma instituição reconhecida pela excelência acadêmica e pela formação fundamentada em princípios bíblicos e cristãos.',
  },
  {
    key: 'valores',
    title: 'Valores',
    body:
      'Ética, comprometimento, profissionalismo, desenvolvimento humano, cidadania e honestidade orientam cada decisão do nosso fazer pedagógico.',
  },
];

export const curriculum = {
  eyebrow: 'Matriz Curricular',
  title: 'Um currículo que dialoga com o mundo.',
  body: [
    'O Cecília Pinheiro investe em práticas pedagógicas que buscam a formação integral dos nossos alunos, ampliando suas capacidades individuais e coletivas.',
    'Estamos alinhados à Base Nacional Comum Curricular e contamos com uma equipe altamente qualificada, que trabalha de maneira acolhedora e responsável.',
    'Com valores cristãos como alicerce, apostamos em um ensino mediado por tecnologia e inovação, com material didático completo e atualizado anualmente.',
  ],
  subjects: [
    'Identidade e Autonomia',
    'Linguagem e Escrita',
    'Línguas Estrangeiras',
    'Educação Ambiental',
    'Empreendedorismo',
    'Artes Visuais e Cultura',
    'Natureza e Sociedade',
    'Música & Movimento',
    'Tecnologia',
  ],
};

export const segments = [
  {
    key: 'infantil',
    label: 'Educação Infantil',
    range: 'G3, G4 e G5',
    description:
      'Acolhemos as primeiras descobertas com afeto e intencionalidade pedagógica, favorecendo o desenvolvimento físico, psicológico, intelectual e social — sempre em parceria com a família.',
    highlights: ['Letramento lúdico', 'Música e movimento', 'Inglês desde cedo'],
  },
  {
    key: 'fund1',
    label: 'Ensino Fundamental I',
    range: '1º ao 5º ano',
    description:
      'Nessa etapa, os alunos desenvolvem habilidades e competências que serão aprimoradas ao longo da vida escolar: domínio da língua falada e escrita, princípios matemáticos, noções de espaço, tempo e ciência — junto ao fortalecimento de vínculos de amizade e respeito mútuo.',
    highlights: ['Sala Google Education', 'Literatura e leitura ativa', 'Educação financeira'],
  },
  {
    key: 'fund2',
    label: 'Ensino Fundamental II',
    range: '6º ao 9º ano',
    description:
      'Período de aprofundamento e amadurecimento intelectual. Os alunos contam com preparação cuidadosa para o Ensino Médio, conceitos mais complexos e atividades complementares que ampliam a experiência escolar.',
    highlights: ['Espanhol', 'Empreendedorismo', 'Projetos multidisciplinares'],
  },
  {
    key: 'medio',
    label: 'Ensino Médio',
    range: '1ª à 3ª série',
    description:
      'Etapa final da Educação Básica, dedicada a aprofundar conhecimentos e preparar o estudante para o vestibular, o ENEM e a vida profissional — formando cidadãos críticos, autônomos e prontos para o Ensino Superior.',
    highlights: ['Simulados ENEM', 'Orientação vocacional', 'Feira de Profissões'],
  },
];

export const activities = [
  {
    category: 'Educacional',
    items: [
      'Inglês (Ed. Infantil ao Ensino Médio)',
      'Espanhol (6º ano ao Ensino Médio)',
      'Literatura (Fundamental I e II e Ens. Médio)',
      'Ética e Cidadania (todos os segmentos)',
      'Aulas de Empreendedorismo',
      'Informática (1º ao 5º ano)',
      'Sala Google Education',
    ],
  },
  {
    category: 'Esportes & Ritmos',
    items: [
      'Natação (Ed. Infantil, Fund. I e II)',
      'Basquete (5º ano ao Ensino Médio)',
      'Ballet (Ed. Infantil ao 4º ano)',
      'Hip-Hop (Ed. Infantil ao 4º ano)',
      'Jiu-Jitsu (consulte valor)',
      'Ginástica Rítmica (consulte valor)',
    ],
  },
  {
    category: 'Oficinas & Projetos',
    items: [
      'Educação Ambiental',
      'Feiras de Empreendedorismo',
      'Feira de Profissões',
      'Eventos Multidisciplinares',
      'Sarau Literário',
      'Educação Financeira',
      'Simulados ENEM',
      'Passeios Culturais',
    ],
  },
];

export const aboutContent = {
  eyebrow: 'Nossa História',
  title: 'Uma escola em constante evolução.',
  director: 'Joana Lage',
  role: 'Diretora Geral do Educandário Cecília Pinheiro',
  paragraphs: [
    'A história desta escola é, antes de tudo, uma história pessoal. Ela nasceu de um sonho antigo — um sonho que vejo se tornar real, ano após ano.',
    'No ano de 1992, com o nome de “Turminha Feliz”, iniciamos o Jardim de Infância na Rua Santa Catarina, no bairro de Vila Brasil. As instalações eram modestas, com poucas dependências, mas carregavam um propósito claro: educar com afeto e responsabilidade.',
    'Com o passar dos anos, a escola cresceu e foi renomeada como Educandário Cecília Pinheiro, em homenagem à minha querida avó. Construímos novos prédios e fomos conquistando espaço, sendo reconhecidos entre as melhores escolas da região pela qualidade do ensino e pela cumplicidade com as famílias.',
    'Hoje, atendemos alunos da Educação Infantil ao Ensino Médio, oferecendo aulas de ballet, hip-hop, basquete, natação, inglês, espanhol, orientação vocacional e diversas outras atividades — todas incluídas na mensalidade — além de modalidades acessíveis como muay thai, escolinha de futsal e hidroginástica.',
  ],
};

export type StructureCategory = 'aprendizagem' | 'tecnologia' | 'esportes' | 'convivencia';

export const structureCategories: { key: StructureCategory | 'todos'; label: string }[] = [
  { key: 'todos', label: 'Todos os espaços' },
  { key: 'aprendizagem', label: 'Aprendizagem' },
  { key: 'tecnologia', label: 'Tecnologia' },
  { key: 'esportes', label: 'Esportes' },
  { key: 'convivencia', label: 'Convivência' },
];

export const structureSpaces: { title: string; description: string; category: StructureCategory; aspect: 'tall' | 'wide' | 'square' }[] = [
  { title: 'Entrada principal', description: 'O acolhimento começa logo na chegada — espaços claros, sinalização cuidadosa e calor humano.', category: 'convivencia', aspect: 'tall' },
  { title: 'Corredores e circulação', description: 'Trânsito fluido entre as salas, com luz natural e ambientação que respira identidade.', category: 'convivencia', aspect: 'wide' },
  { title: 'Salas climatizadas', description: 'Ambientes preparados para concentração e bem-estar durante todo o ano letivo.', category: 'aprendizagem', aspect: 'square' },
  { title: 'Espaço temático', description: 'Salas decoradas com intencionalidade pedagógica, estimulando imaginação e curiosidade.', category: 'aprendizagem', aspect: 'square' },
  { title: 'Brinquedoteca', description: 'Onde o aprender se mistura ao brincar — para os pequenos da Educação Infantil.', category: 'aprendizagem', aspect: 'wide' },
  { title: 'Sala Google Education', description: 'Sala oficial Google for Education, com Chromebooks e dinâmicas digitais integradas.', category: 'tecnologia', aspect: 'wide' },
  { title: 'Estúdio multimídia', description: 'Para produção de conteúdo, apresentações e experiências audiovisuais.', category: 'tecnologia', aspect: 'square' },
  { title: 'Laboratório de informática', description: 'Estações individuais para letramento digital desde os primeiros anos.', category: 'tecnologia', aspect: 'square' },
  { title: 'Sala maker', description: 'Espaço de experimentação prática para projetos de robótica e empreendedorismo.', category: 'tecnologia', aspect: 'tall' },
  { title: 'Laboratório de ciências', description: 'Experimentos, microscopia e investigação científica em ambiente seguro.', category: 'aprendizagem', aspect: 'square' },
  { title: 'Biblioteca', description: 'Acervo cuidadosamente curado, cantos de leitura e mediação literária.', category: 'aprendizagem', aspect: 'wide' },
  { title: 'Quadra coberta', description: 'Modalidades esportivas e eventos protegidos do sol e da chuva.', category: 'esportes', aspect: 'tall' },
  { title: 'Quadra poliesportiva', description: 'Basquete, vôlei, futsal e atividades coletivas no contraturno.', category: 'esportes', aspect: 'wide' },
  { title: 'Piscina', description: 'Aulas de natação para Educação Infantil e Ensino Fundamental, dentro da grade.', category: 'esportes', aspect: 'wide' },
  { title: 'Sala de ballet', description: 'Espelhos, barras e piso adequado para as turmas de dança e ritmos.', category: 'esportes', aspect: 'square' },
  { title: 'Sala de música', description: 'Instrumentos diversos para o desenvolvimento musical e da expressão.', category: 'aprendizagem', aspect: 'square' },
  { title: 'Sala de artes', description: 'Onde nascem as feiras culturais, saraus e exposições dos estudantes.', category: 'aprendizagem', aspect: 'tall' },
  { title: 'Refeitório', description: 'Refeições servidas em ambiente amplo, com cardápio acompanhado por nutricionista.', category: 'convivencia', aspect: 'wide' },
  { title: 'Pátio coberto', description: 'Recreação, intervalos e encontros à sombra durante todo o dia.', category: 'convivencia', aspect: 'square' },
  { title: 'Áreas externas', description: 'Espaços de respiro entre uma aula e outra — convivência ao ar livre.', category: 'convivencia', aspect: 'square' },
  { title: 'Capela', description: 'Espaço de oração e silêncio, em diálogo com a identidade cristã da escola.', category: 'convivencia', aspect: 'square' },
  { title: 'Auditório', description: 'Palco para apresentações, palestras e formaturas da nossa comunidade.', category: 'aprendizagem', aspect: 'wide' },
  { title: 'Sala de reuniões', description: 'Para encontros pedagógicos, formação docente e parceria com famílias.', category: 'aprendizagem', aspect: 'square' },
  { title: 'Secretaria', description: 'Atendimento ágil e humano para responsáveis e estudantes.', category: 'convivencia', aspect: 'square' },
  { title: 'Atividades culturais', description: 'Sarau Literário, Feira de Profissões e Feira de Empreendedorismo viram tradição.', category: 'aprendizagem', aspect: 'tall' },
  { title: 'Atividades esportivas', description: 'Festivais e competições internas movimentam o calendário escolar.', category: 'esportes', aspect: 'wide' },
  { title: 'Eventos da comunidade', description: 'Datas comemorativas que reúnem alunos, famílias e equipe pedagógica.', category: 'convivencia', aspect: 'square' },
  { title: 'Apresentações', description: 'Momentos de protagonismo dos estudantes em frente à comunidade.', category: 'convivencia', aspect: 'square' },
  { title: 'Encontros pedagógicos', description: 'Equipe em formação contínua para entregar uma educação de excelência.', category: 'aprendizagem', aspect: 'square' },
];

export const featuredSpaces: {
  imageIndex: number;
  title: string;
  description: string;
  tag: string;
}[] = [
  {
    imageIndex: 0,
    title: 'Bem-vindos ao Cecília Pinheiro',
    description:
      'Uma chegada que acolhe — fachada, jardim e entrada pensados para receber famílias todos os dias.',
    tag: 'Entrada principal',
  },
  {
    imageIndex: 5,
    title: 'Sala Google Education',
    description:
      'Sala oficial Google for Education, com Chromebooks e práticas digitais integradas à rotina escolar.',
    tag: 'Tecnologia',
  },
  {
    imageIndex: 13,
    title: 'Parquinho infantil',
    description:
      'O brincar como linguagem primordial — área externa segura, lúdica e estimulante para a Educação Infantil.',
    tag: 'Educação Infantil',
  },
  {
    imageIndex: 16,
    title: 'Piscina',
    description:
      'Aulas de natação dentro da grade curricular, com professores especializados e ambiente acolhedor.',
    tag: 'Esportes',
  },
  {
    imageIndex: 8,
    title: 'Sala de ballet',
    description:
      'Espelhos, barras e piso adequado para as turmas de ballet, hip-hop e expressão corporal.',
    tag: 'Ritmos & dança',
  },
];

export const stats = [
  { value: '30+', label: 'Anos de trajetória' },
  { value: 'Ed. Infantil', label: 'ao Ensino Médio' },
  { value: 'BNCC', label: 'Currículo alinhado' },
  { value: '15+', label: 'Atividades incluídas' },
];
