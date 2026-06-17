const curriculos = {
    "2022": {
        // Cole as matérias de 2022 aqui depois
    },
    "2023": {
        // Cole as matérias de 2023 aqui depois
    },
    "2025": {
        // Cole as matérias de 2025 aqui depois
    },
    "2026": {
        // --- 1º Período ---
        "Cálculo I": { "periodo": 1, "requisito": [] },
        "Leitura e Interpretação de Desenho Técnico": { "periodo": 1, "requisito": [] },
        "Geometria Analítica": { "periodo": 1, "requisito": [] },
        "Fundamentos de Química para Engenharia I-B": { "periodo": 1, "requisito": [] },
        "Introdução à Engenharia Bioquímica": { "periodo": 1, "requisito": [] },
        "Comunicação Científica em Biotecnologia": { "periodo": 1, "requisito": [] },
        "Biologia Celular": { "periodo": 1, "requisito": [] },

        // --- 2º Período ---
        "Cálculo II": { "periodo": 2, "requisito": ["Cálculo I", "Geometria Analítica"] },
        "Física I": { "periodo": 2, "requisito": [] },
        "Física Experimental I": { "periodo": 2, "requisito": [] },
        "Álgebra Linear": { "periodo": 2, "requisito": ["Geometria Analítica"] },
        "Química Geral Experimental": { "periodo": 2, "requisito": ["Fundamentos de Química para Engenharia I-B"] },
        "Fundamentos de Química para Engenharia II-A": { "periodo": 2, "requisito": ["Fundamentos de Química para Engenharia I-B"] },
        "Microbiologia: da Teoria à Prática": { "periodo": 2, "requisito": ["Biologia Celular"] },

        // --- 3º Período ---
        "Fluidos, Ondas e Termodinâmica": { "periodo": 3, "requisito": ["Cálculo I", "Física I"] },
        "Mecânica": { "periodo": 3, "requisito": ["Geometria Analítica", "Física I"] },
        "Cálculo Vetorial": { "periodo": 3, "requisito": ["Cálculo II"] },
        "Computação Aplicada à Engenharia": { "periodo": 3, "requisito": ["Geometria Analítica", "Cálculo II"] },
        "Balanços de Massa e Energia": { "periodo": 3, "requisito": [] },
        "Química Bioinorgânica": { "periodo": 3, "requisito": ["Fundamentos de Química para Engenharia II-A"] },
        "Química Orgânica Fundamental": { "periodo": 3, "requisito": ["Fundamentos de Química para Engenharia II-A"] },
        "Engenharia Genética Teórica e Prática": { "periodo": 3, "requisito": ["Microbiologia: da Teoria à Prática", "Biologia Celular"] },

        // --- 4º Período ---
        "Equações Diferenciais": { "periodo": 4, "requisito": ["Álgebra Linear", "Cálculo II"] },
        "Introdução ao Eletromagnetismo": { "periodo": 4, "requisito": ["Cálculo II", "Fluidos, Ondas e Termodinâmica"] },
        "Laboratório de Eletromagnetismo": { "periodo": 4, "requisito": ["Física Experimental I"] },
        "Termodinâmica Química Aplicada I": { "periodo": 4, "requisito": ["Balanços de Massa e Energia", "Cálculo II", "Fluidos, Ondas e Termodinâmica"] },
        "Fenômenos de Transporte I": { "periodo": 4, "requisito": ["Mecânica", "Cálculo Vetorial"] },
        "Bioquímica Experimental I": { "periodo": 4, "requisito": ["Bioquímica I"] },
        "Bioquímica I": { "periodo": 4, "requisito": ["Química Orgânica Fundamental", "Biologia Celular"] },
        "Estrutura e Química de Materiais Lignocelulósicos": { "periodo": 4, "requisito": ["Química Orgânica Fundamental"] },
        "Introdução à Ciência dos Materiais": { "periodo": 4, "requisito": [] },

        // --- 5º Período ---
        "Estatística": { "periodo": 5, "requisito": ["Cálculo II"] },
        "Eletricidade Aplicada": { "periodo": 5, "requisito": ["Introdução ao Eletromagnetismo"] },
        "Laboratório de Eletricidade": { "periodo": 5, "requisito": ["Laboratório de Eletromagnetismo"] },
        "Operações Unitárias I": { "periodo": 5, "requisito": ["Fenômenos de Transporte I"] },
        "Fenômenos de Transporte II": { "periodo": 5, "requisito": ["Fenômenos de Transporte I", "Equações Diferenciais", "Fluidos, Ondas e Termodinâmica"] },
        "Termodinâmica Química Aplicada II": { "periodo": 5, "requisito": ["Termodinâmica Química Aplicada I"] },
        "Tecnologia de Conversão de Biomassa Vegetal": { "periodo": 5, "requisito": ["Estrutura e Química de Materiais Lignocelulósicos"] },
        "Bioquímica Experimental II": { "periodo": 5, "requisito": ["Bioquímica II"] },
        "Bioquímica II": { "periodo": 5, "requisito": ["Bioquímica I"] },

        // --- 6º Período ---
        "Operações Unitárias II": { "periodo": 6, "requisito": ["Fenômenos de Transporte II"] },
        "Fenômenos de Transporte III": { "periodo": 6, "requisito": ["Fenômenos de Transporte II"] },
        "Engenharia de Segurança do Trabalho e Biossegurança": { "periodo": 6, "requisito": [] },
        "Tecnologia de Biopolímeros": { "periodo": 6, "requisito": ["Química Orgânica Fundamental"] },
        "Tecnologia de Processos Fermentativos": { "periodo": 6, "requisito": ["Bioquímica II", "Microbiologia: da Teoria à Prática"] },
        "Análise Técnico-Econômica de Bioprocessos": { "periodo": 6, "requisito": ["Balanços de Massa e Energia"] },
        "Química Analítica Aplicada a Bioprocessos": { "periodo": 6, "requisito": ["Química Geral Experimental", "Fundamentos de Química para Engenharia II-A", "Bioquímica Experimental I"] },

        // --- 7º Período ---
        "Introdução ao Gerenciamento de Projetos Ambientais": { "periodo": 7, "requisito": [] },
        "Operações Unitárias III": { "periodo": 7, "requisito": ["Fenômenos de Transporte III"] },
        "Engenharia Bioquímica I": { "periodo": 7, "requisito": ["Tecnologia de Processos Fermentativos"] },
        "Tecnologia de Proteínas": { "periodo": 7, "requisito": ["Bioquímica I", "Microbiologia: da Teoria à Prática", "Engenharia Genética Teórica e Prática"] },
        "Processos Bioquímicos Industriais": { "periodo": 7, "requisito": ["Operações Unitárias II", "Tecnologia de Processos Fermentativos"] },
        "Genética e Biotecnologia Vegetal": { "periodo": 7, "requisito": ["Bioquímica II", "Microbiologia: da Teoria à Prática", "Engenharia Genética Teórica e Prática"] },
        "Empreendedorismo Tecnológico": { "periodo": 7, "requisito": ["Análise Técnico-Econômica de Bioprocessos"] },

        // --- 8º Período ---
        "Laboratório de Engenharia Química III": { "periodo": 8, "requisito": ["Operações Unitárias II", "Operações Unitárias I"] },
        "Estatística em Bioprocessos": { "periodo": 8, "requisito": ["Estatística", "Processos Bioquímicos Industriais"] },
        "Laboratório de Engenharia Bioquímica": { "periodo": 8, "requisito": ["Engenharia Bioquímica I", "Tecnologia de Proteínas"] },
        "Tratamento Biológico de Efluentes": { "periodo": 8, "requisito": ["Microbiologia: da Teoria à Prática"] },
        "Instrumentação e Controle de Bioprocessos": { "periodo": 8, "requisito": ["Fenômenos de Transporte II", "Eletricidade Aplicada"] },
        "Engenharia Bioquímica II": { "periodo": 8, "requisito": ["Engenharia Bioquímica I"] },

        // --- 9º Período ---
        "Solução de Problemas de Engenharia": { "periodo": 9, "requisito": ["Tecnologia de Biopolímeros", "Engenharia Bioquímica I", "Processos Bioquímicos Industriais", "Tecnologia de Proteínas", "Tecnologia de Conversão de Biomassa Vegetal", "Genética e Biotecnologia Vegetal"] },
        "Modelagem e Simulação de Processos Biotecnológicos": { "periodo": 9, "requisito": ["Computação Aplicada à Engenharia", "Operações Unitárias II"] },
        "Reatores Bioquímicos": { "periodo": 9, "requisito": ["Engenharia Bioquímica I"] },

        // --- 10º Período ---
        "Estágio Supervisionado": { "periodo": 10, "requisito": ["Química Geral Experimental", "Fundamentos de Química para Engenharia II-A", "Fundamentos de Química para Engenharia I-B", "Equações Diferenciais", "Laboratório de Eletricidade", "Introdução ao Eletromagnetismo", "Computação Aplicada à Engenharia", "Cálculo I", "Eletricidade Aplicada", "Estatística", "Mecânica", "Geometria Analítica", "Álgebra Linear", "Física Experimental I", "Laboratório de Eletromagnetismo", "Cálculo Vetorial", "Introdução à Ciência dos Materiais", "Cálculo II", "Leitura e Interpretação de Desenho Técnico", "Física I", "Fluidos, Ondas e Termodinâmica"] },
        "Projeto Final de Curso em Engenharia Bioquímica": { "periodo": 10, "requisito": ["Solução de Problemas de Engenharia", "Introdução ao Gerenciamento de Projetos Ambientais"] }
    }
};
