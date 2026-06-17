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
        "Química Geral Experimental": { "periodo": 2, "requisito": [ "Fundamentos de Química para Engenharia I-B"] },
        "Fundamentos de Química para Engenharia II-A": { "periodo": 2, "requisito": [ "Fundamentos de Química para Engenharia I-B"] },
        "Microbiologia: da Teoria à Prática": { "periodo": 2, "requisito": ["Biologia Celular"] },

        // --- 3º Período ---
        "Fluidos, Ondas e Termodinâmica": { "periodo": 3, "requisito": ["Cálculo I", ""Física I""] },
        "Mecânica": { "periodo": 3, "requisito": ["Geometria Analítica", "Física I"] },
        "Cálculo Vetorial": { "periodo": 3, "requisito": ["Cálculo II"] },
        "Computação Aplicada à Engenharia": { "periodo": 3, "requisito": ["Cálculo II", "Geometria Analítica"] },
        "Balanços de Massa e Energia": { "periodo": 3, "requisito": [] },
        "Química Bioinorgânica": { "periodo": 3, "requisito": ["Fundamentos de Química para Engenharia II-A"] },
        "Química Orgânica Fundamental": { "periodo": 3, "requisito": ["Fundamentos de Química para Engenharia II-A"] },
        "Engenharia Genética Teórica e Prática": { "periodo": 3, "requisito": ["Microbiologia: da Teoria à Prática"] },

        // --- 4º Período ---
        "Equações Diferenciais": { "periodo": 4, "requisito": ["Álgebra Linear", "Cálculo II"] },
        "Introdução ao Eletromagnetismo": { "periodo": 4, "requisito": [] },
        "Laboratório de Eletromagnetismo": { "periodo": 4, "requisito": [] },
        "Termodinâmica Química Aplicada I": { "periodo": 4, "requisito": [] },
        "Fenômenos de Transporte I": { "periodo": 4, "requisito": [] },
        "Bioquímica Experimental I": { "periodo": 4, "requisito": [] },
        "Bioquímica I": { "periodo": 4, "requisito": ["Química Orgânica Fundamental", "Biologia Celular"] },
        "Estrutura e Química de Materiais Lignocelulósicos": { "periodo": 4, "requisito": ["Química Orgânica Fundamental"] },
        "Introdução à Ciência dos Materiais": { "periodo": 4, "requisito": [] },

        // --- 5º Período ---
        "Estatística": { "periodo": 5, "requisito": [] },
        "Eletricidade Aplicada": { "periodo": 5, "requisito": [] },
        "Laboratório de Eletricidade": { "periodo": 5, "requisito": [] },
        "Operações Unitárias I": { "periodo": 5, "requisito": [] },
        "Fenômenos de Transporte II": { "periodo": 5, "requisito": [] },
        "Termodinâmica Química Aplicada II": { "periodo": 5, "requisito": [] },
        "Tecnologia de Conversão de Biomassa Vegetal": { "periodo": 5, "requisito": [] },
        "Bioquímica Experimental II": { "periodo": 5, "requisito": [] },
        "Bioquímica II": { "periodo": 5, "requisito": [] },

        // --- 6º Período ---
        "Operações Unitárias II": { "periodo": 6, "requisito": [] },
        "Fenômenos de Transporte III": { "periodo": 6, "requisito": [] },
        "Engenharia de Segurança do Trabalho e Biossegurança": { "periodo": 6, "requisito": [] },
        "Tecnologia de Biopolímeros": { "periodo": 6, "requisito": [] },
        "Tecnologia de Processos Fermentativos": { "periodo": 6, "requisito": [] },
        "Análise Técnico-Econômica de Bioprocessos": { "periodo": 6, "requisito": [] },
        "Química Analítica Aplicada a Bioprocessos": { "periodo": 6, "requisito": [] },

        // --- 7º Período ---
        "Introdução ao Gerenciamento de Projetos Ambientais": { "periodo": 7, "requisito": [] },
        "Operações Unitárias III": { "periodo": 7, "requisito": [] },
        "Engenharia Bioquímica I": { "periodo": 7, "requisito": [] },
        "Tecnologia de Proteínas": { "periodo": 7, "requisito": [] },
        "Processos Bioquímicos Industriais": { "periodo": 7, "requisito": [] },
        "Genética e Biotecnologia Vegetal": { "periodo": 7, "requisito": [] },
        "Empreendedorismo Tecnológico": { "periodo": 7, "requisito": [] },

        // --- 8º Período ---
        "Laboratório de Engenharia Química III": { "periodo": 8, "requisito": [] },
        "Estatística em Bioprocessos": { "periodo": 8, "requisito": [] },
        "Laboratório de Engenharia Bioquímica": { "periodo": 8, "requisito": [] },
        "Tratamento Biológico de Efluentes": { "periodo": 8, "requisito": [] },
        "Instrumentação e Controle de Bioprocessos": { "periodo": 8, "requisito": [] },
        "Engenharia Bioquímica II": { "periodo": 8, "requisito": [] },

        // --- 9º Período ---
        "Solução de Problemas de Engenharia": { "periodo": 9, "requisito": [] },
        "Modelagem e Simulação de Processos Biotecnológicos": { "periodo": 9, "requisito": [] },
        "Reatores Bioquímicos": { "periodo": 9, "requisito": [] },

        // --- 10º Período ---
        "Estágio Supervisionado": { "periodo": 10, "requisito": [] },
        "Projeto Final de Curso em Engenharia Bioquímica": { "periodo": 10, "requisito": [] }
    }
};
