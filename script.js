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
const bancoQuestoesBloco2 = [
  {
    id: 101,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Introdução à Química",
    tipo: "Conhecimento",
    pergunta: "A Química é a ciência que estuda principalmente:",
    opcoes: ["Apenas os seres vivos", "As substâncias, sua composição, estrutura e transformações", "Somente os astros", "Apenas os movimentos"],
    resposta: 1,
    explicacao: "O material apresenta a Química como ciência que estuda as substâncias, sua composição, estrutura e transformações."
  },,


  {
    id: 102,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "História da Química",
    tipo: "Conhecimento",
    pergunta: "A Alquimia é apresentada no material como:",
    opcoes: ["Antecessora da Química", "Uma tabela periódica", "Um método de filtração", "Uma teoria sobre gases"],
    resposta: 0,
    explicacao: "O material caracteriza a Alquimia como antecessora da Química."
  },,


  {
    id: 103,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "História da Química",
    tipo: "Conhecimento",
    pergunta: "Lavoisier é destacado como:",
    opcoes: ["Pai da Química moderna", "Descobridor dos electrões", "Criador da centrifugadora", "Inventor da tabela periódica moderna"],
    resposta: 0,
    explicacao: "O material chama Lavoisier de pai da Química moderna."
  },,


  {
    id: 104,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Aplicações da Química",
    tipo: "Aplicação",
    pergunta: "Uma aplicação da Química na alimentação é:",
    opcoes: ["Produção de fertilizantes e pesticidas", "Medição da distância entre estrelas", "Somente construção de pontes", "Apenas produção de papel"],
    resposta: 0,
    explicacao: "O material cita fertilizantes e pesticidas entre as aplicações da Química na alimentação/agricultura."
  },,


  {
    id: 105,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Transformações",
    tipo: "Conhecimento",
    pergunta: "Rasgar uma folha de papel é exemplo de transformação:",
    opcoes: ["Química", "Física", "Nuclear", "Iónica"],
    resposta: 1,
    explicacao: "Rasgar o papel altera sua forma sem formar uma nova substância, sendo transformação física."
  },,


  {
    id: 106,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Transformações",
    tipo: "Conhecimento",
    pergunta: "A formação de uma nova substância caracteriza uma transformação:",
    opcoes: ["Física", "Química", "Mecânica apenas", "Geométrica"],
    resposta: 1,
    explicacao: "Transformações químicas envolvem formação de novas substâncias com novas propriedades."
  },,


  {
    id: 107,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Misturas",
    tipo: "Conhecimento",
    pergunta: "Uma mistura homogénea apresenta:",
    opcoes: ["Uma única fase visível", "Sempre três fases", "Apenas sólidos", "Necessariamente duas camadas"],
    resposta: 0,
    explicacao: "Misturas homogéneas são apresentadas como aquelas com aspecto uniforme e uma fase visível."
  },,


  {
    id: 108,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Misturas",
    tipo: "Aplicação",
    pergunta: "Uma mistura heterogénea caracteriza-se por:",
    opcoes: ["Ser sempre gasosa", "Apresentar mais de uma fase", "Ter apenas uma substância pura", "Não poder ser separada"],
    resposta: 1,
    explicacao: "Misturas heterogéneas apresentam mais de uma fase."
  },,


  {
    id: 109,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Misturas",
    tipo: "Conhecimento",
    pergunta: "Um coloide é estudado no material como:",
    opcoes: ["Um tipo de mistura", "Um elemento químico", "Um ião positivo", "Uma equação"],
    resposta: 0,
    explicacao: "O programa inclui os coloides entre as classificações das misturas."
  },,


  {
    id: 110,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Separação de misturas",
    tipo: "Conhecimento",
    pergunta: "Para separar um líquido de um sólido depositado no fundo, usa-se:",
    opcoes: ["Decantação", "Peneiração", "Separação magnética", "Cristalização"],
    resposta: 0,
    explicacao: "A decantação é indicada para separar líquido de sólido que está em depósito ou repouso."
  },,


  {
    id: 111,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Separação de misturas",
    tipo: "Conhecimento",
    pergunta: "A filtração é usada para separar:",
    opcoes: ["Um líquido de um sólido em suspensão", "Dois gases", "Dois metais dissolvidos", "Dois líquidos miscíveis"],
    resposta: 0,
    explicacao: "O material indica filtração para separar líquido de sólido em suspensão."
  },,


  {
    id: 112,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Separação de misturas",
    tipo: "Aplicação",
    pergunta: "A centrifugação pode ser entendida como uma forma de:",
    opcoes: ["Acelerar a decantação", "Produzir uma molécula", "Aumentar a massa atómica", "Transformar um metal em gás"],
    resposta: 0,
    explicacao: "O material descreve a centrifugação como forma de acelerar a decantação."
  },,


  {
    id: 113,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Separação de misturas",
    tipo: "Conhecimento",
    pergunta: "Na cristalização, procura-se obter:",
    opcoes: ["Cristais de uma substância sólida que estava em solução", "Um gás puro", "Um metal por imantação", "Uma mistura heterogénea nova"],
    resposta: 0,
    explicacao: "A cristalização separa uma substância sólida em solução, deixando cristais após evaporação do líquido."
  },,


  {
    id: 114,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Separação de misturas",
    tipo: "Conhecimento",
    pergunta: "A destilação baseia-se na combinação de:",
    opcoes: ["Evaporação e condensação", "Filtração e peneiração", "Magnetismo e decantação", "Centrifugação e fusão"],
    resposta: 0,
    explicacao: "O material explica que a destilação se baseia em evaporação e condensação."
  },,


  {
    id: 115,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Separação de misturas",
    tipo: "Conhecimento",
    pergunta: "Para separar componentes de uma mistura sólida por tamanho das partículas, pode-se usar:",
    opcoes: ["Peneiração", "Decantação", "Destilação", "Filtração"],
    resposta: 0,
    explicacao: "A peneiração é indicada entre os métodos de separação de misturas sólidas."
  },,


  {
    id: 116,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Separação de misturas",
    tipo: "Aplicação",
    pergunta: "A separação magnética é apropriada para separar:",
    opcoes: ["Limalha de ferro de fragmentos de vidro", "Água e sal dissolvido", "Água e álcool", "Açúcar dissolvido em água"],
    resposta: 0,
    explicacao: "O material dá como exemplo a separação de limalha de ferro de pequenos fragmentos de vidro."
  },,


  {
    id: 117,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Propriedades da matéria",
    tipo: "Conhecimento",
    pergunta: "O ponto de fusão é uma:",
    opcoes: ["Propriedade específica", "Mistura", "Equação química", "Partícula subatómica"],
    resposta: 0,
    explicacao: "O ponto de fusão aparece entre as propriedades usadas para identificar substâncias."
  },,


  {
    id: 118,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Propriedades da matéria",
    tipo: "Conhecimento",
    pergunta: "O ponto de ebulição pode ajudar a:",
    opcoes: ["Identificar uma substância", "Criar um elemento", "Contar electrões diretamente", "Separar sólidos por magnetismo"],
    resposta: 0,
    explicacao: "O material inclui o ponto de ebulição entre propriedades específicas de identificação."
  },,


  {
    id: 119,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Densidade",
    tipo: "Conhecimento",
    pergunta: "A densidade ou massa volúmica relaciona:",
    opcoes: ["Massa e volume", "Pressão e carga", "Número atómico e período", "Temperatura e electrões"],
    resposta: 0,
    explicacao: "Densidade é relacionada à massa e ao volume."
  },,


  {
    id: 120,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Densidade",
    tipo: "Aplicação",
    pergunta: "A expressão da densidade é:",
    opcoes: ["d = m/V", "d = V/m²", "d = m+V", "d = V-m"],
    resposta: 0,
    explicacao: "A relação apresentada no material é d = m/V."
  },,


  {
    id: 121,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Densidade",
    tipo: "Conhecimento",
    pergunta: "Um corpo tem massa 200 g e volume 50 cm³. A densidade é:",
    opcoes: ["2 g/cm³", "4 g/cm³", "10 g/cm³", "250 g/cm³"],
    resposta: 1,
    explicacao: "d = m/V = 200/50 = 4 g/cm³."
  },,


  {
    id: 122,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Densidade",
    tipo: "Conhecimento",
    pergunta: "Se a massa de uma amostra permanece 100 g e o volume passa de 20 para 40 cm³, sua densidade:",
    opcoes: ["Aumenta para o dobro", "Diminui para metade", "Fica quatro vezes maior", "Fica igual a zero"],
    resposta: 1,
    explicacao: "Com massa constante, d=m/V; dobrando o volume, a densidade fica pela metade."
  },,


  {
    id: 123,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Constituição da matéria",
    tipo: "Conhecimento",
    pergunta: "A natureza corpuscular da matéria considera que a matéria é constituída por:",
    opcoes: ["Partículas muito pequenas", "Apenas água", "Somente células", "Ondas luminosas"],
    resposta: 0,
    explicacao: "O material aborda a constituição corpuscular da matéria."
  },,


  {
    id: 124,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Estados físicos",
    tipo: "Aplicação",
    pergunta: "No estado sólido, as partículas estão, em geral:",
    opcoes: ["Mais próximas e organizadas", "Muito afastadas como num gás", "Ausentes", "Transformadas em iões sempre"],
    resposta: 0,
    explicacao: "O estudo dos estados físicos relaciona-se à disposição e movimento das partículas."
  },,


  {
    id: 125,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Estados físicos",
    tipo: "Conhecimento",
    pergunta: "No estado líquido, a matéria possui:",
    opcoes: ["Volume definido e forma do recipiente", "Forma e volume sempre indefinidos", "Apenas partículas imóveis", "Nenhuma partícula"],
    resposta: 0,
    explicacao: "No nível introdutório, líquidos mantêm volume definido e assumem a forma do recipiente."
  },,


  {
    id: 126,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Estados físicos",
    tipo: "Conhecimento",
    pergunta: "No estado gasoso, as partículas encontram-se:",
    opcoes: ["Mais afastadas e com maior liberdade de movimento", "Presas numa rede rígida", "Sem movimento", "Sempre ionizadas"],
    resposta: 0,
    explicacao: "O material relaciona o estado gasoso com movimento corpuscular e maior afastamento das partículas."
  },,


  {
    id: 127,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Gases",
    tipo: "Conhecimento",
    pergunta: "A pressão de um gás está relacionada com:",
    opcoes: ["O movimento das suas partículas e colisões", "A cor do recipiente apenas", "A massa do recipiente", "O número de fases de um sólido"],
    resposta: 0,
    explicacao: "A pressão dos gases é tratada no material a partir do movimento corpuscular."
  },,


  {
    id: 128,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Gases",
    tipo: "Aplicação",
    pergunta: "Ao comprimir um gás mantendo a quantidade de matéria, o volume tende a:",
    opcoes: ["Diminuir", "Aumentar sempre", "Ficar infinito", "Desaparecer a matéria"],
    resposta: 0,
    explicacao: "A relação entre pressão e volume dos gases é estudada no tema da constituição da matéria."
  },,


  {
    id: 129,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Átomos",
    tipo: "Conhecimento",
    pergunta: "Um átomo é:",
    opcoes: ["Uma unidade estrutural da matéria", "Uma mistura homogénea", "Uma fase líquida", "Um método de separação"],
    resposta: 0,
    explicacao: "Átomos aparecem no material como unidades estruturais da matéria."
  },,


  {
    id: 130,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Moléculas",
    tipo: "Conhecimento",
    pergunta: "Uma molécula é:",
    opcoes: ["Uma associação de átomos", "Um tipo de mistura", "Um método de filtração", "Um recipiente"],
    resposta: 0,
    explicacao: "O material define molécula como conjunto ou associação de átomos que constitui substâncias."
  },,


  {
    id: 131,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Elementos químicos",
    tipo: "Conhecimento",
    pergunta: "Um elemento químico é representado convencionalmente por:",
    opcoes: ["Um símbolo químico", "Uma técnica de separação", "Um ponto de fusão", "Uma densidade"],
    resposta: 0,
    explicacao: "O programa inclui elemento químico e símbolo químico como conceitos fundamentais."
  },,


  {
    id: 132,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Fórmulas químicas",
    tipo: "Aplicação",
    pergunta: "A fórmula química serve para representar:",
    opcoes: ["A constituição de uma substância", "A temperatura do laboratório", "O volume do recipiente", "A velocidade da reacção apenas"],
    resposta: 0,
    explicacao: "As fórmulas químicas representam a constituição das substâncias por símbolos e índices."
  },,


  {
    id: 133,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Metais e não-metais",
    tipo: "Conhecimento",
    pergunta: "Os metais e não-metais são:",
    opcoes: ["Classificações de elementos químicos", "Tipos de misturas", "Estados físicos", "Métodos de separação"],
    resposta: 0,
    explicacao: "O programa inclui a distinção entre metais e não-metais."
  },,


  {
    id: 134,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Iões",
    tipo: "Conhecimento",
    pergunta: "Um ião positivo é chamado de:",
    opcoes: ["Catião", "Anião", "Molécula", "Isótopo"],
    resposta: 0,
    explicacao: "Iões positivos são catiões; iões negativos são aniões."
  },,


  {
    id: 135,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Iões",
    tipo: "Conhecimento",
    pergunta: "Um ião negativo é chamado de:",
    opcoes: ["Catião", "Anião", "Protão", "Neutrão"],
    resposta: 1,
    explicacao: "Iões negativos são aniões."
  },,


  {
    id: 136,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Iões",
    tipo: "Aplicação",
    pergunta: "A formação de iões envolve principalmente:",
    opcoes: ["Ganho ou perda de electrões", "Ganho de protões sempre", "Mudança do núcleo em todos os casos", "Mudança de massa do recipiente"],
    resposta: 0,
    explicacao: "Iões formam-se por ganho ou perda de electrões, conforme o conteúdo introdutório."
  },,


  {
    id: 137,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Transformações químicas",
    tipo: "Conhecimento",
    pergunta: "Uma transformação provocada pela acção do calor pode ser:",
    opcoes: ["Uma transformação de substância estudada em Química", "Necessariamente uma separação magnética", "Sempre uma mistura", "Nunca uma transformação"],
    resposta: 0,
    explicacao: "O material estuda transformações por acção do calor."
  },,


  {
    id: 138,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Transformações químicas",
    tipo: "Conhecimento",
    pergunta: "A electricidade pode provocar:",
    opcoes: ["Transformações de substâncias", "Apenas decantação", "Apenas peneiração", "Somente mudança de cor física"],
    resposta: 0,
    explicacao: "O material inclui a electricidade entre as formas de provocar transformações."
  },,


  {
    id: 139,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Transformações químicas",
    tipo: "Conhecimento",
    pergunta: "A luz pode participar na transformação de:",
    opcoes: ["Substâncias", "Somente metais", "Apenas gases nobres", "Somente misturas homogéneas"],
    resposta: 0,
    explicacao: "Transformações por acção da luz fazem parte do programa."
  },,


  {
    id: 140,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Transformações químicas",
    tipo: "Aplicação",
    pergunta: "A junção de substâncias pode provocar:",
    opcoes: ["Uma transformação química", "Somente mudança de recipiente", "Necessariamente filtração", "Apenas centrifugação"],
    resposta: 0,
    explicacao: "O programa inclui transformações por junção de substâncias."
  },,


  {
    id: 141,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Reacções químicas",
    tipo: "Conhecimento",
    pergunta: "Numa reacção química, os átomos:",
    opcoes: ["São conservados, embora possam reorganizar-se", "São destruídos completamente", "Transformam-se todos em energia", "Desaparecem"],
    resposta: 0,
    explicacao: "O tema inclui a conservação dos átomos nas reacções químicas."
  },,


  {
    id: 142,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Equações químicas",
    tipo: "Conhecimento",
    pergunta: "Uma equação química representa:",
    opcoes: ["Simbolicamente uma reacção química", "Somente uma mistura", "Apenas a densidade", "Um ponto de ebulição"],
    resposta: 0,
    explicacao: "O material define equação química como representação convencional das reacções por fórmulas e símbolos."
  },,


  {
    id: 143,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Equações químicas",
    tipo: "Conhecimento",
    pergunta: "Numa equação química, os reagentes ficam:",
    opcoes: ["À esquerda da seta", "À direita da seta", "Acima da seta apenas", "Dentro do índice"],
    resposta: 0,
    explicacao: "Pelas regras apresentadas, os reagentes ficam à esquerda e os produtos à direita."
  },,


  {
    id: 144,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Equações químicas",
    tipo: "Aplicação",
    pergunta: "Numa equação química, os produtos ficam:",
    opcoes: ["À esquerda", "À direita da seta", "Sempre acima da seta", "Fora da equação"],
    resposta: 1,
    explicacao: "Os produtos são escritos à direita da seta."
  },,


  {
    id: 145,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Equações químicas",
    tipo: "Conhecimento",
    pergunta: "O estado sólido numa equação é indicado por:",
    opcoes: ["(s)", "(l)", "(g)", "(aq)"],
    resposta: 0,
    explicacao: "O material usa (s) para sólido."
  },,


  {
    id: 146,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Equações químicas",
    tipo: "Conhecimento",
    pergunta: "O estado líquido numa equação é indicado por:",
    opcoes: ["(s)", "(l)", "(g)", "(aq)"],
    resposta: 1,
    explicacao: "O material usa (l) para líquido."
  },,


  {
    id: 147,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Equações químicas",
    tipo: "Conhecimento",
    pergunta: "O estado gasoso numa equação é indicado por:",
    opcoes: ["(s)", "(l)", "(g)", "(aq)"],
    resposta: 2,
    explicacao: "O material usa (g) para gasoso."
  },,


  {
    id: 148,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Equações químicas",
    tipo: "Aplicação",
    pergunta: "Uma substância em solução aquosa pode ser indicada por:",
    opcoes: ["(aq)", "(s)", "(l)", "(g)"],
    resposta: 0,
    explicacao: "O material indica (aq) para substâncias em solução aquosa."
  },,


  {
    id: 149,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Lei de Lavoisier",
    tipo: "Conhecimento",
    pergunta: "A lei de Lavoisier afirma que, numa reacção química:",
    opcoes: ["A massa total dos reagentes é igual à dos produtos", "A massa dos produtos é sempre maior", "A massa dos reagentes desaparece", "O volume é sempre igual à massa"],
    resposta: 0,
    explicacao: "O material apresenta a conservação da massa: massa dos reagentes igual à massa dos produtos."
  },,


  {
    id: 150,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Lei de Lavoisier",
    tipo: "Conhecimento",
    pergunta: "Se 10 g de reagentes originam produtos numa reacção fechada, a massa total dos produtos será:",
    opcoes: ["5 g", "10 g", "20 g", "100 g"],
    resposta: 1,
    explicacao: "Pela conservação da massa, a massa total dos produtos deve ser 10 g."
  },,


  {
    id: 151,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Identificação de substâncias",
    tipo: "Conhecimento",
    pergunta: "Uma propriedade comum como cor, por si só, pode ser insuficiente para identificar uma substância porque:",
    opcoes: ["Substâncias diferentes podem ter a mesma cor", "Toda substância tem cor única", "A cor é sempre uma propriedade química", "A cor mede a massa"],
    resposta: 0,
    explicacao: "O material alerta que propriedades comuns como cor e forma podem ocorrer em várias substâncias."
  },,


  {
    id: 152,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Substâncias e misturas",
    tipo: "Aplicação",
    pergunta: "Uma substância pura difere de uma mistura porque:",
    opcoes: ["A substância pura tem composição própria definida", "A mistura nunca pode ser separada", "A substância pura possui sempre duas fases", "A mistura é sempre sólida"],
    resposta: 0,
    explicacao: "O estudo distingue substâncias de misturas e aborda métodos para separar componentes de misturas."
  },,


  {
    id: 153,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Separação de misturas",
    tipo: "Conhecimento",
    pergunta: "Para obter sal sólido a partir de água salgada por cristalização, deve-se:",
    opcoes: ["Evaporar o líquido até formação de cristais", "Usar um íman", "Peneirar a água", "Centrifugar o sal"],
    resposta: 0,
    explicacao: "A cristalização permite obter a substância sólida dissolvida após evaporação do líquido."
  },,


  {
    id: 154,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Separação de misturas",
    tipo: "Conhecimento",
    pergunta: "Para clarificar uma água turva contendo partículas sólidas em suspensão, um método indicado é:",
    opcoes: ["Filtração", "Separação magnética obrigatoriamente", "Peneiração do líquido", "Destilação sempre"],
    resposta: 0,
    explicacao: "O material propõe a filtração para separar líquido de sólido em suspensão."
  },,


  {
    id: 155,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Separação de misturas",
    tipo: "Conhecimento",
    pergunta: "Se há água e um sólido depositado no fundo, antes de outras etapas pode-se usar:",
    opcoes: ["Decantação", "Peneiração", "Separação magnética sempre", "Fusão"],
    resposta: 0,
    explicacao: "A decantação é indicada para líquido e sólido depositado."
  },,


  {
    id: 156,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Separação de misturas",
    tipo: "Aplicação",
    pergunta: "A centrifugadora é um aparelho associado à:",
    opcoes: ["Centrifugação", "Destilação", "Peneiração", "Cristalização"],
    resposta: 0,
    explicacao: "O material descreve a centrifugação como realizada numa centrifugadora."
  },,


  {
    id: 157,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Separação de misturas",
    tipo: "Conhecimento",
    pergunta: "A destilação é especialmente baseada numa diferença de:",
    opcoes: ["Comportamento de evaporação e condensação dos componentes", "Cor", "Magnetismo", "Tamanho das partículas sólidas"],
    resposta: 0,
    explicacao: "A destilação envolve evaporação e condensação, permitindo separar componentes conforme seu comportamento físico."
  },,


  {
    id: 158,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Estados físicos",
    tipo: "Conhecimento",
    pergunta: "A mudança de sólido para líquido chama-se:",
    opcoes: ["Fusão", "Condensação", "Solidificação", "Sublimação"],
    resposta: 0,
    explicacao: "Fusão é a passagem do estado sólido para o líquido."
  },,


  {
    id: 159,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Estados físicos",
    tipo: "Conhecimento",
    pergunta: "A mudança de líquido para sólido chama-se:",
    opcoes: ["Fusão", "Solidificação", "Ebulição", "Sublimação"],
    resposta: 1,
    explicacao: "Solidificação é a passagem do líquido ao sólido."
  },,


  {
    id: 160,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Estados físicos",
    tipo: "Aplicação",
    pergunta: "A mudança de líquido para gás chama-se:",
    opcoes: ["Vaporização", "Fusão", "Solidificação", "Condensação"],
    resposta: 0,
    explicacao: "Vaporização é a passagem do líquido para o estado gasoso."
  },,


  {
    id: 161,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Estados físicos",
    tipo: "Conhecimento",
    pergunta: "A mudança de gás para líquido chama-se:",
    opcoes: ["Condensação", "Fusão", "Sublimação", "Solidificação"],
    resposta: 0,
    explicacao: "Condensação é a passagem do gasoso para o líquido."
  },,


  {
    id: 162,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Estados físicos",
    tipo: "Conhecimento",
    pergunta: "A passagem directa de sólido para gás chama-se:",
    opcoes: ["Sublimação", "Fusão", "Condensação", "Decantação"],
    resposta: 0,
    explicacao: "Sublimação é a passagem directa do sólido ao gasoso."
  },,


  {
    id: 163,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Densidade",
    tipo: "Conhecimento",
    pergunta: "Se uma amostra tem 60 g e densidade 3 g/cm³, seu volume é:",
    opcoes: ["20 cm³", "63 cm³", "180 cm³", "0,05 cm³"],
    resposta: 0,
    explicacao: "V = m/d = 60/3 = 20 cm³."
  },,


  {
    id: 164,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Densidade",
    tipo: "Aplicação",
    pergunta: "Se uma amostra tem volume 25 cm³ e densidade 2 g/cm³, sua massa é:",
    opcoes: ["12,5 g", "27 g", "50 g", "75 g"],
    resposta: 2,
    explicacao: "m = d×V = 2×25 = 50 g."
  },,


  {
    id: 165,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Separação de misturas",
    tipo: "Conhecimento",
    pergunta: "Qual sequência contém apenas métodos de separação citados no material?",
    opcoes: ["Filtração, decantação e destilação", "Combustão, oxidação e redução", "Ionização, dissociação e neutralização", "Fusão, combustão e corrosão"],
    resposta: 0,
    explicacao: "Os três métodos da primeira opção aparecem no conteúdo de separação de misturas."
  },,


  {
    id: 166,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "Transformações",
    tipo: "Conhecimento",
    pergunta: "Qual situação representa transformação física?",
    opcoes: ["Gelo a derreter", "Papel a queimar", "Ferro a enferrujar", "Substâncias reagindo e formando produto"],
    resposta: 0,
    explicacao: "Derreter gelo muda o estado físico sem formação de nova substância."
  },,


  {
    id: 167,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Avançado",
    tema: "Transformações",
    tipo: "Conhecimento",
    pergunta: "Qual situação representa transformação química?",
    opcoes: ["Queima de uma substância formando novas substâncias", "Cortar papel", "Derreter gelo", "Evaporar água"],
    resposta: 0,
    explicacao: "A queima com formação de novas substâncias é uma transformação química."
  },,


  {
    id: 168,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Básico",
    tema: "Equações químicas",
    tipo: "Aplicação",
    pergunta: "Se uma equação não conserva o número de átomos de cada elemento, deve-se:",
    opcoes: ["Acertar/balancear a equação com base na conservação da massa", "Apagar os reagentes", "Trocar todos os elementos", "Ignorar a lei de Lavoisier"],
    resposta: 0,
    explicacao: "O material estabelece que a equação deve ser acertada com base na conservação da massa."
  },,


  {
    id: 169,
    disciplina: "Química",
    classe: "7ª",
    nivel: "Médio",
    tema: "O programa da 7ª classe inclui átomos e moléculas como unidades estruturais da matéria.",
    tipo: "Conhecimento",
    pergunta: "Qual alternativa reúne unidades estruturais mencionadas no programa?",
    opcoes: ["Átomos e moléculas", "Litros e metros", "Graus e segundos", "Newtons e joules"],
    resposta: 0,
    explicacao: "O programa da 7ª classe inclui átomos e moléculas como unidades estruturais da matéria."
  },,


  {
    id: 170,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Átomos",
    tipo: "Conhecimento",
    pergunta: "Segundo o material, o átomo é:",
    opcoes: ["Uma partícula muitíssimo pequena que constitui a matéria", "Uma mistura", "Uma molécula sempre", "Um método de separação"],
    resposta: 0,
    explicacao: "O material apresenta o átomo como partícula muitíssimo pequena constituinte da matéria."
  },,


  {
    id: 171,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Átomos",
    tipo: "Aplicação",
    pergunta: "A palavra átomo tem origem grega relacionada a:",
    opcoes: ["Não divisível/cortável", "Muito pesado", "Muito quente", "Misturado"],
    resposta: 0,
    explicacao: "O material relaciona a palavra átomo às ideias gregas de não corte ou divisão."
  },,


  {
    id: 172,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Átomos",
    tipo: "Conhecimento",
    pergunta: "Dalton desenvolveu trabalhos sobre:",
    opcoes: ["Constituição da matéria e teoria atómica", "Separação magnética", "Grupo 16", "Petróleo"],
    resposta: 0,
    explicacao: "O material apresenta os postulados de Dalton no tema dos átomos."
  },,


  {
    id: 173,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Partículas subatómicas",
    tipo: "Conhecimento",
    pergunta: "As partículas subatómicas estudadas incluem:",
    opcoes: ["Protões, neutrões e electrões", "Moléculas, misturas e iões", "Metais, gases e líquidos", "Ácidos, bases e sais"],
    resposta: 0,
    explicacao: "A constituição do átomo é estudada por meio das partículas subatómicas."
  },,


  {
    id: 174,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Partículas subatómicas",
    tipo: "Aplicação",
    pergunta: "O protão possui carga:",
    opcoes: ["Positiva", "Negativa", "Nula", "Variável conforme o período"],
    resposta: 0,
    explicacao: "Protões são partículas subatómicas de carga positiva."
  },,


  {
    id: 175,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Partículas subatómicas",
    tipo: "Conhecimento",
    pergunta: "O electrão possui carga:",
    opcoes: ["Negativa", "Positiva", "Nula", "Sempre dupla"],
    resposta: 0,
    explicacao: "Electrões possuem carga negativa."
  },,


  {
    id: 176,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Partículas subatómicas",
    tipo: "Conhecimento",
    pergunta: "O neutrão possui carga eléctrica:",
    opcoes: ["Nula", "Positiva", "Negativa", "Dupla"],
    resposta: 0,
    explicacao: "Neutrões são eletricamente neutros."
  },,


  {
    id: 177,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Número atómico",
    tipo: "Aplicação",
    pergunta: "O número atómico corresponde ao número de:",
    opcoes: ["Protões do núcleo", "Neutrões apenas", "Moléculas", "Camadas sempre"],
    resposta: 0,
    explicacao: "O número atómico identifica-se pelo número de protões."
  },,


  {
    id: 178,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Estrutura atómica",
    tipo: "Conhecimento",
    pergunta: "Num átomo neutro, o número de electrões é igual ao número de:",
    opcoes: ["Protões", "Neutrões", "Isótopos", "Períodos"],
    resposta: 0,
    explicacao: "Num átomo neutro, as cargas positiva e negativa se compensam, tornando os números de protões e electrões iguais."
  },,


  {
    id: 179,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Número de massa",
    tipo: "Conhecimento",
    pergunta: "O número de massa é obtido pela soma de:",
    opcoes: ["Protões e neutrões", "Protões e electrões", "Electrões e moléculas", "Iões e períodos"],
    resposta: 0,
    explicacao: "Número de massa = protões + neutrões."
  },,


  {
    id: 180,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Isótopos",
    tipo: "Aplicação",
    pergunta: "Isótopos são átomos do mesmo elemento com:",
    opcoes: ["Mesmo número atómico e diferente número de massa", "Mesmo número de massa e elementos diferentes sempre", "Mesmo número de electrões e elementos diferentes", "Mesmo período obrigatoriamente"],
    resposta: 0,
    explicacao: "Isótopos possuem o mesmo número atómico, mas diferentes números de massa."
  },,


  {
    id: 181,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Isóbaros",
    tipo: "Conhecimento",
    pergunta: "Isóbaros são átomos que possuem:",
    opcoes: ["Mesmo número de massa e diferentes números atómicos", "Mesmo número atómico e diferente massa", "Mesmo número de electrões apenas", "Mesmo número de valência sempre"],
    resposta: 0,
    explicacao: "Isóbaros apresentam o mesmo número de massa e números atómicos diferentes."
  },,


  {
    id: 182,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Electrões",
    tipo: "Conhecimento",
    pergunta: "A organização dos electrões no átomo é estudada para compreender:",
    opcoes: ["A configuração electrónica", "A filtração", "A densidade", "A destilação"],
    resposta: 0,
    explicacao: "O programa inclui a organização dos electrões e configuração electrónica."
  },,


  {
    id: 183,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Raio atómico",
    tipo: "Aplicação",
    pergunta: "O raio atómico refere-se ao:",
    opcoes: ["Tamanho do átomo", "Número de protões", "Número de massa", "Número de grupos"],
    resposta: 0,
    explicacao: "O programa aborda a periodicidade do tamanho dos átomos e o raio atómico."
  },,


  {
    id: 184,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Raio atómico e iónico",
    tipo: "Conhecimento",
    pergunta: "O raio iónico refere-se ao tamanho de:",
    opcoes: ["Um ião", "Uma mistura", "Um grupo", "Uma molécula apenas"],
    resposta: 0,
    explicacao: "O programa distingue raio atómico e raio iónico."
  },,


  {
    id: 185,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Massa atómica relativa",
    tipo: "Conhecimento",
    pergunta: "A massa atómica relativa é estudada no tema:",
    opcoes: ["Os átomos", "Separação de misturas", "Grupo 16 apenas", "Petróleo"],
    resposta: 0,
    explicacao: "A massa atómica relativa faz parte do Tema 1 da 8ª classe."
  },,


  {
    id: 186,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "História da tabela periódica",
    tipo: "Aplicação",
    pergunta: "Döbereiner é associado à:",
    opcoes: ["Lei das tríades", "Lei das oitavas", "Lei de Lavoisier", "Lei dos gases"],
    resposta: 0,
    explicacao: "O material apresenta as tríades de Döbereiner."
  },,


  {
    id: 187,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "História da tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Newlands é associado à:",
    opcoes: ["Lei das oitavas", "Lei das tríades", "Lei de conservação da massa", "Teoria do mol"],
    resposta: 0,
    explicacao: "Newlands organizou elementos e observou repetição das propriedades no oitavo elemento."
  },,


  {
    id: 188,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Mendeleyev é considerado no material:",
    opcoes: ["Pai da tabela periódica", "Pai da Química orgânica", "Descobridor do electrão", "Criador da centrifugação"],
    resposta: 0,
    explicacao: "O material atribui a Mendeleyev um contributo fundamental para a organização da tabela periódica."
  },,


  {
    id: 189,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Tabela periódica",
    tipo: "Aplicação",
    pergunta: "A tabela periódica actual organiza os elementos por ordem crescente de:",
    opcoes: ["Número atómico", "Massa do recipiente", "Volume", "Ponto de ebulição"],
    resposta: 0,
    explicacao: "O material afirma que os elementos actuais são organizados por número atómico crescente."
  },,


  {
    id: 190,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Tabela periódica",
    tipo: "Conhecimento",
    pergunta: "A tabela periódica possui:",
    opcoes: ["18 grupos e 7 períodos", "7 grupos e 18 períodos", "16 grupos e 8 períodos", "10 grupos e 10 períodos"],
    resposta: 0,
    explicacao: "O material apresenta 18 colunas/grupos e 7 linhas/períodos."
  },,


  {
    id: 191,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Tabela periódica",
    tipo: "Conhecimento",
    pergunta: "As colunas verticais da tabela são chamadas:",
    opcoes: ["Grupos ou famílias", "Períodos ou séries", "Isótopos", "Camadas"],
    resposta: 0,
    explicacao: "As colunas verticais são grupos ou famílias."
  },,


  {
    id: 192,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Tabela periódica",
    tipo: "Aplicação",
    pergunta: "As linhas horizontais da tabela são chamadas:",
    opcoes: ["Períodos ou séries", "Grupos", "Iões", "Tríades"],
    resposta: 0,
    explicacao: "As linhas horizontais são períodos ou séries."
  },,


  {
    id: 193,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Periodicidade",
    tipo: "Conhecimento",
    pergunta: "Elementos do mesmo grupo apresentam, em geral:",
    opcoes: ["Propriedades semelhantes e mesmo número de electrões de valência", "Sempre a mesma massa", "Sempre o mesmo número de protões", "A mesma densidade"],
    resposta: 0,
    explicacao: "O material relaciona grupo com propriedades semelhantes e número de electrões de valência."
  },,


  {
    id: 194,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Periodicidade",
    tipo: "Conhecimento",
    pergunta: "Elementos do mesmo período possuem:",
    opcoes: ["O mesmo número de camadas electrónicas", "O mesmo número de protões", "A mesma massa atómica", "A mesma configuração completa"],
    resposta: 0,
    explicacao: "No ensino da tabela periódica, o período está relacionado com o número de camadas electrónicas."
  },,


  {
    id: 195,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Famílias periódicas",
    tipo: "Aplicação",
    pergunta: "Os metais alcalinos pertencem ao:",
    opcoes: ["Grupo 1", "Grupo 2", "Grupo 17", "Grupo 18"],
    resposta: 0,
    explicacao: "O material identifica o grupo 1 como metais alcalinos."
  },,


  {
    id: 196,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Famílias periódicas",
    tipo: "Conhecimento",
    pergunta: "Os metais alcalino-terrosos pertencem ao:",
    opcoes: ["Grupo 2", "Grupo 1", "Grupo 16", "Grupo 18"],
    resposta: 0,
    explicacao: "O material identifica o grupo 2 como metais alcalino-terrosos."
  },,


  {
    id: 197,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Famílias periódicas",
    tipo: "Conhecimento",
    pergunta: "Os halogéneos pertencem ao:",
    opcoes: ["Grupo 17", "Grupo 1", "Grupo 2", "Grupo 18"],
    resposta: 0,
    explicacao: "O material identifica o grupo 17 como halogéneos."
  },,


  {
    id: 198,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Famílias periódicas",
    tipo: "Aplicação",
    pergunta: "Os gases nobres pertencem ao:",
    opcoes: ["Grupo 18", "Grupo 17", "Grupo 2", "Grupo 16"],
    resposta: 0,
    explicacao: "O material identifica o grupo 18 como gases nobres."
  },,


  {
    id: 199,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Moléculas",
    tipo: "Conhecimento",
    pergunta: "As moléculas são constituídas por:",
    opcoes: ["Átomos ligados/associados", "Misturas separadas", "Apenas iões livres", "Somente protões"],
    resposta: 0,
    explicacao: "O tema das moléculas aborda sua constituição por átomos."
  },,


  {
    id: 200,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Moléculas",
    tipo: "Conhecimento",
    pergunta: "Uma molécula de substância elementar contém:",
    opcoes: ["Átomos de um único elemento", "Obrigatoriamente três elementos", "Apenas iões", "Sempre dois elementos diferentes"],
    resposta: 0,
    explicacao: "Substâncias elementares são constituídas por átomos de um único elemento."
  },
];
const bancoQuestoesBloco3 = [

  {
    id: 201,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Moléculas",
    tipo: "Aplicação",
    pergunta: "Uma molécula de substância composta contém:",
    opcoes: ["Átomos de elementos diferentes", "Apenas um tipo de átomo", "Somente electrões", "Nenhum átomo"],
    resposta: 0,
    explicacao: "Substâncias compostas apresentam mais de um elemento na constituição."
  },,


  {
    id: 202,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Ligações covalentes",
    tipo: "Conhecimento",
    pergunta: "A ligação covalente envolve:",
    opcoes: ["Partilha de electrões entre átomos", "Transferência de massa do recipiente", "Filtração", "Separação magnética"],
    resposta: 0,
    explicacao: "O material da 8ª classe estuda ligações covalentes entre átomos."
  },,


  {
    id: 203,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Ligações covalentes",
    tipo: "Conhecimento",
    pergunta: "Uma ligação covalente pode ser:",
    opcoes: ["Polar ou apolar", "Somente metálica", "Somente iónica", "Apenas magnética"],
    resposta: 0,
    explicacao: "O programa inclui ligações covalentes polares e apolares."
  },,


  {
    id: 204,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Ligações covalentes",
    tipo: "Aplicação",
    pergunta: "Uma ligação covalente simples envolve:",
    opcoes: ["Um par de electrões partilhado", "Três pares obrigatoriamente", "Nenhum electrão", "Apenas protões"],
    resposta: 0,
    explicacao: "No modelo escolar, ligação simples corresponde à partilha de um par de electrões."
  },,


  {
    id: 205,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Ligações covalentes",
    tipo: "Conhecimento",
    pergunta: "Uma ligação covalente dupla envolve:",
    opcoes: ["Dois pares de electrões partilhados", "Um electrão", "Três protões", "Nenhum par"],
    resposta: 0,
    explicacao: "Uma ligação dupla corresponde a dois pares de electrões partilhados."
  },,


  {
    id: 206,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Ligações covalentes",
    tipo: "Conhecimento",
    pergunta: "Uma ligação covalente tripla envolve:",
    opcoes: ["Três pares de electrões partilhados", "Um par", "Dois protões", "Nenhum electrão"],
    resposta: 0,
    explicacao: "Uma ligação tripla corresponde a três pares de electrões partilhados."
  },,


  {
    id: 207,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Ligações covalentes",
    tipo: "Aplicação",
    pergunta: "A ligação dativa é estudada como:",
    opcoes: ["Um tipo de ligação covalente", "Um método de separação", "Um estado físico", "Uma família periódica"],
    resposta: 0,
    explicacao: "O programa inclui a ligação dativa no estudo das ligações covalentes."
  },,


  {
    id: 208,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Massa molecular relativa",
    tipo: "Conhecimento",
    pergunta: "A massa molecular relativa é obtida a partir da:",
    opcoes: ["Soma das massas atómicas relativas dos átomos da molécula", "Subtracção dos volumes", "Média das temperaturas", "Soma dos números de períodos"],
    resposta: 0,
    explicacao: "O material define Mr como soma das massas atómicas relativas dos átomos constituintes."
  },,


  {
    id: 209,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Massa molecular relativa",
    tipo: "Conhecimento",
    pergunta: "Para H2O, usando Ar(H)=1 e Ar(O)=16, a massa molecular relativa é:",
    opcoes: ["18", "17", "16", "20"],
    resposta: 0,
    explicacao: "Mr(H2O)=2×1+16=18."
  },,


  {
    id: 210,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Massa molecular relativa",
    tipo: "Aplicação",
    pergunta: "Para CO2, usando Ar(C)=12 e Ar(O)=16, a massa molecular relativa é:",
    opcoes: ["28", "32", "44", "48"],
    resposta: 2,
    explicacao: "Mr(CO2)=12+2×16=44."
  },,


  {
    id: 211,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Lei das tríades",
    tipo: "Conhecimento",
    pergunta: "A média aritmética de 7 e 39 é:",
    opcoes: ["23", "21", "46", "16"],
    resposta: 0,
    explicacao: "(7+39)/2 = 23, valor usado no exemplo da tríade Li-Na-K."
  },,


  {
    id: 212,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Lei das tríades",
    tipo: "Conhecimento",
    pergunta: "Na tríade de Döbereiner Li, Na e K, o elemento central é:",
    opcoes: ["Sódio", "Lítio", "Potássio", "Oxigénio"],
    resposta: 0,
    explicacao: "O exemplo do material apresenta lítio, sódio e potássio, com sódio no centro."
  },,


  {
    id: 213,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Lei das oitavas",
    tipo: "Aplicação",
    pergunta: "A Lei das oitavas de Newlands relacionava a repetição das propriedades ao:",
    opcoes: ["Oitavo elemento", "Segundo elemento", "Décimo sexto elemento", "Primeiro elemento apenas"],
    resposta: 0,
    explicacao: "Newlands observou repetição das propriedades no oitavo elemento."
  },,


  {
    id: 214,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Mendeleyev",
    tipo: "Conhecimento",
    pergunta: "Mendeleyev organizou inicialmente os elementos considerando principalmente:",
    opcoes: ["Massas atómicas e propriedades periódicas", "Volume molar", "Constante de Avogadro", "Ponto de fusão apenas"],
    resposta: 0,
    explicacao: "O material explica que Mendeleyev organizou segundo massas atómicas, enquanto a tabela moderna usa número atómico."
  },,


  {
    id: 215,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Actualmente, segundo o material, são conhecidos:",
    opcoes: ["118 elementos", "18 elementos", "7 elementos", "60 elementos"],
    resposta: 0,
    explicacao: "O material informa que actualmente são conhecidos 118 elementos."
  },,


  {
    id: 216,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Famílias periódicas",
    tipo: "Aplicação",
    pergunta: "Se um elemento está no grupo 17, ele pertence aos:",
    opcoes: ["Halogéneos", "Gases nobres", "Metais alcalinos", "Calcogénios"],
    resposta: 0,
    explicacao: "Grupo 17 é a família dos halogéneos."
  },,


  {
    id: 217,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Famílias periódicas",
    tipo: "Conhecimento",
    pergunta: "Se um elemento está no grupo 18, ele pertence aos:",
    opcoes: ["Gases nobres", "Halogéneos", "Metais alcalinos", "Alcalino-terrosos"],
    resposta: 0,
    explicacao: "Grupo 18 é a família dos gases nobres."
  },,


  {
    id: 218,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Periodicidade",
    tipo: "Conhecimento",
    pergunta: "Se dois elementos estão no mesmo grupo, é razoável esperar:",
    opcoes: ["Comportamento químico semelhante", "Mesmo número atómico", "Mesmo número de massa", "Mesma quantidade de neutrões"],
    resposta: 0,
    explicacao: "O material relaciona elementos do mesmo grupo com propriedades e comportamento químico semelhantes."
  },,


  {
    id: 219,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Periodicidade",
    tipo: "Aplicação",
    pergunta: "Se dois elementos estão no mesmo período, eles têm em comum:",
    opcoes: ["O número de camadas electrónicas", "O número de protões", "A massa atómica", "O símbolo químico"],
    resposta: 0,
    explicacao: "O período relaciona-se ao número de camadas electrónicas."
  },,


  {
    id: 220,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Número atómico",
    tipo: "Conhecimento",
    pergunta: "Um átomo com 11 protões possui número atómico:",
    opcoes: ["11", "22", "10", "12"],
    resposta: 0,
    explicacao: "O número atómico é igual ao número de protões."
  },,


  {
    id: 221,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Número de massa",
    tipo: "Conhecimento",
    pergunta: "Um átomo com 12 protões e 12 neutrões possui número de massa:",
    opcoes: ["12", "24", "0", "144"],
    resposta: 1,
    explicacao: "A = p+n = 12+12 = 24."
  },,


  {
    id: 222,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Número de massa",
    tipo: "Aplicação",
    pergunta: "Um átomo com A=35 e Z=17 possui quantos neutrões?",
    opcoes: ["18", "17", "35", "52"],
    resposta: 0,
    explicacao: "N = A-Z = 35-17 = 18."
  },,


  {
    id: 223,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Estrutura atómica",
    tipo: "Conhecimento",
    pergunta: "Um átomo neutro com Z=8 possui:",
    opcoes: ["8 electrões", "16 electrões", "7 electrões", "0 electrões"],
    resposta: 0,
    explicacao: "Num átomo neutro, número de electrões = número de protões = Z."
  },,


  {
    id: 224,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Configuração electrónica",
    tipo: "Conhecimento",
    pergunta: "Um elemento possui configuração por camadas 2.8.1. Ele apresenta:",
    opcoes: ["1 electrão de valência", "8 electrões de valência", "2 electrões de valência", "11 electrões de valência"],
    resposta: 0,
    explicacao: "A última camada contém 1 electrão."
  },,


  {
    id: 225,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Configuração electrónica",
    tipo: "Aplicação",
    pergunta: "Um elemento com configuração 2.8.7 possui:",
    opcoes: ["7 electrões de valência", "2 electrões de valência", "8 electrões de valência", "17 electrões de valência"],
    resposta: 0,
    explicacao: "A última camada contém 7 electrões."
  },,


  {
    id: 226,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Configuração electrónica",
    tipo: "Conhecimento",
    pergunta: "Um elemento com configuração 2.8.8 possui:",
    opcoes: ["8 electrões na camada de valência", "2 electrões na camada de valência", "18 electrões de valência", "Nenhum electrão"],
    resposta: 0,
    explicacao: "A terceira camada contém 8 electrões."
  },,


  {
    id: 227,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Universitário",
    tema: "Tabela periódica",
    tipo: "Conhecimento",
    pergunta: "Qual sequência representa grupos e períodos correctamente?",
    opcoes: ["Grupo = coluna; período = linha", "Grupo = linha; período = coluna", "Ambos são linhas", "Ambos são colunas"],
    resposta: 0,
    explicacao: "Na tabela periódica, grupos são colunas e períodos são linhas."
  },,


  {
    id: 228,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Básico",
    tema: "Tabela periódica",
    tipo: "Aplicação",
    pergunta: "O estudo dos metais e não-metais pertence ao tema:",
    opcoes: ["Tabela periódica dos elementos", "Quantidade em Química", "Petróleo", "Grupo 16 apenas"],
    resposta: 0,
    explicacao: "O programa da 8ª classe inclui metais e não-metais no tema da tabela periódica."
  },,


  {
    id: 229,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Médio",
    tema: "Raio atómico",
    tipo: "Conhecimento",
    pergunta: "A periodicidade do raio atómico refere-se à variação periódica do:",
    opcoes: ["Tamanho dos átomos", "Número de moléculas", "Volume do laboratório", "Ponto de ebulição da água"],
    resposta: 0,
    explicacao: "O programa aborda a periodicidade do tamanho dos átomos/raio atómico."
  },,


  {
    id: 230,
    disciplina: "Química",
    classe: "8ª",
    nivel: "Avançado",
    tema: "Programa da 8ª classe",
    tipo: "Conhecimento",
    pergunta: "Qual conjunto contém apenas temas da 8ª classe?",
    opcoes: ["Átomos, tabela periódica e moléculas", "Petróleo, grupo 16 e mol", "Misturas, densidade e Lavoisier", "Ácidos, bases e sais"],
    resposta: 0,
    explicacao: "Esses três temas correspondem ao programa apresentado para a 8ª classe."
  },,


  {
    id: 231,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Grupo 16",
    tipo: "Aplicação",
    pergunta: "O grupo 16 da tabela periódica é conhecido como grupo dos:",
    opcoes: ["Calcogénios", "Halogéneos", "Gases nobres", "Metais alcalinos"],
    resposta: 0,
    explicacao: "O material identifica o grupo 16 como calcogénios."
  },,


  {
    id: 232,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "O grupo 16 ocupa a:",
    opcoes: ["Décima sexta coluna/grupo", "Sétima coluna", "Décima oitava coluna", "Segunda coluna"],
    resposta: 0,
    explicacao: "O grupo 16 é a décima sexta coluna da tabela periódica."
  },,


  {
    id: 233,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "Segundo o material, os elementos do grupo 16 têm:",
    opcoes: ["6 electrões de valência", "1 electrão de valência", "7 electrões de valência", "8 electrões de valência"],
    resposta: 0,
    explicacao: "Os elementos do grupo 16 possuem seis electrões de valência."
  },,


  {
    id: 234,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Grupo 16",
    tipo: "Aplicação",
    pergunta: "A tendência indicada para os elementos do grupo 16 é:",
    opcoes: ["Captar 2 electrões", "Perder 6 protões", "Captar 8 protões", "Perder todos os electrões"],
    resposta: 0,
    explicacao: "O material afirma que tendem a captar dois electrões para completar a camada de valência."
  },,


  {
    id: 235,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "Qual conjunto corresponde aos elementos do grupo 16 apresentados no material de 2022?",
    opcoes: ["O, S, Se, Te e Po", "F, Cl, Br, I e At", "Li, Na, K, Rb e Cs", "He, Ne, Ar, Kr e Xe"],
    resposta: 0,
    explicacao: "O material actualizado lista oxigénio, enxofre, selénio, telúrio e polónio."
  },,


  {
    id: 236,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Oxigénio",
    tipo: "Conhecimento",
    pergunta: "O oxigénio é representado pelo símbolo:",
    opcoes: ["O", "Ox", "Og", "On"],
    resposta: 0,
    explicacao: "O símbolo químico do oxigénio é O."
  },,


  {
    id: 237,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Enxofre",
    tipo: "Aplicação",
    pergunta: "O enxofre é representado pelo símbolo:",
    opcoes: ["S", "E", "En", "Sf"],
    resposta: 0,
    explicacao: "O símbolo químico do enxofre é S."
  },,


  {
    id: 238,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "O selénio é representado pelo símbolo:",
    opcoes: ["Se", "S", "Sl", "Sn"],
    resposta: 0,
    explicacao: "O símbolo químico do selénio é Se."
  },,


  {
    id: 239,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "O telúrio é representado pelo símbolo:",
    opcoes: ["Te", "T", "Tl", "Tu"],
    resposta: 0,
    explicacao: "O símbolo químico do telúrio é Te."
  },,


  {
    id: 240,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Grupo 16",
    tipo: "Aplicação",
    pergunta: "O polónio é representado pelo símbolo:",
    opcoes: ["Po", "P", "Pn", "Pol"],
    resposta: 0,
    explicacao: "O símbolo químico do polónio é Po."
  },,


  {
    id: 241,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Configuração electrónica",
    tipo: "Conhecimento",
    pergunta: "A configuração por camadas do oxigénio apresentada é:",
    opcoes: ["2.6", "2.8", "2.8.6", "2.7"],
    resposta: 0,
    explicacao: "O material apresenta O como 2.6."
  },,


  {
    id: 242,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Configuração electrónica",
    tipo: "Conhecimento",
    pergunta: "A configuração por camadas do enxofre apresentada é:",
    opcoes: ["2.8.6", "2.6", "2.8.8", "2.8.18.6"],
    resposta: 0,
    explicacao: "O material apresenta S como 2.8.6."
  },,


  {
    id: 243,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Grupo 16",
    tipo: "Aplicação",
    pergunta: "O oxigénio pertence ao:",
    opcoes: ["Grupo 16", "Grupo 17", "Grupo 18", "Grupo 2"],
    resposta: 0,
    explicacao: "O oxigénio é o primeiro elemento apresentado do grupo 16."
  },,


  {
    id: 244,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Programa da 9ª classe",
    tipo: "Conhecimento",
    pergunta: "O tema do grupo 16 inclui o estudo de:",
    opcoes: ["Oxigénio e enxofre", "Somente hidrogénio", "Apenas carbono", "Somente metais alcalinos"],
    resposta: 0,
    explicacao: "O programa inclui oxigénio e enxofre em detalhe."
  },,


  {
    id: 245,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Enxofre",
    tipo: "Conhecimento",
    pergunta: "A alotropia é estudada especialmente no tema do:",
    opcoes: ["Enxofre", "Sódio", "Hélio", "Carbonato de cálcio"],
    resposta: 0,
    explicacao: "O programa inclui a alotropia no estudo do enxofre."
  },,


  {
    id: 246,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Óxidos de enxofre",
    tipo: "Aplicação",
    pergunta: "Os óxidos de enxofre estão relacionados no programa com:",
    opcoes: ["Chuva ácida", "Peneiração", "Massa molecular da água apenas", "Separação magnética"],
    resposta: 0,
    explicacao: "O material aborda óxidos de enxofre, formação de chuvas ácidas e consequências."
  },,


  {
    id: 247,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Chuva ácida",
    tipo: "Conhecimento",
    pergunta: "Uma consequência ambiental associada à chuva ácida no material é:",
    opcoes: ["Acidificação de lagos", "Aumento obrigatório do pH dos lagos", "Formação de metais alcalinos", "Peneiração do solo"],
    resposta: 0,
    explicacao: "O material menciona acidificação de lagos entre consequências."
  },,


  {
    id: 248,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Chuva ácida",
    tipo: "Conhecimento",
    pergunta: "Outra consequência atribuída à chuva ácida é:",
    opcoes: ["Danos à vegetação", "Produção de oxigénio puro", "Formação de gases nobres", "Aumento da massa atómica"],
    resposta: 0,
    explicacao: "O material cita danos à cobertura vegetal."
  },,


  {
    id: 249,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Chuva ácida",
    tipo: "Aplicação",
    pergunta: "A chuva ácida pode causar corrosão de:",
    opcoes: ["Metais e monumentos", "Somente água", "Apenas gases nobres", "Somente areia"],
    resposta: 0,
    explicacao: "O material apresenta corrosão de metais e danos a monumentos históricos."
  },,


  {
    id: 250,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Oxigénio",
    tipo: "Conhecimento",
    pergunta: "A molécula de oxigénio é representada por:",
    opcoes: ["O₂", "O", "O₃₂", "Ox₂"],
    resposta: 0,
    explicacao: "A molécula de oxigénio é O₂."
  },,


  {
    id: 251,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Oxigénio",
    tipo: "Conhecimento",
    pergunta: "A molécula de O₂ contém:",
    opcoes: ["Dois átomos de oxigénio", "Um átomo de oxigénio", "Três átomos de oxigénio", "Dois elementos diferentes"],
    resposta: 0,
    explicacao: "O índice 2 indica dois átomos de oxigénio na molécula."
  },,


  {
    id: 252,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Oxigénio",
    tipo: "Aplicação",
    pergunta: "O ozono é representado por:",
    opcoes: ["O₃", "O₂", "O", "O₄"],
    resposta: 0,
    explicacao: "A fórmula do ozono é O₃."
  },,


  {
    id: 253,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Oxigénio",
    tipo: "Conhecimento",
    pergunta: "O estudo do oxigénio inclui:",
    opcoes: ["Obtenção no laboratório, propriedades e aplicações", "Somente petróleo", "Somente tabela periódica histórica", "Apenas massa molar"],
    resposta: 0,
    explicacao: "Esses tópicos aparecem no programa do grupo 16."
  },,


  {
    id: 254,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Enxofre",
    tipo: "Conhecimento",
    pergunta: "O estudo do enxofre inclui:",
    opcoes: ["Estrutura, estado natural, alotropia, propriedades e aplicações", "Somente densidade da água", "Apenas isótopos do carbono", "Somente separação de misturas"],
    resposta: 0,
    explicacao: "O programa apresenta esses subtemas para o enxofre."
  },,


  {
    id: 255,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Quantidade em Química",
    tipo: "Aplicação",
    pergunta: "O tema 'Quantidade em Química' inclui:",
    opcoes: ["Mole e constante de Avogadro", "Filtração e decantação", "Halogéneos apenas", "Alotropia somente"],
    resposta: 0,
    explicacao: "Mole e constante de Avogadro fazem parte de Quantidade em Química."
  },,


  {
    id: 256,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Mole",
    tipo: "Conhecimento",
    pergunta: "Um mol corresponde aproximadamente a:",
    opcoes: ["6,02 × 10²³ partículas", "6,02 × 10² partículas", "602 partículas", "6,02 partículas"],
    resposta: 0,
    explicacao: "O material apresenta a constante de Avogadro como cerca de 6,02×10²³."
  },,


  {
    id: 257,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Constante de Avogadro",
    tipo: "Conhecimento",
    pergunta: "A constante de Avogadro é usada para relacionar:",
    opcoes: ["Quantidade de matéria e número de partículas", "Ponto de fusão e cor", "Volume e densidade somente", "Grupo e período"],
    resposta: 0,
    explicacao: "O conceito de mol relaciona grandes quantidades de partículas com quantidade de matéria."
  },,


  {
    id: 258,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Quantidade de matéria",
    tipo: "Aplicação",
    pergunta: "A unidade de quantidade de matéria é:",
    opcoes: ["mol", "g", "L", "cm³"],
    resposta: 0,
    explicacao: "A quantidade de matéria é expressa em mol."
  },,


  {
    id: 259,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Massa molar",
    tipo: "Conhecimento",
    pergunta: "A massa molar relaciona:",
    opcoes: ["Massa da substância e quantidade de matéria", "Pressão e temperatura apenas", "Número atómico e período", "Densidade e cor"],
    resposta: 0,
    explicacao: "O material define massa molar como relação entre massa e quantidade de substância."
  },,


  {
    id: 260,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Massa molar",
    tipo: "Conhecimento",
    pergunta: "A expressão da massa molar é:",
    opcoes: ["M = m/n", "M = n/m", "M = m+n", "M = n-m"],
    resposta: 0,
    explicacao: "A relação apresentada é M=m/n."
  },,


  {
    id: 261,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Massa molar",
    tipo: "Aplicação",
    pergunta: "Se uma amostra tem massa 18 g e quantidade 1 mol, sua massa molar é:",
    opcoes: ["18 g/mol", "9 g/mol", "36 g/mol", "1 g/mol"],
    resposta: 0,
    explicacao: "M=m/n=18/1=18 g/mol."
  },,


  {
    id: 262,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Massa molar",
    tipo: "Conhecimento",
    pergunta: "Se M=20 g/mol e n=2 mol, a massa é:",
    opcoes: ["10 g", "20 g", "40 g", "22 g"],
    resposta: 2,
    explicacao: "m=M×n=20×2=40 g."
  },,


  {
    id: 263,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Mole",
    tipo: "Conhecimento",
    pergunta: "Se m=36 g e M=18 g/mol, a quantidade de matéria é:",
    opcoes: ["2 mol", "18 mol", "54 mol", "0,5 mol"],
    resposta: 0,
    explicacao: "n=m/M=36/18=2 mol."
  },,


  {
    id: 264,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Volume molar",
    tipo: "Aplicação",
    pergunta: "O volume molar de um gás é estudado no tema:",
    opcoes: ["Quantidade em Química", "História da Química", "Separação de misturas", "Grupo 1"],
    resposta: 0,
    explicacao: "O programa da 9ª classe inclui volume molar de um gás."
  },,


  {
    id: 265,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Massa molecular relativa",
    tipo: "Conhecimento",
    pergunta: "Massa molecular relativa é obtida pela:",
    opcoes: ["Soma das massas atómicas relativas dos átomos da molécula", "Multiplicação de volumes", "Subtracção dos números atómicos", "Divisão da temperatura"],
    resposta: 0,
    explicacao: "A definição segue a soma das massas atómicas relativas."
  },,


  {
    id: 266,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Massa molecular relativa",
    tipo: "Conhecimento",
    pergunta: "Para H₂O, com H=1 e O=16, Mr é:",
    opcoes: ["18", "16", "17", "20"],
    resposta: 0,
    explicacao: "2×1+16=18."
  },,


  {
    id: 267,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Massa molecular relativa",
    tipo: "Aplicação",
    pergunta: "Para CO₂, com C=12 e O=16, Mr é:",
    opcoes: ["44", "28", "32", "12"],
    resposta: 0,
    explicacao: "12+2×16=44."
  },,


  {
    id: 268,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Química do carbono",
    tipo: "Conhecimento",
    pergunta: "A Química do carbono inclui o estudo de:",
    opcoes: ["Compostos orgânicos e inorgânicos", "Apenas gases nobres", "Somente grupo 17", "Apenas densidade"],
    resposta: 0,
    explicacao: "O programa inicia a Química do carbono distinguindo compostos orgânicos e inorgânicos."
  },,


  {
    id: 269,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Química do carbono",
    tipo: "Conhecimento",
    pergunta: "Os compostos orgânicos estudados podem ser:",
    opcoes: ["Naturais e sintéticos", "Somente naturais", "Somente metálicos", "Somente gases"],
    resposta: 0,
    explicacao: "O programa inclui compostos orgânicos naturais e sintéticos."
  },,


  {
    id: 270,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Carbono",
    tipo: "Aplicação",
    pergunta: "O átomo central do tema 'Química do carbono' é:",
    opcoes: ["Carbono", "Oxigénio", "Enxofre", "Sódio"],
    resposta: 0,
    explicacao: "O programa possui o subtema 'o átomo de carbono'."
  },,


  {
    id: 271,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Hidrocarbonetos",
    tipo: "Conhecimento",
    pergunta: "Hidrocarbonetos são estudados em:",
    opcoes: ["Química do carbono", "Grupo 16", "Separação de misturas", "História da tabela"],
    resposta: 0,
    explicacao: "O programa inclui hidrocarbonetos na Química do carbono."
  },,


  {
    id: 272,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Petróleo",
    tipo: "Conhecimento",
    pergunta: "O petróleo é estudado em:",
    opcoes: ["Química do carbono", "Somente tabela periódica", "Grupo 18", "Constituição do átomo da 8ª"],
    resposta: 0,
    explicacao: "O petróleo é o quarto subtema da Química do carbono."
  },,


  {
    id: 273,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Hidrocarbonetos",
    tipo: "Aplicação",
    pergunta: "Um hidrocarboneto é constituído por:",
    opcoes: ["Carbono e hidrogénio", "Carbono e oxigénio obrigatoriamente", "Oxigénio e enxofre", "Sódio e cloro"],
    resposta: 0,
    explicacao: "Pelo próprio termo e conteúdo de Química do carbono, hidrocarbonetos são compostos de C e H."
  },,


  {
    id: 274,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Programa da 9ª classe",
    tipo: "Conhecimento",
    pergunta: "Qual conjunto contém apenas temas da 9ª classe?",
    opcoes: ["Grupo 16, quantidade em Química e Química do carbono", "Misturas, densidade e estados físicos", "Tríades, oitavas e átomos apenas", "Ácidos, bases e sais"],
    resposta: 0,
    explicacao: "Esses são os três grandes temas apresentados no programa da 9ª classe."
  },,


  {
    id: 275,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Configuração electrónica",
    tipo: "Conhecimento",
    pergunta: "Um elemento com configuração 2.8.18.6 pertence ao:",
    opcoes: ["Grupo 16", "Grupo 18", "Grupo 6", "Grupo 2"],
    resposta: 0,
    explicacao: "A configuração termina em 6 electrões de valência, correspondendo ao grupo 16 no material."
  },,


  {
    id: 276,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Grupo 16",
    tipo: "Aplicação",
    pergunta: "Se um elemento do grupo 16 capta 2 electrões, ele tende a:",
    opcoes: ["Completar a camada de valência", "Perder todos os protões", "Duplicar o número atómico", "Tornar-se gás nobre fisicamente"],
    resposta: 0,
    explicacao: "A captação de dois electrões é apresentada como tendência para completar a camada de valência."
  },,


  {
    id: 277,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Grupo 16",
    tipo: "Conhecimento",
    pergunta: "A palavra calcogénio é relacionada no material com:",
    opcoes: ["Formadores de cobre", "Formadores de água", "Gases nobres", "Metais alcalinos"],
    resposta: 0,
    explicacao: "O material explica a origem do termo calcogénio como formadores de cobre."
  },,


  {
    id: 278,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Compostos do grupo 16",
    tipo: "Conhecimento",
    pergunta: "Um exemplo de composto citado como sulfureto é:",
    opcoes: ["Cu₂S", "H₂O", "CO₂", "NaCl"],
    resposta: 0,
    explicacao: "Cu₂S é citado no material como sulfureto de cobre."
  },,


  {
    id: 279,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Compostos do grupo 16",
    tipo: "Aplicação",
    pergunta: "O composto CuFeS₂ é citado como:",
    opcoes: ["Sulfureto de ferro e cobre/Calcopirite", "Água", "Óxido de carbono", "Cloreto de sódio"],
    resposta: 0,
    explicacao: "O material cita CuFeS₂ como sulfureto de ferro e cobre (calcopirite)."
  },,


  {
    id: 280,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Óxidos",
    tipo: "Conhecimento",
    pergunta: "A fórmula CuO é um exemplo de:",
    opcoes: ["Óxido de cobre", "Sulfureto de cobre", "Hidrocarboneto", "Gás nobre"],
    resposta: 0,
    explicacao: "O material cita CuO entre compostos formados por elementos do grupo 16."
  },,


  {
    id: 281,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Chuva ácida",
    tipo: "Conhecimento",
    pergunta: "A chuva ácida pode afectar:",
    opcoes: ["Ecossistemas aquáticos e vegetação", "Somente gases nobres", "Apenas o interior dos átomos", "Somente a tabela periódica"],
    resposta: 0,
    explicacao: "O material aborda impactos sobre lagos e vegetação."
  },,


  {
    id: 282,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Chuva ácida",
    tipo: "Aplicação",
    pergunta: "Robert Angus Smith é associado no material à criação do termo:",
    opcoes: ["Chuva ácida", "Mol", "Tabela periódica", "Alotropia"],
    resposta: 0,
    explicacao: "O material cita Robert Angus Smith ao tratar do termo chuva ácida."
  },,


  {
    id: 283,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Constante de Avogadro",
    tipo: "Conhecimento",
    pergunta: "A quantidade 6,02×10²³ é chamada de:",
    opcoes: ["Constante de Avogadro", "Número atómico", "Número de massa", "Massa molar"],
    resposta: 0,
    explicacao: "É a constante/número de Avogadro."
  },,


  {
    id: 284,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Mole",
    tipo: "Conhecimento",
    pergunta: "Em 1 mol de qualquer entidade especificada, há aproximadamente:",
    opcoes: ["6,02×10²³ entidades", "6,02×10² entidades", "6,02 entidades", "602 entidades"],
    resposta: 0,
    explicacao: "O conceito de mol usa a constante de Avogadro."
  },,


  {
    id: 285,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Mole",
    tipo: "Aplicação",
    pergunta: "Se há 2 mol de partículas, usando NA=6,02×10²³, o número de partículas é:",
    opcoes: ["1,204×10²⁴", "3,01×10²³", "6,02×10²³", "12,04×10²³"],
    resposta: 0,
    explicacao: "N = n×NA = 2×6,02×10²³ = 1,204×10²⁴."
  },,


  {
    id: 286,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Mole",
    tipo: "Conhecimento",
    pergunta: "Se uma amostra possui 3,01×10²³ partículas, usando NA=6,02×10²³, ela corresponde a:",
    opcoes: ["0,5 mol", "1 mol", "2 mol", "3 mol"],
    resposta: 0,
    explicacao: "n=N/NA=(3,01×10²³)/(6,02×10²³)=0,5 mol."
  },,


  {
    id: 287,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Mole",
    tipo: "Conhecimento",
    pergunta: "A relação N=n×NA permite calcular:",
    opcoes: ["Número de partículas a partir de mol", "Ponto de fusão", "Raio atómico", "Número de grupos"],
    resposta: 0,
    explicacao: "A relação usa a constante de Avogadro para converter mol em número de partículas."
  },,


  {
    id: 288,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Massa molar",
    tipo: "Aplicação",
    pergunta: "Se M=44 g/mol e n=0,5 mol, a massa é:",
    opcoes: ["22 g", "44 g", "88 g", "0,5 g"],
    resposta: 0,
    explicacao: "m=M×n=44×0,5=22 g."
  },,


  {
    id: 289,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Massa molar",
    tipo: "Conhecimento",
    pergunta: "Se m=22 g e M=44 g/mol, n é:",
    opcoes: ["0,5 mol", "2 mol", "44 mol", "66 mol"],
    resposta: 0,
    explicacao: "n=m/M=22/44=0,5 mol."
  },,


  {
    id: 290,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Programa da 9ª classe",
    tipo: "Conhecimento",
    pergunta: "Qual sequência representa correctamente os três temas principais da 9ª classe?",
    opcoes: ["Grupo 16 → Quantidade em Química → Química do carbono", "Carbono → Misturas → Gases nobres", "Petróleo → Filtração → Átomos", "Grupo 1 → Grupo 2 → Grupo 17"],
    resposta: 0,
    explicacao: "É a sequência apresentada no programa da 9ª classe."
  },,


  {
    id: 291,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Integração de conteúdos",
    tipo: "Aplicação",
    pergunta: "Um estudante calcula Mr de H₂O e depois converte massa em mol. Ele está a aplicar conteúdos de:",
    opcoes: ["Quantidade em Química", "Separação de misturas", "História da Química", "Grupo 17"],
    resposta: 0,
    explicacao: "Mr, massa molar e mol pertencem ao tema Quantidade em Química."
  },,


  {
    id: 292,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Integração de conteúdos",
    tipo: "Conhecimento",
    pergunta: "Um estudante identifica um elemento com 6 electrões de valência e analisa sua tendência de captar dois electrões. O tema é:",
    opcoes: ["Grupo 16", "Petróleo", "Misturas", "Moléculas da 7ª"],
    resposta: 0,
    explicacao: "Essas características são centrais no estudo do grupo 16."
  },,


  {
    id: 293,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Integração de conteúdos",
    tipo: "Conhecimento",
    pergunta: "Um estudante analisa hidrocarbonetos e petróleo. Está a estudar:",
    opcoes: ["Química do carbono", "Grupo 16", "Tabela periódica histórica", "Separação magnética"],
    resposta: 0,
    explicacao: "Hidrocarbonetos e petróleo são subtemas da Química do carbono."
  },,


  {
    id: 294,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Hidrocarbonetos",
    tipo: "Aplicação",
    pergunta: "Se uma molécula contém 2 átomos de C e 6 de H, sua fórmula é:",
    opcoes: ["C₂H₆", "C₆H₂", "CH₈", "C₂H₃"],
    resposta: 0,
    explicacao: "Os índices indicam dois átomos de carbono e seis de hidrogénio."
  },,


  {
    id: 295,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Massa molecular relativa",
    tipo: "Conhecimento",
    pergunta: "Usando Ar(C)=12 e Ar(H)=1, a massa molecular relativa de C₂H₆ é:",
    opcoes: ["30", "24", "18", "14"],
    resposta: 0,
    explicacao: "Mr=2×12+6×1=30."
  },,


  {
    id: 296,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Massa molar",
    tipo: "Conhecimento",
    pergunta: "Se 2 mol de C₂H₆ têm M=30 g/mol, sua massa é:",
    opcoes: ["60 g", "30 g", "15 g", "32 g"],
    resposta: 0,
    explicacao: "m=M×n=30×2=60 g."
  },,


  {
    id: 297,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Médio",
    tema: "Petróleo",
    tipo: "Aplicação",
    pergunta: "O petróleo aparece no programa como parte de:",
    opcoes: ["Química do carbono", "Grupo 16 exclusivamente", "Tabela periódica de Mendeleyev", "Separação de misturas"],
    resposta: 0,
    explicacao: "O petróleo é subtema da Química do carbono."
  },,


  {
    id: 298,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Avançado",
    tema: "Química do carbono",
    tipo: "Conhecimento",
    pergunta: "A distinção entre compostos orgânicos naturais e sintéticos pertence a:",
    opcoes: ["Química do carbono", "Quantidade em Química", "Grupo 16", "Estados físicos"],
    resposta: 0,
    explicacao: "Essa distinção aparece no primeiro subtema da Química do carbono."
  },,


  {
    id: 299,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Universitário",
    tema: "Quantidade em Química",
    tipo: "Conhecimento",
    pergunta: "Qual alternativa contém somente grandezas/conceitos de Quantidade em Química?",
    opcoes: ["Mol, massa molar e constante de Avogadro", "Filtração, densidade e decantação", "Grupo 16, enxofre e oxigénio", "Carbono, petróleo e hidrocarbonetos"],
    resposta: 0,
    explicacao: "Mol, massa molar e Avogadro fazem parte de Quantidade em Química."
  },,


  {
    id: 300,
    disciplina: "Química",
    classe: "9ª",
    nivel: "Básico",
    tema: "Grupo 16",
    tipo: "Aplicação",
    pergunta: "Qual afirmação resume correctamente o conteúdo do grupo 16?",
    opcoes: ["Os elementos têm 6 electrões de valência e tendência de captar 2 electrões", "Todos possuem 1 electrão de valência", "Todos são gases nobres", "Todos são metais alcalinos"],
    resposta: 0,
    explicacao: "O material destaca seis electrões de valência e tendência para captar dois electrões."
  }
];


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
let respostaJaAvaliada = false;

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
// SELECIONAR CLASSE
// ==========================================================

function selecionarClasse(classe) {

    classeAtual = classe;
    nivelAtual = "";

    const questoesClasse = bancoQuestoes.filter(
        questao =>
            questao.disciplina === disciplinaAtual &&
            questao.classe === classe
    );

    document.getElementById("conteudo-disciplina").innerHTML = `
        <h3>
            ${disciplinaAtual} — ${classe} classe
        </h3>

        <p>
            Foram encontradas
            <strong>${questoesClasse.length}</strong>
            questões para esta classe.
        </p>

        <p style="margin-top:15px;">
            Agora escolhe um nível acima para começar.
        </p>
    `;
}


// ==========================================================
// SELECIONAR NÍVEL
// ==========================================================

function selecionarNivel(nivel) {

    nivelAtual = nivel;

    let questoesNivel = bancoQuestoes.filter(
        questao =>
            questao.disciplina === disciplinaAtual &&
            questao.nivel === nivel
    );

    if (classeAtual) {
        questoesNivel = questoesNivel.filter(
            questao => questao.classe === classeAtual
        );
    }

    const classeTexto = classeAtual
        ? ` — ${classeAtual} classe`
        : "";

    document.getElementById("conteudo-disciplina").innerHTML = `

        <h3>
            ${disciplinaAtual}${classeTexto}
            — Nível ${nivel}
        </h3>

        <p>
            Foram encontradas
            <strong>${questoesNivel.length}</strong>
            questões nesta seleção.
        </p>

        <div class="conteudo-opcoes">

            <p>📖 Conteúdos teóricos</p>
            <p>📝 Exercícios</p>
            <p>🎯 Simulados</p>

            <button
                onclick="iniciarSimulado(
                    '${disciplinaAtual}',
                    '${nivel}',
                    '${classeAtual}'
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
    nivel = "",
    classe = ""
) {

    disciplinaAtual = disciplina;
    nivelAtual = nivel;
    classeAtual = classe;

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

    if (classe) {

        bancoFiltrado =
            bancoFiltrado.filter(
                questao =>
                    questao.classe === classe
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
    respostaJaAvaliada = false;


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
                        !simuladoEmAndamento ||
                        respostaJaAvaliada
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

                    avaliarRespostaSelecionada();
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
        indiceQuestao + (respostaJaAvaliada ? 1 : 0);


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
        !respostaJaAvaliada
    ) {

        alert(
            "Escolhe uma resposta primeiro."
        );

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
}


// ==========================================================
// AVALIAR RESPOSTA IMEDIATAMENTE
// ==========================================================

function avaliarRespostaSelecionada() {

    if (
        respostaSelecionada === null ||
        respostaJaAvaliada
    ) {

        return;
    }


    const pergunta =
        perguntasAtuais[
            indiceQuestao
        ];


    const acertou =
        respostaSelecionada ===
        pergunta.resposta;


    if (acertou) {

        pontuacao++;

    }


    respostaJaAvaliada = true;

    mostrarResultadoResposta(
        pergunta,
        acertou
    );


    atualizarProgresso();
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
        opcao => {

            opcao.style.pointerEvents =
                "none";

        }
    );


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
            !acertou
                ? `<p><b>Resposta certa:</b> ${respostaCorretaTexto}</p>`
                : ""
        }

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


    const botao =
        document.getElementById(
            "botao-proxima"
        );


    if (botao) {

        botao.textContent =
            indiceQuestao ===
            perguntasAtuais.length - 1

                ? "Ver resultado ✓"

                : "Próxima questão →";

        botao.disabled = false;
    }
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


    const resultadoAcertos = document.getElementById("resultado-acertos");
    const resultadoErros = document.getElementById("resultado-erros");
    const resultadoTotal = document.getElementById("resultado-total");
    const resultadoDisciplina = document.getElementById("resultado-disciplina");
    const resultadoClasse = document.getElementById("resultado-classe");
    const resultadoNivel = document.getElementById("resultado-nivel");

    if (resultadoAcertos) resultadoAcertos.textContent = pontuacao;
    if (resultadoErros) resultadoErros.textContent = total - pontuacao;
    if (resultadoTotal) resultadoTotal.textContent = total;
    if (resultadoDisciplina) resultadoDisciplina.textContent = disciplinaAtual || "Geral";
    if (resultadoClasse) resultadoClasse.textContent = classeAtual || "Todas";
    if (resultadoNivel) resultadoNivel.textContent = nivelAtual || "Todos";


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
