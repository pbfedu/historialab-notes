if (!window.HISTORIALAB_TEMES) { window.HISTORIALAB_TEMES = []; }

window.HISTORIALAB_TEMES.push({
  id: 'tema1_guerra_revolucio',
  unitNum: 1,
  title: "Finals del s. XVIII - Inicis del s. XIX: Guerra i Revolució Liberal",
  subtitle: "De l'impacte de la Revolució Francesa i la Guerra del Francès a les Corts de Cadis i la Independència Hispanoamericana (1788-1824)",
  icon: "fa-fire-flame-curved",
 coverGradient: 'linear-gradient(135deg, #58cc02, #059669)',
  xp: 500,
  sections: [
    // 1. QUADRES D'ÈMFASI (CALLOUTS): IDEES PRINCIPALS
    {
      type: 'callouts',
      title: "Idees Principals i Claus d'Examen PAU (Guerra i Revolució)",
      items: [
        {
          header: "1. La Guerra del Francès (1808-1814)",
          content: "Conflicte provocat per la invasió napoleònica arran del Tractat de Fontainebleau (1807) i les Abdicacions de Baiona. Va combinar la resistència de l'exèrcit regular amb setges urbans (Girona i Saragossa), la tàctica popular de la guerrilla i el suport militar britànic del duc de Wellington.",
          color: "orange",
          icon: "fa-shield-halved"
        },
        {
          header: "2. Les Corts de Cadis i 'La Pepa' (1812)",
          content: "Reunió extraordinària de diputats en una ciutat assetjada que aprova la Constitució del 19 de març de 1812. Estableix la sobirania nacional, la divisió de poders, la confessionalitat catòlica, la igualtat jurídica i l'abolició de les estructures feudals (senyorius i Inquisició).",
          color: "blue",
          icon: "fa-scroll"
        },
        {
          header: "3. Posicionaments Ideològics",
          content: "Fractura de la societat entre afrancesats (il·lustrats reformistes que recolzen Josep I Bonaparte) i el bàndol patriota, dividit al seu torn entre absolutistes (servils) i liberals (defensors d'un nou ordre constitucional).",
          color: "purple",
          icon: "fa-users"
        },
        {
          header: "4. Independència de les Colònies Americanes (1808-1824)",
          content: "El buit de poder de 1808 i el descontentament dels criolls desencadenen el procés d'emancipació a Amèrica (liderat per Bolívar i San Martín). Espanya perd el seu imperi continental, la qual cosa provoca la fallida de la Hisenda i la repatriació de capitals cap a Catalunya.",
          color: "green",
          icon: "fa-earth-americas"
        }
      ]
    },

    // 2. TEXTBLOCK 1: CONTEXT INTERNACIONAL
    {
      type: 'textBlock',
      title: "1. Context Internacional: L'Era de les Revolucions Liberals i l'Imperi Napoleònic",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>La Revolució Industrial i la Modernització Econòmica:</strong><br>
          Iniciada a Anglaterra a finals del segle XVIII, la Revolució Industrial va transformar l'economia europea mitjançant el creixement urbà, l'aparició de nous mitjans de transport i un gran dinamisme comercial. Aquest procés va establir les bases del sistema econòmic <span class="bold-purple">capitalista</span> i de la nova <span class="bold-purple">societat de classes</span>.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Les primeres Revolucions Liberals:</strong><br>
          <ul>
            <li><strong>Independència dels Estats Units (1776):</strong> La insurrecció de les tretze colònies britàniques va donar lloc a la primera Constitució escrita de la història i a l'aplicació pràctica dels principis de la Il·lustració.</li>
            <li><strong>Revolució Francesa (1789):</strong> Provocada per la crisi financera i de subsistència. Va comportar l'abolició dels privilegis feudals i la proclamació dels ideals de llibertat, igualtat i fraternitat. L'etapa radical dels <em>Anys de Terror</em> va dificultar el trànsit cap a la consolidació del model liberal burgès.</li>
          </ul>
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>L'Imperi Napoleònic i la Restauració Absolutista (1815):</strong><br>
          Napoleó Bonaparte va expandir les idees revolucionàries per Europa mitjançant les seves guerres de conquesta, despertant alhora la consciència nacional dels pobles ocupats. Després de la seva derrota definitiva, el <span class="bold-red">Congrés de Viena (1815)</span> va restaurar l'absolutisme a Europa i va establir la <span class="bold-red">Santa Aliança</span>, una aliança militar amb dret d'intervenció per sufocar qualsevol brot liberal.
        </p>
        <p>
          <strong>Onades Revolucionàries de 1820 i 1830:</strong><br>
          Tot i la repressió de la Santa Aliança, el liberalisme va reaparèixer al sud d'Europa el 1820 (Espanya, Portugal, Nàpols, Piemont) i va assolir la <span class="bold-green">independència de Grècia (1829)</span>. La revolució de 1830 a París va enderrocar Carles X per establir la monarquia constitucional de Lluís Felip d'Orleans, mentre que <span class="bold-green">Bèlgica</span> es va independitzar d'Holanda.
        </p>
      `
    },

    // 3. MATRIU 1: COMPARACIÓ DE LES ONADES REVOLUCIONÀRIES EUROPEES
    {
      type: 'matrix',
      title: "Matriu Comparativa: Onades Revolucionàries i Models Polítics (1776-1830)",
      quadrants: [
        {
          title: "Revolució Nord-americana (1776)",
          badge: "Primer Model Liberal",
          points: [
            "Insurrecció de les tretze colònies contra la corona britànica.",
            "Primera Constitució escrita de la història i Declaració de Drets.",
            "República federal basada en la sobirania popular i la divisió de poders."
          ]
        },
        {
          title: "Revolució Francesa (1789)",
          badge: "Ruptura de l'Antic Règim",
          points: [
            "Abolició dels privilegis feudals i de la societat estamental.",
            "Proclamació dels drets de ciutadania (Llibertat, Igualtat, Fraternitat).",
            "Etapes de radicalisme (Anys de Terror) i expansió napoleònica posterior."
          ]
        },
        {
          title: "Congrés de Viena i Santa Aliança (1815)",
          badge: "Restauració Absolutista",
          points: [
            "Derrocar l'herència napoleònica i restaurar els monarques absoluts.",
            "Remodelació de les fronteres europees sense respectar les nacionalitats.",
            "Dret d'intervenció militar armada contra revolucions liberals."
          ]
        },
        {
          title: "Onades Revolucionàries de 1820 i 1830",
          badge: "Avanç Constitucional",
          points: [
            "1820: Pronunciaments al sud d'Europa i independència de Grècia (1829).",
            "1830: Monarquia constitucional a França i independència de Bèlgica.",
            "Consolidació de la societat de classes i del liberalisme moderat."
          ]
        }
      ]
    },

    // 4. TEXTBLOCK 2: ESPANYA DAVANT FRANÇA I LA INVASIO
    {
      type: 'textBlock',
      title: "2. Espanya davant la França Revolucionària i Napoleònica (1793-1808)",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>De la Guerra Gran al Tractat de Fontainebleau:</strong><br>
          L'execució de Lluís XVI va portar Carles IV a participar en la coalició absolutista europea contra la França revolucionària durant la <span class="bold-red">Guerra Gran (1793-1795)</span>, que va culminar amb la invasió francesa de comarques catalanes. Aquest fracàs va obligar a signar la <span class="bold-orange">Pau de Basilea (1795)</span>, subordinant la política exterior espanyola als interessos francesos.
        </p>
        <p style="margin-bottom: 0.75rem;">
          L'aliança hispano-francesa contra Gran Bretanya va conduir a la tràgica <span class="bold-red">derrota naval de Trafalgar (1805)</span>, que va anihilar la flota espanyola i va tallar les comunicacions amb l'imperi americà. El 1807, el privat Manuel Godoy va signar el <span class="bold-purple">Tractat de Fontainebleau</span>, autoritzant l'entrada dels exèrcits napoleònics a Espanya amb el pretext d'envair Portugal.
        </p>
        <p>
          <strong>El Motí d'Aranjuez i les Abdicacions de Baiona (1808):</strong><br>
          La presència amenaçadora de les tropes franceses va desencadenar el <span class="bold-orange">Motí d'Aranjuez (març de 1808)</span>, una revolta popular dirigida pel bàndol del príncep Ferran que va forçar la caiguda de Godoy i l'abdicació de Carles IV en el seu fill <span class="bold-blue">Ferran VII</span>. Aprofitant la discòrdia familiar, Napoleó va convocar tots dos reis a França i va aconseguir les <span class="bold-red">Abdicacions de Baiona (maig de 1808)</span>, cedint la corona d'Espanya al seu germà <span class="bold-green">Josep I Bonaparte</span>.
        </p>
      `
    },

    // 5. FLOWCHART 1: ESQUEMA DE CAUSALITAT DE LA CRISI DE 1808
    {
      type: 'flowchart',
      title: "Esquema de Causalitat: Del Tractat de Fontainebleau a la Guerra del Francès",
      steps: [
        {
          badge: "1807",
          label: "Tractat de Fontainebleau",
          desc: "Godoy autoritza el pas de les tropes de Napoleó per Espanya cap a Portugal."
        },
        {
          badge: "Març 1808",
          label: "Motí d'Aranjuez",
          desc: "Revolta contra Godoy. Caiguda del privat i abdicació forçada de Carles IV en Ferran VII."
        },
        {
          badge: "Maig 1808",
          label: "Abdicacions de Baiona",
          desc: "Napoleó obliga Carles IV i Ferran VII a renunciar al tron en favor de Josep I Bonaparte."
        },
        {
          badge: "2 Maig 1808",
          label: "Aixecament Popular i Guerra",
          desc: "Revolta del poble de Madrid reprimida per Murat. Organització en Juntes i inici de la Guerra del Francès."
        }
      ]
    },

    // 6. TEXTBLOCK 3: LA GUERRA DEL FRANCÈS I POSICIONAMENTS
    {
      type: 'textBlock',
      title: "3. La Guerra del Francès (1808-1814): Desenvolupament Bèlic i Fractura Social",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>Les Fases de la Guerra i la Resistència Popular:</strong><br>
          L'aixecament popular del <span class="bold-red">2 de Maig de 1808</span> a Madrid va marcar l'inici d'un conflicte llarg, mortífer i devastador. Davant el buit de poder, la població es va organitzar en <span class="bold-orange">Juntes locals i provincials</span>, coordinades posteriorment per la <span class="bold-blue">Junta Suprema Central</span>. La contenda es va caracteritzar per:
          <ul>
            <li><strong>Derrota inicial francesa:</strong> La victòria espanyola a la <span class="bold-green">Batalla de Bailèn (juliol de 1808)</span> va obligar Josep I a abandonar Madrid.</li>
            <li><strong>Setges urbans heroics:</strong> Ciutats com Saragossa i <span class="bold-red">Girona (1809)</span> van patir setges insostenibles. A Girona, el tercer setge va comportar la mort de 4.000 civils (el 50% de la població) i la destrucció de la ciutat, immortalitzada per Ramón Martí i Alsina.</li>
            <li><strong>Guerra de Guerrilles:</strong> Tàctica d'atacs ràpids i d'amboscades realitzats per la població civil armada en terreny conegut per desarticular la retaguardia francesa.</li>
            <li><strong>Ofensiva anglo-espanyola:</strong> Les tropes britàniques comandades pel <span class="bold-purple">duc de Wellington</span>, sumades al desgast francès al front rus, van delmar l'exèrcit napoleònic. Napoleó va signar el <span class="bold-green">Tractat de Valençay (1813)</span>, retornant la corona a Ferran VII.</li>
          </ul>
        </p>
        <p>
          <strong>Els Posicionaments Ideològics:</strong><br>
          La presència francesa va dividir la societat espanyola en dos grans camps:
          <ul>
            <li><strong>Afrancesats:</strong> Il·lustrats i reformistes que veien en Josep I i en l'<em>Estatut de Baiona</em> l'oportunitat de modernitzar Espanya sense violència revolucionària (representats per intel·lectuals com J.M. Blanco White).</li>
            <li><strong>Patriotes:</strong> Oposats a la invasió. Dividits entre <em>Absolutistes / Servils</em> (que volien el retorn de Ferran VII com a rei absolut) i <em>Liberals</em> (que buscaven aprofitar la guerra per construir un nou Estat constitucional).</li>
          </ul>
        </p>
      `
    },

    // 7. MATRIU 2: BÀNDOLS I ACTORS DE LA GUERRA DEL FRANCÈS
    {
      type: 'matrix',
      title: "Matriu de Faccions i Actors Polítics de la Guerra del Francès (1808-1814)",
      quadrants: [
        {
          title: "Afrancesats (Règim de Josep I)",
          badge: "Reformisme Il·lustrat",
          points: [
            "Suport intel·lectual i de part de l'administració a Josep I Bonaparte.",
            "Defensa de l'Estatut de Baiona de 1808 (Carta Atorgada reformista).",
            "Abolició de la Inquisició, dels drets feudals i supressió d'ordes religiosos."
          ]
        },
        {
          title: "Patriotes Absolutistes (Servils)",
          badge: "Tradició i Antic Règim",
          points: [
            "Suport del clergat, la noblesa i la majoria de les masses rurals.",
            "Lluita pel retorn de Ferran VII 'El Desitjat' com a monarca absolut.",
            "Defensa de la religió catòlica tradicional i de les institucions senyorials."
          ]
        },
        {
          title: "Patriotes Liberals (Corts de Cadis)",
          badge: "Revolució Politica",
          points: [
            "Burgesia, professionals liberals i intel·lectuals d'ideologia progressista.",
            "Defensa de la sobirania nacional, la divisió de poders i la igualtat jurídica.",
            "Redactors de la Constitució de 1812 per posar fi a l'absolutisme."
          ]
        },
        {
          title: "Resistència Popular i Guerrilles",
          badge: "Lluita Armada",
          points: [
            "Defensa de ciutats mitjançant setges urbans (Girona, Saragossa).",
            "Organització de la guerra de guerrilles per erosionar l'exèrcit francès.",
            "Coordinació mitjançant les JUNTES fins a la creació de la Junta Central."
          ]
        }
      ]
    },

    // 8. TEXTBLOCK 4: CORTS DE CADIS I LA CONSTITUCIÓ DE 1812
    {
      type: 'textBlock',
      title: "4. Les Corts de Cadis i la Constitució de 1812 'La Pepa'",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>La Convocatòria de Corts Extraordinàries (1810):</strong><br>
          Davant l'avanç de les tropes franceses, la Junta Suprema Central es va refugiar a Cadis i va traspassar el poder a un Consell de Regència, que va convocar la reunió de Corts generals. En una ciutat assetjada i d'ambient burprès liberal, els diputats liberals van aconseguir imposar la cambra única i aprovar el principi revolucionari de la <span class="bold-purple">sobirania nacional</span>.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Principis Fonamentals de la Constitució del 19 de Març de 1812:</strong><br>
          <ul>
            <li><strong>Sobirania Nacional:</strong> El poder resideix essencialment en la Nació, la qual s'atorga el dret d'establir les seves lleis fonamentals.</li>
            <li><strong>Divisió de Poders:</strong> Poder legislatiu residint en les Corts amb el Rei; poder executiu en el Monarca (amb funcions molt limitades); i poder judicial en els tribunals de justícia.</li>
            <li><strong>Monarquia Hereditària i Constitucional:</strong> Limitació de l'autoritat reial, que perd la capacitat de suspendre les Corts o imposar impostos unilateralment.</li>
            <li><strong>Confessionalitat Catòlica:</strong> Declaració explícita de la religió catòlica com l'única oficial i permesa a l'Estat (concessió dels liberals al sector absolutista).</li>
            <li><strong>Drets Individuals i Igualtat Jurídica:</strong> Reconeixement de la llibertat d'impremta, la inviolabilitat del domicili, el dret de propietat i la fi dels privilegis d'estament.</li>
          </ul>
        </p>
        <p>
          <strong>L'Obra Legislativa Abolicionista:</strong><br>
          Més enllà del text constitucional, les Corts de Cadis van aprovar decrets per desmantellar l'Antic Règim: <span class="bold-red">abolició dels senyorius jurisdiccionals</span>, supressió dels drets feudals de vassallatge, eliminació de la Inquisició i derogació dels privilegis gremials per afavorir la llibertat d'indústria i comerç.
        </p>
      `
    },

    // 9. MATRIU 3: COMPARACIÓ ESTATUT DE BAIONA VS CONSTITUCIÓ DE CADIS 1812
    {
      type: 'matrix',
      title: "Matriu Comparativa: Estatut de Baiona (1808) vs Constitució de Cadis (1812)",
      quadrants: [
        {
          title: "Estatut de Baiona (1808)",
          badge: "Carta Atorgada (Josep I)",
          points: [
            "Concedit per Napoleó sense la participació d'una assemblea sobirana.",
            "Manteniment d'amplis poders executius en mans del Rei Josep I.",
            "Reformes moderades: llibertat d'indústria, abolició de la Inquisició i de drets feudals."
          ]
        },
        {
          title: "Constitució de Cadis (1812)",
          badge: "Sobirania Nacional (La Pepa)",
          points: [
            "Promulgada el 19 de març de 1812 per Corts Constituents sobiranes.",
            "Divisió estricta de poders i retallada radical de l'autoritat del Rei.",
            "Reconeixement de drets ciutadans, igualtat jurídica i sufragi universal masculí indirecte."
          ]
        },
        {
          title: "Coincidències Religioses",
          badge: "Catolicisme Oficial",
          points: [
            "Tots dos textos declaren la religió catòlica com l'única oficial de l'Estat.",
            "Prohibició de l'exercici públic de qualsevol altra religió.",
            "Estratègia per no alienar l'Església ni les masses populars espanyoles."
          ]
        },
        {
          title: "Impacte i Transcendència",
          badge: "Simbolisme Liberal",
          points: [
            "Estatut de Baiona: aplicació molt reduïda pel context de la guerra.",
            "Constitució de 1812: símbol del liberalisme espanyol i hispanoamericà.",
            "Inspiració per a les constitucions de Portugal, Itàlia i les repúbliques americanes."
          ]
        }
      ]
    },

    // 10. TEXTBLOCK 5: ART, CULTURA I MENTALITATS
    {
      type: 'textBlock',
      title: "5. Art, Cultura i Mentalitats: La Visió Crítica de Francisco de Goya",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>Goya com a Testimoni de la Tragèdia Històrica:</strong><br>
          Francisco de Goya y Lucientes (1746-1828) va ser el gran pintor i cronista de la transició entre el segle XVIII i el XIX. Com a il·lustrat, va patir la profunda contradicció entre les seves idees reformistes i la brutalitat de la invasió napoleònica.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Obres de Denúncia i Desmitificació de la Guerra:</strong><br>
          <ul>
            <li><strong>Els afusellaments del 3 de Maig de 1808 (1814):</strong> Pintat per encàrrec de la Regència al Museu del Prado. Un quadre revolucionari que no heroïlitza la guerra, sinó que mostra el drama, la por i la barbàrie de la repressió militar francesa a la muntanya del Príncipe Pío.</li>
            <li><strong>Gravats dels Desastres de la Guerra:</strong> Sèrie d'estampes on denuncia de forma cruda les atrocitats, els penjaments, la fam i la la degradació humana comesa per tots dos bàndols.</li>
            <li><strong>Pintures Negres i Crítica a la Inquisició:</strong> Obres com <em>Saturn devorant el seu fill</em> o <em>Autodafé de la Inquisició</em> reflecteixen el pessimisme del pintor davant el retorn de l'absolutisme i la foscors de les Inquisicions.</li>
          </ul>
        </p>
        <p>
          <strong>El Romanticisme Revolucionari Europeu:</strong><br>
          En l'àmbit internacional, Eugène Delacroix va immortalitzar la lluita pels drets liberals a la seva famosa obra <em>La Llibertat guiant el poble (1830, Museu del Louvre)</em>, al·legoria de les jornades revolucionàries de París.
        </p>
      `
    },

    // 11. TIMELINE: CRONOLOGIA D'ESDEVENIMENTS (1776-1814)
    {
      type: 'timeline',
      title: "Cronologia de fets Històrics Clau (1776-1814)",
      events: [
        {
          year: "1776",
          badge: "EUA",
          icon: "fa-flag",
          event: "Declaració d'Independència dels EUA",
          desc: "Naixement de la primera república liberal basada en principis de la Il·lustració."
        },
        {
          year: "1789",
          badge: "França",
          icon: "fa-bolt",
          event: "Esclat de la Revolució Francesa",
          desc: "Caiguda de la monarquia absoluta, declaració dels drets de l'home i fi de la societat estamental."
        },
        {
          year: "1793-1795",
          badge: "Guerra",
          icon: "fa-shield-cat",
          event: "Guerra Gran contra la França Revolucionària",
          desc: "Carles IV participa en la coalició absolutista. Tropes franceses envaeixen comarques catalanes."
        },
        {
          year: "1805",
          badge: "Desfeta Naval",
          icon: "fa-ship",
          event: "Batalla de Trafalgar",
          desc: "Destrucció de la flota hispano-francesa per l'armada britànica de Nelson, tallant la connexió amb Amèrica."
        },
        {
          year: "1807",
          badge: "Diplomàcia",
          icon: "fa-file-signature",
          event: "Tractat de Fontainebleau",
          desc: "Godoy autoritza l'entrada de l'exèrcit de Napoleó a Espanya per conquerir Portugal."
        },
        {
          year: "Març 1808",
          badge: "Motí",
          icon: "fa-hand-fist",
          event: "Motí d'Aranjuez",
          desc: "Caiguda de Manuel Godoy i abdicació forçada de Carles IV en favor del seu fill Ferran VII."
        },
        {
          year: "Maig 1808",
          badge: "Aixecament",
          icon: "fa-fire",
          event: "Aixecament del 2 de Maig i Abdicacions de Baiona",
          desc: "Revolta a Madrid reprimida per Murat. Napoleó lliura la corona al seu germà Josep I Bonaparte."
        },
        {
          year: "Juliol 1808",
          badge: "Victòria Espanyola",
          icon: "fa-award",
          event: "Batalla de Bailèn",
          desc: "Primera gran derrota de l'exèrcit napoleònic a camp obert a Europa, forçant Josep I a fugir de Madrid."
        },
        {
          year: "1809",
          badge: "Setge Heroic",
          icon: "fa-fort-awesome",
          event: "Tercer Setge de Girona",
          desc: "Resistència de Girona pintada per Martí i Alsina, amb un saldo de 4.000 morts civils."
        },
        {
          year: "1810",
          badge: "Corts",
          icon: "fa-building-columns",
          event: "Convocatòria de les Corts de Cadis",
          desc: "La Junta Suprema Central traspassa el poder a una Regència que convoca la reunió extraordinària de diputats."
        },
        {
          year: "1812",
          badge: "Constitució",
          icon: "fa-scroll",
          event: "Promulgació de 'La Pepa' (19 de març)",
          desc: "Aprovació del primer text constitucional liberal d'Espanya, basat en la sobirania nacional."
        },
        {
          year: "1813",
          badge: "Pau",
          icon: "fa-handshake",
          event: "Tractat de Valençay",
          desc: "Napoleó reconeix Ferran VII com a rei d'Espanya i pacta la retirada de les seves tropes."
        }
      ]
    },

    // 12. TEXTBLOCK 6: INDEPENDÈNCIA DE LES COLÒNIES AMERICANES
    {
      type: 'textBlock',
      title: "6. El Procés d'Independència de les Colònies Hispanoamericanes (1808-1824)",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>Causes de l'Emancipació Colonial:</strong><br>
          Entre 1808 i 1824 es va produir la independència de la majoria dels territoris espanyols a Amèrica. El procés va estar motivat per:
          <ul>
            <li><strong>L'exemple americà i les idees liberals:</strong> La influència de la independència dels EUA (1776), la Il·lustració i la Revolució Francesa.</li>
            <li><strong>Descontentament de la burgesia criolla:</strong> Els criolls (descendents d'espanyols nascuts a Amèrica) tenien un gran poder econòmic (plantacions i comerç) però estaven exclosos de l'alta administració colonial, reservada als peninsulars.</li>
            <li><strong>El buit de poder de 1808:</strong> La invasió napoleònica de la Península va fer sorgir Juntes autònomes a les ciutats americanes que es van negar a reconèixer Josep I.</li>
            <li><strong>Feblesa naval espanyola:</strong> La destrucció de la marina a Trafalgar (1805) impedia el control efectiu del comerç transatlàntic.</li>
            <li><strong>Suport internacional:</strong> Gran Bretanya i els EUA van donar suport armamentístic i financer als rebels per obrir els mercats sud-americans al seu comerç.</li>
          </ul>
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Líders Carismàtics i Desenvolupament Bèlic:</strong><br>
          La guerra colonial (1814-1824) va estar dirigida per grans cabdills liberals criolls: <span class="bold-purple">Simón Bolívar</span> (a Veneçuela, Colòmbia i Equador), <span class="bold-blue">José de San Martín</span> (a Argentina, Xile i Perú) i els capellans <span class="bold-green">Hidalgo i Morelos</span> a Mèxic. Les derrotes de l'exèrcit realista van culminar amb la pèrdua de tot l'imperi americà, excepte Cuba i Puerto Rico (i Filipines a Àsia).
        </p>
        <p>
          <strong>Conseqüències per a Espanya, Amèrica i Catalunya:</strong><br>
          <ul>
            <li><strong>Per a les noves Repúbliques:</strong> El domini espanyol va ser一substituït per la dependència econòmica de Gran Bretanya i dels EUA. Els criolls van monopolitzar el poder mantingut la desigualtat social.</li>
            <li><strong>Per a la Hisenda Espanyola:</strong> Pèrdua d'una font immensa d'ingressos (lingots d'or, argent, impostos colonials), tallada de mercats i agreujament de la fallida financera de l'Estat.</li>
            <li><strong>Per a Catalunya:</strong> Retorn dels <span class="bold-green">indians</span> amb els seus capitals repatriats, que van ser reincorporats a la Península. La producció agrícola i la manufactura cotona catalana van reorientar les seves exportacions cap a les Antilles (Cuba i Puerto Rico).</li>
          </ul>
        </p>
      `
    },

    // 13. FLOWCHART 2: ESQUEMA DE LA INDEPENDÈNCIA COLONIAL I IMPACTE
    {
      type: 'flowchart',
      title: "Esquema del Procés d'Independència Colonial i Conseqüències",
      steps: [
        {
          badge: "Causes",
          label: "Buit de Poder i Descontentament Crioll",
          desc: "Invasió napoleònica de 1808. Els criolls organitzen Juntes autònomes i reclamen llibertat comercial."
        },
        {
          badge: "1814-1824",
          label: "Guerra Colonial d'Emancipació",
          desc: "Campanyes militars de Simón Bolívar i San Martín. Derrota definitiva de les tropes realistes espanyoles."
        },
        {
          badge: "Pèrdues",
          label: "Fi de l'Imperi Continental",
          desc: "Espanya perd tots els seus dominis americans excepte Cuba i Puerto Rico. Fallida financera de la Hisenda."
        },
        {
          badge: "Catalunya",
          label: "Repatriació de Capitals i Indianes",
          desc: "Els indians inverteixen el capital repatriat a Catalunya; la indústria cotona es concentra en el mercat cubà."
        }
      ]
    },

    // 14. SOURCES: FONTS PRIMÀRIES I PERSONATGES HISTÒRICS
    {
      type: 'sources',
      quoteTitle: "Font Primària: Testimoni sobre el Pensament Afrancesat (1808)",
      quoteText: "«Va arribar el moment en què calia prendre partit... Jo estava convençut que la humiliació política de rebre un nou rei de mans de Napoleó quedaria compensada amb escreix amb els beneficis futurs d'aquesta mesura. Molts dels espanyols més il·lustres s'havien posat del costat de Josep Bonaparte. S'havia preparat el marc d'una Constitució que contenia la declaració explícita del dret de la nació a ser governada amb el seu propi consentiment. La Inquisició s'havia d'abolir, i el mateix havia de passar amb els ordes religiosos.»",
      quoteAuthor: "J. M. Blanco White, Carta d'un afrancesat (1808)",
      charName: "Rafael del Riego y Flórez (1784-1823)",
      charRole: "General i Polític Liberal Espanyol",
      charDesc: "Militar asturià que va lluitar a la Guerra del Francès i que l'1 de gener de 1820 va encapçalar el pronunciament militar de Las Cabezas de San Juan amb les tropes destinades a Amèrica. Va obligar Ferran VII a restaurar la Constitució de Cadis de 1812, donant inici al Trienni Liberal (1820-1823). Executat el 1823 després de la invasió dels Cent Mil Fills de Sant Lluís."
    }
  ]
});