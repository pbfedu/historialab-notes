if (!window.HISTORIALAB_TEMES) { window.HISTORIALAB_TEMES = []; }

window.HISTORIALAB_TEMES.push({
  id: 'tema5_guerra_ultramar',
  unitNum: 5,
  title: "Capítol 5: La Guerra d'Ultramar (1868-1898)",
  subtitle: "Insurreccions a Cuba i Filipines, les tàctiques militars, les quintes, la intervenció dels Estats Units i la pèrdua de l'imperi colonial",
  icon: "fa-anchor",
    coverGradient: 'linear-gradient(135deg, #091fea, #060362)',

  xp: 500,
  sections: [
    {
      type: 'callouts',
      title: "Idees Principals i Claus d'Examen PAU (La Guerra d'Ultramar)",
      items: [
        {
          header: "1. Incompliments i Tensions Comercials",
          content: "L'incompliment de les promeses de la Pau de Zanjón (1878) i l'aprovació de l'Aranzel Cánovas (1891) van perjudicar el comerç sucrer amb els Estats Units. Això va afavorir la creació del Partido Revolucionario Cubano (1893) per José Martí i l'esclat del 'Grito de Baire' (1895).",
          color: "orange",
          icon: "fa-fire"
        },
        {
          header: "2. Reconcentració i Autonomia Tàrdia",
          content: "Davant la ineficàcia de la negociació de Martínez Campos, el general Valeriano Weyler va aplicar la reconcentració forçosa de camperols, provocant una catàstrofe humana. El 1897, el general Ramón Blanco va decretar tardanament l'Autonomia de Cuba, rebutjada pels rebels.",
          color: "blue",
          icon: "fa-shield-halved"
        },
        {
          header: "3. La Injustícia Social de les Quintes",
          content: "El sistema de reclutament forçós permetia a les famílies riques eximir els seus fills pagant 1.500 pessetes de redempció en metàl·lic. Les classes populars van anar en massa a combatre, morint massivament per febre groga i malària.",
          color: "purple",
          icon: "fa-users-slash"
        },
        {
          header: "4. Intervenció dels EUA i Tractat de París (1898)",
          content: "L'explosió de l'USS Maine va servir de pretext als Estats Units per declarar la guerra. Després de les derrotes navals de Cavite i Santiago de Cuba, el Tractat de París de 1898 va posar fi al domini espanyol a Cuba, Puerto Rico, Filipines i Guam.",
          color: "green",
          icon: "fa-ship"
        }
      ]
    },

    {
      type: 'textBlock',
      title: "1. Els Orígens del Conflicte a Cuba: De la Pau de Zanjón a l'Aranzel Cánovas (1868-1894)",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>De la Guerra dels Deu Anys a la Pau de Zanjón (1868-1878):</strong><br>
          La primera gran insurrecció independentista cubana va ser la <span class="bold-purple">Guerra dels Deu Anys (1868-1878)</span>, tancada amb la signatura de la <span class="bold-blue">Pau de Zanjón (1878)</span> pel general Arsenio Martínez Campos. L'acord incloïa l'amnistia als insurgents, l'abolició progressiva de l'esclavitud i la promessa de reformes polítiques i administratives similars a les de Puerto Rico, amb autonomia i representació a les Corts espanyoles.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>L'Estructura Política a les Antilles:</strong><br>
          L'oposició dels latifundistes del sucre i comerciants peninsulars va frenar l'aplicació de les reformes. Això va dividir la societat cubana en dos grans blocs:
          <ul>
            <li><strong>Partido Autonomista:</strong> Format majoritàriament per cubans criolls progressistes que reclamaven l'autogovern de l'illa, la llibertat comercial i representació parlamentària a Madrid.</li>
            <li><strong>Unión Constitucional:</strong> Formada per espanyols peninsulars residents a Cuba i propietaris de plantacions, oposats a qualsevol concessió autonòmica.</li>
          </ul>
        </p>
        <p style="margin-bottom: 0.75rem;">
          L'any 1879 es va produir un nou intent insurreccional, la <span class="bold-red">Guerra Chiquita</span>, ràpidament sufocada per la manca d'armament. Posteriorment, el govern liberal de Sagasta va decretar l'<span class="bold-green">abolició definitiva de l'esclavitud el 1886</span>.
        </p>
        <p>
          <strong>L'Impacte Econòmic de l'Aranzel Cánovas (1891):</strong><br>
          L'any 1891, el govern espanyol va aprovar l'<span class="bold-orange">Aranzel Cánovas</span>, incrementant les tarifes als productes importats a Cuba que no procedissin de la Península. Aquesta mesura va perjudicar directament els Estats Units, que el 1894 compraven el 88,1% de les exportacions de sucre cubà i venien el 32% dels seus productes a l'illa. El president americà William McKinley va protestar i va amenaçar de bloquejar les compres de sucre. Davant la fusió de la discòrdia econòmica i política, <span class="bold-purple">José Martí</span> va fundar el <span class="bold-purple">Partido Revolucionario Cubano (1893)</span> per liderar la lluita per la independència.
        </p>
      `
    },

    {
      type: 'matrix',
      title: "Matriu Comparativa: Actors i Partits Polítics a Cuba (Post-Zanjón)",
      quadrants: [
        {
          title: "Partido Autonomista",
          badge: "Criolls Progressistes",
          points: [
            "Compost per cubans criolls d'ideologia liberal progressista.",
            "Demanda d'autonomia política i administrativa mantenint la sobirania.",
            "Reivindicació de la llibertat de comerç i representació a les Corts."
          ]
        },
        {
          title: "Unión Constitucional",
          badge: "Peninsulars Intransigents",
          points: [
            "Integrat per espanyols peninsulars i grans propietaris sucrers.",
            "Oposició radical a les reformes autonòmiques i al lliure comerç.",
            "Defensa acèrrima del centralisme i del domini de la metròpoli."
          ]
        },
        {
          title: "Partido Revolucionario Cubano",
          badge: "José Martí (1893)",
          points: [
            "Fundat per José Martí el 1893 per aconseguir la independència total.",
            "Unificació dels diferents cabdills militars revolutionaries de l'illa.",
            "Cerca de suport diplomàtic internacional i finançament exterior."
          ]
        },
        {
          title: "Interessos dels Estats Units",
          badge: "President McKinley",
          points: [
            "Principals compradors del sucre cubà (88,1% de les exportacions el 1894).",
            "Protesta contra l'Aranzel Cánovas de 1891 per les mesures proteccionistes.",
            "Amenaça de tancament de mercat i suport progressiu als insurgents."
          ]
        }
      ]
    },

    {
      type: 'textBlock',
      title: "2. La Gran Insurrecció de 1895 i les Estratègies dels Generals Espanyols",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>El 'Grito de Baire' (1895) i el Comandament de Martínez Campos:</strong><br>
          El febrer de 1895 va esclatar l'aixecament generalitzat del <span class="bold-red">Grito de Baire</span>, organitzat pel Partido Revolucionario Cubano. Cánovas del Castillo va enviar un exèrcit dirigit pel general <span class="bold-blue">Arsenio Martínez Campos</span>. Aquest defensava que la pacificació requeria combinar la força militar amb reformes polítiques. En comprovar la ineficàcia de la negociació davant l'avanç rebel, Martínez Campos va dimitir.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>La Tàctica de Reconcentració del General Weyler (1896):</strong><br>
          Martínez Campos va ser substituït pel general <span class="bold-red">Valeriano Weyler</span>, qui va aplicar una política de fètria repressió. Per tallar els subministraments rurals als guerrillers mambisos, Weyler va ordenar la <span class="bold-red">Reconcentració de camperols</span>, obligant la població civil del camp a recloure's en poblacions tancades. La mesura va devastar les plantacions i va causar la mort de milers de civils per fam, insalubritat i epidèmies.
        </p>
        <p>
          <strong>L'Autonomia Tàrdia del General Ramón Blanco (1897):</strong><br>
          Després de l'assassinat de Cánovas el 1897, el govern liberal de Sagasta va enviar el general <span class="bold-green">Ramón Blanco</span> amb una posició conciliadora. Blanco va promulgar el Reial Decret d'<span class="bold-green">Autonomia de Cuba (1897)</span>, concedint el sufragi universal masculí, la igualtat de drets polítics entre insulars i peninsulars, i l'autonomia aranzelària. Tanmateix, la mesura va arribar massa tard i els independentistes, recolzats per armaments dels EUA, la van rebutjar.
        </p>
      `
    },

    {
      type: 'flowchart',
      title: "Esquema de Causalitat: Evolució del Conflicte i Generals a Cuba (1895-1897)",
      steps: [
        {
          badge: "Febrer 1895",
          label: "Grito de Baire",
          desc: "Aixecament generalitzat independentista organitzat per José Martí."
        },
        {
          badge: "1895",
          label: "Martínez Campos",
          desc: "Intenta combinar la paciació militar amb negociació política; dimiteix per manca de resultats."
        },
        {
          badge: "1896",
          label: "Valeriano Weyler",
          desc: "Aplica la Reconcentració de camperols en poblacions tancades, causant milers de morts civils."
        },
        {
          badge: "1897",
          label: "Ramón Blanco i Autonomia",
          desc: "Promulga el Decret d'Autonomia, però els rebels la rebutgen exigint la independència total."
        }
      ]
    },

    {
      type: 'textBlock',
      title: "3. La Injustícia Social de les Quintes i les Condicions dels Soldats",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>El Sistema de Lleves i la Redempció en Metàl·lic:</strong><br>
          El reclutament obligatori per enviar tropes a Ultramar es realitzava mitjançant el sistema de <span class="bold-orange">quintes</span>. Aquesta legislació permetia l'exempció del servei militar mitjançant la <span class="bold-orange">redempció en metàl·lic</span>, fixada en 1.500 pessetes. Aquesta xifra era inabastable per a les famílies de classe treballadora, de manera que només els nois de les capes populars anaven al front, mentre que els fills de les classes benestants en quedaven exempts.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Les Penoses Condicions al Front Colonial:</strong><br>
          Els soldats enviats eren nois de 15 i 16 anys sense cap entrenament militar previ. Les condicions a la manigua cubana eren dramàtiques:
          <ul>
            <li><strong>Alimentació defectuosa:</strong> Dieta insalubre basada en galetes fets a malbé, pa dur, arròs i carn podria.</li>
            <li><strong>Devastació per malalties tropicals:</strong> La majoria de les baixes espanyoles no es van produir en combat, sinó per epidèmies de febre groga, febre tifoide, disenteria i malària (transmesa pel mosquit <em>Claviger</em>).</li>
            <li><strong>Testimonis d'època:</strong> Metges militars com <span class="bold-purple">Santiago Ramón y Cajal</span> i polítics com <span class="bold-red">Pablo Iglesias</span> (*El Socialista*) van denunciar la tragèdia dels joves convertits en espectres vivents als hospitals de la Havana.</li>
          </ul>
        </p>
      `
    },

    {
      type: 'matrix',
      title: "Matriu Comparativa: Estratègies dels Generals Espanyols a Cuba (1895-1897)",
      quadrants: [
        {
          title: "Arsenio Martínez Campos (1895)",
          badge: "Pacificació Politica",
          points: [
            "Defensa de la via militar combinada amb negociacions polítiques.",
            "Signant de la Pau de Zanjón el 1878.",
            "Dimissió per la impossibilitat d'aturar l'aixecament amb mètodes moderats."
          ]
        },
        {
          title: "Valeriano Weyler (1896)",
          badge: "Repressió i Reconcentració",
          points: [
            "Reconcentració forçosa de camperols en poblacions aïllades.",
            "Objectiu: tallar els subministraments rurals als mambisos.",
            "Conseqüència: milers de morts civils per fam i malalties tropicals."
          ]
        },
        {
          title: "Ramón Blanco (1897)",
          badge: "Autonomia i Conciliació",
          points: [
            "Enviat pel govern liberal per desmuntar la pressió internacional.",
            "Decret d'Autonomia de Cuba (1897): sufragi universal masculí i autonomia aranzelària.",
            "Igualtat de drets polítics entre insulars i peninsulars."
          ]
        },
        {
          title: "Resposta dels Mambisos",
          badge: "Rebuig i Lluita Armada",
          points: [
            "La insurrecció ja comptava amb un ampli suport social i reconeixement.",
            "Subministrament continuat d'armes per part dels Estats Units.",
            "Rebuig absolut a la proposta autonòmica de 1897, exigint la independència."
          ]
        }
      ]
    },

    {
      type: 'textBlock',
      title: "4. La Insurrecció a les Filipines: De la Liga Filipina al Katipunan (1892-1897)",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>El Context Colonial de l'Arxipèlag:</strong><br>
          A les Filipines, la presència de la població espanyola era molt minsa i el domini colonial es basava en el control de les ordes religioses (missioners) i en el monopoli del tabac, actuant Manila com a port comercial estratègic amb Àsia.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Dos Moviments d'Emancipació:</strong><br>
          <ul>
            <li><strong>Liga Filipina (1892):</strong> Fundada per l'intel·lectual mestís <span class="bold-blue">José Rizal</span>, reclamava reformes administratives, la fi dels abusos del clergat i la igualtat drets de forma pacífica.</li>
            <li><strong>Katipunan (1896):</strong> Organització clandestina radical que va iniciar la insurrecció armada per assolir la independència immediata.</li>
          </ul>
        </p>
        <p>
          <strong>Repressió i Execució de José Rizal (1896):</strong><br>
          L'esclat de la revolta a la província de Manila el 1896 va ser duresment reprès per les autoritats espanyoles, que van condemnar a mort i afusellar <span class="bold-red">José Rizal (1896)</span>, convertint-lo en màrtir del nacionalisme filipí. El 1897, un acord de negociació va permetre una pau temporal mitjançant el pagament d'indemnitzacions als caps rebels.
        </p>
      `
    },

    {
      type: 'matrix',
      title: "Matriu Comparativa: Corrents de l'Independentisme Filipí (1892-1897)",
      quadrants: [
        {
          title: "Liga Filipina (1892)",
          badge: "José Rizal",
          points: [
            "Fundada el 1892 per l'intel·lectual José Rizal.",
            "Via pacífica: igualtat de drets i fi dels abusos de les ordes religioses.",
            "Suport de la burgesia mestissa hispanoparlant."
          ]
        },
        {
          title: "Katipunan (1896)",
          badge: "Insurrecció Armada",
          points: [
            "Organització clandestina radical i revolucionària.",
            "Inici de la rebel·lió armada l'any 1896 a Manila.",
            "Suport dels indígenes i dels sectors populars rurals."
          ]
        },
        {
          title: "Repressió Espanyola",
          badge: "Execució de Rizal",
          points: [
            "Resposta militar immediata de l'exèrcit colonial espanyol.",
            "Execució per afusellament de José Rizal l'any 1896.",
            "Conversió de Rizal en símbol i màrtir de la independència."
          ]
        },
        {
          title: "Pacificació de 1897",
          badge: "Acord de Biak-na-Bató",
          points: [
            "Pacte del govern espanyol amb els caps insurreccionals.",
            "Pagament d'indemnitzacions i exili temporal dels líders rebels.",
            "Reobertura del conflicte el 1898 amb la intervenció dels EUA."
          ]
        }
      ]
    },

    {
      type: 'textBlock',
      title: "5. La Intervenció dels Estats Units, l'USS Maine i la Desfeta de 1898",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>El Pretext de l'USS Maine i la Premsa Groga:</strong><br>
          Els Estats Units consideraven el Carib la seva àrea d'expansió natural. El febrer de 1898, el cuirassat nord-americà <span class="bold-blue">USS Maine</span> va explotar al port de l'Havana, provocant la mort de 260 mariners. La premsa groga nord-americana (encapçalada per Hearst i Pulitzer) va acusar Espanya de la voladura, manipulant l'opinió pública per exigir la guerra.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Ultimàtum i Desfeta Naval (1898):</strong><br>
          El president William McKinley va enviar un ultimàtum exigint la fi de la reconcentració i la mediació nord-americana. En ser rebutjat per Espanya, es va declarar la guerra. Les operacions navals van evidenciar l'enorme superioritat tecnològica dels EUA:
          <ul>
            <li><strong>Batalla de Cavite (Filipines, 1 de maig de 1898):</strong> La flota nord-americana va anihilar l'esquadra espanyola al Pacífic.</li>
            <li><strong>Batalla de Santiago de Cuba (3 de juliol de 1898):</strong> Destrucció completa de la flota del contraalmirall Cervera en intentar sortir del port de Santiago.</li>
          </ul>
        </p>
        <p>
          <strong>El Tractat de París (1898) i la Venda a Alemanya (1899):</strong><br>
          El desembre de 1898 es va signar el <span class="bold-red">Tractat de París</span>, pel qual Espanya renunciava a la sobirania sobre Cuba, Puerto Rico, Filipines i l'illa de Guam, que van passar a domini nord-americà. L'any 1899, incapaç de defensar les darreres illes del Pacífic, Espanya va vendre les illes Marianes, Carolines i Palau a l'Imperi Alemany.
        </p>
      `
    },

    {
      type: 'flowchart',
      title: "Esquema de Causalitat: De la Voladura del Maine al Tractat de París (1898)",
      steps: [
        {
          badge: "Febrer 1898",
          label: "Explosió de l'USS Maine",
          desc: "Voladura del cuirassat a l'Havana (260 morts). Campanya de la premsa groga als EUA."
        },
        {
          badge: "Abril 1898",
          label: "Declaració de Guerra",
          desc: "McKinley envia un ultimàtum; Espanya el rebutja i s'inicia el conflicte hispano-nord-americà."
        },
        {
          badge: "Maig-Juliol 1898",
          label: "Derrotes de Cavite i Santiago",
          desc: "Destrucció completa de les esquadres navals espanyoles a les Filipines i a Cuba."
        },
        {
          badge: "1898-1899",
          label: "Tractat de París i Venda a Alemanya",
          desc: "Cessió de Cuba, Puerto Rico, Filipines i Guam als EUA; venda de les darreres illes a Alemanya (1899)."
        }
      ]
    },

    {
      type: 'textBlock',
      title: "6. La Societat Catalana davant la Guerra i el Tancament de Caixes (1899)",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>Posicionaments Socials a Catalunya:</strong><br>
          La societat catalana va mostrar actituds contraposades davant el conflicte colonial:
          <ul>
            <li><strong>Elits Econòmiques:</strong> Organitzacions com <span class="bold-purple">Foment del Treball Nacional</span> defensaven l'espanyolitat de les colònies per mantenir el mercat reservat als teixits de cotó catalans.</li>
            <li><strong>Classes Populars:</strong> Mantenien una oposició radical a la guerra a causa de la injustícia del sistema de quintes.</li>
            <li><strong>Oposició Política:</strong> Republicans federals (Pi i Margall) i socialistes (Pablo Iglesias) van denunciar el sacrifici inútil dels soldats.</li>
          </ul>
        </p>
        <p>
          <strong>El Tancament de Caixes (1899) i el Catalansime Polític:</strong><br>
          Per pagar l'enorme deute de guerra, el ministre Fernández Villaverde va augmentar els impostos directes. La tardor de 1899, els comerciants i industrials de Barcelona van protagonitzar la vaga de tributs del <span class="bold-red">Tancament de Caixes</span>, encapçalada per l'alcalde <span class="bold-green">Bartomeu Robert</span>. La repressió governamental va provocar la dimissió de l'alcalde i l'empresonament de comerciants. El desengany amb els partits dinàstics va fer que la burgesia catalana s'allunyés del tornisme i fundés la <span class="bold-green">Lliga Regionalista l'any 1901</span>.
        </p>
      `
    },

    {
      type: 'timeline',
      title: "Cronologia de la Guerra d'Ultramar i la Pèrdua de les Colònies (1868-1899)",
      events: [
        {
          year: "1868-1878",
          badge: "Cuba",
          icon: "fa-shield-halved",
          event: "Guerra dels Deu Anys a Cuba",
          desc: "Primer gran conflicte independentista tancat amb la Pau de Zanjón negociada per Martínez Campos."
        },
        {
          year: "1878",
          badge: "Pau",
          icon: "fa-handshake",
          event: "Signatura de la Pau de Zanjón",
          desc: "Promesa d'amnistia, abolició de l'esclavitud i representació a les Corts espanyoles."
        },
        {
          year: "1879",
          badge: "Insurrecció",
          icon: "fa-fire",
          event: "La Guerra Chiquita",
          desc: "Nou intent d'insurrecció cubana derrotat ràpidament per la manca d'armament i suport."
        },
        {
          year: "1886",
          badge: "Esclavitud",
          icon: "fa-handshake-slash",
          event: "Abolició Definitiva de l'Esclavitud a Cuba",
          desc: "Aprovació de la fi de l'esclavitud sota el govern liberal de Práxedes Mateo Sagasta."
        },
        {
          year: "1891",
          badge: "Aranzel",
          icon: "fa-coins",
          event: "Aprovació de l'Aranzel Cánovas",
          desc: "Pujada de tarifes als productes importats a Cuba no peninsulars, provocant la protesta dels EUA."
        },
        {
          year: "1892",
          badge: "Filipines",
          icon: "fa-book-open",
          event: "Fundació de la Liga Filipina",
          desc: "José Rizal organitza la Liga Filipina com a moviment reformista i pacífic."
        },
        {
          year: "1893",
          badge: "Independentisme",
          icon: "fa-flag",
          event: "Fundació del Partido Revolucionario Cubano",
          desc: "José Martí funda el partit per unificar els cabdills i organitzar la insurrecció armada."
        },
        {
          year: "1895",
          badge: "Grito de Baire",
          icon: "fa-burst",
          event: "Inici de la Guerra d'Independència Cubana",
          desc: "Aixecament generalitzat el 24 de febrer de 1895 organitzat per José Martí."
        },
        {
          year: "1896",
          badge: "Reconcentració",
          icon: "fa-tent-arrow-down-to-line",
          event: "Reconcentració de Weyler i Rebel·lió del Katipunan",
          desc: "Weyler aïlla la població rural cubana; insurrecció del Katipunan i afusellament de José Rizal."
        },
        {
          year: "1897",
          badge: "Autonomia",
          icon: "fa-scroll",
          event: "Decret d'Autonomia de Cuba",
          desc: "El general Ramón Blanco aprova el sufragi universal i l'autonomia aranzelària, que arriba tard."
        },
        {
          year: "Febrer 1898",
          badge: "Maine",
          icon: "fa-ship",
          event: "Explosió de l'USS Maine a l'Havana",
          desc: "Voladura del cuirassat nord-americà (260 morts) que serveix de pretext als EUA per a la intervenció."
        },
        {
          year: "Maig-Juliol 1898",
          badge: "Batalles Navals",
          icon: "fa-skull",
          event: "Derrotes de Cavite i Santiago de Cuba",
          desc: "Destrucció de l'armada espanyola a les Filipines i a Cuba per l'armada dels Estats Units."
        },
        {
          year: "Desembre 1898",
          badge: "Tractat",
          icon: "fa-file-signature",
          event: "Signatura del Tractat de París",
          desc: "Espanya renuncia a la sobirania de Cuba, Puerto Rico, Filipines i Guam en favor dels EUA."
        },
        {
          year: "1899",
          badge: "Venda i Protesta",
          icon: "fa-store-slash",
          event: "Venda de les darreres illes a Alemanya i Tancament de Caixes",
          desc: "Venda de les Marianes, Carolines i Palau a Alemanya; vaga de tributs a Barcelona encapçalada pel batlle Robert."
        }
      ]
    },

    {
      type: 'sources',
      quoteTitle: "Font Primària: Testimoni de la Reconcentració i del Reclutament (1896-1898)",
      quoteText: "«Da tristeza comprobar en qué estado llegan las expediciones españolas. Son chavales de quince y dieciseis años que nunca hasta ahora han empuñado un fusil. No saben ni por qué se dispara... El reclutamiento es forzoso, no han podido pagar las mil quinientas pesetas de la redención en metálico... Los soldados recorren leguas infinitas con los pies liados en tiras de camisa. Alpargatas podridas, galletas mohosas. Santiago Ramón y Cajal, médico militar, levantaba acta de los peligros que acechaban al soldado en la manigua.»",
      quoteAuthor: "Manuel Leguineche, Yo pondré la guerra (Testimonis de les Quintes)",
      charName: "José Martí y Pérez (1853-1895)",
      charRole: "Poeta, Intel·lectual i Líder de la Independència de Cuba",
      charDesc: "Pensador i escriptor cubà, fundador del Partido Revolucionario Cubano l'any 1893. Va aconseguir unificar els diferents sectors independentistes i organitzar l'aixecament del 'Grito de Baire' el 1895. Va morir en combat a la Batalla de Dos Ríos el maig de 1895, convertint-se en l'heroi nacional de la independència cubana."
    }
  ]
});
