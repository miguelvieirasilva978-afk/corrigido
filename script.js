/* =========================================================
   SMART CITY SINGAPURA
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   01. FUNÇÕES GERAIS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();
    initializeMobileMenu();
    initializeSingaporeFilters();
    initializeSingaporeDetails();
    initializeTechnologyTabs();
    initializeMindMap();
    initializeQuiz();
    initializePoll();
    initializeSearch();
    initializeCityDiagnosis();
    initializeSourceFilters();
    initializeScrollButtons();
    drawMindConnections();

});


/* =========================================================
   02. NAVEGAÇÃO PRINCIPAL
   ========================================================= */

function initializeNavigation() {

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".tab-section");

    navLinks.forEach(button => {

        button.addEventListener("click", () => {

            const tab = button.dataset.tab;

            if (!tab) {
                return;
            }

            openTab(tab);

        });

    });


    function openTab(tabId) {

        sections.forEach(section => {

            section.classList.remove("active");

        });


        navLinks.forEach(button => {

            button.classList.remove("active");

        });


        const target = document.getElementById(tabId);

        if (target) {

            target.classList.add("active");

        }


        const activeButton =
            document.querySelector(
                `.nav-link[data-tab="${tabId}"]`
            );


        if (activeButton) {

            activeButton.classList.add("active");

        }


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        closeMobileMenu();

    }


    window.openTab = openTab;

}


/* =========================================================
   03. MENU MOBILE
   ========================================================= */

function initializeMobileMenu() {

    const menuButton =
        document.querySelector(".mobile-menu");

    const navigation =
        document.querySelector(".navigation");


    if (!menuButton || !navigation) {
        return;
    }


    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen =
            navigation.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    document.addEventListener("click", event => {

        if (
            !navigation.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            closeMobileMenu();

        }

    });


    window.closeMobileMenu = closeMobileMenu;


    function closeMobileMenu() {

        navigation.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}


/* =========================================================
   04. BOTÕES DE SCROLL PARA ABAS
   ========================================================= */

function initializeScrollButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-scroll-tab]"
        );


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const tab =
                button.dataset.scrollTab;

            if (
                typeof window.openTab ===
                "function"
            ) {

                window.openTab(tab);

            }

        });

    });

}


/* =========================================================
   05. FILTROS DE SINGAPURA
   ========================================================= */

function initializeSingaporeFilters() {

    const filters =
        document.querySelectorAll(
            "[data-filter]"
        );

    const cards =
        document.querySelectorAll(
            ".info-card"
        );


    if (!filters.length) {
        return;
    }


    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            const selected =
                filter.dataset.filter;


            filters.forEach(button => {

                button.classList.remove("active");

            });


            filter.classList.add("active");


            cards.forEach(card => {

                const category =
                    card.dataset.category;


                if (
                    selected === "todos" ||
                    category === selected
                ) {

                    card.classList.remove("hidden");

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });

}


/* =========================================================
   06. DETALHES DOS CARDS DE SINGAPURA
   ========================================================= */

function initializeSingaporeDetails() {

    const cards =
        document.querySelectorAll(
            "[data-detail]"
        );

    const detailContainer =
        document.getElementById(
            "detailContent"
        );


    if (!cards.length || !detailContainer) {
        return;
    }


    const details = {

        cultura: {

            title:
                "Mosaico cultural de Singapura",

            subtitle:
                "Uma cidade formada pela convivência entre diferentes comunidades.",

            image:
                "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=85",

            introduction:
                "Singapura é uma sociedade multicultural na qual comunidades de origem chinesa, malaia, indiana e outras populações convivem em um território pequeno e densamente urbanizado. Essa diversidade aparece na arquitetura, na alimentação, nas festas, nos idiomas e nos bairros históricos.",

            importance:
                "A diversidade cultural ajuda a explicar por que o planejamento urbano de Singapura não pode ser entendido apenas como um projeto tecnológico. A cidade também precisa organizar espaços públicos, moradia, transporte e serviços de maneira capaz de atender grupos com diferentes tradições.",

            points: [

                "Chinatown, Little India e Kampong Glam preservam referências culturais distintas.",

                "O inglês possui papel importante na comunicação institucional e educacional.",

                "A política habitacional também influencia a convivência entre diferentes grupos.",

                "A gastronomia é uma das principais expressões da diversidade cultural."

            ],

            lesson:
                "Para cidades brasileiras, a principal lição é que tecnologia e planejamento urbano precisam considerar identidade cultural, diversidade e inclusão.",

            challenge:
                "Uma cidade multicultural precisa equilibrar integração social e preservação das identidades culturais."

        },


        singlish: {

            title:
                "Singlish",

            subtitle:
                "A linguagem cotidiana que mistura influências culturais.",

            image:
                "https://images.unsplash.com/photo-1496939376851-89342e90adcd?auto=format&fit=crop&w=1400&q=85",

            introduction:
                "Singlish é o nome popular dado à variedade informal de inglês utilizada no cotidiano de parte da população de Singapura. Ela recebeu influências de idiomas e variedades linguísticas presentes na sociedade singapuriana.",

            importance:
                "O fenômeno mostra que uma cidade inteligente não é formada somente por algoritmos, sensores e infraestrutura. Comunicação, identidade e cultura também fazem parte da experiência urbana.",

            points: [

                "Possui forte influência de diferentes comunidades linguísticas.",

                "É especialmente associado à comunicação informal.",

                "Não deve ser confundido com o inglês formal utilizado pelo governo.",

                "É um exemplo da interação entre tecnologia, globalização e cultura local."

            ],

            lesson:
                "Projetos digitais devem considerar como as pessoas realmente se comunicam e utilizam os serviços, evitando criar sistemas difíceis de compreender.",

            challenge:
                "Conciliar uma língua franca global com a preservação das características linguísticas locais."

        },


        hawker: {

            title:
                "Hawker Centres",

            subtitle:
                "Alimentação, cultura e espaço público em um mesmo lugar.",

            image:
                "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85",

            introduction:
                "Os hawker centres são espaços coletivos onde diferentes vendedores oferecem alimentos variados. Eles se tornaram uma parte importante da vida cotidiana de Singapura e representam uma combinação entre alimentação, economia local e convivência social.",

            importance:
                "Além de sua dimensão gastronômica, esses espaços mostram como equipamentos urbanos podem desempenhar funções sociais e econômicas simultaneamente.",

            points: [

                "Oferecem refeições variadas em espaços compartilhados.",

                "Ajudam pequenos comerciantes a participar da economia urbana.",

                "Funcionam como pontos de encontro da população.",

                "A cultura hawker recebeu reconhecimento internacional da UNESCO."

            ],

            lesson:
                "Cidades inteligentes também precisam valorizar espaços públicos e atividades econômicas tradicionais.",

            challenge:
                "Modernizar infraestrutura e condições de trabalho sem destruir a identidade cultural desses espaços."

        },


        economia: {

            title:
                "Economia avançada",

            subtitle:
                "Planejamento, comércio internacional e infraestrutura.",

            image:
                "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1400&q=85",

            introduction:
                "A economia de Singapura está fortemente relacionada ao comércio internacional, aos serviços financeiros, à indústria, à tecnologia e à logística. Sua localização estratégica contribuiu para transformar a cidade em um importante centro econômico global.",

            importance:
                "A infraestrutura urbana é diretamente ligada à competitividade econômica. Transporte eficiente, conectividade digital, qualificação profissional e logística integrada reduzem custos e facilitam negócios.",

            points: [

                "Forte integração ao comércio internacional.",

                "Grande importância da atividade portuária.",

                "Presença de setores financeiros e tecnológicos.",

                "Investimento contínuo em infraestrutura e qualificação."

            ],

            lesson:
                "Planejamento urbano pode ser utilizado como instrumento de desenvolvimento econômico, desde que acompanhado por inclusão social.",

            challenge:
                "Manter competitividade econômica sem ampliar desigualdades ou pressionar excessivamente o território."

        },


        porto: {

            title:
                "Porto de Singapura",

            subtitle:
                "Uma das principais plataformas logísticas marítimas do planeta.",

            image:
                "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=85",

            introduction:
                "O porto de Singapura ocupa posição estratégica nas rotas marítimas internacionais. Sua eficiência depende de infraestrutura, automação, logística, sistemas digitais e integração com outros meios de transporte.",

            importance:
                "O porto demonstra como tecnologia pode ser utilizada para coordenar enormes quantidades de informação e movimentação de cargas.",

            points: [

                "Localização estratégica nas rotas marítimas asiáticas.",

                "Uso intensivo de automação e sistemas digitais.",

                "Integração entre logística portuária e infraestrutura terrestre.",

                "Importância para o comércio internacional."

            ],

            lesson:
                "Uma cidade inteligente precisa pensar além das ruas: logística, cadeias de abastecimento e infraestrutura econômica também fazem parte do sistema urbano.",

            challenge:
                "Aumentar eficiência e capacidade mantendo sustentabilidade ambiental e resiliência logística."

        },


        virtual: {

            title:
                "Virtual Singapore",

            subtitle:
                "Um modelo digital tridimensional da cidade.",

            image:
                "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85",

            introduction:
                "Virtual Singapore é um conceito de modelo digital tridimensional utilizado para representar o território urbano e possibilitar análises, simulações e visualizações.",

            importance:
                "Modelos digitais permitem testar cenários antes de determinadas intervenções físicas. Isso pode ajudar pesquisadores, planejadores e gestores a compreender relações entre edifícios, mobilidade, energia, ambiente e população.",

            points: [

                "Representação tridimensional do ambiente urbano.",

                "Possibilidade de simular diferentes cenários.",

                "Integração potencial de dados urbanos.",

                "Apoio ao planejamento e à tomada de decisões."

            ],

            lesson:
                "Gêmeos digitais podem transformar dados urbanos em ferramentas de planejamento mais visual e analítico.",

            challenge:
                "Garantir qualidade, atualização, interoperabilidade e proteção dos dados utilizados nos modelos."

        },


        agricultura: {

            title:
                "Agricultura vertical",

            subtitle:
                "Produção de alimentos utilizando pouco espaço horizontal.",

            image:
                "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1400&q=85",

            introduction:
                "Como Singapura possui território limitado e depende de importações para grande parte de sua alimentação, tecnologias de agricultura urbana e vertical podem contribuir para aumentar a produção local.",

            importance:
                "A agricultura vertical utiliza estruturas em camadas e pode combinar iluminação artificial, sensores, automação, controle de nutrientes e ambientes protegidos.",

            points: [

                "Uso eficiente do espaço urbano.",

                "Possibilidade de produção próxima aos consumidores.",

                "Controle mais preciso de água e nutrientes.",

                "Integração com sensores e automação."

            ],

            lesson:
                "Em cidades densas, sistemas alimentares também precisam ser planejados como parte da infraestrutura urbana.",

            challenge:
                "Custos de energia, investimento inicial e viabilidade econômica continuam sendo fatores importantes."

        },


        supertrees: {

            title:
                "Supertrees",

            subtitle:
                "Arquitetura, vegetação e tecnologia no mesmo espaço.",

            image:
                "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=1400&q=85",

            introduction:
                "Os Supertrees são estruturas verticais presentes no Gardens by the Bay. Além de sua função paisagística e turística, algumas estruturas incorporam tecnologias relacionadas à energia e ao manejo ambiental.",

            importance:
                "Eles representam uma característica importante do modelo de Singapura: combinar infraestrutura, paisagismo, turismo e sustentabilidade em projetos urbanos visualmente marcantes.",

            points: [

                "Estruturas verticais cobertas por vegetação.",

                "Integração com o projeto paisagístico do Gardens by the Bay.",

                "Alguns sistemas incorporam geração de energia solar.",

                "Também ajudam a criar uma identidade visual para a cidade."

            ],

            lesson:
                "Infraestrutura urbana pode cumprir simultaneamente funções ambientais, sociais, econômicas e culturais.",

            challenge:
                "Projetos icônicos precisam ser avaliados também por custo, manutenção e impacto ambiental real."

        },


        newater: {

            title:
                "NEWater",

            subtitle:
                "Reúso avançado da água para aumentar a segurança hídrica.",

            image:
                "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1400&q=85",

            introduction:
                "NEWater é o nome utilizado em Singapura para água produzida a partir de água usada que passa por processos avançados de tratamento e purificação. O programa faz parte da estratégia de segurança hídrica do país.",

            importance:
                "O sistema reduz a dependência de fontes convencionais e mostra como tratamento, tecnologia e planejamento de longo prazo podem ser utilizados para enfrentar a escassez hídrica.",

            points: [

                "Utilização de água previamente usada como matéria-prima.",

                "Processos avançados de tratamento e purificação.",

                "Integração com a estratégia nacional de segurança hídrica.",

                "Uso importante em aplicações industriais e, conforme o sistema, para reforço de reservatórios."

            ],

            lesson:
                "A gestão inteligente da água deve considerar tratamento, reúso, monitoramento, consumo e planejamento de longo prazo.",

            challenge:
                "Tecnologias de reúso exigem infraestrutura, energia, controle rigoroso e confiança pública."

        },


        transporte: {

            title:
                "Mobilidade inteligente",

            subtitle:
                "Transporte público, dados e planejamento urbano integrado.",

            image:
                "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1400&q=85",

            introduction:
                "O sistema de mobilidade de Singapura combina transporte público, planejamento territorial, políticas de uso do automóvel e tecnologias digitais.",

            importance:
                "A mobilidade é um dos pilares de uma cidade inteligente porque influencia tempo de deslocamento, emissões, produtividade, acessibilidade e qualidade de vida.",

            points: [

                "Extensa rede de transporte coletivo.",

                "Integração entre planejamento urbano e transporte.",

                "Uso de dados para gerenciamento da mobilidade.",

                "Tecnologias digitais utilizadas em serviços e infraestrutura."

            ],

            lesson:
                "Uma cidade inteligente não é aquela que possui mais carros autônomos, mas aquela que consegue oferecer deslocamentos eficientes, seguros e acessíveis.",

            challenge:
                "Manter transporte acessível e eficiente diante do crescimento populacional e das mudanças tecnológicas."

        },


        governanca: {

            title:
                "Governo digital",

            subtitle:
                "Serviços públicos conectados ao cidadão.",

            image:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",

            introduction:
                "Singapura desenvolveu uma ampla estratégia de transformação digital do Estado, incluindo identidade digital, pagamentos eletrônicos, serviços públicos online e integração de dados.",

            importance:
                "O governo digital pode reduzir burocracia e facilitar o acesso aos serviços públicos quando os sistemas são projetados de maneira integrada e inclusiva.",

            points: [

                "Serviços públicos digitais.",

                "Identidade digital por meio de sistemas como Singpass.",

                "Uso de dados para melhorar políticas públicas.",

                "Integração crescente entre diferentes serviços."

            ],

            lesson:
                "A transformação digital do governo deve ser acompanhada por segurança, privacidade, transparência e inclusão digital.",

            challenge:
                "Quanto maior a integração dos dados, maior também é a necessidade de governança, segurança e proteção da privacidade."

        }

    };


    cards.forEach(card => {

        const detailId =
            card.dataset.detail;


        const button =
            card.querySelector(
                ".card-link"
            );


        const action =
            () => openSingaporeDetail(
                detailId
            );


        card.addEventListener(
            "click",
            event => {

                if (
                    event.target.closest(
                        ".card-link"
                    )
                ) {
                    return;
                }

                action();

            }
        );


        if (button) {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();

                    action();

                }
            );

        }

    });


    function openSingaporeDetail(detailId) {

        const data =
            details[detailId];


        if (!data) {
            return;
        }


        detailContainer.innerHTML = `

            <div class="detail-header">

                <button
                    class="back-button"
                    id="backToSingapore"
                >
                    ← Voltar para Singapura
                </button>

                <span class="eyebrow">
                    EXPLORAÇÃO DETALHADA
                </span>

                <h2>
                    ${data.title}
                </h2>

                <p>
                    ${data.subtitle}
                </p>

            </div>


            <article class="detail-article">

                <div class="detail-article-image">

                    <img
                        src="${data.image}"
                        alt="${data.title}"
                        loading="lazy"
                    >

                </div>


                <div class="detail-article-text">

                    <h3>
                        O que é?
                    </h3>

                    <p>
                        ${data.introduction}
                    </p>

                    <h3>
                        Por que isso importa?
                    </h3>

                    <p>
                        ${data.importance}
                    </p>

                </div>

            </article>


            <div class="detail-sections">

                <div class="detail-box">

                    <h4>
                        Principais características
                    </h4>

                    <ul>

                        ${data.points.map(
                            point => `
                                <li>
                                    ${point}
                                </li>
                            `
                        ).join("")}

                    </ul>

                </div>


                <div class="detail-box">

                    <h4>
                        O que o Brasil pode aprender?
                    </h4>

                    <p>
                        ${data.lesson}
                    </p>

                </div>


                <div class="detail-box">

                    <h4>
                        Desafios
                    </h4>

                    <p>
                        ${data.challenge}
                    </p>

                </div>


                <div class="detail-box">

                    <h4>
                        Ideia central
                    </h4>

                    <p>
                        Uma cidade inteligente deve combinar
                        tecnologia, planejamento urbano,
                        sustentabilidade e qualidade de vida.
                    </p>

                </div>

            </div>

        `;


        if (
            typeof window.openTab ===
            "function"
        ) {

            window.openTab(
                "detalhes-singapura"
            );

        }


        const backButton =
            document.getElementById(
                "backToSingapore"
            );


        if (backButton) {

            backButton.addEventListener(
                "click",
                () => {

                    window.openTab(
                        "singapura"
                    );

                }
            );

        }

    }

}


/* =========================================================
   07. ABAS DE TECNOLOGIA
   ========================================================= */

function initializeTechnologyTabs() {

    const tabs =
        document.querySelectorAll(
            ".technology-tab"
        );

    const panels =
        document.querySelectorAll(
            ".technology-panel"
        );


    if (!tabs.length) {
        return;
    }


    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target =
                tab.dataset.tech;


            tabs.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            panels.forEach(panel => {

                panel.classList.remove(
                    "active"
                );

            });


            tab.classList.add("active");


            const panel =
                document.querySelector(
                    `.technology-panel[data-tech-panel="${target}"]`
                );


            if (panel) {

                panel.classList.add(
                    "active"
                );

            }

        });

    });

}


/* =========================================================
   08. MAPA MENTAL
   ========================================================= */

function initializeMindMap() {

    const nodes =
        document.querySelectorAll(
            ".mind-node"
        );

    const info =
        document.getElementById(
            "mindInfo"
        );


    if (!nodes.length || !info) {
        return;
    }


    const mindData = {

        mobilidade: {

            title:
                "Mobilidade inteligente",

            text:
                "Envolve transporte público eficiente, gerenciamento de tráfego, dados de mobilidade, acessibilidade e planejamento urbano orientado ao deslocamento das pessoas."

        },


        tecnologia: {

            title:
                "Tecnologia e dados",

            text:
                "Sensores, IoT, inteligência artificial, conectividade e plataformas digitais permitem observar o funcionamento da cidade e apoiar decisões."

        },


        sustentabilidade: {

            title:
                "Sustentabilidade",

            text:
                "Uma cidade inteligente precisa reduzir impactos ambientais por meio de energia eficiente, gestão de resíduos, água, áreas verdes e redução de emissões."

        },


        governanca: {

            title:
                "Governança",

            text:
                "Dados e tecnologia devem apoiar serviços públicos, transparência, planejamento, participação social, segurança e tomada de decisões."

        },


        pessoas: {

            title:
                "Pessoas",

            text:
                "O cidadão deve permanecer no centro. Inclusão digital, acessibilidade, educação, saúde, segurança e qualidade de vida são fundamentais."

        },


        economia: {

            title:
                "Economia",

            text:
                "Tecnologia pode estimular inovação, produtividade, novos negócios, qualificação profissional e competitividade urbana."

        },


        resiliencia: {

            title:
                "Resiliência",

            text:
                "Cidades precisam estar preparadas para eventos climáticos, crises de infraestrutura, problemas sanitários e outras situações de emergência."

        },


        planejamento: {

            title:
                "Planejamento urbano",

            text:
                "Uso do solo, habitação, transporte, infraestrutura e equipamentos públicos devem ser pensados de maneira integrada e baseada em evidências."

        }

    };


    nodes.forEach(node => {

        node.addEventListener("click", () => {

            const key =
                node.dataset.mind;


            const data =
                mindData[key];


            if (!data) {
                return;
            }


            nodes.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            node.classList.add("active");


            info.innerHTML = `

                <h3>
                    ${data.title}
                </h3>

                <p>
                    ${data.text}
                </p>

            `;

        });

    });

}


/* =========================================================
   09. LINHAS DO MAPA MENTAL
   ========================================================= */

function drawMindConnections() {

    const map =
        document.querySelector(
            ".mind-map"
        );

    const svg =
        document.querySelector(
            ".mind-connections"
        );

    const center =
        document.querySelector(
            ".mind-center"
        );

    const nodes =
        document.querySelectorAll(
            ".mind-node"
        );


    if (
        !map ||
        !svg ||
        !center ||
        !nodes.length
    ) {
        return;
    }


    const mapRect =
        map.getBoundingClientRect();

    const centerRect =
        center.getBoundingClientRect();


    const centerX =
        centerRect.left -
        mapRect.left +
        centerRect.width / 2;


    const centerY =
        centerRect.top -
        mapRect.top +
        centerRect.height / 2;


    svg.innerHTML = "";


    nodes.forEach(node => {

        const rect =
            node.getBoundingClientRect();


        const nodeX =
            rect.left -
            mapRect.left +
            rect.width / 2;


        const nodeY =
            rect.top -
            mapRect.top +
            rect.height / 2;


        const line =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line"
            );


        line.setAttribute(
            "x1",
            centerX
        );


        line.setAttribute(
            "y1",
            centerY
        );


        line.setAttribute(
            "x2",
            nodeX
        );


        line.setAttribute(
            "y2",
            nodeY
        );


        svg.appendChild(line);

    });

}


window.addEventListener(
    "resize",
    drawMindConnections
);


/* =========================================================
   10. QUIZ
   ========================================================= */

function initializeQuiz() {

    const container =
        document.getElementById(
            "quizQuestions"
        );

    const result =
        document.getElementById(
            "quizResult"
        );

    const progressText =
        document.getElementById(
            "quizQuestionNumber"
        );

    const progressFill =
        document.getElementById(
            "quizProgressBar"
        );

    const scoreDisplay =
        document.getElementById(
            "quizScore"
        );


    if (!container) {
        return;
    }


    const questions = [

        {
            category: "Conceito",

            question:
                "Qual característica melhor define uma cidade inteligente?",

            options: [

                "Possuir muitos prédios tecnológicos",

                "Usar tecnologia e dados para melhorar a vida urbana",

                "Ter somente transporte autônomo",

                "Eliminar completamente o trabalho humano"

            ],

            correct: 1,

            explanation:
                "Cidade inteligente é um conceito mais amplo que tecnologia: envolve planejamento, sustentabilidade, serviços públicos, participação e qualidade de vida."

        },


        {
            category: "Singapura",

            question:
                "Em que ano o programa Smart Nation foi lançado oficialmente?",

            options: [

                "2005",

                "2010",

                "2014",

                "2022"

            ],

            correct: 2,

            explanation:
                "A iniciativa Smart Nation foi lançada por Singapura em 2014."

        },


        {
            category: "Mobilidade",

            question:
                "Por que o transporte público é importante para uma cidade inteligente?",

            options: [

                "Porque elimina qualquer necessidade de planejamento",

                "Porque permite deslocamentos eficientes e reduz a dependência do automóvel",

                "Porque substitui todos os espaços públicos",

                "Porque impede o crescimento urbano"

            ],

            correct: 1,

            explanation:
                "Mobilidade inteligente busca deslocamentos eficientes, seguros, acessíveis e sustentáveis."

        },


        {
            category: "Água",

            question:
                "O que é o NEWater?",

            options: [

                "Uma rede de metrô",

                "Um sistema de inteligência artificial",

                "Água produzida por processos avançados de tratamento e reúso",

                "Um aplicativo de transporte"

            ],

            correct: 2,

            explanation:
                "NEWater é parte da estratégia de segurança hídrica de Singapura e utiliza tratamento avançado de água."

        },


        {
            category: "Tecnologia",

            question:
                "Qual tecnologia permite conectar sensores e equipamentos à internet?",

            options: [

                "IoT",

                "GPS analógico",

                "Impressão 3D",

                "Fibra óptica passiva"

            ],

            correct: 0,

            explanation:
                "IoT significa Internet das Coisas e envolve objetos e sensores conectados capazes de coletar e transmitir dados."

        },


        {
            category: "Dados",

            question:
                "Qual é uma vantagem de utilizar dados urbanos?",

            options: [

                "Substituir todas as decisões humanas",

                "Apoiar decisões com evidências sobre o funcionamento da cidade",

                "Eliminar a necessidade de leis",

                "Garantir que todos os problemas desapareçam"

            ],

            correct: 1,

            explanation:
                "Dados podem revelar padrões e apoiar decisões, mas não eliminam a necessidade de planejamento, participação e avaliação humana."

        },


        {
            category: "Cultura",

            question:
                "O que os hawker centres representam em Singapura?",

            options: [

                "Somente centros comerciais",

                "Espaços de alimentação e convivência social",

                "Estações de metrô",

                "Centros de pesquisa espacial"

            ],

            correct: 1,

            explanation:
                "Hawker centres são importantes espaços de alimentação, comércio e convivência social."

        },


        {
            category: "Ambiente",

            question:
                "Qual é uma possível vantagem da agricultura vertical?",

            options: [

                "Exigir grandes áreas horizontais",

                "Aumentar a distância entre produção e consumidores",

                "Utilizar o espaço vertical de forma eficiente",

                "Eliminar completamente o consumo de energia"

            ],

            correct: 2,

            explanation:
                "A agricultura vertical permite utilizar camadas e ambientes controlados, algo especialmente interessante em territórios urbanos densos."

        },


        {
            category: "Planejamento",

            question:
                "O que é um gêmeo digital urbano?",

            options: [

                "Uma segunda cidade construída fisicamente",

                "Uma representação digital de elementos e processos urbanos",

                "Um sistema exclusivamente de segurança",

                "Um mapa turístico"

            ],

            correct: 1,

            explanation:
                "Gêmeos digitais podem representar elementos físicos e dados de uma cidade para análise e simulação."

        },


        {
            category: "Governança",

            question:
                "Por que a privacidade é importante em uma cidade baseada em dados?",

            options: [

                "Porque dados nunca devem ser utilizados",

                "Porque informações pessoais precisam ser protegidas contra usos indevidos",

                "Porque impede a inovação",

                "Porque elimina serviços digitais"

            ],

            correct: 1,

            explanation:
                "Quanto maior o uso de dados, maior a importância de segurança, governança e proteção da privacidade."

        },


        {
            category: "Energia",

            question:
                "O que caracteriza uma Smart Grid?",

            options: [

                "Uma rede elétrica sem sensores",

                "Uma rede que utiliza tecnologias e dados para melhorar o gerenciamento da energia",

                "Uma rede exclusivamente subterrânea",

                "Uma rede que funciona sem eletricidade"

            ],

            correct: 1,

            explanation:
                "Smart Grids utilizam comunicação, automação e dados para melhorar monitoramento, eficiência e gestão da rede elétrica."

        },


        {
            category: "Supertrees",

            question:
                "Os Supertrees estão associados principalmente a qual local?",

            options: [

                "Gardens by the Bay",

                "Porto de Singapura",

                "Aeroporto de Changi",

                "Universidade Nacional"

            ],

            correct: 0,

            explanation:
                "Os Supertrees são uma das atrações e estruturas características do Gardens by the Bay."

        },


        {
            category: "Governo digital",

            question:
                "Qual é uma característica importante de serviços públicos digitais?",

            options: [

                "Precisam funcionar apenas presencialmente",

                "Devem facilitar o acesso aos serviços mantendo segurança e inclusão",

                "Devem coletar todos os dados possíveis",

                "Devem impedir a participação dos cidadãos"

            ],

            correct: 1,

            explanation:
                "Digitalização pode simplificar serviços, mas precisa considerar acessibilidade, segurança, privacidade e inclusão."

        },


        {
            category: "Brasil",

            question:
                "Qual documento brasileiro apresenta diretrizes para cidades inteligentes?",

            options: [

                "Carta Brasileira para Cidades Inteligentes",

                "Carta de Paris",

                "Código Marítimo de Singapura",

                "Tratado do Pacífico"

            ],

            correct: 0,

            explanation:
                "A Carta Brasileira para Cidades Inteligentes apresenta princípios e recomendações relacionados à transformação digital sustentável das cidades brasileiras."

        },


        {
            category: "Pensamento crítico",

            question:
                "Qual afirmação é mais adequada sobre Singapura como modelo de cidade inteligente?",

            options: [

                "Todas as soluções podem ser copiadas diretamente por qualquer cidade",

                "Tecnologia resolve automaticamente os problemas sociais",

                "As soluções devem ser estudadas e adaptadas ao contexto de cada cidade",

                "Cidades brasileiras não podem aplicar nenhuma solução tecnológica"

            ],

            correct: 2,

            explanation:
                "Singapura oferece casos interessantes, mas políticas urbanas dependem de contexto, escala, recursos, cultura, legislação e necessidades locais."

        }

    ];


    let currentQuestion = 0;

    let score = 0;

    let answered = false;


    function renderQuestion() {

        const question =
            questions[currentQuestion];


        answered = false;


        if (progressText) {

            progressText.textContent =
                `Questão ${currentQuestion + 1} de ${questions.length}`;

        }

        if (scoreDisplay) {
            scoreDisplay.textContent =
                `Pontuação: ${score}`;
        }


        if (progressFill) {

            const percentage =
                (
                    currentQuestion /
                    questions.length
                ) * 100;

            progressFill.style.width =
                `${percentage}%`;

        }


        container.innerHTML = `

            <div class="quiz-card">

                <div class="quiz-category">
                    ${question.category}
                </div>

                <h3>
                    ${question.question}
                </h3>

                <div class="quiz-options">

                    ${question.options.map(
                        (option, index) => `

                            <button
                                class="quiz-option"
                                data-answer="${index}"
                            >
                                ${option}
                            </button>

                        `
                    ).join("")}

                </div>

                <div
                    class="quiz-explanation hidden"
                    id="quizExplanation"
                ></div>

                <button
                    class="primary-button quiz-next hidden"
                    id="quizNext"
                >
                    ${
                        currentQuestion ===
                        questions.length - 1
                            ? "Ver resultado"
                            : "Próxima questão →"
                    }
                </button>

            </div>

        `;


        const options =
            container.querySelectorAll(
                ".quiz-option"
            );


        options.forEach(option => {

            option.addEventListener(
                "click",
                () => {

                    if (answered) {
                        return;
                    }


                    answered = true;


                    const selected =
                        Number(
                            option.dataset.answer
                        );


                    if (
                        selected ===
                        question.correct
                    ) {

                        score++;

                        if (scoreDisplay) {
                            scoreDisplay.textContent =
                                `Pontuação: ${score}`;
                        }

                        option.classList.add(
                            "correct"
                        );

                    } else {

                        option.classList.add(
                            "incorrect"
                        );


                        options[
                            question.correct
                        ].classList.add(
                            "correct"
                        );

                    }


                    options.forEach(
                        button => {

                            button.disabled =
                                true;

                        }
                    );


                    const explanation =
                        document.getElementById(
                            "quizExplanation"
                        );


                    if (explanation) {

                        explanation.innerHTML = `

                            <strong>
                                ${
                                    selected ===
                                    question.correct
                                        ? "✓ Resposta correta!"
                                        : "✗ Resposta incorreta"
                                }
                            </strong>

                            ${question.explanation}

                            <span class="quiz-source">
                                Fonte de referência:
                                Smart Nation Singapore /
                                Carta Brasileira para Cidades Inteligentes
                            </span>

                        `;

                        explanation.classList.remove(
                            "hidden"
                        );

                    }


                    const nextButton =
                        document.getElementById(
                            "quizNext"
                        );


                    if (nextButton) {

                        nextButton.classList.remove(
                            "hidden"
                        );


                        nextButton.addEventListener(
                            "click",
                            nextQuestion
                        );

                    }

                }
            );

        });

    }


    function nextQuestion() {

        currentQuestion++;


        if (
            currentQuestion >=
            questions.length
        ) {

            showQuizResult();

            return;

        }


        renderQuestion();

    }


    function showQuizResult() {

        container.innerHTML = "";

        progressFill.style.width = "100%";

        progressText.textContent =
            "Quiz concluído";


        if (!result) {
            return;
        }


        const percentage =
            Math.round(
                (
                    score /
                    questions.length
                ) * 100
            );


        let message;


        if (percentage >= 90) {

            message =
                "Excelente! Você demonstra domínio dos principais conceitos de cidades inteligentes.";

        } else if (percentage >= 70) {

            message =
                "Muito bom! Você já compreende boa parte dos conceitos e das soluções apresentadas.";

        } else if (percentage >= 50) {

            message =
                "Bom começo! Vale revisar os conceitos de tecnologia, sustentabilidade e governança.";

        } else {

            message =
                "Você pode melhorar. Use as seções de Singapura, Tecnologias e Fontes para revisar o conteúdo.";

        }


        result.innerHTML = `

            <div class="quiz-result">

                <h3>
                    Resultado do quiz
                </h3>

                <div class="quiz-final-score">
                    ${score}/${questions.length}
                </div>

                <p>
                    ${percentage}% de acerto.
                </p>

                <p style="margin-top: 12px;">
                    ${message}
                </p>

                <button
                    class="primary-button"
                    id="restartQuiz"
                    style="margin-top: 25px;"
                >
                    Refazer quiz
                </button>

            </div>

        `;


        result.classList.remove(
            "hidden"
        );


        const restart =
            document.getElementById(
                "restartQuiz"
            );


        if (restart) {

            restart.addEventListener(
                "click",
                () => {

                    currentQuestion = 0;

                    score = 0;

                    result.classList.add(
                        "hidden"
                    );

                    renderQuestion();

                }
            );

        }

    }


    renderQuestion();

}


/* =========================================================
   11. ENQUETE
   ========================================================= */

function initializePoll() {

    const buttons =
        document.querySelectorAll(
            "[data-poll]"
        );

    const result =
        document.querySelector(
            ".poll-result"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(
                    item => {

                        item.disabled =
                            true;

                    }
                );


                const answer =
                    button.dataset.poll;


                if (result) {

                    result.textContent =
                        `Você respondeu: ${answer}`;

                    result.style.position =
                        "static";

                    result.style.opacity =
                        "1";

                    result.style.pointerEvents =
                        "auto";

                }

            }
        );

    });

}


/* =========================================================
   12. PESQUISA
   ========================================================= */

function initializeSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    const results =
        document.getElementById(
            "searchResults"
        );

    const clear =
        document.querySelector(
            ".clear-search"
        );


    if (!input || !results) {
        return;
    }


    const searchData = [

        {
            title: "Mosaico cultural",

            keywords:
                "cultura singapura china india malai bairros",

            tab: "singapura",

            detail: "cultura"
        },


        {
            title: "Singlish",

            keywords:
                "idioma inglês linguagem língua",

            tab: "singapura",

            detail: "singlish"
        },


        {
            title: "Hawker Centres",

            keywords:
                "comida gastronomia alimentação cultura",

            tab: "singapura",

            detail: "hawker"
        },


        {
            title: "Economia avançada",

            keywords:
                "economia comércio indústria tecnologia",

            tab: "singapura",

            detail: "economia"
        },


        {
            title: "Porto de Singapura",

            keywords:
                "porto logística navio comércio marítimo",

            tab: "singapura",

            detail: "porto"
        },


        {
            title: "Virtual Singapore",

            keywords:
                "gêmeo digital modelo 3d digital twin",

            tab: "singapura",

            detail: "virtual"
        },


        {
            title: "Agricultura vertical",

            keywords:
                "agricultura alimentos fazenda vertical",

            tab: "singapura",

            detail: "agricultura"
        },


        {
            title: "Supertrees",

            keywords:
                "gardens bay árvores sustentabilidade",

            tab: "singapura",

            detail: "supertrees"
        },


        {
            title: "NEWater",

            keywords:
                "água reúso tratamento sustentabilidade",

            tab: "singapura",

            detail: "newater"
        },


        {
            title: "Mobilidade inteligente",

            keywords:
                "metrô transporte trânsito ônibus mobilidade",

            tab: "tecnologias",

            tech: "mobilidade"
        },


        {
            title: "Internet das Coisas",

            keywords:
                "iot sensores dispositivos conectados",

            tab: "tecnologias",

            tech: "iot"
        },


        {
            title: "Inteligência Artificial e dados",

            keywords:
                "ia inteligência artificial dados algoritmos",

            tab: "tecnologias",

            tech: "ia"
        },


        {
            title: "Smart Grid",

            keywords:
                "energia eletricidade rede inteligente",

            tab: "tecnologias",

            tech: "energia"
        },


        {
            title: "NEWater e gestão hídrica",

            keywords:
                "água sensores consumo tratamento",

            tab: "tecnologias",

            tech: "agua"
        },


        {
            title: "Digital Twin",

            keywords:
                "virtual singapore gêmeo digital simulação",

            tab: "tecnologias",

            tech: "digital"
        },


        {
            title: "Governo digital",

            keywords:
                "governo serviços públicos singpass digital",

            tab: "tecnologias",

            tech: "governo"
        },


        {
            title: "Mapa mental",

            keywords:
                "mapa conceitos cidade inteligente",

            tab: "mapa"
        },


        {
            title: "Quiz",

            keywords:
                "teste perguntas conhecimento",

            tab: "quiz"
        },


        {
            title: "Diagnóstico da cidade",

            keywords:
                "teste cidade avaliação diagnóstico planejamento",

            tab: "teste-cidade"
        },


        {
            title: "Fontes brasileiras",

            keywords:
                "brasil carta cidades inteligentes governo estudos",

            tab: "fontes"
        }

    ];


    function performSearch() {

        const query =
            input.value
                .trim()
                .toLowerCase();


        results.innerHTML = "";


        if (!query) {

            results.classList.remove(
                "visible",
                "active"
            );

            return;

        }


        const matches =
            searchData.filter(item => {

                const searchable =
                    `${item.title} ${item.keywords}`
                        .toLowerCase();

                return searchable.includes(
                    query
                );

            });


        if (!matches.length) {

            results.innerHTML = `

                <div class="search-result">

                    <strong>
                        Nenhum resultado encontrado
                    </strong>

                    <span>
                        Tente outro termo.
                    </span>

                </div>

            `;

        } else {

            matches
                .slice(0, 8)
                .forEach(item => {

                    const element =
                        document.createElement(
                            "button"
                        );


                    element.className =
                        "search-result";


                    element.innerHTML = `

                        <strong>
                            ${item.title}
                        </strong>

                        <span>
                            Abrir conteúdo →
                        </span>

                    `;


                    element.addEventListener(
                        "click",
                        () => {

                            if (
                                typeof window.openTab ===
                                "function"
                            ) {

                                window.openTab(
                                    item.tab
                                );

                            }


                            if (
                                item.detail &&
                                typeof window.openTab ===
                                "function"
                            ) {

                                setTimeout(
                                    () => {

                                        const card =
                                            document.querySelector(
                                                `[data-detail="${item.detail}"]`
                                            );

                                        if (card) {

                                            const link =
                                                card.querySelector(
                                                    ".card-link"
                                                );

                                            if (link) {

                                                link.click();

                                            }

                                        }

                                    },
                                    300
                                );

                            }


                            input.value = "";

                            results.classList.remove(
                                "visible",
                                "active"
                            );

                        }
                    );


                    results.appendChild(
                        element
                    );

                });

        }


        results.classList.add(
            "visible",
            "active"
        );

    }


    input.addEventListener(
        "input",
        performSearch
    );


    if (clear) {

        clear.addEventListener(
            "click",
            () => {

                input.value = "";

                results.innerHTML = "";

                results.classList.remove(
                    "visible",
                    "active"
                );

                input.focus();

            }
        );

    }


    document.addEventListener(
        "click",
        event => {

            if (
                !results.contains(
                    event.target
                ) &&
                !input.contains(
                    event.target
                )
            ) {

                results.classList.remove(
                    "visible",
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   13. DIAGNÓSTICO DA CIDADE
   ========================================================= */

function initializeCityDiagnosis() {

    const questionsContainer = document.getElementById("cityQuestions");
    const startButton = document.getElementById("startCityTest");
    const cityNameInput = document.getElementById("cityName");
    const intro = document.getElementById("cityIntro");
    const result = document.getElementById("cityResult");

    if (!questionsContainer || !startButton || !cityNameInput || !intro || !result) {
        return;
    }

    const cityQuestions = [
        { dimension: "Mobilidade", question: "Sua cidade possui transporte público frequente e acessível?" },
        { dimension: "Mobilidade", question: "Existem ciclovias, calçadas adequadas ou outras alternativas ao automóvel?" },
        { dimension: "Sustentabilidade", question: "A cidade possui áreas verdes preservadas ou ampliadas?" },
        { dimension: "Sustentabilidade", question: "Existem políticas para reduzir emissões e impactos ambientais?" },
        { dimension: "Água", question: "Existe monitoramento eficiente do consumo e das perdas de água?" },
        { dimension: "Água", question: "Há iniciativas de reúso, aproveitamento de água da chuva ou tratamento avançado?" },
        { dimension: "Energia", question: "Prédios públicos e infraestrutura utilizam medidas de eficiência energética?" },
        { dimension: "Energia", question: "A cidade possui iniciativas relacionadas a energia renovável ou redes inteligentes?" },
        { dimension: "Transformação digital", question: "Os cidadãos conseguem acessar serviços públicos importantes pela internet?" },
        { dimension: "Transformação digital", question: "A prefeitura utiliza dados e sistemas digitais para acompanhar problemas urbanos?" },
        { dimension: "Governança", question: "Existem canais digitais ou presenciais para participação da população?" },
        { dimension: "Governança", question: "Dados e informações públicas relevantes são disponibilizados de forma transparente?" },
        { dimension: "Inclusão e serviços", question: "Serviços urbanos são planejados considerando pessoas com deficiência e diferentes necessidades?" },
        { dimension: "Inclusão e serviços", question: "A cidade possui políticas para reduzir desigualdades no acesso aos serviços?" },
        { dimension: "Resiliência", question: "Existem planos para enfrentar enchentes, secas, ondas de calor ou outros riscos?" },
        { dimension: "Resiliência", question: "A infraestrutura urbana possui mecanismos de monitoramento e resposta a emergências?" },
        { dimension: "Inovação", question: "Existem programas para estimular inovação, pesquisa ou empreendedorismo local?" },
        { dimension: "Inovação", question: "A cidade realiza projetos-piloto ou experimentos antes de ampliar novas soluções?" }
    ];

    const answers = new Array(cityQuestions.length).fill(null);
    let finished = false;

    const dimensions = {};
    cityQuestions.forEach((item, index) => {
        if (!dimensions[item.dimension]) dimensions[item.dimension] = [];
        dimensions[item.dimension].push(index);
    });

    const escapeHtml = value => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    function updateCityProgress() {
        const answered = answers.filter(answer => answer !== null).length;
        const percentage = Math.round((answered / cityQuestions.length) * 100);
        const progress = document.getElementById("cityTestProgress");
        const text = document.getElementById("cityTestProgressText");
        const submit = document.getElementById("submitCityTest");

        if (progress) progress.style.width = `${percentage}%`;
        if (text) text.textContent = `${answered} de ${cityQuestions.length} respondidas`;
        if (submit) {
            submit.disabled = answered !== cityQuestions.length;
            submit.classList.toggle("ready", answered === cityQuestions.length);
        }
    }

    function renderCityQuestions() {
        questionsContainer.innerHTML = `
            <div class="city-progress-wrap">
                <div class="city-progress-head">
                    <span>PROGRESSO DO DIAGNÓSTICO</span>
                    <strong id="cityTestProgressText">0 de ${cityQuestions.length} respondidas</strong>
                </div>
                <div class="progress-bar city-progress-bar">
                    <div id="cityTestProgress" class="progress-fill"></div>
                </div>
            </div>
        `;

        cityQuestions.forEach((question, index) => {
            const article = document.createElement("article");
            article.className = "city-question";
            article.dataset.index = index;
            article.innerHTML = `
                <div class="city-question-top">
                    <span class="question-number">${String(index + 1).padStart(2, "0")}</span>
                    <span class="category">${escapeHtml(question.dimension)}</span>
                    <span class="answered-label">✓ Respondida</span>
                </div>
                <h3>${escapeHtml(question.question)}</h3>
                <div class="city-options">
                    <button type="button" data-answer="true">✓ Sim</button>
                    <button type="button" data-answer="false">✕ Não</button>
                </div>
            `;
            questionsContainer.appendChild(article);
        });

        const submit = document.createElement("button");
        submit.type = "button";
        submit.id = "submitCityTest";
        submit.className = "primary-button city-submit";
        submit.disabled = true;
        submit.textContent = "Responda todas as perguntas";
        questionsContainer.appendChild(submit);

        questionsContainer.querySelectorAll(".city-question").forEach((card, index) => {
            card.querySelectorAll(".city-options button").forEach(button => {
                button.addEventListener("click", () => {
                    answers[index] = button.dataset.answer === "true";
                    card.classList.add("answered");
                    card.querySelectorAll(".city-options button").forEach(item => {
                        item.classList.remove("selected-yes", "selected-no");
                    });
                    button.classList.add(answers[index] ? "selected-yes" : "selected-no");
                    updateCityProgress();

                    const answered = answers.filter(answer => answer !== null).length;
                    if (answered === cityQuestions.length) {
                        submit.disabled = false;
                        submit.classList.add("ready");
                        submit.textContent = "Gerar diagnóstico →";
                        setTimeout(calculateDiagnosis, 450);
                    }
                });
            });
        });

        submit.addEventListener("click", calculateDiagnosis);
        updateCityProgress();
    }

    function startTest() {
        const name = cityNameInput.value.trim();
        if (!name) {
            cityNameInput.focus();
            cityNameInput.classList.add("input-error");
            setTimeout(() => cityNameInput.classList.remove("input-error"), 1200);
            return;
        }

        cityNameInput.classList.remove("input-error");
        answers.fill(null);
        finished = false;
        intro.classList.add("hidden");
        result.classList.add("hidden");
        questionsContainer.classList.remove("hidden");
        renderCityQuestions();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function calculateDiagnosis() {
        if (answers.some(answer => answer === null)) return;

        const cityName = cityNameInput.value.trim() || "Sua cidade";
        const dimensionScores = Object.entries(dimensions).map(([name, indexes]) => {
            const points = indexes.reduce((sum, index) => sum + answers[index], 0);
            return { name, score: Math.round((points / indexes.length) * 100) };
        });

        const overallScore = Math.round(
            dimensionScores.reduce((sum, item) => sum + item.score, 0) / dimensionScores.length
        );
        const maturity = getMaturityLevel(overallScore);
        renderDiagnosis(cityName, overallScore, maturity, dimensionScores);
        finished = true;
    }

    function getMaturityLevel(score) {
        if (score >= 85) return {
            title: "Maturidade muito avançada",
            description: "A cidade apresenta desempenho elevado em diversas dimensões. O próximo passo é consolidar políticas, monitorar resultados e manter a melhoria contínua."
        };
        if (score >= 70) return {
            title: "Maturidade avançada",
            description: "A cidade apresenta uma boa estrutura para desenvolver soluções inteligentes, embora algumas áreas ainda possam evoluir."
        };
        if (score >= 55) return {
            title: "Maturidade em desenvolvimento",
            description: "Existem iniciativas importantes, mas elas ainda precisam ser ampliadas, integradas e acompanhadas por indicadores."
        };
        if (score >= 40) return {
            title: "Maturidade inicial",
            description: "A cidade possui oportunidades significativas para desenvolver políticas de transformação urbana e integrar melhor seus serviços."
        };
        return {
            title: "Maturidade baixa",
            description: "O diagnóstico aponta a necessidade de estruturar políticas básicas de planejamento, serviços, sustentabilidade e transformação digital."
        };
    }

    const recommendationMap = {
        "Mobilidade": ["Priorizar mobilidade", "Ampliar transporte coletivo, melhorar calçadas e ciclovias e utilizar dados para compreender os deslocamentos urbanos."],
        "Sustentabilidade": ["Fortalecer sustentabilidade", "Expandir áreas verdes, eficiência ambiental, redução de emissões e políticas de adaptação climática."],
        "Água": ["Melhorar gestão da água", "Monitorar perdas, incentivar reúso, ampliar eficiência e acompanhar consumo e qualidade da água."],
        "Energia": ["Modernizar energia", "Investir em eficiência energética, fontes renováveis, monitoramento e gestão inteligente da rede."],
        "Transformação digital": ["Acelerar transformação digital", "Digitalizar serviços públicos de forma acessível, integrada, segura e orientada às necessidades dos cidadãos."],
        "Governança": ["Ampliar governança", "Fortalecer transparência, participação social, dados públicos e acompanhamento das políticas."],
        "Inclusão e serviços": ["Colocar pessoas no centro", "Melhorar acessibilidade, inclusão digital e distribuição equilibrada de serviços urbanos."],
        "Resiliência": ["Aumentar resiliência", "Criar planos de prevenção, monitoramento e resposta para riscos climáticos e emergências."],
        "Inovação": ["Estimular inovação", "Criar ambientes de experimentação, parcerias com universidades e empresas e projetos-piloto."]
    };

    function renderDiagnosis(cityName, overallScore, maturity, dimensionScores) {
        const ordered = [...dimensionScores].sort((a, b) => b.score - a.score);
        const strengths = ordered.slice(0, 3);
        const priorities = [...dimensionScores].sort((a, b) => a.score - b.score).slice(0, 3);

        result.classList.remove("hidden");
        questionsContainer.classList.add("hidden");

        const nameEl = document.getElementById("resultCityName");
        const scoreEl = document.getElementById("overallScore");
        const maturityEl = document.getElementById("maturityLevel");
        const dimensionsEl = document.getElementById("dimensionResults");
        const strengthsEl = document.getElementById("cityStrengths");
        const prioritiesEl = document.getElementById("cityPriorities");
        const recommendationsEl = document.getElementById("cityRecommendations");

        if (nameEl) nameEl.textContent = cityName;
        if (scoreEl) scoreEl.textContent = `${overallScore}%`;
        if (maturityEl) maturityEl.textContent = maturity.title;

        if (dimensionsEl) {
            dimensionsEl.innerHTML = dimensionScores.map(item => `
                <div class="dimension-card">
                    <div class="dimension-card-top">
                        <span>${escapeHtml(item.name)}</span>
                        <strong>${item.score}%</strong>
                    </div>
                    <div class="dimension-bar"><span style="width:${item.score}%"></span></div>
                    <small>${item.score >= 70 ? "Boa base" : item.score >= 40 ? "Em desenvolvimento" : "Precisa de atenção"}</small>
                </div>
            `).join("");
        }

        if (strengthsEl) {
            strengthsEl.innerHTML = strengths.map(item => `
                <div class="diagnosis-item positive">
                    <strong>${escapeHtml(item.name)}</strong>
                    <span>${item.score}%</span>
                </div>
            `).join("");
        }

        if (prioritiesEl) {
            prioritiesEl.innerHTML = priorities.map(item => `
                <div class="diagnosis-item priority">
                    <strong>${escapeHtml(item.name)}</strong>
                    <span>${item.score}%</span>
                </div>
            `).join("");
        }

        if (recommendationsEl) {
            recommendationsEl.innerHTML = priorities.map(item => {
                const rec = recommendationMap[item.name] || ["Desenvolver esta dimensão", "Criar metas mensuráveis e acompanhar indicadores para melhorar progressivamente esta área."];
                return `
                    <article class="recommendation-card">
                        <strong>${escapeHtml(rec[0])}</strong>
                        <p>${escapeHtml(rec[1])}</p>
                    </article>
                `;
            }).join("");
        }

        window.scrollTo({ top: result.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
    }

    startButton.addEventListener("click", startTest);
    cityNameInput.addEventListener("keydown", event => {
        if (event.key === "Enter") startTest();
    });

    document.addEventListener("click", event => {
        if (!event.target.closest("#restartCityTest")) return;
        answers.fill(null);
        finished = false;
        result.classList.add("hidden");
        questionsContainer.classList.add("hidden");
        intro.classList.remove("hidden");
        cityNameInput.focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


/* =========================================================
   14. FILTROS DE FONTES
   ========================================================= */

function initializeSourceFilters() {

    const filters =
        document.querySelectorAll(
            ".source-filter"
        );

    const cards =
        document.querySelectorAll(
            ".source-card"
        );


    if (!filters.length) {
        return;
    }


    filters.forEach(filter => {

        filter.addEventListener(
            "click",
            () => {

                const category =
                    filter.dataset.sourceFilter;


                filters.forEach(
                    button => {

                        button.classList.remove(
                            "active"
                        );

                    }
                );


                filter.classList.add(
                    "active"
                );


                cards.forEach(card => {

                    const cardCategory =
                        card.dataset.sourceCategory;


                    if (
                        category === "todos" ||
                        cardCategory === category
                    ) {

                        card.classList.remove(
                            "hidden"
                        );

                    } else {

                        card.classList.add(
                            "hidden"
                        );

                    }

                });

            }
        );

    });

}


/* =========================================================
   15. TECLADO
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "/" &&
            document.activeElement.tagName !==
            "INPUT"
        ) {

            const search =
                document.getElementById(
                    "searchInput"
                );


            if (search) {

                event.preventDefault();

                search.focus();

            }

        }


        if (event.key === "Escape") {

            const results =
                document.getElementById(
                    "searchResults"
                );


            if (results) {

                results.classList.remove(
                    "visible",
                    "active"
                );

            }


            if (
                typeof window.closeMobileMenu ===
                "function"
            ) {

                window.closeMobileMenu();

            }

        }

    }
);


/* =========================================================
   16. FINALIZAÇÃO
   ========================================================= */

console.log(
    "Smart City Singapura carregado com sucesso."
);