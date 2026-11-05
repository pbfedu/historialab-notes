if (!window.HISTORIALAB_TEMES) { window.HISTORIALAB_TEMES = []; }

window.HISTORIALAB_TEMES.push({
  id: 'tema4_restauracio',
  unitNum: 4,
  title: "El Sistema Polític de la Restauració Borbònica (1875-1902)",
  subtitle: "Del Manifest de Sandhurst i la Constitució de 1876 al bipartidisme, el caciquisme i les forces d'oposició",
  icon: "fa-building-columns",
  coverGradient: 'linear-gradient(135deg, #df921f, #966605)',
  xp: 500,
  sections: [
    // 1. QUADRES D'ÈMFASI (CALLOUTS): IDEES PRINCIPALS I CLAUS PAU
    {
      type: 'callouts',
      title: "Idees Principals i Claus d'Examen PAU (La Restauració Borbònica)",
      items: [
        {
          header: "1. El Disseny Canovista i el Civilisme",
          content: "Antonio Cánovas del Castillo va dissenyar un nou model polític liberal conservador inspirat en el sistema britànic per superar l'estabilitat precària, el partidisme excloent i l'intervencionisme militar (espadons). L'exèrcit es va subordinar al poder civil (civilisme, ordre de 1875).",
          color: "orange",
          icon: "fa-shield-halved"
        },
        {
          header: "2. La Constitució de 1876",
          content: "Text doctrinari, flexible i conservador basat en la sobirania compartida entre el Rei i les Corts. Atorga un ampli poder moderador a la Corona, estableix Corts bicamerals, la confessionalitat catòlica de l'Estat (amb tolerància privada) i el centralisme administratiu.",
          color: "blue",
          icon: "fa-scroll"
        },
        {
          header: "3. Bipartidisme i Frau Electoral",
          content: "Alternança pacífica entre el Partit Liberal-Conservador (Cánovas) i el Partit Liberal-Fusionista (Sagasta), consolidada al Pacte del Pardo (1885). El torn no es basava en la voluntat popular, sinó en la farsa de l'encasellat, el caciquisme i la tupinada.",
          color: "purple",
          icon: "fa-check-to-slot"
        },
        {
          header: "4. Forces Polítiques Excloses del Sistema",
          content: "Marginació de les opcions d'oposició: carlins (reorganitzats en la Comunió Tradicionalista), republicans (dividits en federals, unitaris, radicals i possibilistes), moviment obrer (socialisme del PSOE/UGT i anarquisme) i el naixent catalanisme polític.",
          color: "green",
          icon: "fa-users-slash"
        }
      ]
    },

    // 2. TEXTBLOCK 1: LA RESTAURACIÓ I EL DISSENY CANOVISTA
    {
      type: 'textBlock',
      title: "1. La Restauració Borbònica i el Disseny Polític d'Antonio Cánovas del Castillo",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>El Retorn de la Dinastia Borbònica (1874-1875):</strong><br>
          Després del col·lapse del Sexenni Democràtic, <span class="bold-purple">Antonio Cánovas del Castillo</span> va preparar el retorn d'Alfons XII (fill d'Isabel II) mitjançant el <span class="bold-blue">Manifest de Sandhurst (1 de desembre de 1874)</span>, en què el jove príncep es va presentar davant la Nació com un monarca liberal, constitucional, catòlic i d'ordre. Tot i que Cánovas volia una restauració estrictament civil, el pronunciament militar del general <span class="bold-orange">Arsenio Martínez Campos a Sagunt (29 de desembre de 1874)</span> va accelerar la proclamació d'Alfons XII com a rei d'Espanya.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Objectius i Pilars del Sistema Canovista:</strong><br>
          Cánovas del Castillo (líder del Partit Alfonsí) va assumir la regència provisional amb la determinació d'acabar amb els tres problemes endèmics del liberalisme espanyol precedent: el caràcter excloent dels partits, la constant intromissió dels militars en la política i la freqüència dels enfrontaments civils. Per aconseguir l'estabilitat, va fixar tres eixos fonamentals:
          <ul>
            <li><strong>El Civilisme:</strong> Subordinació de l'exèrcit al poder civil (Reial Ordre de 1875). Es va desmilitaritzar la política concedint a les forces armades autonomia interna i un pressupost elevat a canvi d'eliminar els pronunciaments.</li>
            <li><strong>La Pacificació del País:</strong> Reducció dels fronts oberts mitjançant la victòria militar a la <span class="bold-red">Tercera Guerra Carlina (1872-1876)</span> —que va comportar l'abolició dels furs bascos i l'establiment dels <span class="bold-green">Concerts Econòmics el 1878</span>— i la signatura de la <span class="bold-blue">Pau de Zanjón (1878)</span> a Cuba.</li>
            <li><strong>L'Elaboració d'un Marc Constitucional Flexible:</strong> Redacció d'un text obert que permetés governar tant als conservadors com als liberals sense haver de canviar de Constitució cada cop que canviava el govern.</li>
          </ul>
        </p>
      `
    },

    // 3. MATRIU 1: LA CONSTITUCIÓ DE 1876 I EL DRET DOCTRINARI
    {
      type: 'matrix',
      title: "Matriu d'Estructura Politica: La Constitució de 1876 i el Liberalisme Doctrinari",
      quadrants: [
        {
          title: "La Monarquia i la Sobirania",
          badge: "Poder Moderador",
          points: [
            "Sobirania compartida entre el Rei i les Corts (negació de la sobirania nacional pura).",
            "La Monarquia s'estableix com una institució permanent i superior al marge del debat polític.",
            "Amplis poders al Rei: dret de vet absolut, lliure nomenament de ministres i facultat de convocar, suspendre o dissoldre les Corts."
          ]
        },
        {
          title: "Les Corts Bicamerals i el Sufragi",
          badge: "Poder Legislatiu",
          points: [
            "Congrés dels Diputats: Cambra electiva triada segons la llei electoral vigent.",
            "Senat: Cambra conservadora formada per membres de dret propi, vitalicis o nomenats per la Corona.",
            "Sufragi: Restabliment del sufragi censatari (Llei de 1878); introducció del sufragi universal masculí el 1890 per Sagasta."
          ]
        },
        {
          title: "Religió i Drets Ciutadans",
          badge: "Aconfessionalitat Restringida",
          points: [
            "Declaració de confessionalitat catòlica de l'Estat i obligació de mantenir el culte i el clergat.",
            "Tolerància religiosa privada per a altres cultes, però sense manifestations públiques.",
            "Declaració àmplia de drets individuals, d'aplicació restrictiva amb els conservadors i oberta amb els liberals."
          ]
        },
        {
          title: "Estructura Territorial",
          badge: "Centralisme Central",
          points: [
            "Model d'Estat unitari, centralitzat i uniformista.",
            "Abolició definitiva dels furs bascos el 1876.",
            "Concessió d'autonomia fiscal limitada mitjançant el sistema de Concerts Econòmics (1878)."
          ]
        }
      ]
    },

    // 4. TEXTBLOCK 2: EL BIPARTIDISME I EL TORN PACÍFIC
    {
      type: 'textBlock',
      title: "2. El Bipartidisme i el Mecanisme del Torn Pacífic",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>Els Partits Dinàstics o del Sistema:</strong><br>
          El règim es va basar en l'existència de dos grans partits burgesos de notables que acceptaven la monarquia alfonsina i la Constitució de 1876:
          <ul>
            <li><strong>Partit Liberal-Conservador:</strong> Liderat per <span class="bold-purple">Antonio Cánovas del Castillo</span> (i posteriorment per Francisco Silvela). Agrupava antic moderats, membres de la Unió Liberal i dissidents del carlisme. Representava la gran propietat agrària, l'alta burgesia i les elits financeres. Defensava la protecció de l'Església, el sufragi censatari i la immobilitat social.</li>
            <li><strong>Partit Liberal-Fusionista:</strong> Liderat per <span class="bold-blue">Práxedes Mateo Sagasta</span> (i posteriorment per Montero Ríos i Moret). Agrupava antics progressistes, demòcrates i republicans moderats. Representava les classes mitjanes, professionals liberals i la burgesia industrial urbana. Advocava per reformes socials moderades, el sufragi universal masculí (aprovat el 1890) i la Llei d'Associacions (1887).</li>
          </ul>
        </p>
        <p>
          <strong>El Funcionament del Torn Pacífic i el Pacte del Pardo (1885):</strong><br>
          L'alternança en el poder no depenia de l'electorat, sinó d'un acord pactat. Quan un govern patia wear polític o crisi, el Rei cridava el líder de l'oposició a formar govern, se li lliurava el decret de dissolució de les Corts i el nou ministre de Governació s'encarregava de 'fabricar' la majoria parlamentària necessària mitjançant les eleccions. La mort prematura d'Alfons XII el 1885 va portar Cánovas i Sagasta a signar el <span class="bold-orange">Pacte del Pardo (1885)</span>, consolidant el torn pacífic per protegir la Regència de Maria Cristina d'Habsburg davant l'amenaça carlina i republicana.
        </p>
      `
    },

    // 5. MATRIU 2: COMPARACIÓ DE PARTITS DINÀSTICS
    {
      type: 'matrix',
      title: "Matriu Comparativa: Partit Conservador vs Partit Liberal",
      quadrants: [
        {
          title: "Partit Liberal-Conservador",
          badge: "Cánovas del Castillo / Silvela",
          points: [
            "Bases: Aristocràcia, grans propietaris agraris, alta burgesia i sectors financers.",
            "Principis: Ordre públic, immobilisme social, suport a l'Església i sufragi censatari.",
            "Estil de govern: Autoritarisme moderat i restricció de les llibertats d'associació i premsa."
          ]
        },
        {
          title: "Partit Liberal-Fusionista",
          badge: "Práxedes Mateo Sagasta / Moret",
          points: [
            "Bases: Burgesia industrial urbana, comerciants, professionals liberals i classes mitjanes.",
            "Principis: Reformisme social, laïcisme moderat i democratització formal del sistema.",
            "Fites: Llei d'Associacions (1887), Codi Civil (1889) i Sufragi Universal Masculí (1890)."
          ]
        },
        {
          title: "Punts de Coincidència",
          badge: "Consens Dinàstic",
          points: [
            "Defensa acèrrima de la Monarquia Borbònica i de la Constitució de 1876.",
            "Defensa de la propietat privada, l'ordre social burpès i el centralisme estatal.",
            "Aceptació de la farsa electoral i del monopoli del poder entre totes dues opcions."
          ]
        },
        {
          title: "El Pacte del Pardo (1885)",
          badge: "Consolidació de la Regència",
          points: [
            "Signat davant la mort d'Alfons XII per garantir la continuïtat del règim.",
            "Cánovas cedeix el govern a Sagasta per inaugurar el 'Govern Llarg' liberal (1885-1890).",
            "Protecció de la regència de Maria Cristina d'Habsburg davant carlins i republicans."
          ]
        }
      ]
    },

    // 6. TEXTBLOCK 3: FRAU ELECTORAL I CACIQUISME
    {
      type: 'textBlock',
      title: "3. L'Adulteració Electoral: Encasellat, Caciquisme i Tupinada",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>La Farsa Electoral i la Inversió de la Sobirania:</strong><br>
          A diferència dels sistemes democràtics reals, a la Restauració no eren els ciutadans els qui triaven el govern amb el seu vot, sinó que <span class="bold-red">el govern fabricava les eleccions</span> per aconseguir la majoria desitjada. Aquest mecanisme fraudulent es basava en una xarxa piramidal perfectament articulada:
        </p>
        <p style="margin-bottom: 0.75rem;">
          <ul>
            <li><strong>L'Encasellat (Ministeri de Governació):</strong> Des de Madrid, el ministre de Governació confeccionava la llista dels diputats que havien de sortir elegits a cada districte (encasellar els candidats). Aquestes llistes es trametien als Governadors Civils de cada província.</li>
            <li><strong>El Caciquisme Local:</strong> Els governadors civils transmetien les instruccions als <span class="bold-orange">cacics locals</span> (grans propietaris, batlles, veterans de la zona) que dominaven la vida econòmica i social dels municipis rurals. Els cacics controlaven el vot de la població mitjançant el xantatge (concessió de llicències, exempció de les quintes, feina a les finques) o la coacció directa.</li>
            <li><strong>La Tupinada o Pucherazo:</strong> Si el control social del cacic no era suficient per garantir el resultat d'encasellat, es recorria directament al frau falsificant les actes, manipulant les urnes, canviant les paperetes o fent votar electors difunts (<span class="bold-red">«la resurrecció dels morts»</span>).</li>
          </ul>
        </p>
        <p>
          Aquesta adulteració sistemàtica, sumada a l'elevat abstencionisme de les zones urbanes, va permetre la supervivència de l'oligarquia durant més de dues dècades, convertint el parlamentarisme espanyol en un règim fictici.
        </p>
      `
    },

    // 7. FLOWCHART 1: ESQUEMA DEL PROCÉS DE L'ENCASELLAT I FRAU
    {
      type: 'flowchart',
      title: "Esquema de Causalitat: El Mecanisme de la Farsa Electoral i el Caciquisme",
      steps: [
        {
          badge: "1. Acord Superior",
          label: "Pacte de Torn entre Partits",
          desc: "El Rei nomena el nou President del Govern i li lliura el decret de dissolució de les Corts."
        },
        {
          badge: "2. Encasellat",
          label: "Ministeri de Governació",
          desc: "El Ministre elabora les llistes dels diputats que han de guanyar ('encasellar') a cada districte."
        },
        {
          badge: "3. Directrius",
          label: "Governadors Civils i Cacics",
          desc: "Els governadors proviincials transmeten les ordres als cacics locals que dominen el medi rural."
        },
        {
          badge: "4. Frau a les Urnes",
          label: "Control del Vot i Tupinada",
          desc: "Manipulació del sufragi per coacció, compra de vots, manipulació d'actes i vots de difunts."
        }
      ]
    },

    // 8. TEXTBLOCK 4: LES FORCES D'OPOSICIÓ FORA DEL SISTEMA
    {
      type: 'textBlock',
      title: "4. Les Forces Polítiques Excloses i Marginades del Sistema",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>El Carlisme i la seva Reconversió Política:</strong><br>
          Després de la derrota militar de 1876 i l'exili de Carles VII, el carlisme va patir una greu crisi. Dirigit per Cándido Nocedal, es va reorganitzar com a opció política d'oposició. El 1888, Ramón Nocedal (fill) va protagonitzar una escissió de caràcter ultracatòlic integrista fundant el <span class="bold-red">Partido Católico Nacional</span>. Parallellament, <span class="bold-purple">Juan Vázquez de Mella</span> va renovar el discurs carlí amb l'<em>Acta de Loredan (1886)</em>, adaptant el partit al marc legal sota el nom de <span class="bold-purple">Comunió o Partit Tradicionalista</span>, participant en eleccions i actuant com a força d'oposició catòlica i foralista.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>El Republicanisme Fragmentat:</strong><br>
          L'oposició republicana va patir una intensa divisió interna en diferents tendències:
          <ul>
            <li><strong>Possibilistes (Emilio Castelar):</strong> Criteri moderat que va acceptar participar en les institucions del règim per democratitzar-les des de dins.</li>
            <li><strong>Progressistes (Manuel Ruiz Zorrilla):</strong> Radicalitzats, defensaven la insurrecció armada i van organitzar pronunciaments militars antimonàrquics fracassats (1883 i 1886).</li>
            <li><strong>Federals (Francesc Pi i Margall):</strong> Van mantenir el suport de la petita burgesia i dels treballadors industrials, especialment a Catalunya, defensant la república federal des de baix.</li>
            <li><strong>Unió Republicana (1893):</strong> Coalició electoral promoguda per Nicolás Salmerón i Alejandro Lerroux per unificar el vot republicà a les ciutats gràcies al sufragi universal.</li>
          </ul>
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>El Moviment Obrer (Socialisme i Anarquisme):</strong><br>
          El desengany amb el sistema va afavorir l'expansió del moviment obrer:
          <ul>
            <li><strong>Socialisme Marxista:</strong> L'any 1879, <span class="bold-red">Pablo Iglesias</span> va fundar a Madrid el <span class="bold-red">PSOE (Partit Socialista Obrer Espanyol)</span> i el 1888 el sindicat <span class="bold-red">UGT (Unió General de Treballadors)</span>, estenent la seva influència per Madrid, Biscaia i Astúries.</li>
            <li><strong>Anarquisme:</strong> Majoritari a Catalunya i Andalusia. Dividit entre l'acció directa violenta (atemptats terroristes com el de la meitat del Liceu el 1893 o el de la processó del Corpus el 1896) i el corrent anarcocol·lectivista i sindicalista.</li>
          </ul>
        </p>
        <p>
          <strong>L'Emergència dels Nacionalismes Perifèrics:</strong><br>
          El centralisme del règim va afavorir la gestació de moviments d'afirmació nacional. A Catalunya, el catalanisme va passar de les iniciatives culturals a l'organització política: fundació del <em>Centre Català</em> (1882) per Valentí Almirall, constitució de la <em>Unió Catalanista</em> (1891), redacció de les <span class="bold-green">Bases de Manresa (1892)</span> i fundació de la <span class="bold-green">Lliga Regionalista (1901)</span> per Enric Prat de la Riba i Francesc Cambó. Al País Basc, <span class="bold-green">Sabino Arana</span> va fundar el <span class="bold-green">PNV (Partit Nacionalista Basc)</span> l'any 1895 en defensa de la raça, la religió i la restitució dels furs.
        </p>
      `
    },

    // 9. MATRIU 3: COMPARACIÓ DE LES FORCES FORA DEL SISTEMA
    {
      type: 'matrix',
      title: "Matriu Comparativa: Les Forces d'Oposició Fora del Sistema",
      quadrants: [
        {
          title: "Carlisme i Integrisme",
          badge: "Extrema Dreta Foralista",
          points: [
            "Comunió Tradicionalista (Vázquez de Mella): Acta de Loredan (1886) i integració parlamentària.",
            "Partido Católico Nacional (Ramón Nocedal, 1888): Integrisme absolut separat del carlisme dynàstic.",
            "Bases: Clergat, noblesa rural, petita pagesia de Navarra, País Basc i Catalunya interior."
          ]
        },
        {
          title: "Corrents Republicans",
          badge: "Oposició Democràtica",
          points: [
            "Federals (Pi i Margall): Implantació a Catalunya; defensa de la república federal i reformes socials.",
            "Possibilistes (Castelar) i Progressistes (Ruiz Zorrilla, via insurreccional).",
            "Unió Republicana (1893, Salmerón): Coalició urbana electoralment exitosa a les grans ciutats."
          ]
        },
        {
          title: "Moviment Obrer Organitzat",
          badge: "Socialisme i Anarquisme",
          points: [
            "PSOE (1879) i UGT (1888): Marxisme de classe impulsat per Pablo Iglesias (Madrid, Astúries, Biscaia).",
            "Anarquisme: FTRE i propaganda pel fet (atemptats terroristes a Barcelona) / Anarcocol·lectivisme.",
            "Defensa de la jornada de 8 hores i celebració del 1r de Maig (des de 1890)."
          ]
        },
        {
          title: "Nacionalismes Perifèrics",
          badge: "Catalanisme i Basquisme",
          points: [
            "Catalanisme: Bases de Manresa (1892) i fundació de la Lliga Regionalista (1901) per la burgesia.",
            "Nacionalisme Basc: Fundació del PNV (1895) per Sabino Arana com a reacció a l'abolició foral.",
            "Oposició al centralisme uniforme i al frau electoral dels partits dinàstics."
          ]
        }
      ]
    },

    // 10. TIMELINE: CRONOLOGIA D'ESDEVENIMENTS DE LA RESTAURACIÓ (1874-1902)
    {
      type: 'timeline',
      title: "Cronologia de fets Històrics Clau de la Restauració Borbònica (1874-1902)",
      events: [
        {
          year: "1 Desembre 1874",
          badge: "Manifest",
          icon: "fa-scroll",
          event: "Manifest de Sandhurst",
          desc: "Alfons de Borbó ofereix la restauració de la monarquia constitucional, liberal i d'ordre."
        },
        {
          year: "29 Desembre 1874",
          badge: "Pronunciament",
          icon: "fa-horse",
          event: "Pronunciament de Martínez Campos a Sagunt",
          desc: "L'exèrcit proclama Alfons XII rei d'Espanya; Cánovas assumeix el govern provisional."
        },
        {
          year: "1875",
          badge: "Civilisme",
          icon: "fa-user-shield",
          event: "Reial Ordre de Subordinació Militar",
          desc: "Cánovas fixa la supremacia del poder civil sobre l'exèrcit per evitar nous cops d'Estat."
        },
        {
          year: "1876",
          badge: "Constitució",
          icon: "fa-building-columns",
          event: "Promulgació de la Constitució de 1876 i Fi de la Guerra Carlina",
          desc: "Aprovació del text doctrinari canovista i derrota definitiva del carlisme (exili de Carles VII)."
        },
        {
          year: "1878",
          badge: "Fiscalitat",
          icon: "fa-coins",
          event: "Concerts Econòmics Bascos i Pau de Zanjón",
          desc: "Autonomia fiscal per a les províncies basques després de l'abolició foral i pau provisional a Cuba."
        },
        {
          year: "1879",
          badge: "Socialisme",
          icon: "fa-users",
          event: "Fundació del PSOE per Pablo Iglesias",
          desc: "Creació clandestina del Partit Socialista Obrer Espanyol a Madrid com a partit marxista de classe."
        },
        {
          year: "1882",
          badge: "Catalanisme",
          icon: "fa-landmark",
          event: "Fundació del Centre Català",
          desc: "Valentí Almirall organitza la primera entitat del catalanisme polític reivindicatiu."
        },
        {
          year: "1885",
          badge: "Pacte",
          icon: "fa-handshake",
          event: "Mort d'Alfons XII i Pacte del Pardo",
          desc: "Cánovas i Sagasta acorden el torn pacífic per protegir la regència de Maria Cristina d'Habsburg."
        },
        {
          year: "1887-1888",
          badge: "Lleis Liberals",
          icon: "fa-file-signature",
          event: "Llei d'Associacions i Fundació de la UGT",
          desc: "Sagasta legalitza les organitzacions obreres; escissió integrista carlina de Ramón Nocedal."
        },
        {
          year: "1890",
          badge: "Sufragi",
          icon: "fa-check-to-slot",
          event: "Aprovació del Sufragi Universal Masculí",
          desc: "El govern liberal aprova el dret a vot masculí, tot i que el caciquisme en neutralitza l'efecte real."
        },
        {
          year: "1892",
          badge: "Autonomia",
          icon: "fa-book",
          event: "Bases de Manresa",
          desc: "La Unió Catalanista aprova les Bases per a la Constitució Regional Catalana."
        },
        {
          year: "1893",
          badge: "Republicans",
          icon: "fa-building-user",
          event: "Fundació de la Unió Republicana",
          desc: "Coalició de les forces republicanes dirigida per Nicolás Salmerón amb grans resultats urbans."
        },
        {
          year: "1895",
          badge: "Basquisme",
          icon: "fa-flag",
          event: "Fundació del Partit Nacionalista Basc (PNV)",
          desc: "Sabino Arana organitza el nacionalisme basc en defensa de la religió, la raça i els furs."
        },
        {
          year: "1897",
          badge: "Atemptat",
          icon: "fa-burst",
          event: "Assassinat d'Antonio Cánovas del Castillo",
          desc: "L'anarquista italià Michele Angiolillo assassina el líder conservador als banys de Santa Águeda."
        }
      ]
    },

    // 11. SOURCES: FONTS PRIMÀRIES I PERSONATGES HISTÒRICS
    {
      type: 'sources',
      quoteTitle: "Font Primària: Manifest de Sandhurst (1874)",
      quoteText: "«En virtut de l'espontània i solemne abdicació de la meva augusta mare, tan generosa com infortunada, jo sóc l'únic representant del dret monàrquic a Espanya... Òrfena ara la nació de tot dret públic i indefinidament privada de les seves llibertats, és natural que giri els ulls vers el dret constitucional acostumat... Sigui quina sigui la meva sort, no deixaré de ser un bon espanyol, ni, com tots els meus antecessors, un bon catòlic, ni, com a home del segle, un veritable liberal.»",
      quoteAuthor: "Alfons de Borbó (futur Alfons XII), Manifest de Sandhurst (1 de desembre de 1874)",
      charName: "Antonio Cánovas del Castillo (1828-1897)",
      charRole: "Polític, Historiador i Arquitecte de la Restauració Borbònica",
      charDesc: "Dirigent del Partit Liberal-Conservador i figura clau de la política espanyola del darrer terç del segle XIX. Dissenyador de la Constitució de 1876 i del sistema del bipartidisme amb alternança pacífica (tornisme). Va aconseguir el civilisme i la pacificació del país, consolidant l'hegemonia de l'oligarquia agrària i financera. Va ser assassinat per un anarquista el 1897 a Santa Águeda."
    }
  ]
});