if (!window.HISTORIALAB_TEMES) { window.HISTORIALAB_TEMES = []; }

window.HISTORIALAB_TEMES.push({
  id: 'tema3_estat_liberal',
  unitNum: 3,
  title: "La Construcció de l'Estat Liberal (1833-1874)",
  subtitle: "De la regència de Maria Cristina i les guerres carlines al regnat d'Isabel II, el desmantellament de l'Antic Règim i el Sexenni Democràtic",
  icon: "fa-monument",
  coverGradient: 'linear-gradient(135deg, #c24fef, #770596)',
  xp: 500,
  sections: [
    // 1. QUADRES D'ÈMFASI (CALLOUTS): IDEES PRINCIPALS I CLAUS PAU
    {
      type: 'callouts',
      title: "Idees Principals i Claus d'Examen PAU (1833-1874)",
      items: [
        {
          header: "1. Conflicte Dinàstic i Ideològic",
          content: "Enfrontament entre el Carlisme (absolutisme, tradició, catolicisme dogmàtic i furs) i el bàndol Isabelí o Liberal (estat constitucional, centralisme, llibertats individuals i desmantellament del feudalisme).",
          color: "orange",
          icon: "fa-shield-halved"
        },
        {
          header: "2. Bifurcació Liberal: Moderats vs Progressistes",
          content: "Els Moderats (Narváez) defensen la sobirania compartida (Rei/Corts), el sufragi censatari molt restringit i l'ordre social. Els Progressistes (Mendizábal, Espartero, Madoz) defensen la sobirania nacional, les desamortitzacions, la Milícia Nacional i el lliurecanvisme.",
          color: "blue",
          icon: "fa-scale-balanced"
        },
        {
          header: "3. Reformes Agràries i Desenvolupament Econòmic",
          content: "Privatització de terres mitjançant la Desamortització de Mendizábal (1836, béns eclesiàstics) i la Desamortització de Madoz (1855, béns comunals municipals). Concentració industrial a Catalunya (tèxtil) i al País Basc (siderúrgia), i desenvolupament de la xarxa ferroviària (1848 Barcelona-Mataró, Llei de 1855).",
          color: "purple",
          icon: "fa-industry"
        },
        {
          header: "4. El Sexenni Democràtic (1868-1874)",
          content: "La Revolució de 'La Gloriosa' (1868) destrona Isabel II. S'implanta el primer règim democràtic amb la Constitució de 1869 (sufragi universal masculí), el regnat d'Amadeu de Savoia (1870-1873) i la Primera República (1873-1874), col·lapsada per la Tercera Guerra Carlina, la Guerra de Cuba i el Cantonalisme.",
          color: "green",
          icon: "fa-flag"
        }
      ]
    },

    // 2. TEXTBLOCK 1: ART, CULTURA, MENTALITATS I CONTEXT INTERNACIONAL
    {
      type: 'textBlock',
      title: "1. Art, Cultura, Mentalitats i el Context Internacional (1833-1874)",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>Art, Literatura i Recreació de la Identitat:</strong><br>
          El segle XIX espanyol va reflectir les seves convulsions polítiques en la producció cultural. En la pintura destaca <span class="bold-purple">Marià Fortuny</span> amb obres com <em>La vicaria</em> (1867-1870, conservada al MNAC), que mostra la societat burguesa de l'època, i la pintura d'història i batalles com la <em>Batalla de Wad-Ras</em> (Guerra del Marroc). En la literatura, <span class="bold-blue">Mariano José de Larra</span> (<em>Artículos</em>) va analitzar amb garsa satírica els mals del país i la burocràcia, mentre que <span class="bold-blue">Benito Pérez Galdós</span> (<em>Episodios Nacionales</em>) va immortalitzar la memòria de la construcció de l'Estat liberal i el carlisme. En la pintura de reconeixement històric destaca posteriorment Antoni Gisbert amb <em>L'afusellament de Torrijos</em> (1888).
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Context Internacional (L'Avanç del Liberalisme i del Nacionalisme):</strong><br>
          Europa va viure la consolidació dels règims constitucionals i l'emergència de noves fronteres estatals amb les <span class="bold-orange">unificacions d'Itàlia (1861)</span> i d'<span class="bold-orange">Alemanya (1871)</span>. Les <span class="bold-red">Revolucions de 1848</span> («Primavera dels pobles») van estendre les demandes democràtiques i socials. En aquest context, la burgesia continental va passar de liderar la revolució política a defensar el nou ordre establert davant la por a la revolució social del moviment obrer naixent.
        </p>
        <p>
          <strong>Creixement Econòmic, Capitalisme i Moviment Obrer Internacional:</strong><br>
          El desenvolupament de la segona fase de la Revolució Industrial va accelerar l'urbanisme, les comunicacions i el capitalisme. Parallellament, les classes treballadores van començar a organitzar-se políticament i sindicalment, sorgint les ideologies del <span class="bold-green">socialisme</span> i de l'<span class="bold-green">anarquisme</span> i articulant-se en l'Associació Internacional de Treballadors (I Internacional, 1864).
        </p>
      `
    },

    // 3. MATRIU 1: ECONOMIA A ESPANYA I CATALUNYA EN EL CONTEXT EUROPEU
    {
      type: 'matrix',
      title: "Matriu Comparativa: Desenvolupament Econòmic i Industrialització (1833-1874)",
      quadrants: [
        {
          title: "Context Internacional",
          badge: "Europa Occidental",
          points: [
            "Consolidació de la Revolució Industrial i desenvolupament urbà massiu.",
            "Consolidació del capitalisme i de la societat de classes.",
            "Organització del moviment obrer (I Internacional, 1864)."
          ]
        },
        {
          title: "Estructura Espanyola",
          badge: "Lenta Modernització",
          points: [
            "Burgesia feble i continuada intromissió militar en la vida política (espadons).",
            "Predomini de la població agrària i rural; fre a la urbanització ràpida.",
            "Reforma agrària que concentra la propietat de la terra en la noblesa i alta burgesia."
          ]
        },
        {
          title: "Industrialització a Catalunya",
          badge: "Fàbrica i Tèxtil",
          points: [
            "Desenvolupament concentrat en el tèxtil cotoner (fàbriques de vapor a la costa).",
            "Fàbrica Bonaplata (Barcelona, 1833), primera a usar vapor; incendiada el 1835 (ludisme).",
            "Aparició de les primeres vagues obreres (1855, protesta per les selfactines)."
          ]
        },
        {
          title: "Infraestructures i Ferrocarril",
          badge: "Vertebració Mercat",
          points: [
            "1848: Inauguració del primer ferrocarril peninsular (Barcelona-Mataró, Miquel Biada).",
            "1851: Línia Madrid-Aranjuez.",
            "1855: Llei General de Ferrocarrils (impuls a la xarxa radial centralitzada)."
          ]
        }
      ]
    },

    // 4. TEXTBLOCK 2: LES REGÈNCIES (1833-1843) I LA PRIMERA GUERRA CARLINA
    {
      type: 'textBlock',
      title: "2. Les Regències (1833-1843): Carlisme, Transició Politica i Reformes Progressistes",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>La Primera Guerra Carlina (1833-1840):</strong><br>
          La mort de Ferran VII va desencadenar una guerra civil i dinàstica entre els <span class="bold-red">Carlins</span> (partidaris de Carles Maria Isidre, que defensaven l'absolutisme, la tradició, la religió i els furs, recolzats per la noblesa rural, el clergat i la pagesia de Navarra, País Basc, Catalunya i el Maestrat) i els <span class="bold-blue">Isabelins</span> (defensors de la minoria d'edat d'Isabel II, que van haver de buscar el suport dels liberals). El conflicte va acabar amb la derrota carlina i la signatura del <span class="bold-purple">Conveni de Bergara (1839)</span> entre els generals Espartero i Maroto, que mantenia els furs bascos.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Regència de Maria Cristina (1833-1840) i l'Alternança Liberal:</strong><br>
          <ul>
            <li><strong>Governs Moderats (1833-1835):</strong> Promulga l'<em>Estatut Reial de 1834</em> (carta atorgada amb sobirania a la Corona i sufragi molt restringit). Etapa de greus enfrontaments socials: febre del còlera (1834) i <span class="bold-orange">bullangues de 1835</span> (revoltes urbanes, matances de frares a Madrid i crema de la fàbrica Bonaplata a Barcelona). El Motí dels sergents de La Granja (1836) va forçar la restauració de la Constitució de 1812.</li>
            <li><strong>Governs Progressistes (1836-1837):</strong> Abolició definitiva del règim senyorial (delme, senyorius jurisdiccionals, gremis) i aprovació de la <span class="bold-green">Desamortització de Mendizábal (1836)</span> sobre els béns del clergat regular per finançar la guerra i Hisenda. Promulga la <span class="bold-blue">Constitució de 1837</span> (sobirania nacional, drets individuals, Milícia Nacional i sufragi censatari).</li>
          </ul>
        </p>
        <p>
          <strong>Regència del General Espartero (1840-1843):</strong><br>
          Després de fer abdicar Maria Cristina el 1840, el general progressista Baldomero Espartero va assumir la regència. El seu govern autoritari i la defensa d'una política <span class="bold-red">lliurecanvista</span> (obertura als teixits britànics) van amenaçar la indústria tèxtil catalana. Això va provocar la insurrecció de Barcelona i el posterior <span class="bold-red">bombardeig de la ciutat el 1842</span> des de Montjuïc. L'aixecament generalitzat de 1843 el va obligar a exiliar-se, avançant la majoria d'edat d'Isabel II als 13 anys.
        </p>
      `
    },

    // 5. FLOWCHART 1: TRANSICIÓ DE LA REGÈNCIA DE MARIA CRISTINA A ESPARTERO
    {
      type: 'flowchart',
      title: "Esquema de Causalitat: De la Mort de Ferran VII a la Majoritat d'Edat d'Isabel II",
      steps: [
        {
          badge: "1833",
          label: "Inici de la 1a Guerra Carlina",
          desc: "Conflicte dinàstic. Maria Cristina cerca el suport dels liberals per salvar el tron d'Isabel II."
        },
        {
          badge: "1836",
          label: "Revolució Progressista",
          desc: "Motí de La Granja. Mendizábal aplica la desamortització eclesiàstica i es redacta la Constitució de 1837."
        },
        {
          badge: "1840-1843",
          label: "Regència d'Espartero",
          desc: "Govern autoritari del general progressista. Bombardeig de Barcelona el 1842 per la crisi lliurecanvista."
        },
        {
          badge: "1843",
          label: "Majoritat d'Edat d'Isabel II",
          desc: "Caiguda d'Espartero. Les Corts proclamen reina Isabel II als 13 anys, iniciant el regnat efectiu."
        }
      ]
    },

    // 6. TEXTBLOCK 3: EL REGNAT EFECTIU D'ISABEL II (1843-1868)
    {
      type: 'textBlock',
      title: "3. El Regnat Efectiu d'Isabel II (1843-1868): Dècada Moderada, Bienni i Descomposició",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>La Dècada Moderada (1844-1854):</strong><br>
          Sota el lideratge del <span class="bold-blue">General Ramón María Narváez</span>, el Partit Moderat va construir un Estat centralitzat i d'ordre:
          <ul>
            <li>Fundació de la <span class="bold-purple">Guàrdia Civil (1844)</span> per garantir l'ordre públic al camp i protegir la propietat privada.</li>
            <li>Promulgació de la <span class="bold-blue">Constitució de 1845</span>: sobirania compartida entre el Rei i les Corts, sufragi censatari molt restrictiu, control de premsa i confessionalitat catòlica oficial.</li>
            <li>Signatura del <span class="bold-purple">Concordat amb la Santa Seu (1851)</span>: atura les desamortitzacions, subvenciona el clergat i atorga competències educatives a l'Església.</li>
            <li>Segona Guerra Carlina o *Guerra dels Matiners* (1846-1849) a Catalunya per protestes agràries, quintes i el fracàs del matrimoni entre Isabel II i el pretendent carlí. Naixement del <span class="bold-green">Partit Demòcrata (1849)</span>.</li>
          </ul>
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>El Bienni Progressista (1854-1856):</strong><br>
          Iniciat pel pronunciament militar de la <span class="bold-orange">Vicalvarada</span> (liderat per O'Donnell) i el *Manifest de Manzanares*, Espartero torna al poder. Es redacta la Constitució de 1856 (*non nata*), s'aprova la <span class="bold-green">Llei General de Ferrocarrils (1855)</span> i la <span class="bold-green">Desamortització General de Madoz (1855)</span>, privatitzant béns municipal-comunals. Parallellament, es produeix la <span class="bold-red">Primera Vaga General a Barcelona (1855)</span> contra la introducció de les selfactines.
        </p>
        <p>
          <strong>Descomposició del Règim Isabelí (1856-1868):</strong><br>
          Alternança entre la *Unió Liberal* (O'Donnell) i els Moderats (Narváez). Es realitzen campanyes exteriors de prestigi com la <span class="bold-purple">Guerra del Marroc (1859-1860)</span> amb el protagonisme del general <span class="bold-purple">Joan Prim</span> (Batalla de Wad-Ras). A partir de 1866 es conjuguen la crisi de subsistència, la crisi financera ferroviària i la de la indústria cotona. La repressió de la Nit de Sant Daniel (1865) i la revolta de la San Gil condueixen a la signatura del <span class="bold-red">Pacte d'Ostende (1866)</span> entre progressistes i demòcrates per destronar Isabel II.
        </p>
      `
    },

    // 7. MATRIU 2: COMPARACIÓ DE PARTITS POLÍTICS DELS ANYS ISABELINS
    {
      type: 'matrix',
      title: "Matriu Comparativa: Corrents Polítics durant el Regnat d'Isabel II",
      quadrants: [
        {
          title: "Partit Moderat",
          badge: "General Narváez",
          points: [
            "Sobirania compartida entre la Corona i les Corts (Constitució de 1845).",
            "Sufragi censatari molt restrictiu (elits econòmiques).",
            "Defensa de l'ordre, la propietat privada, centralisme i confessionalitat catòlica."
          ]
        },
        {
          title: "Partit Progressista",
          badge: "Espartero / Mendizábal / Madoz",
          points: [
            "Sobirania nacional i limitació de poders de la Corona (Constitució de 1837).",
            "Defensa de la Milícia Nacional, desamortitzacions i lliurecanvisme.",
            "Sufragi censatari més ampli que el moderat."
          ]
        },
        {
          title: "Unió Liberal",
          badge: "General O'Donnell",
          points: [
            "Partit de centre nascut com a opció intermèdia entre moderats i progressistes.",
            "Pragmatisme polític, estabilitat econòmica i foment d'infraestructures.",
            "Promotor de les campanyes militars colonials d'extracció exterior (Marroc, 1859)."
          ]
        },
        {
          title: "Partit Demòcrata",
          badge: "Fundat el 1849",
          points: [
            "Escissió progressista que exigeix el Sufragi Universal Masculí.",
            "Defensa de la sobirania popular, aconfessionalitat de l'Estat i llibertats públiques.",
            "Atreu els sectors populars urbans, la intel·lectualitat i el moviment obrer naixent."
          ]
        }
      ]
    },

    // 8. TEXTBLOCK 4: EL SEXENNI DEMOCRÀTIC (1868-1874)
    {
      type: 'textBlock',
      title: "4. El Sexenni Democràtic (1868-1874): Revolució, Monarquia Democràtica i Primera República",
      content: `
        <p style="margin-bottom: 0.75rem;">
          <strong>La Revolució de 'La Gloriosa' (1868):</strong><br>
          El setembre de 1868, el pronunciament naval de l'almirall Topete a Cadis, sumat als generals <span class="bold-purple">Joan Prim</span> i <span class="bold-purple">Francisco Serrano</span>, va deslligar la revolució popular. Després de la victòria a la <span class="bold-orange">Batalla d'Alcolea</span>, Isabel II va fugir a l'exili a França sota el lema «¡Viva España con honra y sin Borbones!».
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>Govern Provisional i Constitució de 1869:</strong><br>
          El Govern Provisional de Serrano va convocar Corts Constituents triades per primer cop mitjançant <span class="bold-green">Sufragi Universal Masculí (majors de 25 anys)</span>. La <span class="bold-blue">Constitució de 1869</span> va establir una monarquia democràtica, una àmplia declaració de drets (llibertat d'impremta, de culte, de reunió i d'associació) i la legalització de les organitzacions obreres (com *Les Tres Classes de Vapor* a Barcelona). Durant aquesta etapa es va iniciar la <span class="bold-red">Primera Guerra de Cuba o Guerra dels Deu Anys (1868-1878)</span>.
        </p>
        <p style="margin-bottom: 0.75rem;">
          <strong>El Regnat d'Amadeu de Savoia (1870-1873):</strong><br>
          Elegit per les Corts a proposta de Prim (assassinat pocs dies abans de la seva arribada), el rei italià va patir una inestabilitat insostenible: 6 governs i 3 eleccions en dos anys. S'hi van oposar els carlins (inici de la <span class="bold-red">Tercera Guerra Carlina, 1872-1876</span>), els republicans, l'Església i els moderats alfonsins. Amadeu I va abdicar el febrer de 1873.
        </p>
        <p>
          <strong>La Primera República Espanyola (1873-1874):</strong><br>
          Proclamada per les Corts davant el buit monàrquic. Va ser un període de gran instabilitat amb 4 presidents en menys d'un any (<span class="bold-blue">Figueras, Pi i Margall, Salmerón i Castelar</span>). Es va redactar el projecte de *Constitució Federal de 1873* (*non nata*). La República va haver de fer front a la revolta del <span class="bold-red">Cantonalisme</span> (insurrecció dels republicans intransigents que proclamaven cantons independents com Cartagena o Màlaga), a la Guerra Carlina i al conflicte cubà. El gener de 1874, el <span class="bold-purple">cop d'Estat del General Pavía</span> va dissoldre les Corts i va lliurar el poder al general Serrano en un règim autoritari, fins que el pronunciament del general <span class="bold-purple">Martínez Campos a Sagunt (desembre de 1874)</span> va restaurar la monarquia borbònica en la figura d'Alfons XII.
        </p>
      `
    },

    // 9. MATRIU 3: COMPARACIÓ DE LES CONSTITUCIONS DEL PERÍODE (1837, 1845, 1869, 1873)
    {
      type: 'matrix',
      title: "Matriu Comparativa: Evolució Constitucional de la Construcció de l'Estat Liberal",
      quadrants: [
        {
          title: "Constitució de 1837",
          badge: "Progressista",
          points: [
            "Sobirania nacional; Corts bicamerals (Congrés i Senat).",
            "Sufragi censatari; reconeixement de la Milícia Nacional.",
            "Finançament estatal del clergat però amb tolerància de culte privat."
          ]
        },
        {
          title: "Constitució de 1845",
          badge: "Moderada",
          points: [
            "Sobirania compartida entre la Corona i les Corts.",
            "Sufragi censatari molt restringit (menys de l'1% de la població).",
            "Confessionalitat catòlica oficial i retallada de drets de premsa."
          ]
        },
        {
          title: "Constitució de 1869",
          badge: "Democràtica (Sexenni)",
          points: [
            "Sobirania nacional i Sufragi Universal Masculí (+25 anys).",
            "Monarquia democràtica i aconfessionalitat de l'Estat.",
            "Declaració exhaustiva de drets individuals (associació, reunió, premsa)."
          ]
        },
        {
          title: "Projecte de Constitució de 1873",
          badge: "Republicana Federal (Non Nata)",
          points: [
            "Proclamació d'una República Federal dividida en 17 Estats.",
            "Separació estricta entre Església i Estat; estat laic.",
            "Model social progressista no aplicat pel col·lapse cantonalista."
          ]
        }
      ]
    },

    // 10. TIMELINE: CRONOLOGIA COMPLETA DE LA CONSTRUCCIÓ DE L'ESTAT LIBERAL
    {
      type: 'timeline',
      title: "Cronologia de Monarques, Regències, Guerres i Constitucions (1833-1874)",
      events: [
        {
          year: "1833",
          badge: "Conflicte",
          icon: "fa-crown",
          event: "Mort de Ferran VII i inici de la 1a Guerra Carlina",
          desc: "Inici de la regència de Maria Cristina i enfrontament entre isabelins liberals i carlins absolutistes."
        },
        {
          year: "1834",
          badge: "Transició",
          icon: "fa-scroll",
          event: "Promulgació de l'Estatut Reial",
          desc: "Carta atorgada per Martínez de la Rosa. Conflictes per l'epidèmia de còlera i primeres bullangues."
        },
        {
          year: "1835",
          badge: "Revolta",
          icon: "fa-fire",
          event: "Bullangues i Atac a la Fàbrica Bonaplata",
          desc: "Aixecament popular a Barcelona i destrucció de la primera fàbrica de vapor (ludisme)."
        },
        {
          year: "1836",
          badge: "Reformes",
          icon: "fa-coins",
          event: "Desamortització de Mendizábal i Motí de La Granja",
          desc: "Expropiació de béns de l'Església regular i restauració del constitucionalisme progressista."
        },
        {
          year: "1837",
          badge: "Constitució",
          icon: "fa-file-signature",
          event: "Aprovació de la Constitució de 1837",
          desc: "Text progressista basat en la sobirania nacional i la creació de la Milícia Nacional."
        },
        {
          year: "1839",
          badge: "Pau Carlina",
          icon: "fa-handshake",
          event: "Conveni de Bergara (Abrazo de Vergara)",
          desc: "Pacte entre Espartero i Maroto que posa fi a la Primera Guerra Carlina mantenint els furs bascos."
        },
        {
          year: "1840-1843",
          badge: "Regència",
          icon: "fa-user-ninja",
          event: "Regència del General Espartero",
          desc: "Govern autoritari progressista; insurrecció a Barcelona i bombardeig de la ciutat des de Montjuïc el 1842."
        },
        {
          year: "1844",
          badge: "Ordre Públic",
          icon: "fa-user-shield",
          event: "Fundació de la Guàrdia Civil",
          desc: "Creació del cos de seguretat pel General Narváez per protegir el camp i la propietat privada."
        },
        {
          year: "1845",
          badge: "Constitució",
          icon: "fa-landmark",
          event: "Aprovació de la Constitució Moderada de 1845",
          desc: "Estableix la sobirania compartida entre el Rei i les Corts i el sufragi censatari molt restringit."
        },
        {
          year: "1848",
          badge: "Ferrocarril",
          icon: "fa-train",
          event: "Inauguració del Ferrocarril Barcelona-Mataró",
          desc: "Primer ferrocarril peninsular promogut per Miquel Biada amb capitals repatriats d'Amèrica."
        },
        {
          year: "1849",
          badge: "Democràcia",
          icon: "fa-users",
          event: "Naixement del Partit Demòcrata",
          desc: "Escissió del Partit Progressista que reclama el Sufragi Universal Masculí i drets socials."
        },
        {
          year: "1851",
          badge: "Religió",
          icon: "fa-church",
          event: "Concordat amb la Santa Seu",
          desc: "Acord del govern moderat que paralitza les desamortitzacions i reestableix el finançament del clergat."
        },
        {
          year: "1854",
          badge: "Revolució",
          icon: "fa-bolt",
          event: "La Vicalvarada i Manifest de Manzanares",
          desc: "Pronunciament d'O'Donnell que obre el Bienni Progressista (1854-1856) sota la presidència d'Espartero."
        },
        {
          year: "1855",
          badge: "Economia",
          icon: "fa-industry",
          event: "Desamortització de Madoz, Llei de Ferrocarrils i Vaga General",
          desc: "Privatització de béns comunals i municipals; primera Vaga General a Barcelona per l'ús de les selfactines."
        },
        {
          year: "1859-1860",
          badge: "Guerra Exterior",
          icon: "fa-shield-cat",
          event: "Guerra del Marroc (Batalla de Wad-Ras)",
          desc: "Campanya colonial d'extracció exterior organitzada per O'Donnell amb el protagonisme del General Prim."
        },
        {
          year: "1866",
          badge: "Pacte",
          icon: "fa-handshake-angle",
          event: "Pacte d'Ostende",
          desc: "Acord clandestí a Bèlgica entre progressistes i demòcrates per destronar Isabel II."
        },
        {
          year: "1868",
          badge: "Revolució",
          icon: "fa-flag",
          event: "Revolució de 'La Gloriosa' i exili d'Isabel II",
          desc: "Pronunciament de Topete, Prim i Serrano; Batalla d'Alcolea i inici del Sexenni Democràtic."
        },
        {
          year: "1869",
          badge: "Constitució",
          icon: "fa-scroll",
          event: "Aprovació de la Constitució Democràtica de 1869",
          desc: "Estableix el Sufragi Universal Masculí, la monarquia democràtica i una àmplia declaració de llibertats."
        },
        {
          year: "1870-1873",
          badge: "Regnat",
          icon: "fa-crown",
          event: "Regnat d'Amadeu de Savoia",
          desc: "Monarquia constitucional aturada per la Tercera Guerra Carlina (1872), la Guerra de Cuba i l'assassinat de Prim."
        },
        {
          year: "1873-1874",
          badge: "República",
          icon: "fa-building-columns",
          event: "Proclamació de la Primera República Espanyola",
          desc: "Etapa de fort enfrontament polític, projecte de Constitució Federal, revolta del Cantonalisme i cop de Pavía (1874)."
        },
        {
          year: "1874",
          badge: "Restauració",
          icon: "fa-horse",
          event: "Pronunciament de Martínez Campos a Sagunt",
          desc: "Fi de la República i retorn de la dinastia Borbònica en la figura d'Alfons XII."
        }
      ]
    },

    // 11. SOURCES: FONTS PRIMÀRIES I PERSONATGES HISTÒRICS
    {
      type: 'sources',
      quoteTitle: "Font Primària: Proclama de la Revolució de 1868 (La Gloriosa)",
      quoteText: "«¡Viva España con honra y sin Borbones! El poble espanyol ha demostrat la seva voluntat inquebrantable de trencar amb les cadenes de la tirania. Volem un Govern provisional que representi la sobirania de la Nació, que garanteixi el Sufragi Universal, la llibertat d'impremta, la llibertat de culte i la fi d'un règim corromput que ha portat el país a la ruïna.»",
      quoteAuthor: "Manifest de Cadis (Topete, Prim i Serrano, setembre de 1868)",
      charName: "Joan Prim i Prats (1814-1870)",
      charRole: "General, Polític Progressista i President del Govern",
      charDesc: "Militar i polític reusenc, heroi de la Guerra del Marroc (1859-1860) i dirigent del Partit Progressista. Va ser el principal arquitecte de la Revolució de 1868 que va destronar Isabel II i el valedor de la candidatura d'Amadeu de Savoia a la corona d'Espanya. Va ser assassinat en un atemptat al carrer del Turco de Madrid el desembre de 1870, pocs dies abans de l'arribada del nou rei."
    }
  ]
});