// ==========================================================
// ESTUDA+
// SISTEMA DE QUESTÕES E SIMULADOS
// ==========================================================


// ==========================================================
// BANCO DE QUESTÕES
// ==========================================================

const bancoQuestoesBloco1 = [

  // =========================================================
  // 7ª CLASSE — QUESTÕES 1 a 34
  // =========================================================

  {
    id: 1,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Introdução à Química",
    tipo: "Conhecimento",
    pergunta: "O que estuda a Química?",
    opcoes: [
      "Apenas os animais e as plantas",
      "As substâncias da natureza, suas transformações, composição e estrutura",
      "Somente os fenómenos astronómicos",
      "Apenas os seres vivos"
    ],
    resposta: 1,
    explicacao: "Segundo o material, a Química é a ciência que estuda as substâncias da natureza, as suas transformações, composição e estrutura."
  },

  {
    id: 2,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "História da Química",
    tipo: "Conhecimento",
    pergunta: "Segundo o material da 7ª classe, a história da Química está ligada principalmente:",
    opcoes: [
      "Ao desenvolvimento do homem",
      "Somente ao desenvolvimento da informática",
      "À formação dos planetas",
      "Ao estudo exclusivo dos animais"
    ],
    resposta: 0,
    explicacao: "O material relaciona a história da Química ao desenvolvimento do homem e às transformações da matéria."
  },

  {
    id: 3,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Transformações físicas e químicas",
    tipo: "Classificação",
    pergunta: "Qual situação representa uma transformação física?",
    opcoes: [
      "Formação de uma nova substância",
      "Queima de uma substância",
      "Mudança de estado físico sem formação de nova substância",
      "Reação entre duas substâncias"
    ],
    resposta: 2,
    explicacao: "Uma transformação física altera o estado ou aspecto da matéria sem produzir uma nova substância."
  },

  {
    id: 4,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Transformações químicas",
    tipo: "Aplicação",
    pergunta: "Qual situação é um exemplo de transformação química?",
    opcoes: [
      "Derretimento de uma substância",
      "Evaporação da água",
      "Formação de novas substâncias numa reação",
      "Mudança de recipiente"
    ],
    resposta: 2,
    explicacao: "Numa transformação química ocorre formação de uma ou mais novas substâncias."
  },

  {
    id: 5,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Misturas",
    tipo: "Conhecimento",
    pergunta: "Uma mistura é constituída por:",
    opcoes: [
      "Apenas uma substância",
      "Mais de uma substância",
      "Apenas um átomo",
      "Somente elementos metálicos"
    ],
    resposta: 1,
    explicacao: "O material define mistura como uma combinação que apresenta mais de uma substância na sua composição."
  },

  {
    id: 6,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Misturas homogéneas",
    tipo: "Classificação",
    pergunta: "Como são chamadas as misturas em que não conseguimos observar os seus constituintes?",
    opcoes: [
      "Heterogéneas",
      "Coloides",
      "Homogéneas",
      "Metálicas"
    ],
    resposta: 2,
    explicacao: "O material chama de homogéneas as misturas em que não conseguimos observar os seus constituintes."
  },

  {
    id: 7,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Misturas homogéneas",
    tipo: "Exemplo",
    pergunta: "Qual das opções é apresentada no material como exemplo de mistura homogénea?",
    opcoes: [
      "Água e areia",
      "Água e óleo",
      "Água salgada",
      "Água e arroz"
    ],
    resposta: 2,
    explicacao: "Água salgada é apresentada como exemplo de mistura homogénea ou solução."
  },

  {
    id: 8,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Misturas heterogéneas",
    tipo: "Exemplo",
    pergunta: "Qual das seguintes é uma mistura heterogénea segundo o material?",
    opcoes: [
      "Água salgada",
      "Água açucarada",
      "Água e óleo",
      "Ar"
    ],
    resposta: 2,
    explicacao: "Água e óleo são apresentados como exemplo de mistura heterogénea."
  },

  {
    id: 9,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Coloides",
    tipo: "Conhecimento",
    pergunta: "Como são descritos os coloides no material?",
    opcoes: [
      "Misturas que apresentam características de homogéneas e heterogéneas",
      "Substâncias puras",
      "Apenas misturas de gases",
      "Apenas misturas de metais"
    ],
    resposta: 0,
    explicacao: "O material apresenta os coloides como misturas com características das misturas homogéneas e heterogéneas."
  },

  {
    id: 10,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Coloides",
    tipo: "Aplicação",
    pergunta: "Qual das seguintes substâncias é apresentada no material como exemplo de coloide?",
    opcoes: [
      "Água destilada",
      "Leite",
      "Ferro puro",
      "Oxigénio"
    ],
    resposta: 1,
    explicacao: "O leite é citado no material como exemplo de coloide."
  },

  {
    id: 11,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Separação de misturas",
    tipo: "Conhecimento",
    pergunta: "Qual é a finalidade dos métodos de separação de misturas?",
    opcoes: [
      "Criar novos elementos químicos",
      "Separar os componentes de uma mistura",
      "Destruir todos os componentes",
      "Transformar todas as misturas em gases"
    ],
    resposta: 1,
    explicacao: "Os métodos de separação são usados para separar os componentes presentes numa mistura."
  },

  {
    id: 12,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Decantação",
    tipo: "Aplicação",
    pergunta: "Segundo o material, a decantação pode ser usada para separar:",
    opcoes: [
      "Um líquido de um sólido depositado no fundo",
      "Dois gases",
      "Apenas dois líquidos miscíveis",
      "Átomos de um elemento"
    ],
    resposta: 0,
    explicacao: "A decantação é indicada no material para separar um líquido de um sólido que se encontra depositado ou em repouso no fundo."
  },

  {
    id: 13,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Filtração",
    tipo: "Aplicação",
    pergunta: "Qual método é indicado para separar um líquido de um sólido em suspensão?",
    opcoes: [
      "Filtração",
      "Peneiração",
      "Separação magnética",
      "Cristalização"
    ],
    resposta: 0,
    explicacao: "O material indica a filtração para separar um líquido de um sólido em suspensão."
  },

  {
    id: 14,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Centrifugação",
    tipo: "Conhecimento",
    pergunta: "A centrifugação é descrita no material como uma forma de:",
    opcoes: [
      "Acelerar a decantação",
      "Acelerar a fusão",
      "Produzir uma reação química",
      "Transformar um líquido em gás"
    ],
    resposta: 0,
    explicacao: "O material descreve a centrifugação como uma maneira de acelerar o processo de decantação."
  },

  {
    id: 15,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Cristalização",
    tipo: "Aplicação",
    pergunta: "Qual método pode ser usado para obter uma substância sólida que estava dissolvida numa solução?",
    opcoes: [
      "Cristalização",
      "Filtração simples",
      "Peneiração",
      "Separação magnética"
    ],
    resposta: 0,
    explicacao: "O material apresenta a cristalização como método usado para separar uma substância sólida em solução."
  },

  {
    id: 16,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Destilação",
    tipo: "Conhecimento",
    pergunta: "Em que processos simultâneos se baseia a destilação?",
    opcoes: [
      "Fusão e solidificação",
      "Evaporação e condensação",
      "Filtração e peneiração",
      "Decantação e centrifugação"
    ],
    resposta: 1,
    explicacao: "O material afirma que a destilação se baseia na evaporação e condensação."
  },

  {
    id: 17,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Separação de sólidos",
    tipo: "Aplicação",
    pergunta: "Qual método é indicado no material para separar componentes de uma mistura sólida usando diferença de tamanho das partículas?",
    opcoes: [
      "Peneiração",
      "Destilação",
      "Decantação",
      "Cristalização"
    ],
    resposta: 0,
    explicacao: "A peneiração é indicada no material para separação de componentes de misturas sólidas."
  },

  {
    id: 18,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Separação magnética",
    tipo: "Aplicação",
    pergunta: "Qual método pode separar limalha de ferro de pequenos fragmentos de vidro?",
    opcoes: [
      "Destilação",
      "Cristalização",
      "Separação magnética",
      "Filtração"
    ],
    resposta: 2,
    explicacao: "O material apresenta a separação magnética para separar limalha de ferro de pequenos fragmentos de vidro."
  },

  {
    id: 19,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Propriedades da matéria",
    tipo: "Conhecimento",
    pergunta: "O que são propriedades de uma substância?",
    opcoes: [
      "Características que permitem distingui-la ou estabelecer semelhanças",
      "Somente a sua massa",
      "Apenas a sua cor",
      "Somente a sua temperatura"
    ],
    resposta: 0,
    explicacao: "O material define propriedades como características que permitem distinguir uma substância de outra ou estabelecer semelhanças."
  },

  {
    id: 20,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Ponto de fusão",
    tipo: "Conhecimento",
    pergunta: "Qual propriedade indica a temperatura associada à passagem do estado sólido para o líquido?",
    opcoes: [
      "Ponto de ebulição",
      "Densidade",
      "Ponto de fusão",
      "Massa"
    ],
    resposta: 2,
    explicacao: "O ponto de fusão está relacionado à passagem de uma substância do estado sólido para o líquido."
  },

  {
    id: 21,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Densidade",
    tipo: "Cálculo",
    pergunta: "Qual expressão representa a densidade ou massa volúmica?",
    opcoes: [
      "d = V × m",
      "d = m / V",
      "d = V / m",
      "d = m + V"
    ],
    resposta: 1,
    explicacao: "A densidade é calculada pela razão entre a massa e o volume: d = m/V."
  },

  {
    id: 22,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Densidade",
    tipo: "Cálculo",
    pergunta: "Um corpo possui massa de 200 g e volume de 20 cm³. Qual é a sua densidade?",
    opcoes: [
      "5 g/cm³",
      "10 g/cm³",
      "20 g/cm³",
      "40 g/cm³"
    ],
    resposta: 1,
    explicacao: "d = m/V = 200/20 = 10 g/cm³."
  },

  {
    id: 23,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Estados físicos",
    tipo: "Conhecimento",
    pergunta: "Quais são os três estados físicos de agregação apresentados no material?",
    opcoes: [
      "Sólido, líquido e gasoso",
      "Metálico, iónico e covalente",
      "Ácido, básico e neutro",
      "Natural, artificial e sintético"
    ],
    resposta: 0,
    explicacao: "O material apresenta os estados sólido, líquido e gasoso."
  },

  {
    id: 24,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Natureza corpuscular",
    tipo: "Conhecimento",
    pergunta: "A natureza corpuscular da matéria está relacionada com a ideia de que a matéria é constituída por:",
    opcoes: [
      "Partículas ou unidades muito pequenas",
      "Somente água",
      "Apenas gases",
      "Somente células"
    ],
    resposta: 0,
    explicacao: "O tema da natureza corpuscular trata da constituição da matéria por unidades ou partículas muito pequenas."
  },

  {
    id: 25,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Unidades estruturais",
    tipo: "Conhecimento",
    pergunta: "Qual das seguintes é uma unidade estrutural da matéria estudada na 7ª classe?",
    opcoes: [
      "Átomo",
      "Continente",
      "Planeta",
      "Órgão"
    ],
    resposta: 0,
    explicacao: "O programa inclui átomos, moléculas e iões entre as unidades estruturais da matéria."
  },

  {
    id: 26,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Elementos químicos",
    tipo: "Conhecimento",
    pergunta: "O que é um símbolo químico?",
    opcoes: [
      "Uma representação gráfica e abreviada de um elemento químico",
      "Uma fórmula de uma mistura",
      "Uma equação matemática",
      "Um desenho de uma molécula"
    ],
    resposta: 0,
    explicacao: "O material define símbolo químico como uma representação gráfica e abreviada de um elemento químico."
  },

  {
    id: 27,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Símbolos químicos",
    tipo: "Regra",
    pergunta: "Quando um símbolo químico possui duas letras, como devem ser escritas?",
    opcoes: [
      "As duas sempre maiúsculas",
      "As duas sempre minúsculas",
      "A primeira maiúscula e a segunda minúscula",
      "A primeira minúscula e a segunda maiúscula"
    ],
    resposta: 2,
    explicacao: "Segundo o material, num símbolo com duas letras, a primeira é maiúscula e a segunda é minúscula."
  },

  {
    id: 28,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Fórmulas químicas",
    tipo: "Conhecimento",
    pergunta: "Numa fórmula molecular, o índice colocado à direita e em baixo de um símbolo indica:",
    opcoes: [
      "A temperatura",
      "O número de átomos daquele elemento na molécula",
      "A massa da molécula",
      "O número de moléculas"
    ],
    resposta: 1,
    explicacao: "O material chama índice ao número que indica quantos átomos daquele elemento participam na formação da molécula."
  },

  {
    id: 29,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Fórmulas químicas",
    tipo: "Interpretação",
    pergunta: "Na fórmula Cl₂, o número 2 indica:",
    opcoes: [
      "Dois elementos diferentes",
      "Dois átomos de cloro",
      "Duas moléculas de cloro",
      "Duas cargas negativas"
    ],
    resposta: 1,
    explicacao: "Na fórmula Cl₂, o índice 2 indica que a molécula é constituída por dois átomos de cloro."
  },

  {
    id: 30,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Iões",
    tipo: "Conhecimento",
    pergunta: "Quais são os dois tipos de iões estudados no material?",
    opcoes: [
      "Positivos e negativos",
      "Sólidos e líquidos",
      "Metálicos e gasosos",
      "Naturais e artificiais"
    ],
    resposta: 0,
    explicacao: "O material aborda iões positivos e negativos."
  },

  {
    id: 31,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Transformações químicas",
    tipo: "Interpretação",
    pergunta: "Qual observação pode indicar que ocorreu uma transformação química?",
    opcoes: [
      "Apenas mudança de recipiente",
      "Formação de uma nova substância",
      "Apenas mudança de posição",
      "Apenas divisão de um corpo"
    ],
    resposta: 1,
    explicacao: "A formação de uma nova substância caracteriza uma transformação química."
  },

  {
    id: 32,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Reações químicas",
    tipo: "Raciocínio",
    pergunta: "Durante uma reação química, o que acontece com os átomos segundo o material?",
    opcoes: [
      "Os átomos deixam de existir",
      "Os átomos são conservados e reorganizados",
      "Todos os átomos transformam-se em energia",
      "Os átomos desaparecem completamente"
    ],
    resposta: 1,
    explicacao: "O material aborda a conservação dos átomos nas reações químicas."
  },

  {
    id: 33,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Equações químicas",
    tipo: "Conhecimento",
    pergunta: "Qual é a finalidade da representação simbólica de uma reação química?",
    opcoes: [
      "Representar a transformação por meio de uma equação química",
      "Indicar somente a cor das substâncias",
      "Mostrar apenas o estado físico",
      "Substituir completamente os experimentos"
    ],
    resposta: 0,
    explicacao: "O material apresenta as equações químicas como representação simbólica das reações químicas."
  },

  {
    id: 34,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Separação de misturas",
    tipo: "Problema",
    pergunta: "Uma mistura contém água e areia. Considerando os métodos apresentados no material, qual pode ser utilizado para separar os componentes?",
    opcoes: [
      "Filtração",
      "Separação magnética",
      "Peneiração de gases",
      "Somente fusão"
    ],
    resposta: 0,
    explicacao: "A filtração é apresentada como método para separar um líquido de um sólido em suspensão, como pode ocorrer com água e areia."
  },


  // =========================================================
  // 8ª CLASSE — QUESTÕES 35 a 67
  // =========================================================

  {
    id: 35,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Átomo",
    tipo: "Conhecimento",
    pergunta: "Quais partículas subatómicas são estudadas na estrutura do átomo?",
    opcoes: [
      "Protões, neutrões e electrões",
      "Moléculas, iões e misturas",
      "Ácidos, bases e sais",
      "Sólidos, líquidos e gases"
    ],
    resposta: 0,
    explicacao: "O estudo da estrutura atómica inclui protões, neutrões e electrões."
  },

  {
    id: 36,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Número atómico",
    tipo: "Conhecimento",
    pergunta: "O número atómico de um elemento está relacionado principalmente com o número de:",
    opcoes: [
      "Protões",
      "Moléculas",
      "Misturas",
      "Níveis de energia somente"
    ],
    resposta: 0,
    explicacao: "O número atómico identifica o elemento através do número de protões do seu núcleo."
  },

  {
    id: 37,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Número de massa",
    tipo: "Conhecimento",
    pergunta: "O número de massa está relacionado com a soma de:",
    opcoes: [
      "Electrões e moléculas",
      "Protões e neutrões",
      "Electrões e iões",
      "Átomos e moléculas"
    ],
    resposta: 1,
    explicacao: "O número de massa corresponde à soma do número de protões e neutrões."
  },

  {
    id: 38,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Isótopos",
    tipo: "Conhecimento",
    pergunta: "Isótopos são átomos que possuem:",
    opcoes: [
      "O mesmo número atómico e diferentes números de massa",
      "Diferentes números atómicos e sempre a mesma massa",
      "Apenas electrões iguais",
      "Sempre o mesmo número de neutrões"
    ],
    resposta: 0,
    explicacao: "Isótopos são átomos do mesmo elemento, portanto com o mesmo número atómico, mas com diferente número de massa."
  },

  {
    id: 39,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Isóbaros",
    tipo: "Conhecimento",
    pergunta: "Átomos isóbaros possuem:",
    opcoes: [
      "O mesmo número de massa",
      "O mesmo número atómico obrigatoriamente",
      "O mesmo número de electrões em qualquer situação",
      "A mesma quantidade de moléculas"
    ],
    resposta: 0,
    explicacao: "Isóbaros são átomos que possuem o mesmo número de massa."
  },

  {
    id: 40,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Estrutura atómica",
    tipo: "Cálculo",
    pergunta: "Um átomo possui 11 protões e 12 neutrões. Qual é o seu número de massa?",
    opcoes: [
      "11",
      "12",
      "23",
      "132"
    ],
    resposta: 2,
    explicacao: "Número de massa = protões + neutrões = 11 + 12 = 23."
  },

  {
    id: 41,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Distribuição electrónica",
    tipo: "Conhecimento",
    pergunta: "A distribuição electrónica representa principalmente:",
    opcoes: [
      "A organização dos electrões nos níveis ou camadas",
      "A mistura de substâncias",
      "A separação dos líquidos",
      "A massa dos materiais"
    ],
    resposta: 0,
    explicacao: "A distribuição electrónica descreve como os electrões estão organizados nos níveis ou camadas electrónicas."
  },

  {
    id: 42,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Quantos grupos ou famílias possui a tabela periódica apresentada no material?",
    opcoes: [
      "7",
      "8",
      "18",
      "118"
    ],
    resposta: 2,
    explicacao: "O material apresenta 18 colunas verticais, chamadas grupos ou famílias."
  },

  {
    id: 43,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Quantos períodos possui a tabela periódica apresentada no material?",
    opcoes: [
      "5",
      "7",
      "18",
      "20"
    ],
    resposta: 1,
    explicacao: "O material apresenta 7 linhas horizontais, chamadas períodos ou séries."
  },

  {
    id: 44,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Como são chamadas as colunas verticais da tabela periódica?",
    opcoes: [
      "Períodos",
      "Séries",
      "Grupos ou famílias",
      "Camadas"
    ],
    resposta: 2,
    explicacao: "As colunas verticais são chamadas grupos ou famílias."
  },

  {
    id: 45,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Como são chamadas as linhas horizontais da tabela periódica?",
    opcoes: [
      "Grupos",
      "Famílias",
      "Períodos ou séries",
      "Iões"
    ],
    resposta: 2,
    explicacao: "As linhas horizontais são chamadas períodos ou séries."
  },

  {
    id: 46,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Tabela periódica",
    tipo: "Raciocínio",
    pergunta: "Segundo o material, elementos do mesmo grupo apresentam:",
    opcoes: [
      "Propriedades físicas e comportamento químico semelhantes",
      "Sempre massas iguais",
      "Sempre números atómicos iguais",
      "Sempre o mesmo número de neutrões"
    ],
    resposta: 0,
    explicacao: "O material afirma que elementos de um mesmo grupo possuem propriedades físicas e comportamento químico semelhante."
  },

  {
    id: 47,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Tabela periódica",
    tipo: "Raciocínio",
    pergunta: "Segundo o material, elementos do mesmo período possuem:",
    opcoes: [
      "O mesmo número de níveis ou camadas electrónicas",
      "O mesmo número de protões",
      "A mesma massa atómica",
      "O mesmo número de moléculas"
    ],
    resposta: 0,
    explicacao: "Elementos de um mesmo período possuem o mesmo número de níveis ou camadas na distribuição electrónica."
  },

  {
    id: 48,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "História da tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Quem é apresentado no material como responsável pela Lei das Tríades?",
    opcoes: [
      "Newlands",
      "Döbereiner",
      "Mendeleyev",
      "Berzelius"
    ],
    resposta: 1,
    explicacao: "O material atribui a Lei das Tríades a Döbereiner."
  },

  {
    id: 49,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "História da tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Quem formulou a Lei das Oitavas?",
    opcoes: [
      "Döbereiner",
      "Mendeleyev",
      "Newlands",
      "Dalton"
    ],
    resposta: 2,
    explicacao: "O material apresenta Newlands como responsável pela Lei das Oitavas."
  },

  {
    id: 50,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "História da tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Quem é considerado no material como pai da tabela periódica?",
    opcoes: [
      "Lavoisier",
      "Berzelius",
      "Mendeleyev",
      "Newlands"
    ],
    resposta: 2,
    explicacao: "O material considera Mendeleyev como pai da tabela periódica pelo seu importante contributo na organização dos elementos."
  },

  {
    id: 51,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Lei das Tríades",
    tipo: "Cálculo",
    pergunta: "Na tríade de Döbereiner formada por Li (7), Na (23) e K (39), a massa do elemento central corresponde à média aritmética de quais elementos?",
    opcoes: [
      "Li e Na",
      "Na e K",
      "Li e K",
      "Somente K"
    ],
    resposta: 2,
    explicacao: "A média das massas de Li e K é (7 + 39)/2 = 23, correspondente ao Na."
  },

  {
    id: 52,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Lei das Oitavas",
    tipo: "Conhecimento",
    pergunta: "Newlands observou que certas propriedades se repetiam no:",
    opcoes: [
      "Segundo elemento",
      "Quinto elemento",
      "Oitavo elemento",
      "Décimo oitavo elemento"
    ],
    resposta: 2,
    explicacao: "O material explica que Newlands observou repetição das propriedades no oitavo elemento."
  },

  {
    id: 53,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Tabela periódica actual",
    tipo: "Conhecimento",
    pergunta: "Na tabela periódica actual apresentada no material, os elementos estão organizados por ordem crescente de:",
    opcoes: [
      "Número atómico",
      "Número de moléculas",
      "Volume",
      "Densidade apenas"
    ],
    resposta: 0,
    explicacao: "O material afirma que os elementos estão organizados por ordem crescente dos seus números atómicos."
  },

  {
    id: 54,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Quantos elementos químicos são apresentados como conhecidos actualmente no material?",
    opcoes: [
      "60",
      "92",
      "100",
      "118"
    ],
    resposta: 3,
    explicacao: "O material afirma que actualmente são conhecidos 118 elementos."
  },

  {
    id: 55,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Metais e não-metais",
    tipo: "Conhecimento",
    pergunta: "Onde estão localizados predominantemente os metais na tabela periódica, segundo o material?",
    opcoes: [
      "Somente à direita",
      "À esquerda e no centro",
      "Somente no topo",
      "Apenas no grupo 18"
    ],
    resposta: 1,
    explicacao: "O material afirma que os metais estão à esquerda e no centro da tabela periódica."
  },

  {
    id: 56,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Metais",
    tipo: "Conhecimento",
    pergunta: "Qual propriedade é apresentada como característica dos metais?",
    opcoes: [
      "Maleabilidade",
      "Serem sempre gases",
      "Serem sempre líquidos",
      "Não poderem formar fios"
    ],
    resposta: 0,
    explicacao: "O material apresenta a maleabilidade como uma das características dos metais."
  },

  {
    id: 57,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Metais",
    tipo: "Conhecimento",
    pergunta: "O que significa dizer que um metal é dúctil?",
    opcoes: [
      "Pode ser transformado em fios",
      "Pode ser dissolvido em água",
      "É sempre líquido",
      "Não pode ser deformado"
    ],
    resposta: 0,
    explicacao: "O material define ductilidade como a capacidade de ser transformado em fios."
  },

  {
    id: 58,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Substâncias elementares",
    tipo: "Classificação",
    pergunta: "As substâncias elementares ou simples podem ser classificadas, segundo o material, em:",
    opcoes: [
      "Ácidos e bases",
      "Metais e não-metais",
      "Soluções e coloides",
      "Sólidos e líquidos somente"
    ],
    resposta: 1,
    explicacao: "O material classifica as substâncias elementares ou simples em metais e não-metais."
  },

  {
    id: 59,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Ligações químicas",
    tipo: "Conhecimento",
    pergunta: "O tema de moléculas da 8ª classe inclui o estudo de que tipo de ligação?",
    opcoes: [
      "Ligação covalente",
      "Ligação mecânica",
      "Ligação térmica",
      "Ligação magnética"
    ],
    resposta: 0,
    explicacao: "O material da 8ª classe aborda as ligações covalentes."
  },

  {
    id: 60,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Ligação covalente",
    tipo: "Conhecimento",
    pergunta: "A ligação covalente pode ser classificada, segundo o material, como:",
    opcoes: [
      "Polar ou apolar",
      "Quente ou fria",
      "Natural ou artificial",
      "Metálica ou magnética"
    ],
    resposta: 0,
    explicacao: "O material aborda ligações covalentes polares e apolares."
  },

  {
    id: 61,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Ligações covalentes",
    tipo: "Conhecimento",
    pergunta: "Quais tipos de ligação covalente são apresentados de acordo com o número de pares envolvidos?",
    opcoes: [
      "Simples, dupla e tripla",
      "Curta, média e longa",
      "Iónica, metálica e térmica",
      "Natural, artificial e sintética"
    ],
    resposta: 0,
    explicacao: "O material aborda ligações covalentes simples, duplas e triplas."
  },

  {
    id: 62,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Moléculas",
    tipo: "Conhecimento",
    pergunta: "Uma molécula pode ser constituída por:",
    opcoes: [
      "Átomos iguais ou diferentes combinados",
      "Somente metais",
      "Somente iões negativos",
      "Apenas partículas isoladas"
    ],
    resposta: 0,
    explicacao: "O material afirma que átomos iguais ou diferentes podem combinar-se formando estruturas chamadas moléculas."
  },

  {
    id: 63,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Massa molecular",
    tipo: "Conhecimento",
    pergunta: "O que é estudado quando se fala em massa molecular relativa?",
    opcoes: [
      "A massa relativa de uma molécula",
      "A temperatura de uma mistura",
      "A pressão de um gás",
      "O volume de um recipiente"
    ],
    resposta: 0,
    explicacao: "O material inclui o estudo da massa molecular relativa entre os conteúdos relacionados às moléculas."
  },

  {
    id: 64,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Tabela periódica",
    tipo: "Raciocínio",
    pergunta: "Dois elementos estão no mesmo grupo. Segundo o material, qual característica é esperada entre eles?",
    opcoes: [
      "Comportamento químico semelhante",
      "Número atómico obrigatoriamente igual",
      "Mesmo número total de partículas",
      "Mesma massa atómica"
    ],
    resposta: 0,
    explicacao: "Elementos do mesmo grupo apresentam propriedades físicas e comportamento químico semelhantes."
  },

  {
    id: 65,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Tabela periódica",
    tipo: "Raciocínio",
    pergunta: "Dois elementos estão no mesmo período. O que podemos inferir segundo o material?",
    opcoes: [
      "Possuem o mesmo número de níveis ou camadas electrónicas",
      "Possuem a mesma massa",
      "São necessariamente do mesmo grupo",
      "Têm o mesmo número atómico"
    ],
    resposta: 0,
    explicacao: "Elementos do mesmo período possuem o mesmo número de níveis ou camadas electrónicas."
  },

  {
    id: 66,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Tabela periódica",
    tipo: "Classificação",
    pergunta: "Quais grupos são apresentados no material como elementos representativos?",
    opcoes: [
      "1, 2, 13, 14, 15, 16, 17 e 18",
      "Somente 3 e 4",
      "Somente 17 e 18",
      "Todos os grupos sem distinção"
    ],
    resposta: 0,
    explicacao: "O material identifica os grupos 1, 2, 13, 14, 15, 16, 17 e 18 como elementos representativos."
  },

  {
    id: 67,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Tabela periódica",
    tipo: "Análise",
    pergunta: "Se dois elementos possuem o mesmo número de níveis electrónicos, mas estão em posições diferentes numa mesma linha horizontal da tabela periódica, eles estão no mesmo:",
    opcoes: [
      "Período",
      "Grupo",
      "Ião",
      "Isótopo"
    ],
    resposta: 0,
    explicacao: "Uma linha horizontal da tabela periódica corresponde a um período; elementos do mesmo período têm o mesmo número de níveis electrónicos."


  // =========================================================
  // 9ª CLASSE — QUESTÕES 68 a 100
  // =========================================================

  },

  {
    id: 68,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "Como é conhecido o grupo 16 da tabela periódica no material?",
    opcoes: [
      "Halogénios",
      "Calcogénios",
      "Metais alcalinos",
      "Gases nobres"
    ],
    resposta: 1,
    explicacao: "O grupo 16 é apresentado no material como grupo dos calcogénios."
  },

  {
    id: 69,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "Qual destes elementos pertence ao grupo 16?",
    opcoes: [
      "Oxigénio",
      "Sódio",
      "Cloro",
      "Hélio"
    ],
    resposta: 0,
    explicacao: "O oxigénio pertence ao grupo 16."
  },

  {
    id: 70,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "Qual é o símbolo químico do oxigénio?",
    opcoes: [
      "Ox",
      "O",
      "Og",
      "X"
    ],
    resposta: 1,
    explicacao: "O símbolo químico do oxigénio é O."
  },

  {
    id: 71,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "Qual é o símbolo químico do enxofre?",
    opcoes: [
      "E",
      "En",
      "S",
      "X"
    ],
    resposta: 2,
    explicacao: "O símbolo químico do enxofre é S."
  },

  {
    id: 72,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "Quantos electrões de valência possuem os elementos do grupo 16, segundo o material?",
    opcoes: [
      "2",
      "4",
      "6",
      "8"
    ],
    resposta: 2,
    explicacao: "O material afirma que os elementos do grupo 16 possuem 6 electrões de valência."
  },

  {
    id: 73,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Grupo 16",
    tipo: "Raciocínio",
    pergunta: "Segundo o material, os elementos do grupo 16 têm tendência para captar quantos electrões?",
    opcoes: [
      "1",
      "2",
      "4",
      "6"
    ],
    resposta: 1,
    explicacao: "O material afirma que os elementos do grupo 16 possuem forte tendência de captar 2 electrões."
  },

  {
    id: 74,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "Qual sequência apresenta elementos do grupo 16 citados no material?",
    opcoes: [
      "O, S, Se, Te, Po",
      "Na, K, Li, Ca, Mg",
      "F, Cl, Br, I, At",
      "He, Ne, Ar, Kr, Xe"
    ],
    resposta: 0,
    explicacao: "O material apresenta oxigénio, enxofre, selénio, telúrio e polónio entre os elementos do grupo 16."
  },

  {
    id: 75,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Grupo 16",
    tipo: "Interpretação",
    pergunta: "Por que os elementos do grupo 16 possuem tendência para captar dois electrões?",
    opcoes: [
      "Porque possuem seis electrões de valência e procuram completar a camada de valência",
      "Porque não possuem electrões",
      "Porque possuem apenas dois electrões de valência",
      "Porque são todos gases nobres"
    ],
    resposta: 0,
    explicacao: "Segundo o material, os elementos do grupo 16 têm seis electrões de valência e tendem a captar dois para completar a camada de valência."
  },

  {
    id: 76,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Oxigénio",
    tipo: "Conhecimento",
    pergunta: "Qual é o símbolo químico do oxigénio molecular?",
    opcoes: [
      "O",
      "O₂",
      "O₃",
      "Ox₂"
    ],
    resposta: 1,
    explicacao: "O material aborda a estrutura do átomo e da molécula de oxigénio; a forma molecular é representada por O₂."
  },

  {
    id: 77,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Oxigénio",
    tipo: "Conhecimento",
    pergunta: "O estudo do oxigénio na 9ª classe inclui:",
    opcoes: [
      "Estado natural, obtenção no laboratório, propriedades e aplicações",
      "Somente o seu símbolo",
      "Somente a sua massa",
      "Apenas a sua cor"
    ],
    resposta: 0,
    explicacao: "O programa inclui estrutura, estado natural, obtenção laboratorial, propriedades e aplicações do oxigénio."
  },

  {
    id: 78,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Enxofre",
    tipo: "Conhecimento",
    pergunta: "Qual destes temas faz parte do estudo do enxofre na 9ª classe?",
    opcoes: [
      "Alotropia",
      "Somente densidade da água",
      "Somente filtração",
      "Apenas tabela de solubilidade"
    ],
    resposta: 0,
    explicacao: "O programa da 9ª classe inclui a alotropia do enxofre."
  },

  {
    id: 79,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Enxofre",
    tipo: "Conhecimento",
    pergunta: "Além da alotropia, o estudo do enxofre inclui:",
    opcoes: [
      "Propriedades e aplicações",
      "Somente número atómico",
      "Somente separação magnética",
      "Apenas ponto de fusão"
    ],
    resposta: 0,
    explicacao: "O material inclui estado natural, alotropia, propriedades e aplicações do enxofre."
  },

  {
    id: 80,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Óxidos de enxofre",
    tipo: "Conhecimento",
    pergunta: "O estudo dos óxidos de enxofre inclui a formação de:",
    opcoes: [
      "Chuvas ácidas",
      "Misturas homogéneas somente",
      "Ligas metálicas",
      "Coloides alimentares"
    ],
    resposta: 0,
    explicacao: "O programa aborda os óxidos de enxofre, a formação das chuvas ácidas e as suas consequências."
  },

  {
    id: 81,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Chuvas ácidas",
    tipo: "Relação de conceitos",
    pergunta: "Qual sequência representa a relação estudada no material?",
    opcoes: [
      "Óxidos de enxofre → chuvas ácidas → consequências",
      "Oxigénio → peneiração → cristalização",
      "Petróleo → filtração → decantação",
      "Carbono → centrifugação → destilação"
    ],
    resposta: 0,
    explicacao: "O material relaciona os óxidos de enxofre com a formação das chuvas ácidas e as suas consequências."
  },

  {
    id: 82,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Quantidade em Química",
    tipo: "Conhecimento",
    pergunta: "Qual dos seguintes conteúdos pertence ao tema 'Quantidade em Química'?",
    opcoes: [
      "Mole",
      "Somente tabela periódica histórica",
      "Apenas metais",
      "Separação magnética"
    ],
    resposta: 0,
    explicacao: "O programa da 9ª classe inclui a mole no tema Quantidade em Química."
  },

  {
    id: 83,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Quantidade em Química",
    tipo: "Conhecimento",
    pergunta: "Qual conceito está diretamente associado à mole no material?",
    opcoes: [
      "Constante de Avogadro",
      "Ponto de fusão",
      "Filtração",
      "Alotropia apenas"
    ],
    resposta: 0,
    explicacao: "O programa inclui a constante de Avogadro no estudo da mole."
  },

  {
    id: 84,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Constante de Avogadro",
    tipo: "Conhecimento",
    pergunta: "A constante de Avogadro está relacionada com:",
    opcoes: [
      "A quantidade de partículas correspondente a uma mole",
      "A temperatura de fusão",
      "A pressão atmosférica",
      "A densidade de um líquido"
    ],
    resposta: 0,
    explicacao: "A constante de Avogadro estabelece a quantidade de partículas correspondente a uma mole."
  },

  {
    id: 85,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Massa molar",
    tipo: "Conhecimento",
    pergunta: "Qual conceito faz parte do estudo da quantidade em Química?",
    opcoes: [
      "Massa molar",
      "Somente cor",
      "Somente cheiro",
      "Peneiração"
    ],
    resposta: 0,
    explicacao: "O programa inclui a massa molar de átomos, moléculas e iões."
  },

  {
    id: 86,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Volume molar",
    tipo: "Conhecimento",
    pergunta: "O volume molar estudado na 9ª classe está relacionado com:",
    opcoes: [
      "Um gás",
      "Somente sólidos",
      "Somente metais",
      "Misturas heterogéneas"
    ],
    resposta: 0,
    explicacao: "O programa inclui especificamente o volume molar de um gás."
  },

  {
    id: 87,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Mole",
    tipo: "Cálculo",
    pergunta: "Se uma amostra contém 2 mol de uma substância, a quantidade de partículas será:",
    opcoes: [
      "Metade da constante de Avogadro",
      "Duas vezes a constante de Avogadro",
      "Igual a zero",
      "Independente da quantidade de matéria"
    ],
    resposta: 1,
    explicacao: "Uma mole corresponde à constante de Avogadro de partículas; portanto, 2 mol correspondem a duas vezes essa quantidade."
  },

  {
    id: 88,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Química do carbono",
    tipo: "Conhecimento",
    pergunta: "Qual é o elemento central do tema 'Química do carbono'?",
    opcoes: [
      "Oxigénio",
      "Carbono",
      "Enxofre",
      "Sódio"
    ],
    resposta: 1,
    explicacao: "O terceiro tema da 9ª classe é dedicado à Química do carbono."
  },

  {
    id: 89,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Compostos orgânicos",
    tipo: "Conhecimento",
    pergunta: "O programa da 9ª classe distingue compostos orgânicos em:",
    opcoes: [
      "Naturais e sintéticos",
      "Sólidos e líquidos somente",
      "Metálicos e magnéticos",
      "Ácidos e bases apenas"
    ],
    resposta: 0,
    explicacao: "O programa inclui compostos orgânicos naturais e sintéticos."
  },

  {
    id: 90,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Química orgânica",
    tipo: "Conhecimento",
    pergunta: "Qual destes conteúdos pertence à Química do carbono?",
    opcoes: [
      "Hidrocarbonetos",
      "Somente decantação",
      "Somente centrifugação",
      "Apenas iões do grupo 16"
    ],
    resposta: 0,
    explicacao: "Os hidrocarbonetos fazem parte do tema Química do carbono."
  },

  {
    id: 91,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Hidrocarbonetos",
    tipo: "Conhecimento",
    pergunta: "O estudo dos hidrocarbonetos pertence a qual tema?",
    opcoes: [
      "Química do carbono",
      "Misturas",
      "Tabela periódica histórica",
      "Separação de substâncias"
    ],
    resposta: 0,
    explicacao: "Os hidrocarbonetos são estudados no tema de Química do carbono."
  },

  {
    id: 92,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Petróleo",
    tipo: "Conhecimento",
    pergunta: "O petróleo é estudado na 9ª classe dentro de qual tema?",
    opcoes: [
      "Química do carbono",
      "Grupo 16 apenas",
      "Estrutura atómica da 8ª classe",
      "Separação de misturas da 7ª classe"
    ],
    resposta: 0,
    explicacao: "O petróleo aparece como um dos subtemas da Química do carbono."
  },

  {
    id: 93,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Carbono",
    tipo: "Conhecimento",
    pergunta: "Qual assunto é estudado especificamente no programa como 'o átomo de carbono'?",
    opcoes: [
      "Química do carbono",
      "Grupo 16",
      "Separação de misturas",
      "História da Química"
    ],
    resposta: 0,
    explicacao: "O átomo de carbono é um dos subtemas da Química do carbono."
  },

  {
    id: 94,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Quantidade em Química",
    tipo: "Raciocínio",
    pergunta: "Uma questão pede a quantidade de matéria e fornece o número de partículas. Qual conceito estudado na 9ª classe é diretamente necessário para estabelecer essa relação?",
    opcoes: [
      "Constante de Avogadro",
      "Ponto de fusão",
      "Ponto de ebulição",
      "Separação magnética"
    ],
    resposta: 0,
    explicacao: "A constante de Avogadro relaciona a quantidade de partículas com a quantidade de matéria em mol."
  },

  {
    id: 95,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Grupo 16",
    tipo: "Análise",
    pergunta: "Um elemento possui configuração electrónica por camadas 2.8.6. Segundo o conteúdo do material, a qual grupo pertence?",
    opcoes: [
      "Grupo 2",
      "Grupo 8",
      "Grupo 16",
      "Grupo 18"
    ],
    resposta: 2,
    explicacao: "A distribuição 2.8.6 apresenta seis electrões de valência, característica indicada para os elementos do grupo 16."
  },

  {
    id: 96,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Grupo 16",
    tipo: "Análise",
    pergunta: "Um elemento apresenta 6 electrões de valência. Considerando o conteúdo estudado, qual grupo pode ser associado a essa característica?",
    opcoes: [
      "Grupo 1",
      "Grupo 2",
      "Grupo 16",
      "Grupo 18"
    ],
    resposta: 2,
    explicacao: "Segundo o material da 9ª classe, os elementos do grupo 16 possuem seis electrões de valência."
  },

  {
    id: 97,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Grupo 16",
    tipo: "Raciocínio",
    pergunta: "Se um elemento do grupo 16 capta dois electrões, qual é a finalidade dessa tendência segundo o material?",
    opcoes: [
      "Completar a camada de valência e alcançar maior estabilidade",
      "Eliminar todos os protões",
      "Transformar-se obrigatoriamente em metal",
      "Diminuir o número atómico"
    ],
    resposta: 0,
    explicacao: "O material relaciona a captação de dois electrões com o preenchimento da camada de valência e a aquisição de estabilidade."
  },

  {
    id: 98,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Quantidade em Química",
    tipo: "Comparação",
    pergunta: "Qual conjunto contém apenas conceitos pertencentes ao tema 'Quantidade em Química' da 9ª classe?",
    opcoes: [
      "Mole, constante de Avogadro e volume molar",
      "Filtração, decantação e peneiração",
      "Alotropia, petróleo e tabela periódica",
      "Símbolos, iões e misturas"
    ],
    resposta: 0,
    explicacao: "Mole, constante de Avogadro e volume molar estão todos incluídos no tema Quantidade em Química."
  },

  {
    id: 99,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Organização dos conteúdos",
    tipo: "Análise",
    pergunta: "Qual sequência corresponde aos três grandes temas apresentados no programa de Química da 9ª classe?",
    opcoes: [
      "Grupo 16 → Quantidade em Química → Química do carbono",
      "Misturas → Átomos → Grupo 16",
      "Carbono → Misturas → Ligações metálicas",
      "Tabela periódica → Separação → Densidade"
    ],
    resposta: 0,
    explicacao: "O programa apresenta três temas: estudo do grupo 16, quantidade em Química e Química do carbono."
  },

  {
    id: 100,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Integração de conteúdos",
    tipo: "Problema integrado",
    pergunta: "Um estudante observa que um elemento possui 6 electrões de valência, estuda a sua posição na tabela periódica e depois analisa a sua tendência para captar 2 electrões. Qual conteúdo da 9ª classe está sendo aplicado diretamente?",
    opcoes: [
      "Estudo do grupo 16 da tabela periódica",
      "Separação de misturas por filtração",
      "Peneiração de misturas sólidas",
      "Apenas estudo de propriedades físicas"
    ],
    resposta: 0,
    explicacao: "A situação reúne precisamente os conceitos estudados no grupo 16: posição na tabela, seis electrões de valência e tendência para captar dois electrões."
  }

];
//
// const bancoQuestoesBloco1 = [
//     {
//         id: 1,
//         disciplina: "Química",
//         classe: "7ª",
//         nivel: "Básico",
//         tema: "Introdução à Química",
//         tipo: "Conhecimento",
//         pergunta: "...",
//         opcoes: ["...", "...", "...", "..."],
//         resposta: 2,
//         explicacao: "..."
//     }
// ];


// Junta todos os blocos.
// Quando tivermos os blocos 2, 3, 4... basta acrescentá-los aqui.

const bancoQuestoes = [
    ...(typeof bancoQuestoesBloco1 !== "undefined"
        ? bancoQuestoesBloco1
        : []),

    ...(typeof bancoQuestoesBloco2 !== "undefined"
        ? bancoQuestoesBloco2
        : []),

    ...(typeof bancoQuestoesBloco3 !== "undefined"
        ? bancoQuestoesBloco3
        : []),

    ...(typeof bancoQuestoesBloco4 !== "undefined"
        ? bancoQuestoesBloco4
        : []),

    ...(typeof bancoQuestoesBloco5 !== "undefined"
        ? bancoQuestoesBloco5
        : []),

    ...(typeof bancoQuestoesBloco6 !== "undefined"
        ? bancoQuestoesBloco6
        : []),

    ...(typeof bancoQuestoesBloco7 !== "undefined"
        ? bancoQuestoesBloco7
        : []),

    ...(typeof bancoQuestoesBloco8 !== "undefined"
        ? bancoQuestoesBloco8
        : []),

    ...(typeof bancoQuestoesBloco9 !== "undefined"
        ? bancoQuestoesBloco9
        : []),

    ...(typeof bancoQuestoesBloco10 !== "undefined"
        ? bancoQuestoesBloco10
        : []),

    ...(typeof bancoQuestoesBloco11 !== "undefined"
        ? bancoQuestoesBloco11
        : []),

    ...(typeof bancoQuestoesBloco12 !== "undefined"
        ? bancoQuestoesBloco12
        : []),

    ...(typeof bancoQuestoesBloco13 !== "undefined"
        ? bancoQuestoesBloco13
        : []),

    ...(typeof bancoQuestoesBloco14 !== "undefined"
        ? bancoQuestoesBloco14
        : []),

    ...(typeof bancoQuestoesBloco15 !== "undefined"
        ? bancoQuestoesBloco15
        : [])
];


// ==========================================================
// VARIÁVEIS PRINCIPAIS
// ==========================================================

let disciplinaAtual = "";
let nivelAtual = "";
let classeAtual = "";

let perguntasAtuais = [];
let indiceQuestao = 0;

let pontuacao = 0;

let respostaSelecionada = null;

let tempo = 300;

let intervaloCronometro = null;

let simuladoEmAndamento = false;


// ==========================================================
// EMBARALHAR ARRAY
// ==========================================================

function embaralhar(array) {

    const novoArray = [...array];

    for (
        let i = novoArray.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            novoArray[i],
            novoArray[j]
        ] = [
            novoArray[j],
            novoArray[i]
        ];
    }

    return novoArray;
}


// ==========================================================
// ABRIR DISCIPLINA
// ==========================================================

function abrirDisciplina(disciplina) {

    disciplinaAtual = disciplina;
    nivelAtual = "";
    classeAtual = "";

    const areaDisciplina =
        document.getElementById(
            "area-disciplina"
        );

    const disciplinas =
        document.getElementById(
            "disciplinas"
        );

    areaDisciplina.classList.remove(
        "area-escondida"
    );

    disciplinas.style.display = "none";

    document.getElementById(
        "nome-disciplina"
    ).textContent = disciplina;


    const icones = {

        "Química": "🧪",

        "Biologia": "🧬",

        "Matemática": "📐",

        "Física": "⚡"

    };


    document.getElementById(
        "icone-disciplina-grande"
    ).textContent =
        icones[disciplina] || "📚";


    document.getElementById(
        "conteudo-disciplina"
    ).innerHTML = `

        <h3>
            Bem-vindo à ${disciplina}!
        </h3>

        <p>
            Escolhe um nível acima para
            começar os teus estudos.
        </p>

        <p style="margin-top:15px;">
            📚 ${contarQuestoesDisciplina(disciplina)}
            questões disponíveis
        </p>

    `;


    areaDisciplina.scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================================
// CONTAR QUESTÕES DA DISCIPLINA
// ==========================================================

function contarQuestoesDisciplina(
    disciplina
) {

    return bancoQuestoes.filter(
        questao =>
            questao.disciplina === disciplina
    ).length;
}


// ==========================================================
// SELECIONAR NÍVEL
// ==========================================================

function selecionarNivel(nivel) {

    nivelAtual = nivel;

    const questoesNivel =
        bancoQuestoes.filter(
            questao =>
                questao.disciplina === disciplinaAtual &&
                questao.nivel === nivel
        );


    document.getElementById(
        "conteudo-disciplina"
    ).innerHTML = `

        <h3>
            ${disciplinaAtual}
            — Nível ${nivel}
        </h3>

        <p>
            Foram encontradas
            <strong>
                ${questoesNivel.length}
            </strong>
            questões neste nível.
        </p>

        <div class="conteudo-opcoes">

            <p>
                📖 Conteúdos teóricos
            </p>

            <p>
                📝 Exercícios
            </p>

            <p>
                🎯 Simulados
            </p>

            <button
                onclick="iniciarSimulado(
                    '${disciplinaAtual}',
                    '${nivel}'
                )">

                Começar exercícios

            </button>

        </div>

    `;
}


// ==========================================================
// VOLTAR PARA DISCIPLINAS
// ==========================================================

function voltarParaDisciplinas() {

    document.getElementById(
        "area-disciplina"
    ).classList.add(
        "area-escondida"
    );


    document.getElementById(
        "disciplinas"
    ).style.display = "block";


    document.getElementById(
        "disciplinas"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================================
// IR PARA DISCIPLINAS
// ==========================================================

function irParaDisciplinas() {

    document.getElementById(
        "disciplinas"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================================
// INICIAR SIMULADO
// ==========================================================

function iniciarSimulado(
    disciplina,
    nivel = ""
) {

    disciplinaAtual = disciplina;
    nivelAtual = nivel;


    let bancoFiltrado =
        bancoQuestoes.filter(
            questao =>
                questao.disciplina === disciplina
        );


    // Se foi escolhido um nível,
    // filtra também pelo nível.

    if (nivel) {

        bancoFiltrado =
            bancoFiltrado.filter(
                questao =>
                    questao.nivel === nivel
            );
    }


    if (bancoFiltrado.length === 0) {

        alert(
            "Ainda não existem questões suficientes para esta combinação de disciplina e nível."
        );

        return;
    }


    // Embaralha as perguntas

    perguntasAtuais =
        embaralhar(bancoFiltrado);


    // Limita o tamanho do simulado

    const quantidadeMaxima = 20;


    if (
        perguntasAtuais.length >
        quantidadeMaxima
    ) {

        perguntasAtuais =
            perguntasAtuais.slice(
                0,
                quantidadeMaxima
            );
    }


    prepararSimulado();
}


// ==========================================================
// PREPARAR SIMULADO
// ==========================================================

function prepararSimulado() {

    indiceQuestao = 0;

    pontuacao = 0;

    respostaSelecionada = null;

    tempo = 300;

    simuladoEmAndamento = true;


    clearInterval(
        intervaloCronometro
    );


    document.getElementById(
        "area-disciplina"
    ).classList.add(
        "area-escondida"
    );


    document.getElementById(
        "simulados"
    ).style.display = "none";


    document.getElementById(
        "resultado"
    ).classList.add(
        "area-escondida"
    );


    document.getElementById(
        "area-simulado"
    ).classList.remove(
        "area-escondida"
    );


    const botaoProxima =
        document.getElementById(
            "botao-proxima"
        );


    if (botaoProxima) {

        botaoProxima.style.display =
            "block";
    }


    atualizarCronometroVisual();

    mostrarQuestao();


    iniciarCronometro();


    document.getElementById(
        "area-simulado"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================================
// SIMULADO GERAL
// ==========================================================

function abrirSimuladoGeral() {

    disciplinaAtual =
        "Simulado Geral";

    nivelAtual = "";

    perguntasAtuais =
        embaralhar(bancoQuestoes);


    const quantidadeMaxima = 20;


    if (
        perguntasAtuais.length >
        quantidadeMaxima
    ) {

        perguntasAtuais =
            perguntasAtuais.slice(
                0,
                quantidadeMaxima
            );
    }


    if (perguntasAtuais.length === 0) {

        alert(
            "Ainda não existem questões no banco."
        );

        return;
    }


    prepararSimulado();
}


// ==========================================================
// MOSTRAR QUESTÃO
// ==========================================================

function mostrarQuestao() {

    if (
        indiceQuestao >=
        perguntasAtuais.length
    ) {

        terminarSimulado();

        return;
    }


    const pergunta =
        perguntasAtuais[
            indiceQuestao
        ];


    document.getElementById(
        "numero-questao"
    ).textContent =

        "Questão " +
        (indiceQuestao + 1) +
        " de " +
        perguntasAtuais.length;


    document.getElementById(
        "texto-questao"
    ).textContent =
        pergunta.pergunta;


    const opcoes =
        document.getElementById(
            "opcoes"
        );


    opcoes.innerHTML = "";


    respostaSelecionada = null;


    // Metadados da questão

    let informacao = "";


    if (
        pergunta.classe ||
        pergunta.nivel ||
        pergunta.tema
    ) {

        informacao = `

            <div class="informacao-questao">

                ${
                    pergunta.classe
                        ? `<span>📚 ${pergunta.classe}</span>`
                        : ""
                }

                ${
                    pergunta.nivel
                        ? `<span>🎯 ${pergunta.nivel}</span>`
                        : ""
                }

                ${
                    pergunta.tema
                        ? `<span>📖 ${pergunta.tema}</span>`
                        : ""
                }

            </div>

        `;
    }


    const textoQuestao =
        document.getElementById(
            "texto-questao"
        );


    // Remove informação anterior

    const informacaoAnterior =
        document.querySelector(
            ".informacao-questao"
        );


    if (
        informacaoAnterior
    ) {

        informacaoAnterior.remove();
    }


    if (informacao) {

        textoQuestao.insertAdjacentHTML(
            "beforebegin",
            informacao
        );
    }


    // Embaralhar alternativas

    const alternativas =
        pergunta.opcoes.map(
            (texto, indice) => ({
                texto: texto,
                indice: indice
            })
        );


    const alternativasEmbaralhadas =
        embaralhar(alternativas);


    alternativasEmbaralhadas.forEach(
        alternativa => {

            const elemento =
                document.createElement(
                    "div"
                );


            elemento.classList.add(
                "opcao"
            );


            elemento.textContent =
                alternativa.texto;


            elemento.onclick =
                function() {

                    if (
                        !simuladoEmAndamento
                    ) {

                        return;
                    }


                    document
                        .querySelectorAll(
                            ".opcao"
                        )
                        .forEach(
                            item => {

                                item.classList.remove(
                                    "selecionada"
                                );

                            }
                        );


                    elemento.classList.add(
                        "selecionada"
                    );


                    respostaSelecionada =
                        alternativa.indice;

                };


            opcoes.appendChild(
                elemento
            );

        }
    );


    atualizarProgresso();
}


// ==========================================================
// ATUALIZAR PROGRESSO
// ==========================================================

function atualizarProgresso() {

    const total =
        perguntasAtuais.length;


    const respondida =
        indiceQuestao;


    const progresso =
        total > 0
            ? (respondida / total) * 100
            : 0;


    const barra =
        document.getElementById(
            "barra-progresso"
        );


    if (barra) {

        barra.style.width =
            progresso + "%";
    }
}


// ==========================================================
// PRÓXIMA QUESTÃO
// ==========================================================

function proximaQuestao() {

    if (
        respostaSelecionada === null
    ) {

        alert(
            "Escolhe uma resposta primeiro."
        );

        return;
    }


    const pergunta =
        perguntasAtuais[
            indiceQuestao
        ];


    const respostaCorreta =
        pergunta.resposta;


    const acertou =
        respostaSelecionada ===
        respostaCorreta;


    if (acertou) {

        pontuacao++;

    }


    mostrarResultadoResposta(
        pergunta,
        acertou
    );
}


// ==========================================================
// MOSTRAR RESULTADO DA RESPOSTA
// ==========================================================

function mostrarResultadoResposta(
    pergunta,
    acertou
) {

    const opcoes =
        document.querySelectorAll(
            ".opcao"
        );


    opcoes.forEach(
        (opcao, indice) => {

            opcao.style.pointerEvents =
                "none";

        }
    );


    // Descobrir a resposta correta
    // pelo texto.

    const respostaCorretaTexto =
        pergunta.opcoes[
            pergunta.resposta
        ];


    opcoes.forEach(
        opcao => {

            if (
                opcao.textContent ===
                respostaCorretaTexto
            ) {

                opcao.classList.add(
                    "correta"
                );

            }

        }
    );


    if (!acertou) {

        opcoes.forEach(
            opcao => {

                if (
                    opcao.classList.contains(
                        "selecionada"
                    )
                ) {

                    opcao.classList.add(
                        "incorreta"
                    );

                }

            }
        );

    }


    // Criar explicação

    const explicacaoAnterior =
        document.querySelector(
            ".explicacao-questao"
        );


    if (
        explicacaoAnterior
    ) {

        explicacaoAnterior.remove();
    }


    const explicacao =
        document.createElement(
            "div"
        );


    explicacao.classList.add(
        "explicacao-questao"
    );


    explicacao.innerHTML = `

        <strong>
            ${
                acertou
                    ? "✅ Resposta correta!"
                    : "❌ Resposta incorreta!"
            }
        </strong>

        ${
            pergunta.explicacao
                ? `<p>${pergunta.explicacao}</p>`
                : ""
        }

    `;


    document.getElementById(
        "opcoes"
    ).appendChild(
        explicacao
    );


    respostaSelecionada =
        "respondida";


    const botao =
        document.getElementById(
            "botao-proxima"
        );


    if (botao) {

        botao.textContent =
            indiceQuestao ===
            perguntasAtuais.length - 1

                ? "Ver resultado"

                : "Próxima questão";
    }


    // Pequeno atraso para o estudante
    // ler a explicação antes de avançar.

    setTimeout(
        () => {

            if (
                !simuladoEmAndamento
            ) {

                return;
            }


            indiceQuestao++;


            if (
                indiceQuestao <
                perguntasAtuais.length
            ) {

                mostrarQuestao();

            } else {

                terminarSimulado();

            }

        },
        1200
    );
}


// ==========================================================
// TERMINAR SIMULADO
// ==========================================================

function terminarSimulado() {

    if (
        !simuladoEmAndamento
    ) {

        return;
    }


    simuladoEmAndamento = false;


    clearInterval(
        intervaloCronometro
    );


    const total =
        perguntasAtuais.length;


    const percentagem =
        total > 0

            ? Math.round(
                (pontuacao / total) * 100
            )

            : 0;


    document.getElementById(
        "area-simulado"
    ).classList.add(
        "area-escondida"
    );


    document.getElementById(
        "resultado"
    ).classList.remove(
        "area-escondida"
    );


    document.getElementById(
        "texto-resultado"
    ).textContent =

        "Acertaste " +
        pontuacao +
        " de " +
        total +
        " questões.";


    document.getElementById(
        "percentagem"
    ).textContent =
        percentagem + "%";


    guardarDesempenho(
        total,
        percentagem,
        disciplinaAtual,
        nivelAtual
    );


    atualizarDesempenho();


    document.getElementById(
        "resultado"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================================
// CRONÓMETRO
// ==========================================================

function iniciarCronometro() {

    clearInterval(
        intervaloCronometro
    );


    intervaloCronometro =
        setInterval(
            () => {

                if (
                    !simuladoEmAndamento
                ) {

                    clearInterval(
                        intervaloCronometro
                    );

                    return;
                }


                tempo--;


                atualizarCronometroVisual();


                if (
                    tempo <= 0
                ) {

                    clearInterval(
                        intervaloCronometro
                    );


                    terminarSimulado();

                }

            },
            1000
        );
}


// ==========================================================
// ATUALIZAR CRONÓMETRO
// ==========================================================

function atualizarCronometroVisual() {

    const cronometro =
        document.getElementById(
            "cronometro"
        );


    if (!cronometro) {

        return;
    }


    const minutos =
        Math.floor(
            tempo / 60
        );


    const segundos =
        tempo % 60;


    cronometro.textContent =

        String(minutos)
            .padStart(2, "0")

        +

        ":"

        +

        String(segundos)
            .padStart(2, "0");
}


// ==========================================================
// FECHAR SIMULADO
// ==========================================================

function fecharSimulado() {

    clearInterval(
        intervaloCronometro
    );


    simuladoEmAndamento = false;


    document.getElementById(
        "area-simulado"
    ).classList.add(
        "area-escondida"
    );


    document.getElementById(
        "simulados"
    ).style.display =
        "block";


    document.getElementById(
        "simulados"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================================
// DESEMPENHO
// ==========================================================

function guardarDesempenho(
    total,
    percentagem,
    disciplina,
    nivel
) {

    let dados =
        JSON.parse(
            localStorage.getItem(
                "desempenhoEstuda"
            )
        ) || {

            simulados: 0,

            melhor: 0,

            questoes: 0,

            historico: []

        };


    dados.simulados++;

    dados.questoes += total;


    if (
        percentagem >
        dados.melhor
    ) {

        dados.melhor =
            percentagem;
    }


    if (
        !dados.historico
    ) {

        dados.historico = [];

    }


    dados.historico.push({

        data:
            new Date().toLocaleString(),

        disciplina:
            disciplina,

        nivel:
            nivel,

        total:
            total,

        pontuacao:
            pontuacao,

        percentagem:
            percentagem

    });


    // Mantém somente os últimos
    // 50 simulados no histórico.

    if (
        dados.historico.length >
        50
    ) {

        dados.historico =
            dados.historico.slice(-50);

    }


    localStorage.setItem(
        "desempenhoEstuda",
        JSON.stringify(dados)
    );


    atualizarDesempenho();
}


// ==========================================================
// ATUALIZAR DESEMPENHO
// ==========================================================

function atualizarDesempenho() {

    const dados =
        JSON.parse(
            localStorage.getItem(
                "desempenhoEstuda"
            )
        ) || {

            simulados: 0,

            melhor: 0,

            questoes: 0,

            historico: []

        };


    const simulados =
        document.getElementById(
            "simulados-realizados"
        );


    const melhor =
        document.getElementById(
            "melhor-percentagem"
        );


    const questoes =
        document.getElementById(
            "questoes-respondidas"
        );


    if (simulados) {

        simulados.textContent =
            dados.simulados;
    }


    if (melhor) {

        melhor.textContent =
            dados.melhor + "%";
    }


    if (questoes) {

        questoes.textContent =
            dados.questoes;
    }
}


// ==========================================================
// VOLTAR AO INÍCIO
// ==========================================================

function voltarInicio() {

    clearInterval(
        intervaloCronometro
    );


    simuladoEmAndamento = false;


    document.getElementById(
        "resultado"
    ).classList.add(
        "area-escondida"
    );


    document.getElementById(
        "simulados"
    ).style.display =
        "block";


    document.getElementById(
        "inicio"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================================
// INICIALIZAÇÃO
// ==========================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        atualizarDesempenho();

    }
);
