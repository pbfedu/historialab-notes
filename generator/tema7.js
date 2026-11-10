if (!window.HISTORIALAB_TEMES) { window.HISTORIALAB_TEMES = []; }

window.HISTORIALAB_TEMES.push({
  id: 'tema_catalanisme',
  unitNum: 7,
  title: "Els Orígens i l'Evolució del Catalanisme Polític i Cultural (s. XIX - Inicis del s. XX)",
  subtitle: "De la Renaixença i el Federalisme a les Bases de Manresa, la Lliga Regionalista i la Construcció de l'Espanya Plural",
  coverGradient: 'linear-gradient(135deg, #f73687, #f7d736)',  
icon: "fa-landmark-flag",
  xp: 500,
  sections: [
    // 1. QUADRES D'ÈMFASI (CALLOUTS): IDEES PRINCIPALS I CONNEXIÓ AMB L'ACTUALITAT
    {
      type: 'callouts',
      title: "Idees Principals, Claus PAU i Connexió amb l'Actualitat",
      items: [
        {
          header: "1. Connexió amb el Debat Territorial Actual",
          content: "La tensió entre el model d'Estat centralista uniformista i les demandes d'autogovern, així com la bipolaritat econòmica i cultural entre Barcelona i Madrid, té el seu origen directe en la consolidació de l'Estat liberal del segle XIX. El debat contemporani sobre el finançament autonòmic, el reconeixement de la llengua catalana a les institucions i la protecció del dret civil manté la mateixa línia argumental que iniciats moviments com el Memorial de Greuges o el Tancament de Caixes.",
          color: "blue",
          icon: "fa-earth-europe"
        },
        {
          header: "2. Les Dues Vies de la Renaixença (Cultural i Popular)",
          content: "La Renaixença va començar com un moviment cultural i lingüístic amb l'Oda a la Pàtria d'Aribau (1833) i la restauració dels Jocs Florals (1859) en un català cultu i arcaïtzant. Paral·lelament, la Renaixença popular (Clavé, Frederic Soler 'Pitarra', Terrades) va promoure el català que es parlava al carrer mitjançant corals, teatre satíric i premsa popular.",
          color: "purple",
          icon: "fa-book-open-reader"
        },
        {
          header: "3. El Trànsit del Federalisme al Catalanisme Polític",
          content: "Valentí Almirall, precursor del catalanisme modern, va evolucionar des del republicanisme federal de Pi i Margall cap a un catalanisme progressista i laic. Va fundar el Diari Català (1879), el Centre Català (1882), va redactar el Memorial de Greuges (1885) i va teoritzar l'autogovern a Lo Catalanisme (1886).",
          color: "orange",
          icon: "fa-pen-nib"
        },
        {
          header: "4. L'Hegemonia Conservadora: Bases de Manresa i la Lliga (1892-1901)",
          content: "Davant el fracàs de l'opció progressista d'Almirall per atreure la burgesia, es va imposar el catalanisme conservador i tradicionalista (Torras i Bages, Prat de la Riba). La Unió Catalanista va redactar les Bases de Manresa (1892). El Desastre del 98 i la protesta fiscal del Tancament de Caixes (1899) van portar la burgesia a fundar la Lliga Regionalista (1901), triomfant a les eleccions amb la Candidatura dels Quatre Presidents.",
          color: "green",
          icon: "fa-building-columns"
        }
      ]
    },

    // 2. TEXTBLOCK 1: ANTECEDENTS HISTÒRICS I CONTEXT INTERNACIONAL
    {
      type: 'textBlock',
      title: "1. Antecedents Històrics i Context Internacional: Del Centralisme a la Consciència Nacional",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>Els Antecedents de la Unificació Borbònica:</strong><br>
          La pèrdua de les Constitucions, Corts, institucions i furs propis de Catalunya arran dels <span class="bold-red">Decrets de Nova Planta (1716)</span> va imposar un model d'Estat absolutista, centralitzat i uniformista d'arrel castellana. Durant el segle XIX, la construcció de l'Estat liberal va aprofundir en aquesta via unificadora en els àmbits polític, administratiu, jurídic i militar, exemplificada en la <span class="bold-orange">divisió provincial de 1833</span> dissenyada per Javier de Burgos.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Context Internacional del Segle XIX:</strong><br>
          L'aparició del catalanisme s'inscriu en els grans corrents europeus de l'època:
          <ul>
            <li><strong>Romanticisme:</strong> Moviment cultural que va promoure la revalorització del passat medieval, les tradicions històriques i les llengües pròpies com a l'expressió de l'ànima dels pobles.</li>
            <li><strong>Nacionalisme:</strong> Desenvolupament de la consciència col·lectiva en compartir elements històrics, culturals, jurídics i lingüístics.</li>
            <li><strong>Auge del Liberalisme i la Burgesia:</strong> Consolidació de les classes mitjanes industrials i urbanes que exigien la modernització de les estructures estatals.</li>
          </ul>
        </p>
        <p>
          <strong>Dinamisme Català enfront de l'Endarreriment Estatal:</strong><br>
          Mentre Espanya romania majoritàriament agrària, rural i sota el domini de les elits tradicionals, Catalunya va experimentar un intens procés d'<span class="bold-green">industrialització, creixement demogràfic i desenvolupament urbà</span>. Barcelona es va transformar en una metropoli moderna i cosmopolita (enderrocament de les muralles, aprovació del <span class="bold-blue">Pla Cerdà el 1860</span> i celebració de l'<span class="bold-blue">Exposició Universal de 1888</span>). Aquesta divergència socioeconòmica va generar una manifesta bipolaritat entre Barcelona i Madrid, stimulant la burgesia catalana a reclamar la defensa de la seva producció industrial (proteccionisme aranzelari) i l'autogovern.
        </p>
      `
    },

    // 3. MATRIX 1: DUES VIES DE LA RENAIXENÇA CULTURAL
    {
      type: 'matrix',
      title: "Matriu Comparativa: Les Dues Vies de la Renaixença Cultural a Catalunya",
      quadrants: [
        {
          title: "Renaixença Literària i Culte",
          badge: "Elits Intel·lectuals",
          points: [
            "Inici: Bonaventura Carles Aribau amb l'Oda a la Pàtria (1833) i Joaquim Rubió i Ors (Lo gaiter del Llobregat).",
            "Restauració dels Jocs Florals (1859): promoció d'un català escrit, culte i d'estil medievalitzant.",
            "Grans figures literàries: Jacint Verdaguer (L'Atlàntida), Àngel Guimerà (Mar i cel) i Narcís Oller."
          ]
        },
        {
          title: "Renaixença Popular i Urbana",
          badge: "Classes Treballadores",
          points: [
            "Defensa del 'català que es parla' al carrer enfront de l'estil arcaïtzant dels Jocs Florals.",
            "Josep Anselm Clavé: creació de corals obreres per vincular la cultura popular amb el sentiment català.",
            "Teatre satíric de Frederic Soler 'Pitarra' i obres de teatre revolucionari d'Abdó Terrades."
          ]
        },
        {
          title: "Publicacions i Premsa Popular",
          badge: "Difusió de Masses",
          points: [
            "Revistes satíriques i d'opinió: La Campana de Gràcia i L'Esquella de la Torratxa.",
            "Premsa obrera i reivindicativa: La Tramuntana (propera a l'anarquisme).",
            "Mitjans d'orientació política: La Renaixença i el Diari Català."
          ]
        },
        {
          title: "Construcció d'Identitat",
          badge: "Reivindicació Lingüística",
          points: [
            "Recuperació del català com a llengua de prestigi cultural i d'ús públic.",
            "Cerca en la història medieval, el dret civil propi i el folklore tradicional.",
            "Salt progressiu de la reivindicació literària cap a la formulació de la identitat política."
          ]
        }
      ]
    },

    // 4. TEXTBLOCK 2: LES PRIMERES MANIFESTACIONS ANTICENTRALISTES I EL FEDERALISME
    {
      type: 'textBlock',
      title: "2. Les Primeres Manifestacions Anticentralistes i el Republicanisme Federal",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>De la Resistència Popular al Republicanisme Federal:</strong><br>
          Durant les primeres dècades del segle XIX, l'oposició al centralisme uniforme es va expressar de manera elemental en revoltes populars contra les quintes, la Jamància (1843) i el suport popular a les bullangues. Tanmateix, va ser en el sí del <span class="bold-purple">Partit Republicà Democràtic Federal</span> on l'anticentralisme va prendre forma política.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>El Pacte Federal de Tortosa (1869) i la Primera República:</strong><br>
          Després de la Revolució de 1868, dirigents com <span class="bold-blue">Valentí Almirall</span> i <span class="bold-blue">Josep Anselm Clavé</span> van impulsar el <span class="bold-blue">Pacte Federal de Tortosa (1869)</span>, un acord ideològic signat per representants dels territoris de l'antiga Corona d'Aragó (Catalunya, Aragó, València i Illes Balears) per promoure un Estat federal des de baix. Durant la Primera República (1873), el projecte de Constitució Federal establia una Espanya dividida en 17 Estats federats.
        </p>
        <p>
          <strong>Dissensions Internes i el Projecte de Constitució Catalana (1883):</strong><br>
          El col·lapse de la Primera República i el cantonalisme van afeblir el federalisme. Van sorgir diferències insuperables entre <span class="bold-purple">Francesc Pi i Margall</span> (que des de Madrid subordinava la qüestió catalana a la reforma social global de tot Espanya) i Valentí Almirall (que exigia prioritzar l'autogovern català). Almirall va abandonar el partit el 1881. El nou cap del federalisme a Catalunya, <span class="bold-green">Josep Maria Vallès i Ribot</span>, va presentar al Congrés Regional de 1883 el *Projecte de Constitució per a l'Estat Català*, un programa d'autogovern, defensa de la llengua i dels interessos econòmics autòctons.
        </p>
      `
    },

    // 5. FLOWCHART 1: EVOLUCIÓ DE VALENTÍ ALMIRALL
    {
      type: 'flowchart',
      title: "Esquema de Causalitat: L'Evolució Política de Valentí Almirall (1879-1886)",
      steps: [
        {
          badge: "1879",
          label: "Fundació del Diari Català",
          desc: "Primer diari escrit íntegrament en català per difondre el republicanisme federal i el reformisme social."
        },
        {
          badge: "1880-1882",
          label: "1r Congrés i Centre Català",
          desc: "Organització de la primera entitat política d'àmbit exclusivament català ('Catalunya i avant')."
        },
        {
          badge: "1885",
          label: "El Memorial de Greuges",
          desc: "Redacció del primer manifest polític unitari lliurat al rei Alfons XII en defensa del dret civil i del proteccionisme."
        },
        {
          badge: "1886",
          label: "Publicació de 'Lo Catalanisme'",
          desc: "Primera teorització política que defineix Catalunya com a Nació i proposa regenerar Espanya des del particularisme."
        }
      ]
    },

    // 6. TEXTBLOCK 3: VALENTÍ ALMIRALL I EL CATALANISME PROGRESSISTA
    {
      type: 'textBlock',
      title: "3. Valentí Almirall i la Formació del Catalanisme Polític Progressista",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>El Precursor del Catalanisme Modern:</strong><br>
          <span class="bold-purple">Valentí Almirall (1841-1904)</span> va ser la figura cabdal que va transformar les reivindicacions culturals de la Renaixença en una doctrina política organitzada. Representant d'un catalanisme progressista, laic i federalista, va argumentar la necessitat d'institucions d'autogovern pròpies basant-se en el contrast entre una Catalunya industrial, moderna i dinàmica i una Espanya agrària, centralista i dominada pel caciquisme (*Espanya tal cual es*, 1887).
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Les Fites de l'Acció d'Almirall:</strong><br>
          <ul>
            <li><strong>Diari Català (1879):</strong> Primer periòdic redactat en llengua catalana destinat a crear opinió pública i actuar com a portaveu de les classes populars.</li>
            <li><strong>Primer i Segon Congrés Catalanista (1880 i 1883):</strong> Trobades convocades per unificar federalistes, intel·lectuals de *La Renaixença* i l'entitat *La Jove Catalunya*. S'hi va criticar el 'sucursalisme' dels partits dinàstics espanyols.</li>
            <li><strong>El Centre Català (1882):</strong> Primera organització política catalanista. Defensava la cooficialitat de la llengua, el dret civil català, la divisió comarcal i el proteccionisme econòmic.</li>
            <li><strong>El Memorial de Greuges (1885):</strong> Document redactat per Almirall i lliurat a Alfons XII per una comissió de polítics, escriptors i industrials. Va ser la primera protesta conjunta contra el centralisme i contra els tractats de lliure comerç amb el Regne Unit.</li>
            <li><strong>Obra doctrinal 'Lo Catalanisme' (1886):</strong> Primer tractat teòric del catalanisme que definia Catalunya com a Nació, rebutjava el separatisme i proposava una estructura descentralitzada per regenerar tot l'Estat espanyol.</li>
          </ul>
        </p>
        <p>
          <strong>El Fracàs del Projecte Interclassista d'Almirall:</strong><br>
          Tot i la seva brillantor intel·lectual, el projecte progressista d'Almirall va fracassar en el seu intent de crear una organització interclassista: la burgesia conservadora recelava del seu laïcisme i passat republicà, mentre que les classes treballadores urbanes s'inclinaven cada cop més cap a l'anarquisme i el moviment obrer.
        </p>
      `
    },

    // 7. MATRIX 2: COMPARACIÓ ENTRE CATALANISME PROGRESSISTA I CONSERVADOR
    {
      type: 'matrix',
      title: "Matriu Comparativa: Catalanisme Progressista vs Catalanisme Conservador",
      quadrants: [
        {
          title: "Catalanisme Progressista (Valentí Almirall)",
          badge: "Centre Català (1882)",
          points: [
            "Ideologia: Laica, republicana, democràtica i d'arrel federalista.",
            "Objectiu: Descentralització, drets socials i regeneració democràtica d'Espanya.",
            "Base Social: Intel·lectuals d'esquerra, petita burgesia i menestrals."
          ]
        },
        {
          title: "Catalanisme Tradicionalista (Vigatanisme)",
          badge: "Torras i Bages (1892)",
          points: [
            "Ideologia: Catòlica dogmàtica, foralista i d'enyorança de l'Edat Mitjana.",
            "Obra cabdal: La tradició catalana (1892) de Josep Torras i Bages ('Catalunya serà cristiana o no serà').",
            "Valors: Família, propietat, religió i rebuig als canvis de la societat industrial."
          ]
        },
        {
          title: "Catalanisme Conservador Polític",
          badge: "Lliga de Catalunya (1887)",
          points: [
            "Líders: Prat de la Riba, Puig i Cadafalch, Domènech i Montaner, Verdaguer.",
            "Accions: Missatge a la Reina Regent M. Cristina (1888) i Campanya del Dret Civil (1889).",
            "Base Social: Burgesia industrial, propietaris agraris i professionals liberals."
          ]
        },
        {
          title: "Consens sobre la Nació",
          badge: "Punts de Trobada",
          points: [
            "Defensa acèrrima de la llengua catalana i de l'oficialitat institucional.",
            "Preservació de les normes històriques del Dret Civil Català.",
            "Reclamació de proteccionisme econòmic per a la indústria autòctona."
          ]
        }
      ]
    },

    // 8. TEXTBLOCK 4: EL CATALANISME CONSERVADOR, LA UNIÓ CATALANISTA I LES BASES DE MANRESA
    {
      type: 'textBlock',
      title: "4. El Catalanisme Conservador, la Unió Catalanista i les Bases de Manresa (1892)",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>L'Escissió de la Lliga de Catalunya (1887) i les Primeres Victòries:</strong><br>
          L'any 1887, els sectors més conservadors del Centre Català i els joves estudiants del Centre Escolar Catalanista (Enric Prat de la Riba, Lluís Domènech i Montaner, Josep Puig i Cadafalch, Narcís Verdaguer) van abandonar Almirall per fundar la <span class="bold-purple">Lliga de Catalunya</span>. Aquest grup va connectar millor amb la burgesia descontenta amb els partits dinàstics i va impulsar accions de gran impacte:
          <ul>
            <li><strong>Missatge a la Reina Regent Maria Cristina (1888):</strong> Amb motiu de l'Exposició Universal de Barcelona, li van lliurar una petició formal d'autonomia per a Catalunya.</li>
            <li><strong>Campanya en defensa del Dret Civil Català (1889):</strong> Oposició frontal a la reforma del Codi Civil espanyol que pretenia unificar el dret. La pressió social va forçar el govern de Madrid a retirar la mesura i respectar el dret civil autòcton, en la que es considera la <span class="bold-green">primera victòria política del catalanisme</span>.</li>
          </ul>
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>La Unió Catalanista i les Bases de Manresa (1892):</strong><br>
          L'any 1891 es va fundar la <span class="bold-blue">Unió Catalanista</span> per agrupar totes les entitats, periòdics i associacions catalanistes del territori. El març de 1892, l'assemblea delegada de la Unió va aprovar a Manresa el document *Bases per a la Constitució Regional Catalana*, conegut popularment com les <span class="bold-red">Bases de Manresa</span>.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Estructura del Poder a les Bases de Manresa:</strong><br>
          <ul>
            <li><strong>Poder Central Estat:</strong> Reservat exclusivament a les relacions internacionals, l'exèrcit de terra i mar, les relacions econòmiques exteriors i la resolució de conflictes interregionals.</li>
            <li><strong>Poder Regional Català:</strong> Sobirania plena en l'administració interior, oficialitat única de la llengua catalana, reserva dels càrrecs públics per als naturals de Catalunya, restabliment de les antigues Corts, ensenyament, legislació civil i judicial pròpia, i creació d'un cos de voluntaris de seguretat.</li>
          </ul>
        </p>
        <p>
          Redactades sota la ponència d'<span class="bold-purple">Enric Prat de la Riba</span> i la presidència de Lluís Domènech i Montaner, les Bases de Manresa van fixar el corpus doctrinal del catalanisme polític conservador i foralista.
        </p>
      `
    },

    // 9. TIMELINE: CRONOLOGIA COMPLETA DE LA CONSTRUCCIÓ DE LA CONSCIÈNCIA NACIONAL
    {
      type: 'timeline',
      title: "Cronologia de fets Històrics Clau del Catalanisme (1716-1901)",
      events: [
        {
          year: "1716",
          badge: "Nova Planta",
          icon: "fa-file-signature",
          event: "Decrets de Nova Planta de Felip V",
          desc: "Supressió dels furs, Corts i institucions autònomes de Catalunya e imposició del centralisme."
        },
        {
          year: "1833",
          badge: "Renaixença",
          icon: "fa-feather",
          event: "Publicació de l'Oda a la Pàtria de B.C. Aribau",
          desc: "Inici simbolic de la Renaixença literària i de la revalorització de la llengua catalana."
        },
        {
          year: "1859",
          badge: "Jocs Florals",
          icon: "fa-award",
          event: "Restauració dels Jocs Florals de Barcelona",
          desc: "Impuls institucional al català escrit com a llengua culta de prestigi literari."
        },
        {
          year: "1869",
          badge: "Federalisme",
          icon: "fa-handshake",
          event: "Signatura del Pacte Federal de Tortosa",
          desc: "Manifest de les forces republicanes federals dels territoris de l'antiga Corona d'Aragó."
        },
        {
          year: "1879",
          badge: "Premsa",
          icon: "fa-newspaper",
          event: "Fundació del Diari Català per Valentí Almirall",
          desc: "Naixement del primer diari polític redactat íntegrament en llengua catalana."
        },
        {
          year: "1882",
          badge: "Organització",
          icon: "fa-landmark",
          event: "Creació del Centre Català",
          desc: "Primera entitat política d'àmbit exclusivament català promoguda per Valentí Almirall."
        },
        {
          year: "1885",
          badge: "Manifest",
          icon: "fa-scroll",
          event: "Lliurament del Memorial de Greuges a Alfons XII",
          desc: "Primer manifest unitari contra el centralisme, en defensa del dret civil i del proteccionisme."
        },
        {
          year: "1886",
          badge: "Doctrina",
          icon: "fa-book",
          event: "Publicació de 'Lo Catalanisme' de Valentí Almirall",
          desc: "Primera teorització política que defineix Catalunya com a Nació i reclama l'autogovern."
        },
        {
          year: "1887",
          badge: "Escissió",
          icon: "fa-users-slash",
          event: "Fundació de la Lliga de Catalunya",
          desc: "Escissió conservadora del Centre Català impulsada per joves intel·lectuals (Prat de la Riba)."
        },
        {
          year: "1889",
          badge: "Victòria",
          icon: "fa-scale-balanced",
          event: "Campanya en defensa del Dret Civil Català",
          desc: "Protesta victoriosa que obliga el govern central a retirar la unificació del Codi Civil."
        },
        {
          year: "1892",
          badge: "Autonomia",
          icon: "fa-file-contract",
          event: "Aprovació de les Bases de Manresa",
          desc: "La Unió Catalanista fixa el programa teòric d'autogovern i ponència de Prat de la Riba."
        },
        {
          year: "1899",
          badge: "Protesta Fiscal",
          icon: "fa-store-slash",
          event: "El Tancament de Caixes a Barcelona",
          desc: "Vaga de tributs dels comerciants dirigida pel batlle Robert contra els impostos del 98."
        },
        {
          year: "1901",
          badge: "Electoral",
          icon: "fa-check-to-slot",
          event: "Fundació de la Lliga Regionalista i Victòria Electoral",
          desc: "Unió de la Unió Regionalista i el Centre Nacional Català; triomf de la Candidatura dels Quatre Presidents."
        }
      ]
    },

    // 10. TEXTBLOCK 5: DEL TANCAMENT DE CAIXES A LA LLIGA REGIONALISTA I EL MODERNISME
    {
      type: 'textBlock',
      title: "5. Del Tancament de Caixes a la Lliga Regionalista (1899-1901) i el Modernisme",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>El Desastre del 98 i el Tancament de Caixes (1899):</strong><br>
          La pèrdua dels mercats colonials i l'enorme deute de guerra van portar el ministre d'Hisenda, Fernández Villaverde, a incrementar els impostos directes sobre la indústria i el comerç el 1899. A la tardor de 1899, els gremis de Barcelona es van donar de baixa de les llicències comercials i es van negar a pagar els tributs en la protesta coneguda com el <span class="bold-red">Tancament de Caixes</span>.
        </p>
        <p style="margin-bottom: 0.75rem;">
          L'alcalde de Barcelona, el <span class="bold-green">Dr. Bartomeu Robert</span>, es va negar a signar els embargaments dels comerciants morosos i va dimitir. El govern de Madrid va declarar l'estat de guerra a la província, va empresonar botiguers i va suspendre les garanties constitucionals. Aquesta dura repressió va certificar el fracàs del pretès regeneracionisme estatal i va impulsar la burgesia catalana a trencar definitivament amb el tornisme dinàstic.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Fundació de la Lliga Regionalista (1901):</strong><br>
          L'abril de 1901 es van fusionar la *Unió Regionalista* (portaveu dels industrials del Tancament de Caixes) i el *Centre Nacional Català* (grup d'intel·lectuals possibilistes que publicaven el diari <span class="bold-blue">La Veu de Catalunya</span>, com Prat de la Riba i Francesc Cambó) per crear la <span class="bold-green">Lliga Regionalista</span>. A les eleccions generals de maig de 1901, la Lliga va presentar la *Candidatura dels Quatre Presidents* (Albert Rusiñol, Bartomeu Robert, Lluís Domènech i Montaner i Sebastià Torres), aconseguint una rotunda victòria a Barcelona. Per primer cop en la Restauració, els partits dinàstics eren derrotats per una força catalanista.
        </p>
        <p>
          <strong>El Modernisme com a Construcció de Cultura Nacional:</strong><br>
          Entre els anys 80 i principis del segle XX, el <span class="bold-purple">Modernisme</span> (Joan Maragall, Santiago Rusiñol, Antoni Gaudí, revistes *L'Avenç* i *Joventut*) va substituir la vella Renaixença. El Modernisme va ser un moviment d'obertura a les avantguardes europees que va popularitzar el concepte de *Nació* en comptes de *Regió* i va estendre la consciència nacional a través d'institucions socials: orfeons (*Orfeó Català*), centres excursionistes, entitats sardanistes, clubs d'esports i l'adopció de l'himne <span class="bold-red">Els Segadors</span>.
        </p>
      `
    },

    // 11. MATRIX 3: ELS NACIONALISMES PERIFÈRICS EN L'ESPANYA PLURAL
    {
      type: 'matrix',
      title: "Matriu Comparativa: L'Espanya Plural i els Nacionalismes Perifèrics",
      quadrants: [
        {
          title: "Catalanisme Polític",
          badge: "Catalunya",
          points: [
            "Motor: Societat industrialitzada, burgesia potent i moviment cultural previ (Renaixença).",
            "Textos doctrinals: Memorial de Greuges (1885), Lo Catalanisme (1886) i Bases de Manresa (1892).",
            "Lideratge: Transició d'Almirall (progressista) a la Lliga Regionalista (Prat de la Riba, Cambó)."
          ]
        },
        {
          title: "Nacionalisme Basc (PNV)",
          badge: "País Basc (1895)",
          points: [
            "Fundador: Sabino Arana crea el Partit Nacionalista Basc (PNV) l'any 1895 i encunya el terme Euskadi.",
            "Orígens: Reacció a l'abolició dels furs (1876) i a la transformació industrial per la immigració ('maketos').",
            "Doctrina inicial: Independentisme, catolicisme integrista i defensa de la raça basca; evolució posterior cap a posicions autonomistes i possibilistes."
          ]
        },
        {
          title: "Galleguisme (O'Rexurdimento)",
          badge: "Galícia",
          points: [
            "Context: Societat agrària, feble burgesia, fort poder de l'Església i intensa emigració.",
            "Rexurdimento cultural: Redescobriment de la llengua gallega (Rosalía de Castro, Manuel Murguía).",
            "Formulació política: Més tardana i minoritària (Alfredo Brañas i Projecte de Constitució per a l'Estat Galaic, 1887)."
          ]
        },
        {
          title: "Altres Regionalismes Perifèrics",
          badge: "València, Aragó, Andalusia",
          points: [
            "Valencianisme: Restauració dels Jocs Florals i corrent republicà de Vicente Blasco Ibáñez.",
            "Aragonesisme: Defensa del dret civil autòcton i influència del regeneracionisme de Joaquín Costa.",
            "Andalusisme: Arrelat en el republicanisme federal i estudis de folklore de l'Ateneu de Sevilla."
          ]
        }
      ]
    },

    // 12. SOURCES: FONTS PRIMÀRIES I PERSONATGES HISTÒRICS
    {
      type: 'sources',
      quoteTitle: "Font Primària: Fragment de 'Lo Catalanisme' de Valentí Almirall (1886)",
      quoteText: "«El programa del catalanisme en totes les seves manifestacions no pot ésser més que un: rompre les lligadures que tenen la nostra regió agarrotada i subjecta, substituint-les pels suaus i dolços llaços d'afecte que la germanor fa néixer... L'endarreriment en què ens trobem; la degeneració del nostre caràcter; la debilitat de la nostra vida intel·lectual i moral són la legitimació del nostre catalanisme... El sentiment catalanista ens diu que l'organització actual de l'Estat espanyol no permetrà mai a Catalunya recobrar el lloc a què el deure la crida en el concert dels pobles avançats.»",
      quoteAuthor: "Valentí Almirall, Lo Catalanisme (1886)",
      charName: "Enric Prat de la Riba i Sarrà (1870-1917)",
      charRole: "Advocat, Intel·lectual i Dirigent de la Lliga Regionalista",
      charDesc: "Teòric cabdal del nacionalisme català conservador. Va redactar la ponència de les Bases de Manresa (1892) i la seva obra fonamental La nacionalitat catalana (1906). Fundador de la Lliga Regionalista el 1901 i primer president de la Mancomunitat de Catalunya (1914-1917), des d'on va impulsar la modernització de les infraestructures i de la cultura catalana."
    }
  ]
});
