# Projeto Luz na Madrugada — Site institucional (esboço)

Esboço navegável do site institucional do **Projeto Luz na Madrugada**, comunidade
terapêutica masculina de acolhimento, recuperação e reinserção social, em Estância
Velha/RS. Esta é a etapa de esboço, anterior à construção completa: a arquitetura,
o sistema visual e o conteúdo-base já estão de pé, com os dados ainda não
confirmados marcados visualmente para preenchimento.

Todo o material segue a **paleta da madrugada** (da noite escura à primeira luz),
coerente com o nome do projeto. O termo "amanhecer" é evitado por gerar confusão.

## Como visualizar

O site é estático (HTML + CSS + JS puro, sem build). Basta abrir `index.html` no
navegador. Para navegação entre páginas funcionar bem, sirva a pasta localmente:

```
python3 -m http.server 8000
# depois abra http://localhost:8000
```

## Arquitetura

Site de múltiplas páginas, com cabeçalho e rodapé injetados por JavaScript a
partir de uma só fonte da verdade (`assets/js/site.js`), o que mantém a navegação
consistente em todas as páginas.

```
index.html            Home — hero, três portas, quem somos, números, frentes, CTA
instituicao.html      A instituição — história, missão/visão/valores, liderança
acolhimento.html      O acolhimento — etapas, rotina, estrutura, perguntas frequentes
frentes.html          Frentes — trabalho e sustento, convivência, fé, capacitação
transparencia.html    Transparência — dados institucionais, certificações, contas
parceiros.html        Parceiros — todos padronizados (foto + resumo)
doar.html             Doar — Pix, cotas de patrocínio, padrinho mensal, itens
contato.html          Contato — canais, como chegar, mapa, visitas
assets/
  css/site.css        Sistema visual completo (tokens, componentes, responsivo)
  js/site.js          Nav + rodapé injetados, scroll da "primeira luz", estrelas,
                      accordions, copiar Pix, revelar ao rolar
  img/
    logo-luz-na-madrugada.png   Símbolo (extraído dos materiais existentes)
    fotos/                       Fotos reais do projeto (reaproveitadas do media kit)
    art/                         Ilustração autoral (SVG): cena de hero e traço de luz
```

### Linguagem de ilustração autoral

Para dar identidade original ao site (sem depender de banco de imagem nem de
fotos genéricas), foi criado um sistema de arte vetorial próprio na paleta da
madrugada, redesenhando o conceito do logo — figuras que se erguem da noite em
direção à primeira luz.

1 - `art/cena-madrugada.svg`: ilustração-assinatura, presente no hero de todas as
páginas. Três figuras (noite, transição e luz) sobem pelo arco rumo ao sol
nascente, com estrelas, constelação e a cruz. Anima sozinha e reage suavemente
ao ponteiro do mouse.
2 - Selo ilustrado em toda headline: cada rótulo de seção recebe um selo com
glifo autoral, escolhido pelo tema da seção (acolher, caminho, casa, pessoas,
coração, escudo, luz, entre outros). Injetado por JS, sem imagem de terceiros.
3 - `art/traco-luz.svg`: traço dourado desenhado à mão sob a palavra-chave dos
títulos de hero.
4 - Transições de entrada em "cortina de luz" (clip-path) conforme a página rola.

### Sistema visual (resumo)

1 - Tipografia: Fraunces (títulos, palavra-chave em itálico dourado), Figtree
(corpo), IBM Plex Mono (dados e rótulos).
2 - Cores: noite (#060B14 a #123055), luz (âmbar #D97A24, dourado #E0B84A),
papel (#FBF8F2) e carmim (#C4392E) só para pontos de atenção.
3 - Conceito aplicado à web: as seções abrem no escuro (noite, com estrelas que
viram brasas) e resolvem na luz (papel). O fundo "amanhece" conforme o scroll.

## Fotos e logo

1 - As fotos em `assets/img/fotos/` são **fotos reais do projeto**, reaproveitadas
do media kit já produzido. Foram usadas apenas onde o conteúdo é verificável:
horta, pátio/áreas de convivência e a placa de homenagem à Família Piva.
2 - Fotos de pessoas cujos nomes não pude confirmar **não** foram legendadas com
identidade. Onde faltava imagem, o espaço fica reservado (`imagem representativa`
/ `logo · foto`), nunca preenchido com substituto genérico.
3 - O logo é um recorte de baixa resolução dos materiais atuais. Um arquivo em
**vetor/alta** continua pendente (ver abaixo).

## Pendências (bloqueiam a versão final)

Todo campo ainda não confirmado aparece no site com marcação vermelha tracejada
(classe `pendente`). Consolidado:

**Números da casa** — ano oficial (2011 vs 2013, CNPJ aberto em 23/05/2013);
vagas atuais; total de acolhidos atendidos; taxa de conclusão; famílias por ano.

**Financeiro** — custo mensal por acolhido; custo de manutenção da casa; valores
e contrapartidas das 3 cotas de patrocínio; equivalências reais da doação
(R$ 30 / R$ 80 / R$ 200); confirmação da chave Pix oficial e do banco.

**Institucional** — enquadramento fiscal e certificações (utilidade pública,
CEBAS, aptidão para emenda, alvará, CMAS, CMDCA, SENAD); estatuto e atas;
critérios de admissão, documentos e exames; duração do tratamento; dias e
horários de visita.

**Conteúdo** — carta/relato do presidente Marcos Gonçalves; nomes e cargos da
equipe; fotos em alta das atividades (solda, reciclagem, lenha, PAVS, devocional)
e do Major Juliano com o Marcos; logos dos parceiros; logo do projeto em vetor.

## Próximos passos sugeridos

1 - Preencher as pendências acima e substituir as marcações vermelhas.
2 - Trocar os espaços reservados pelas fotos e logos oficiais.
3 - Gerar o QR Code do Pix a partir da chave oficial.
4 - Revisar textos institucionais com a coordenação antes da construção completa.
