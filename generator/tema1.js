if (!window.HISTORIALAB_TEMES) { window.HISTORIALAB_TEMES = []; }

window.HISTORIALAB_TEMES.push({
  id: 'tema0_s18',
  unitNum: 0,
  title: "El Segle XVIII: El Segle de les Llums i l'Absolutisme Borbònic",
  subtitle: "De la Guerra de Successió i els Decrets de Nova Planta al Despotisme Il·lustrat i l'Enlairament Econòmic de Catalunya",
  coverGradient: 'linear-gradient(135deg, #c9ea09, #8ca20e)',
  icon: "fa-sun",
  xp: 500,
  sections: [
    // 1. QUADRES D'ÈMFASI (CALLOUTS): IDEES PRINCIPALS
    {
      type: 'callouts',
      title: "Idees Principals i Claus d'Examen (Segle XVIII)",
      items: [
        {
          header: "1. La Il·lustració i la Raó",
          content: "Moviment intel·lectual sorgit de la burgesia que critica l'Antic Règim, combat la superstició i la intolerància religiosa, i defensa la Raó, la llibertat de consciència, la igualtat jurídica, la divisió de poders i la mobilitat social per mèrit.",
          color: "blue",
          icon: "fa-lightbulb"
        },
        {
          header: "2. Absolutisme Centralista (Felip V)",
          content: "Guanyador de la Guerra de Successió (1701-1714). Promulga els Decrets de Nova Planta (1707-1716), abolint els furs, Corts e institucions de la Corona d'Aragó e imposant el model centralista castellà i la castellanització obligatòria.",
          color: "orange",
          icon: "fa-shield-halved"
        },
        {
          header: "3. Despotisme Il·lustrat (Carles III)",
          content: "Reformisme absolutista sota el lema «Tot per al poble però sense el poble». Modernitza l'administració, impulsa les Sociedades Económicas, la xarxa radial de camins i la liberalització del comerç americà (1778) sense cedir poder polític.",
          color: "purple",
          icon: "fa-crown"
        },
        {
          header: "4. Enlairament Econòmic de Catalunya",
          content: "Creixement de la burgesia comercial i industrial gràcies a l'exportació de vins, aiguardents i indianes (cotó estampat). La repatriació de capitals dels indians i els excedents agraris dels pagesos benestants financen la industrialització.",
          color: "green",
          icon: "fa-industry"
        }
      ]
    },

    // 2. TEXTBLOCK 1: L'ANTIC RÈGIM I LA IL·LUSTRACIÓ
    {
      type: 'textBlock',
      title: "1. L'Antic Règim i la Revolució Intel·lectual de la Il·lustració",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>Estructures Socioeconòmiques de l'Antic Règim:</strong><br>
          A principis del segle XVIII, Espanya mantenia les estructures tradicionals de l'Antic Règim: una <span class="bold-red">societat estamental</span> organitzada en grups privilegiats (noblesa i clergat) i no privilegiats (tercer estat), una població majoritàriament rural i una demografia antiga caracteritzada per una <span class="text-highlight">alta taxa de mortalitat i natalitat</span> amb crisis de subsistència periòdiques. L'agricultura, poc tecnificada, constituïa la base econòmica amb formes de tinença de la terra pròpies d'un <span class="bold-orange">feudalisme tardà</span> (mans mortes, majorassos i senyorius). No obstant això, a Catalunya, la millora de la producció agrícola va permetre l'aparició d'un nucli de <span class="bold-green">pagesos benestants</span>, tal com reflecteixen les ceràmiques de l'època.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>El Pensament de la Il·lustració:</strong><br>
          La Il·lustració va ser un corrent cultural i filosòfic impulsat per la <span class="bold-purple">burgesia emprenedora</span> europea. Els seus principis eixos eren:
          <ul>
            <li><strong>El poder educatiu de la Raó:</strong> Centralitat de la Raó com a eina de progrés, ciència i emancipació humana.</li>
            <li><strong>Denúncia de la irracionalitat:</strong> Crítica oberta a la superstició, el dogmatisme, la intolerància religiosa i els privilegis de naixement, proclamant que l'objectiu vital era la recerca de la felicitat terrenal.</li>
            <li><strong>Drets i llibertats individuals:</strong> Defensa de la llibertat de consciència, la igualtat de tots els homes davant la llei, la sobirania nacional i la divisió de poders (inspirada en el sistema parlamentari anglès).</li>
            <li><strong>Mobilitat social per Mèrit:</strong> Rebuig de la immobilitat estamental i defensa de l'ascens social basat en el talent i el treball individual.</li>
            <li><strong>Optimisme i desenvolupament:</strong> L'aplicació de noves tècniques agràries i conreus va augmentar la productivitat. L'expansió del comerç, les finances i les manufactures va accelerar la urbanització.</li>
            <li><strong>Sociabilitat i cultura:</strong> Interès pels pobles extraeuropeus en el marc de les navegacions comercials i difusió d'idees mitjançant <em>tertúlies en salons literaris</em>.</li>
          </ul>
        </p>
        <p>
          <strong>Art i Mentalitats del Segle XVIII:</strong><br>
          La sensibilitat de l'època es va plasmar en grans obres artístiques: des del Rococó aristocràtic francès de Jean-Honoré Fragonard (<em>El gronxador</em>, 1766), passant per la imagineria religiosa barroca i neoclàssica de Francisco Salzillo (<em>Oració a l'hort de Getsemaní</em>, 1754), fins a la visió costumista i il·lustrada de Francisco de Goya a <em>La tardor o la verema</em> (1786-1787).
        </p>
      `
    },

    // 3. MATRIU 1: FACCIONS DE LA GUERRA DE SUCCESSIÓ
    {
      type: 'matrix',
      title: "Matriu de Faccions i Protagonistes de la Guerra de Successió (1701-1714)",
      quadrants: [
        {
          title: "Bàndol Borbònic (Felip V)",
          badge: "Absolutisme Centralista",
          points: [
            "Líder: Felip de Anjou (Felip V), net de Lluís XIV de França.",
            "Suport: Corona de Castella i el Regne de França.",
            "Model d'Estat: Monarquia absoluta, unificada, centralitzada i de caràcter uniformista."
          ]
        },
        {
          title: "Bàndol Austriacista (Arxiduc Carles)",
          badge: "Model Pactista i Foral",
          points: [
            "Líder: Arxiduc Carles d'Àustria (fill de l'emperador Leopold I).",
            "Suport: Corona d'Aragó (Catalunya, Aragó, València i Mallorca).",
            "Model d'Estat: Respecte a les Constitucions, furs, corts i al marc confederal tradicional."
          ]
        },
        {
          title: "Aliança Internacional (Gran Aliança)",
          badge: "Equilibri Europeu",
          points: [
            "Integrants: Gran Bretanya, Holanda, Imperi Austríac, Portugal i Savoia.",
            "Objectiu: Evitar la unió de les corones de França i Espanya sota un mateix monarca borbó.",
            "Resolució: Retirada de suport a l'Arxiduc en heretar el tron imperial austríac (1711)."
          ]
        },
        {
          title: "Catalunya i la Diada de l'11 de Setembre",
          badge: "Resistència i Fin de l'Etapa",
          points: [
            "Defensa de les Constitucions i institucions autònomes per les institucions catalanes.",
            "Setge de Barcelona (1713-1714) per les tropes de Felip V comandades pel duc de Berwick.",
            "Capitulació l'11 de setembre de 1714: inici del nou règim absolutista i centralitzat."
          ]
        }
      ]
    },

    // 4. TEXTBLOCK 2: LA GUERRA DE SUCCESSIÓ
    {
      type: 'textBlock',
      title: "2. La Guerra de Successió Espanyola i el Canvi Dinàstic",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>El Conflicte Successori (1701-1714):</strong><br>
          La mort sense descendència de Carles II (1700), darrer rei de la casa d'Àustria que governava sota un model de monarquia autoritaria i pactista, va deslligar la <span class="bold-purple">Guerra de Successió Espanyola (1701-1714)</span>. El conflicte va ser alhora una conflagració internacional pel control de l'equilibri europeu i una guerra civil peninsular.
        </p>
        <p>
          La victòria de Felip V va significar l'establiment de la dinastia de Borbó a Espanya i la substitució del vell model confederal dels Àustries per una estructura estatal absolutista, centralitzada i administrativament unificada segons el patró francès.
        </p>
      `
    },

    // 5. FLOWCHART 1: DE LA GUERRA ALS DECRETS DE NOVA PLANTA
    {
      type: 'flowchart',
      title: "Esquema de Causalitat: De la Guerra de Successió als Decrets de Nova Planta",
      steps: [
        {
          badge: "1700",
          label: "Fi de la Casa d'Àustria",
          desc: "Mort de Carles II sense descendència. Disputa del tron entre Felip de Anjou (Borbó) i l'Arxiduc Carles (Habsburg)."
        },
        {
          badge: "1701-1714",
          label: "Guerra de Successió",
          desc: "Conflicte internacional i civil. La Corona d'Aragó combat al costat de l'Arxiduc Carles en defensa de les Constitucions."
        },
        {
          badge: "1707-1716",
          label: "Decrets de Nova Planta",
          desc: "Victòria de Felip V. Supressió dels furs, Corts i institucions d'Aragó, València, Catalunya i Mallorca."
        },
        {
          badge: "S. XVIII",
          label: "Estat Absolut Centralitzat",
          desc: "Imposició de les lleis castellanes, unificació fiscal, castellanització judicial i respecte únic als furs basco-navarresos."
        }
      ]
    },

    // 6. TEXTBLOCK 3: DECRETS DE NOVA PLANTA I CASTELLANITZACIÓ
    {
      type: 'textBlock',
      title: "3. Els Decrets de Nova Planta: Centralització, Fiscalitat i Imposició Lingüística",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>L'Abolició Foral i la Uniformitat de Castella:</strong><br>
          Com a retribució punitiva per haver-se oposat al seu domini, Felip V va promulgar entre 1707 i 1716 els <span class="bold-red">Decrets de Nova Planta</span> per als territoris de la Corona d'Aragó (València, Aragó, Catalunya i Mallorca). Aquests decrets van abolir les Corts, el Consell de Cent, la Generalitat i el dret públic autònom, imposant l'organització administrativa i les lleis de Castella. En canvi, els furs del País Basc i de Navarra es van respectar per la seva fidelitat inicial al rei.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Centralització Fiscal i Repressió Lingüística:</strong><br>
          <ul>
            <li><strong>Apropriació fiscal:</strong> La nova administració centralitzada es va apoderar del recapte directe dels impostos a la Corona d'Aragó, introduint nous cadastres i impostos únics.</li>
            <li><strong>Castellanització obligatòria:</strong> Es va decretar l'ús obligatori de la llengua castellana en l'ensenyament primari i secundari, així com en totes les causes, sentències i processos de les reials audiències i tribunals de justícia a Catalunya.</li>
          </ul>
        </p>
      `
    },

    // 7. MATRIU 2: COMPARACIÓ DE MODELS POLÍTICS DEL S. XVIII
    {
      type: 'matrix',
      title: "Matriu Comparativa: Models Polítics Internacionals del Segle XVIII",
      quadrants: [
        {
          title: "Monarquia Absoluta Centralista",
          badge: "Espanya / França",
          points: [
            "Concentració de tots els poders executiu, legislatiu i judicial en el Rei per dret diví.",
            "Decrets de Nova Planta: unificació jurídica, fiscal i administrativa d'arrel castellana.",
            "Supressió de les institucions autònomes de la Corona d'Aragó."
          ]
        },
        {
          title: "Despotisme Il·lustrat",
          badge: "Prússia, Àustria, Rússia, Espanya",
          points: [
            "Lema: «Tot per al poble però sense el poble».",
            "Reformes administratives, educatives i d'infraestructures per fer més eficaç l'Estat.",
            "Manteniment intacte de l'estructura estamental i de l'autoritat absoluta del monarca."
          ]
        },
        {
          title: "Monarquia Parlamentària",
          badge: "Anglaterra (Des de 1689)",
          points: [
            "Fi de l'absolutisme dels Estuard amb la Revolució Gloriosa de 1689.",
            "Guillem d'Orange jura la Declaració de Drets (Bill of Rights).",
            "Poder executiu limitat pel Parlament i representació d'una minoria de notables."
          ]
        },
        {
          title: "República Liberal Constitucional",
          badge: "Estats Units (Des de 1776)",
          points: [
            "Independència de les tretze colònies nord-americanes de la corona britànica.",
            "Redacció de la primera Constitució escrita de la història i Declaració de Drets.",
            "Sistema polític basat en els principis del liberalisme, la sobirania nacional i la divisió de poders."
          ]
        }
      ]
    },

    // 8. TEXTBLOCK 4: EL DESPOTISME IL·LUSTRAT DE CARLES III
    {
      type: 'textBlock',
      title: "4. El Despotisme Il·lustrat de Carles III i les Reformes de l'Estat",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>El Reformisme de Carles III (1759-1788):</strong><br>
          A mitjan segle XVIII, l'arribada al tron de <span class="bold-orange">Carles III</span> i l'acció dels seus ministres il·lustrats (Esquilache, Campomanes, Floridablanca) van obrir l'etapa del Despotisme Il·lustrat a Espanya. Sota la premisa de modernitzar el país sense cedir sobiranies, es van implementar importants reformes:
          <ul>
            <li><strong>Instrucció Pública i Ciència:</strong> Creació de les <em>Sociedades Económicas de Amigos del País</em> per difondre la instrucció primària obligatòria, les noves tècniques agràries i la formació en arts i oficis. Fundació d'Acadèmies científiques i foment de tertúlies en salons.</li>
            <li><strong>Reformes Econòmiques i Agromaterials:</strong> Difusió de les idees fisiòcrates, eliminació d'obstacles a la lliure circulació interior de blat i mercaderies, i establiment d'aranzels proteccionistes per blindar la indústria nacional davant la competència exterior.</li>
            <li><strong>Xarxa Radial de Transports:</strong> Construcció d'una xarxa radial de carreteres i camins amb centre a Madrid per articular el mercat interior i connectar les províncies.</li>
            <li><strong>Regalisme Eclesiàstic:</strong> Subordinació de l'Església a l'autoritat del Rei, control sobre els càrrecs eclesiàstics, limitació de la Inquisició i expulsió dels Jesuïtes (1767).</li>
          </ul>
        </p>
      `
    },

    // 9. MATRIU 3: MATRIU DE REFORMES DE CARLES III
    {
      type: 'matrix',
      title: "Matriu de les Reformes del Despotisme Il·lustrat de Carles III",
      quadrants: [
        {
          title: "Economia i Proteccionisme",
          badge: "Modernització",
          points: [
            "Decret de Lliure Comerç amb Amèrica (1778) per a diversos ports peninsulars.",
            "Llibertat de circulació de mercaderies i blat a l'interior de la Península.",
            "Aranzels proteccionistes per defensar la manufactura autòctona."
          ]
        },
        {
          title: "Educació i Societat",
          badge: "Foment Útil",
          points: [
            "Creació de les Sociedades Económicas de Amigos del País.",
            "Impuls a l'educació primària obligatòria i escoles d'arts i oficis.",
            "Foment de la Ciència, les Acadèmies i les tertúlies literàries."
          ]
        },
        {
          title: "Infraestructures i Transports",
          badge: "Centralització",
          points: [
            "Disseny i construcció de la xarxa radial de camins amb capital a Madrid.",
            "Millora de les comunicacions per vertebrar el mercat estatal.",
            "Impuls a la construcció naval i a les obres públiques."
          ]
        },
        {
          title: "Relació amb l'Església",
          badge: "Regalisme",
          points: [
            "Afermament del regalisme: control reial sobre els càrrecs eclesiàstics.",
            "Limitació del poder d'actuació de la Inquisició.",
            "Expulsió dels Jesuïtes (1767) per reforçar el poder de la Corona."
          ]
        }
      ]
    },

    // 10. TEXTBLOCK 5: EL COMERÇ COLONIAL I CATALUNYA
    {
      type: 'textBlock',
      title: "5. L'Imperi Colonial, les Indianes i l'Enlairament Econòmic de Catalunya",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>L'Estructura del Comerç Colonial Amèrica-Espanya:</strong><br>
          El comerç colonial es mantenia sota un rigorós monopoli exclusiu amenaçat per la pirateria i el contraban. Les plantacions agràries americanes s'explotaven mitjançant la mà d'obra esclava procedent d'Àfrica. Amèrica exportava or, argent, sucre, tabac, cacau i tints, mentre importava productes manufacturats europeus.
        </p>
        <p>
          <strong>L'Enlairament de la Burgesia Comercial i Industrial Catalana:</strong><br>
          La promulgació del <span class="bold-green">Decret de Lliure Comerç amb Amèrica (1778)</span> va permetre al port de Barcelona comerciar directament amb les colònies, desencadenant una gran expansió econòmica:
          <ul>
            <li><strong>Exportacions catalanes:</strong> Venda massiva de vi, aiguardents, fruita seca i sobretot <span class="bold-green">indianes</span> (teixits de cotó estampats).</li>
            <li><strong>Importacions colonials:</strong> Entrada de cotó en brut, sucre i cacau.</li>
            <li><strong>La figura de l'Indià:</strong> Comerciants enriquits a Amèrica que retornaven a Catalunya repatriant fons. Aquesta acumulació de capital colonial, sumada als excedents agraris de la millora agrícola, va facilitar la transició cap a la revolució industrial del segle XIX.</li>
          </ul>
        </p>
      `
    },

    // 11. FLOWCHART 2: ENLAIRAMENT DE LA INDÚSTRIA CATALANA
    {
      type: 'flowchart',
      title: "Esquema d'Enlairament Econòmic de Catalunya al Segle XVIII",
      steps: [
        {
          badge: "Agrari",
          label: "Especialització Agrícola",
          desc: "Augment de la producció de vins, aiguardents i fruita seca per part de pagesos benestants."
        },
        {
          badge: "1778",
          label: "Decret de Lliure Comerç",
          desc: "Carles III autoritza el port de Barcelona a comerciar directament amb les colònies d'Amèrica."
        },
        {
          badge: "Comercial",
          label: "Exportació d'Indianes i Repatriació",
          desc: "Venda massiva de teixits de cotó estampats i retorn de capitals dels indians enriquits a les Antilles."
        },
        {
          badge: "Industrial",
          label: "Revolució Industrial Catalana",
          desc: "Reinversió de capitals agraris i colonials en la mecanització tèxtil del segle XIX."
        }
      ]
    },

    // 12. TIMELINE: CRONOLOGIA DEL SEGLE XVIII
    {
      type: 'timeline',
      title: "Cronologia de Monarques, Fets Històrics i Art del Segle XVIII",
      events: [
        {
          year: "1665-1700",
          badge: "Casa d'Àustria",
          icon: "fa-crown",
          event: "Reinat de Carles II",
          desc: "Darrer monarca Habsburg a Espanya. Etapa de monarquia autoritària que acaba sense descendència."
        },
        {
          year: "1689",
          badge: "Anglaterra",
          icon: "fa-landmark",
          event: "Revolució Gloriosa i Bill of Rights",
          desc: "Caiguda dels Estuard i aprovació de la Declaració de Drets per Guillem d'Orange, instaurant la monarquia parlamentària."
        },
        {
          year: "1700-1746",
          badge: "Primer Borbó",
          icon: "fa-shield",
          event: "Reinat de Felip V",
          desc: "Guanya la Guerra de Successió (1701-1714) e imposa el centralisme absolutista d'inspiració francesa."
        },
        {
          year: "1707-1716",
          badge: "Nova Planta",
          icon: "fa-file-signature",
          event: "Decrets de Nova Planta",
          desc: "Abolició dels furs i Corts de València (1707), Aragó (1707/1711), Catalunya (1716) i Mallorca (1715)."
        },
        {
          year: "1746-1759",
          badge: "Monarquia Absoluta",
          icon: "fa-user-tie",
          event: "Reinat de Ferran VI",
          desc: "Etapa de neutralitat exterior i consolidació de l'administració centralitzada de la Hisenda."
        },
        {
          year: "1754",
          badge: "Art",
          icon: "fa-palette",
          event: "Oració a l'hort de Getsemaní (Salzillo)",
          desc: "Escultura en fusta policromada de Francisco Salzillo, exponent de la imagineria barroca/neoclàssica espanyola."
        },
        {
          year: "1759-1788",
          badge: "Despotisme Il·lustrat",
          icon: "fa-sun",
          event: "Reinat de Carles III",
          desc: "Apogeu del reformisme estatista, creació de les Sociedades Económicas i impuls a la xarxa radial de camins."
        },
        {
          year: "1766",
          badge: "Art",
          icon: "fa-image",
          event: "El gronxador (Fragonard)",
          desc: "Obra mestra del Rococó francès de Jean-Honoré Fragonard (Wallace Collection) que reflecteix el gust aristocràtic."
        },
        {
          year: "1776",
          badge: "Revolució",
          icon: "fa-flag",
          event: "Independència dels Estats Units",
          desc: "Proclamació d'independència de les tretze colònies nord-americanes, redacció de la primera Constitució escrita i Declaració de Drets."
        },
        {
          year: "1778",
          badge: "Comerç Colonial",
          icon: "fa-ship",
          event: "Decret de Lliure Comerç amb Amèrica",
          desc: "Carles III obre diversos ports peninsulars, inclòs el de Barcelona, al comerç directe amb les colònies americanes."
        },
        {
          year: "1786-1787",
          badge: "Art",
          icon: "fa-brush",
          event: "La tardor o la verema (Goya)",
          desc: "Lienzo de Francisco de Goya pintat per als cartrons de tapissos del Reial Lloc de El Pardo (Museu del Prado)."
        },
        {
          year: "1778-1808",
          badge: "Crisi de l'Antic Règim",
          icon: "fa-triangle-exclamation",
          event: "Reinat de Carles IV",
          desc: "Etapa final del segle XVIII condicionada per l'esclat de la Revolució Francesa (1789) i el col·lapse de l'absolutisme."
        }
      ]
    },

    // 13. SOURCES: FONTS PRIMÀRIES I PERSONATGES
    {
      type: 'sources',
      quoteTitle: "Font Primària: Reial Decret de Nova Planta de Catalunya (1716)",
      quoteText: "«Havent considerat haver perdut els regnes d'Aragó i de València, i tots els seus habitants, per la rebel·lió que van cometre... he jutjat convenient abolir i derogar enterament els referits furs, privilegis, pràctiques i costums... reduint tots els meus regnes d'Espanya a la uniformitat de les mateixes lleis de Castella.»",
      quoteAuthor: "Felip V de Borbó, Reial Decret de Nova Planta (1707-1716)",
      charName: "Carles III de Borbó (1716-1788)",
      charRole: "Rei d'Espanya i Dèspota Il·lustrat",
      charDesc: "Monarca de la dinastia Borbó que va encarnar el Despotisme Il·lustrat a Espanya. Envoltat de ministres reformistes com Campomanes, Floridablanca o Esquilache, va afavorir la liberalització del comerç colonial (1778), l'expansió de les Sociedades Económicas de Amigos del País, la xarxa radial de carreteres i el control regalista sobre l'Església."
    }
  ]
});
