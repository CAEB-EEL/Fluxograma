const curriculos = {
    "2023": {
        // --- 1º Período ---
        "Cálculo I": { "periodo": 1, "requisito": [] },
        "Leitura e Interpretação de Desenho Técnico": { "periodo": 1, "requisito": [] },
        "Geometria Analítica": { "periodo": 1, "requisito": [] },
        "Introdução à Ciência dos Materiais": { "periodo": 1, "requisito": [] },
        "Fundamentos de Química para Engenharia I-B": { "periodo": 1, "requisito": [] },
        "Introdução à Engenharia Bioquímica": { "periodo": 1, "requisito": [] },
        "Biologia Celular": { "periodo": 1, "requisito": [] },

        // --- 2º Período ---
        "Cálculo II": { "periodo": 2, "requisito": ["Cálculo I", "Geometria Analítica"] },
        "Física I": { "periodo": 2, "requisito": [] },
        "Física Experimental I": { "periodo": 2, "requisito": [] },
        "Álgebra Linear": { "periodo": 2, "requisito": ["Geometria Analítica"] },
        "Química Geral Experimental": { "periodo": 2, "requisito": ["Fundamentos de Química para Engenharia I-B"] },
        "Fundamentos de Química para Engenharia II-A": { "periodo": 2, "requisito": ["Fundamentos de Química para Engenharia I-B"] },
        "Engenharia Genética": { "periodo": 2, "requisito": ["Biologia Celular"] },
        "Microbiologia Experimental": { "periodo": 2, "requisito": ["Microbiologia"] },
        "Microbiologia": { "periodo": 2, "requisito": ["Biologia Celular"] },

        // --- 3º Período ---
        "Física II": { "periodo": 3, "requisito": ["Física I", "Cálculo I"] },
        "Mecânica": { "periodo": 3, "requisito": ["Física I", "Geometria Analítica"] },
        "Cálculo III": { "periodo": 3, "requisito": ["Cálculo II"] },
        "Introdução aos Métodos Numéricos e Computacionais": { "periodo": 3, "requisito": ["Geometria Analítica", "Cálculo II"] },
        "Estatística": { "periodo": 3, "requisito": ["Cálculo II"] },
        "Balanços de Massa e Energia": { "periodo": 3, "requisito": [] },
        "Química Bioinorgânica": { "periodo": 3, "requisito": ["Fundamentos de Química para Engenharia II-A"] },
        "Química Orgânica Fundamental": { "periodo": 3, "requisito": ["Fundamentos de Química para Engenharia II-A"] },

        // --- 4º Período ---
        "Cálculo IV": { "periodo": 4, "requisito": ["Cálculo II", "Álgebra Linear"] },
        "Física Experimental III": { "periodo": 4, "requisito": ["Física Experimental I"] },
        "Física III": { "periodo": 4, "requisito": ["Física II", "Cálculo II"] },
        "Termodinâmica Química Aplicada I": { "periodo": 4, "requisito": ["Balanços de Massa e Energia", "Física II", "Cálculo II"] },
        "Estrutura e Química de Materiais Lignocelulósicos": { "periodo": 4, "requisito": ["Química Orgânica Fundamental"] },
        "Bioquímica Experimental I": { "periodo": 4, "requisito": ["Bioquímica I"] },
        "Bioquímica I": { "periodo": 4, "requisito": ["Biologia Celular", "Química Orgânica Fundamental"] },
        "Gestão de Negócios": { "periodo": 4, "requisito": [] },

        // --- 5º Período ---
        "Eletricidade Aplicada": { "periodo": 5, "requisito": ["Física III"] },
        "Laboratório de Eletricidade": { "periodo": 5, "requisito": ["Física Experimental III"] },
        "Fenômenos de Transporte I": { "periodo": 5, "requisito": ["Mecânica", "Cálculo III"] },
        "Termodinâmica Química Aplicada II": { "periodo": 5, "requisito": ["Termodinâmica Química Aplicada I"] },
        "Tecnologia de Conversão de Biomassa Vegetal": { "periodo": 5, "requisito": ["Estrutura e Química de Materiais Lignocelulósicos"] },
        "Bioquímica Experimental II": { "periodo": 5, "requisito": ["Bioquímica II"] },
        "Bioquímica II": { "periodo": 5, "requisito": ["Bioquímica I"] },
        "Comunicação Científica em Biotecnologia": { "periodo": 5, "requisito": [] },

        // --- 6º Período ---
        "Operações Unitárias I": { "periodo": 6, "requisito": ["Fenômenos de Transporte I"] },
        "Fenômenos de Transporte II": { "periodo": 6, "requisito": ["Fenômenos de Transporte I", "Cálculo IV", "Física II"] },
        "Tecnologia de Processos Fermentativos": { "periodo": 6, "requisito": ["Bioquímica II", "Microbiologia"] },
        "Análise Técnico-Econômica de Bioprocessos": { "periodo": 6, "requisito": ["Balanços de Massa e Energia"] },
        "Engenharia de Segurança no Trabalho e Biossegurança": { "periodo": 6, "requisito": [] },
        "Química Analítica Aplicada a Bioprocessos": { "periodo": 6, "requisito": ["Química Geral Experimental", "Fundamentos de Química para Engenharia II-A", "Bioquímica Experimental I"] },
        "Tecnologia de Biopolímeros": { "periodo": 6, "requisito": ["Química Orgânica Fundamental"] },

        // --- 7º Período ---
        "Introdução ao Gerenciamento de Projetos Ambientais": { "periodo": 7, "requisito": [] },
        "Operações Unitárias II": { "periodo": 7, "requisito": ["Fenômenos de Transporte II"] },
        "Fenômenos de Transporte III": { "periodo": 7, "requisito": ["Fenômenos de Transporte II"] },
        "Engenharia Bioquímica I": { "periodo": 7, "requisito": ["Tecnologia de Processos Fermentativos"] },
        "Tecnologia de Proteínas": { "periodo": 7, "requisito": ["Bioquímica I", "Microbiologia", "Engenharia Genética"] },
        "Genética e Biotecnologia Vegetal": { "periodo": 7, "requisito": ["Engenharia Genética", "Bioquímica II", "Microbiologia"] },
        "Tratamento Biológico de Efluentes": { "periodo": 7, "requisito": ["Microbiologia"] },
        "Instrumentação e Controle de Bioprocessos": { "periodo": 7, "requisito": ["Fenômenos de Transporte II", "Eletricidade Aplicada"] },

        // --- 8º Período ---
        "Laboratório de Engenharia Química III": { "periodo": 8, "requisito": ["Operações Unitárias I", "Operações Unitárias II"] },
        "Operações Unitárias III": { "periodo": 8, "requisito": ["Operações Unitárias II"] },
        "Modelagem e Simulação de Processos Biotecnológicos": { "periodo": 8, "requisito": ["Introdução aos Métodos Numéricos e Computacionais", "Operações Unitárias II"] },
        "Reatores Bioquímicos": { "periodo": 8, "requisito": ["Engenharia Bioquímica I"] },
        "Laboratório de Engenharia Bioquímica": { "periodo": 8, "requisito": ["Engenharia Bioquímica I", "Tecnologia de Proteínas"] },
        "Processos Bioquímicos Industriais": { "periodo": 8, "requisito": ["Operações Unitárias II", "Tecnologia de Processos Fermentativos"] },
        "Engenharia Bioquímica II": { "periodo": 8, "requisito": ["Engenharia Bioquímica I"] },

        // --- 9º Período ---
        "Solução de Problemas de Engenharia": { "periodo": 9, "requisito": [] }, // DEIXEI VAZIO TEMPORARIAMENTE
        "Empreendedorismo Tecnológico": { "periodo": 9, "requisito": ["Análise Técnico-Econômica de Bioprocessos"] },
        "Estatística em Bioprocessos": { "periodo": 9, "requisito": ["Estatística", "Processos Bioquímicos Industriais"] },

        // --- 10º Período ---
        "Estágio Supervisionado": { "periodo": 10, "requisito": [] }, // DEIXEI VAZIO TEMPORARIAMENTE (Ciclo Básico)
        "Projeto Final de Curso em Engenharia Bioquímica": { "periodo": 10, "requisito": ["Introdução ao Gerenciamento de Projetos Ambientais", "Solução de Problemas de Engenharia"] }
    },

    "2024": {
        // Seu ano voltou! Pronto para receber as disciplinas.
    },

    "2025": {
        // Espaço para 2025
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
        "Estágio Supervisionado": { "periodo": 10, "requisito": [] },
        "Projeto Final de Curso em Engenharia Bioquímica": { "periodo": 10, "requisito": ["Solução de Problemas de Engenharia", "Introdução ao Gerenciamento de Projetos Ambientais"] }
    }
};
