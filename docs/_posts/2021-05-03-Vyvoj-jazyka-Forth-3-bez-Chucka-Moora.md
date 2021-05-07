---
title: Vývoj jazyka Forth [3] - Forth bez Chucka Moora
author: Pavel Křivánek
---

> Tato série příspěvků vzniká jako překlad obsáhlého článku [The Evolution of Forth](https://www.forth.com/resources/forth-programming-language/)

MicroFORTH byl koncem 70. let intenzivně propagován a přitahoval velkou pozornost. Jedním z vedlejších efektů byl růst aktivní a zanícené skupiny nadšenců, kteří si Forth zamilovali. V jejich stopách se objevily nové společnosti uvádějící na trh verze jazyka Forth, které konkurovaly společnosti FORTH, Inc. Současně se Moore sám stále více věnoval hardwarovým implementacím jazyka Forth a méně se zapojoval do výroby softwaru ve společnosti FORTH, Inc. (kterou opustil v roce 1982, aby se mohl naplno věnovat hardwaru). V této části se budeme zabývat vývojem jazyka Forth pod těmito různými novými vlivy.

## 3.1 Forth Interest Group

Koncem sedmdesátých let minulého století byla severní Kalifornie plná počátečního burácení počítačové revoluce. Skupiny zainteresovaných jednotlivců, jako například "Home Brew Computer Club", se scházely, aby sdílely zkušenosti. V časopisech, jako byl Radio Electronics, vycházely návody krok za krokem, jak si postavit vlastní terminál s obrazovkou a dokonce i návody, jak si postavit vlastní mikropočítačový systém.

Vzhledem k vysokým nákladům na paměti a nízké úrovni integrace VLSI byly typické počítače těchto nadšenců prostředím s velmi omezenými zdroji. Jako ozvěna první generace počítačů zde nebyl dostatek paměti pro současnou podporu editoru, assembleru a linkeru. Hromadné úložiště bylo pomalé a drahé, takže mnoho domácích systémů používalo pro vstup/výstup papírové pásky nebo audiokazety. I když byly k dispozici některé produkty založené na jazyce BASIC, byly obvykle velmi pomalé a neschopné podporovat sofistikovanější programy. Scéna tak byla připravena pro něco jiného, co by uspokojilo rozšiřující se potřeby těchto vytrvalých objevitelů a "prvních osvojitelů".

Jazyk Forth se zrodil a byl formován tak, aby využíval minimální zdroje systémů, které jich měly jen omezené množství. Nenesl s sebou ani nadměrnou zátěž obecného řešení, ani požadavek na existující souborový nebo operační systém či velkou paměť. Jak se Forth používal k řešení stále náročnějších aplikací vestavěných počítačů, začal se ucházet o pozornost severokalifornských nadšenců pro domácí počítače.

Bill Ragsdale, úspěšný výrobce bezpečnostních systémů v Bay Area, si uvědomil výhody microFORTHu a v roce 1978 požádal společnost FORTH, Inc. o výrobu verze microFORTHu pro 6502. Společnost FORTH, Inc. odmítla, protože viděla mnohem menší poptávku na trhu po microFORTHu pro 6502 než po populárnějších procesorech 8080, Z80 a 6800.

Ragsdale pak hledal někoho se znalostmi microFORTH a důvěrnou znalostí 6502, kdo by portoval verzi microFORTH na 6502. Našel majora Roberta Selzera, který používal microFORTH pro vývojový systém AMI 6800 v rámci armádního projektu a soukromě vyvíjel samostatný balík editor/assembler/linker pro 6502. Selzer napsal assembler jazyka Forth pro 6502 a použil armádní metakompilátor microFORTHu k cílené kompilaci prvního samostatného jazyka Forth pro 6502 pro jednodeskový počítač Jolt.

Selzer a Ragsdale následně provedli podstatné úpravy a vylepšení, včetně využití architektonických vlastností 6502, jako je nultá stránka a implicitní adresování. Mnoho vylepšení, která charakterizovala pozdější verze pro veřejnost, byla provedena v tomto období, včetně polí s proměnnou délkou jména a modifikací slovníkového propojeného seznamu vláken. Metakompilátor na Joltu mohl výrazně změněné jádro směřovat na vyšší adresu v paměti. Bootovatelný obraz by pak byl překompilován novým jádrem na nižší zaváděcí adresu, která by pak mohla být zapsána na disk. V tomto okamžiku měl Ragsdale k dispozici systém, s nímž mohl uspokojit své profesionální potřeby v oblasti vestavných bezpečnostních systémů.

V tomto období založili Ragsdale, Kim Harris, John James, David Boulton, Dave Bengel, Tom Olsen a Dave Wyland Forth Interest Group (FIG), zájmovou skupinu Forth [FIG 1978]. Představili koncept "modelu FIG Forth", veřejně dostupného systému Forth, který by mohl být implementován na populárních počítačových architekturách.

Model FIG Forthu byl odvozen z Ragsdaleova systému 6502. Za účelem zjednodušení zveřejnění a rychlé implementace na nejrůznějších architekturách byl napsán překladač, který převáděl zdrojový kód metakompilátoru jazyka Forth na zdrojový text, který po vložení do standardního assembleru 6502 replikoval původní obraz jádra. Tímto způsobem nebylo třeba zveřejňovat ani metakompilátor, ani jeho zdrojový kód. To je důležitý bod. Metakompilování jazyka Forth je proces, který je obtížné zcela pochopit. Vyžaduje přímou manipulaci se třemi různými fázemi provádění a objektovými oblastmi a není něčím, co by běžný uživatel chtěl nebo potřeboval.

Zveřejněním výpisů assembleru dokázala zájmová skupina Forth shrnout běhové prostředí Forthu způsobem, který lze snadno replikovat a/nebo přeložit do assembleru jiné počítačové architektury. Záměrem původního týmu implementátorů bylo podnítit tímto způsobem vývoj kompatibilních systémů Forth a vznik nových dodavatelů produktů postavených na Forthu.

Po zveřejnění modelu FIG Forth pro 6502 vydali implementátoři FIG kompatibilní verze pro mikropočítače 8080 a 6800 a minipočítače PDP-11 a Computer Automation. V průběhu let dobrovolníci přidávali další platformy a dokumentaci. Encyklopedie Forthu z roku 1982 od Mitche Dericka a Lindy Bakerové [Derick, 1982] poskytla vyčerpávající 333stránkovou příručku o FIG Forthu s vývojovými diagramy většiny slov. V roce 1983 se v inzerátu ve Forth Dimensions, zpravodaji FIG [FIG, 1983], objevil seznam: RCA 1802, 8080, PACE, 6502, 8086/88, 6800, 6809, 9900, Nova, Eclipse, VAX, Alpha Micro, Apple II, 68000, PDP11/LSI11 a Z80.

Dnes má zájmová skupina Forth několik tisíc členů ve více než patnácti zemích. Od roku 1980 FIG sponzoruje každoroční konferenci FORML (Forth Modification Laboratory), vzdělávací fórum pro sdílení a diskusi o nových nebo neověřených návrzích, které mají být pro Forth přínosem, a pro diskusi o technických aspektech Forthu. Zápisy dává Forth Interest Group k dispozici.

## 3.2 Komerční a veřejně dostupné systémy pro osobní počítače
Společnost Apple Computer vyrostla z nadšení pro počítače v oblasti Sanfranciského zálivu a s ním i celá nová generace počítačů s omezenými zdroji. Ačkoli byl v ROM k dispozici jazyk BASIC, k napsání řady populárních textových editorů a her na počítači Apple ][ se používal jazyk Forth, který umožňoval rezidentní vývoj velkých programů v rámci omezených paměťových a diskových kapacit. Dnes, kdy jsou všudypřítomné megabajty paměti a disku, je těžké si představit, jaké to bylo vyvíjet větší programy na 40 sloupců široké obrazovce v rámci 16 kilobajtů paměti a 100 kilobajtů diskové kapacity.

Téměř přes noc se objevili prodejci levných systémů Forth, z nichž každý podporoval svůj oblíbený osobní počítač a většina z nich založila své systémy na modelu FIG. V roce 1979 například společnost Miller Microcomputer Services oznámila MMSFORTH pro TRS-80 [TRS-80, 1979] a v roce 1980 Computerworld uvedl [Taylor, 1980], že MMS má pro svůj produkt více než 100 uživatelských skupin.

Když společnost IBM vstoupila do oblasti osobních počítačů se svým původním PC, rozhodla se distribuovat verzi populárního textového editoru Apple ][ EasyWriter, napsanou ve Forthu, jako produkt IBM. Společnost Laboratory Microsystems (LMI) představila komerční Forth pro IBM PC v roce 1982. Následovala řada komerčních i veřejně dostupných forthovských produktů a začaly se významně rozvíjet další softwarové počiny.

Po uvedení prvního komerčního jazyka Forth pro IBM PC společnost LMI pokračovala ve strategii výroby špičkových systémů Forth pro PC včetně 32bitové implementace v reálném režimu (únor 1983), Forth založený na OS/2 (únor 1988) a verze pro Windows (1992). Zakladatel společnosti LMI Ray Duncan se stal uznávanou autoritou v oblasti operačních systémů firmy Microsoft [např. Duncan, 1988].

Nabídkou společnosti FORTH, Inc. pro PC byl polyFORTH, který kombinoval podporu více uživatelů a databázové nástroje z jejich produktů pro minipočítače s architekturou microFORTHu založenou na ROM. V roce 1984 FORTH, Inc. podporoval až 16 uživatelů na PC bez viditelného zhoršení výkonu, přičemž polyFORTH běžel nejprve jako nativní OS a později jako korezidentní OS s MS-DOS. Koncem osmdesátých let podporovali zákazníci s polyFORTHem, jako například NCR, až 150 uživatelů na jediném PC s procesorem 80386.

V roce 1978 dal major Seltzer Donu Colburnovi kopii 6502 Forthu, kterou napsal pro Ragsdalea, výměnou za to, že Colburn napsal dva články o Selzerově práci na 6502. Colburn ji následně použil jako základ pro verzi založenou na předběžném standardu FORTH-77 (jediná implementace FORTH-77, o které autoři vědí). Na podzim 1979 Colburn vytvořil systém kompatibilní s FIG Forthem pro prototypy 68000. Víceúlohová, víceuživatelská verze tohoto produktu nazvaná MultiForth byla předvedena společnosti Motorola v lednu 1980, tedy dlouho před výrobními dodávkami 68000. Když divize stolních počítačů společnosti Hewlett Packard v roce 1982 navrhla novou generaci stolních počítačů na bázi 68000, prvním dostupným jazykovým produktem třetí strany, který distribuovala pod produktovým číslem HP, byl MultiForth.

Colburnova společnost Creative Solutions také uvedla MacForth, první rezidentní vývojový systém pro 128k počítač Apple Macintosh, hned po jeho debutu v lednu 1984. Protože MacForth jedinečným způsobem umožňoval přímý přístup k celým rutinám "Toolbox ROM" Macintoshe v rezidentním programovacím prostředí spolu s komplexními příklady aplikací, naučila se většina první generace programátorů aplikací pro Macintosh vytvářet a používat vysouvací menu, okna, grafiku a ovládání myší pomocí MacForthu. Na prvních počítačích Macintosh byly v MacForthu napsány významné velkoobjemové tabulkové procesory, 2D a 3D návrhové balíky, konstrukční nástroje CAD/CAM, hry, lékařská diagnostika, programy pro vylepšení obrazu, účetní balíky, stolní planetária a aplikace pro řízení procesů.

Do roku 1985 existovalo více než sedmdesát dodavatelů systémů Forth, od jednotlivců až po organizace s mnohamilionovým obratem.

V roce 1982 založil Lawrence Forsley Institut pro aplikovaný výzkum Forthu, který se nyní nazývá jednoduše Forth Institute. Tato organizace sponzorovala každoroční konferenci o aplikacích Forthu na Rochesterské univerzitě ve státě New York a vydává Journal of Forth Application and Research, recenzované technické periodikum o aplikacích Forthu, novém vývoji, technikách a přehledech specifických oblastí.

V roce 1989 George Shaw a další založili speciální zájmovou skupinu ACM pro Forth s názvem SIGForth, která rovněž sponzoruje informační bulletin a každoroční konferenci.

| Systém(y) | Společnost | Primární produkty a trhy
| - | - | -
| CFORTH83, Forthmacs, SunForth | Bradley Forthware | Přenositelný Forth napsaný v jazyce C; verze pro Atari, Macintosh, Sun; poradenství a služby související s Open Boot společnosti Sun Microsystems.
| cmFORTH | Silicon Composers | Veřejně dostupný systém pro Novix Forth a další procesory od C. Moora, portovaný na procesory Harris a SC-32 Forth od jiných autorů.
| Cyrano | Opto-22 | Forth pro proprietární kontrolér
| F-PC | T. Zimmer et al. | Rozsáhlý public-domain systém pro rodinu IBM-PC
| F83 | Laxen a Perry | Public-domain systém s pro rodinu IBM PC, později přenesený dalšími subjekty na jiné platformy
| HS/Forth | Harvard Softworks | Rodina IBM-PC
| JForth | Delta Research | Amiga
| MacForth | Creative Solutions, Inc.	|  Apple Macintosh, desky rozhraní NuBus
| Mach2 | Palo Alto Shipping | Apple Macintosh
| mmsFORTH | Miller Microcomputer Services | Rodina IBM PC; obchodní a komerční aplikace
| MPEForth | MicroProcessor Engineering (UK) | Osobní počítače a vestavěné systémy
| mvpFORTH | Mountain View Press | Public-domain systém na různých platformách
| Open Boot | Sun Microsystems | Programovatelný jazyk Forth založený na paměti ROM na pracovních stanicích SPARC
| polyFORTH | FORTH, Inc.	| Průmyslové systémy na osobních počítačích a dalších platformách; interaktivní křížové překladače; poradenství a programování na zakázku.
| UR/Forth | Laboratory Microsystems, Inc. (LMI) | Řada počítačů IBM PC se systémy DOS, OS/2 a Windows; křížové překladače pro různé systémy.

**Tabulka 3.** Někteří významní dodavatelé systémů Forth, služeb a souvisejících produktů.

Časopis Byte Magazine věnoval Forthu své srpnové číslo z roku 1980. Bylo to jejich dosud nejprodávanější číslo a bylo několikrát dotisknuto.

### 3.2.1 Principy návrhu
FIG Forth byl optimalizován spíše pro přenositelnost než pro výkon. Pouze velmi málo primitiv bylo kódováno v assembleru a zbytek logiky byl implementován pomocí vysokoúrovňového Forthu. Výsledkem bylo, že byl poměrně pomalý - některé operace, například vyhledávání ve slovníku, byly desetkrát pomalejší než v reprezentativních komerčních implementacích.

Podobně byla s ohledem na začátečníky činěna i další interní rozhodnutí. Dřívější systémy FORTH, Inc. například kompilovaly názvy slov jako délku jména a první tři znaky. To poskytovalo nižší míru kolizí než prosté zkracování a většinu času to bylo dostačující. Model FIG však používal jména s proměnnou délkou až 31 znaků, čímž upřednostnil uživatelskou přívětivost před velikostí. V té době to bylo poněkud kontroverzní (viz obr. 1), ale v polovině 80. let 20. století většina systémů na tuto zvyklost rovněž přešla.

Nástup osobních počítačů dal implementátorům Forthu podnět k tomu, aby se naučili pracovat pod hostitelským operačním systémem. První nenativní systémy vyvinuli v roce 1980 Martin Tracy z Micromotion (pro Apple ][) a Ray Duncan z Laboratory Microsystems, Inc. (pro CP/M na Z80). Systém společnosti LMI obsahoval také celoobrazovkový editor. V roce 1981 LMI přidal podporu pro softwarové a hardwarové výpočty v plovoucí desetinné čárky a také jako první zavedl výkonnostní vylepšení, jako je překlad do nativního kódu a ukládání vyhledávání ve slovníku do mezipaměti v hašovací tabulce pro urychlení vyhledávání ve slovníku.

Nástup nenativních implementací jazyka Forth zavedl problém, který je v praxi jazyka Forth dodnes kontroverzní, a to používání souborů hostitelského operačního systému pro hromadné ukládání dat. Existují dva hlavní přístupy: úplné opuštění tradičních bloků ve prospěch přímé manipulace se zdroji a daty v souborech či mapování bloků na soubory hostitelského OS. První přístup upřednostňují implementátoři, kteří se soustřeďují na systémy pro určitý operační systém (např. MS-DOS), zatímco druhý přístup preferují organizace jako FORTH, Inc, které podporují jak nativní, tak nenativní produkty.

MacForth od Creative Solutions používal velmi kompaktní strategie objektového obrazu včetně zřetězení tokenů a oddělených hlaviček se jmény, aby se maximalizovalo množství paměti dostupné pro vývoj programů na původních 128 kilobajtových počítačích Macintosh. Mezi další nové funkce patřilo přemístění spustitelného obrazu za běhu a vyloučení jmen slov v běhových prostředích bez metakompilování. MacForth obsahoval bezešvé programovací prostředí, které zahrnovalo textový editor na obrazovce, překladač, interpret a assembler v méně než 20 kB paměti.

### 3.2.2 Vlivy
Model FIG byl veřejné dílo a byl přenesen na celou řadu počítačových systémů. Protože vnitřní konstrukce FIG Forthu byla v podstatě stejná na všech strojích, programy napsané ve FIG Forthu se těšily značné míře přenositelnosti včetně programů na "systémové úrovni", které přímo manipulovaly s vnitřnostmi slovníkových položek a dalšími funkcemi závislými na implementaci. Protože FIG Forth byl pro mnoho lidí prvním seznámením s jazykem Forth, je široce spojován s "povahou jazyka Forth".

FIG Forth však nebyl reprezentativní pro všechny komerční implementace této éry. Komerční dodavatelé měli tendenci mnohem více dbát na výkon a, jak jsme viděli, volili implementační strategie, které optimalizovaly rychlost nebo velikost spíše než snadnou přenositelnost.

První významnou snahou o standardizaci jazyka Forth bylo setkání v Utrechtu v roce 1977, kterého se zúčastnilo několik uživatelů Forthu pro astronomii a společnost FORTH, Inc. (v té době jediného komerčního dodavatele). Vytvořili předběžný standard nazvaný FORTH-77 a dohodli se, že se sejdou v následujícím roce. Setkání v letech 1978 a 1979 na ostrově Catalina v Kalifornii, nyní již za účasti zástupců Forth Interest Group  a dalších výrobců, přinesla komplexnější standard nazvaný FORTH-79. Ačkoli byl FORTH-79 velmi vlivný, mnoho uživatelů a výrobců Forthu v něm našlo nedostatky; v roce 1982 se konala dvě setkání, na nichž se standard aktualizoval, a v roce 1983 byl vydán nový standard nazvaný FORTH-83. FORTH-79 i FORTH-83 specifikovaly 16bitový, nezarovnaný, po bajtekch lineárně adresovaný virtuální stroj používající dvojkový doplněk. Tyto standardy vycházely z řady předpokladů o implementačních technikách.

```
DEA- EDI---

I AM AFR--- THA- THE LET--- IN THE LAS- ISS-- ABO-- FOR-- INC-- USI-- ONL- 
THR-- LET--- NAM- FIE--- HAS HAD THE OPP----- EFF--- FRO- WHA- THE WRI--- 
WAN--. HIS LET--- ( LIK- THI- ONE ) SHO-- THA- SAV--- ONL- THR-- LET---- 
AND COU-- IS JUS- ABO-- OPT---- IN TER-- OF A TRA-- OFF BET---- SAV--- 
MEM--- AND KEE---- LEG----. WE STI-- DON- SEE THE NEE- FOR 31 CHA------ 
NAM-- IN THE GEN---- CAS-.

YOU-- TRU--

CHU-- MOO--
FOR-- INC-
```

Obrázek 1. "Dopis redakci" časopisu Forth Dimensions [Moore, 1983] týkající se praxe ukládání názvů slov jazyka Forth jako počtu a prvních tří znaků.

Bohužel některé změny ve FORTHu-83 přinesly vážné nekompatibility se stávajícím kódem. Například formální reprezentace příznaku "true" byla vždy `1` a slovo `NOT` invertovalo logický příznak. Ve FORTH-83 se z "true" stalo `-1` a z `NOT` se stal bitový doplněk. Další problémy se týkaly specifikace zaokrouhleného dělení ve FORTH-83 a závažné nejasnosti ve specifikaci parametrů některých smyčkových struktur. Důsledek těchto nekompatibilit byl rozporuplný. Ačkoli většina implementátorů souhlasila s tím, že FORTH-83 je zlepšením, a přijala nový standard, zůstala hlasitá skupina, která nikdy nekonvertovala a která zůstává skeptická vůči celému procesu tvorby standardů. Například ze systémů uvedených v tabulce 3 je většina poměrně blízko kompatibilitě s FORTHem-83. Významnými výjimkami jsou MacForth, mmsFORTH a mvpFORTH, které zůstaly u FORTHu-79.

V roce 1981 vydala společnost Prentice Hall knihu Starting FORTH, jejímž autorem je Leo Brodie [Brodie, 1981], tehdejší zaměstnanec společnosti FORTH, Inc. Kniha Starting FORTH byla srozumitelná a zábavná (Brodie nakreslil nezapomenutelné kreslené postavičky představující důležité základní entity jazyka Forth) a zároveň byla důkladným úvodem do jazyka. Prodalo se jí více než 110 000 výtisků (po určitou dobu byla nejprodávanější knihou v počítačové řadě Prentice Hall) a měla silný vliv na mnoho lidí, kteří se o jazyce Forth učili poprvé, i na výrobce, kteří se snažili být s ním kompatibilní. Ačkoli první vydání vycházelo především z polyFORTHu společnosti FORTH, Inc., kniha obsahovala mnoho poznámek pod čarou a příkladů ve FIG Forthu a dalších dialektech. Druhé vydání (1987) bylo založeno na standardu FORTH-83.

Dalším významným vlivem na trh osobních počítačů byla konkurence mezi public-domain a komerčními verzemi jazyka Forth. V polovině osmdesátých let byl model FIG postupně nahrazen public-domain systémem F83 (vytvořeným Henrym Laxenem, Mikem Perrym a dalšími, kteří působili pod názvem "No Visible Support Software"), multitaskingovým systémem původně vydaným na IBM PC. Jeho verze byly vyvinuty mnoha nezávislými programátory na nejrůznějších dalších platformách. Tento systém je natolik rozšířený, že mnoho lidí vede jeho název k záměně se standardem FORTH-83. Ve skutečnosti je sice s FORTH-83 do značné míry kompatibilní, ale F83 svými vlastnostmi značně přesahuje omezený standard FORTH-83. Koncem osmdesátých let vytvořil Tom Zimmer a další ještě rozsáhlejší public-domain systém pro PC nazvaný F-PC, který obsahuje několik megabajtů zdrojových kódů a utilit. Kromě nich je však většina volně dostupných Forthů poměrně omezená.

Public-domain Forthy jistě přispěly k tomu, že Forth je široce známý. Jejich vliv však není zcela blahodárný. Podle Tylera Sperryho, editora časopisu Embedded Systems Programming Magazine [Sperry, 1991]:

Problémem je, že je poměrně snadné implementovat vlastní minimální systém Forth. Jádro je koneckonců jen několik set bajtů kódu... Bohužel, vytvořit interpret Forthu je jako napsat malý překladač jazyka C: bez dobře propracované knihovny je to jen hračka. Jedním z největších problémů public-domain a sharewarových systémů je, že jejich knihovny jsou, mírně řečeno, často jen částečně dokončené a mají útržkovitou dokumentaci.

Lidé, kteří viděli nebo používali pouze veřejně dostupné omezené implementace Forthu, často vnímají samotný Forth jako hračku. A dodavatelé kvalitních komerčních systémů se musí vypořádat s předpokladem potenciálních zákazníků, že všechny Forthy jsou stejné, což je domněnka, která přirozeně vyvolává značný cenový odpor vzhledem k tomu, že public-domain verze jsou extrémně levné. V komunitě uživatelů Forthu se však traduje vtip, že "když jste viděli jeden Forth... viděli jste jeden Forth". Rozdíl v kvalitě kódu a dokumentace, povaze a rozsahu knihoven a také v podpoře produktů je obrovský. Potenciálnímu uživateli je radno zhodnotit řadu veřejných i komerčních nabídek.

## 3.3 Vestavěné systémy

### 3.3.1 Prostředí a aplikace
Schopnost Forthu maximálně využívat omezené hardwarové prostředky z něj učinila přirozenou volbu pro vestavěné mikroprocesorové systémy. Některé z nich byly malá: kardiomonitor na bázi RCA 1802 (1979), který prováděl podrobnou analýzu průběhu srdečních tepů, nebyl o mnoho větší než 1″ × 2″  kazeta s páskou, kterou používal k záznamu abnormalit. Některé byly velké, například 750tunový protahovací lis, který počátkem 80. let používala společnost Lockheed k tvarování panelů pro křídla letounů C5B. Některé byly distribuované, jako například zhruba 500 síťových procesorů používaných pro rozsáhlý systém správy zařízení na mezinárodním letišti krále Khaleda v Rijádu v Saúdské Arábii [Rather, 1985]. Forth byl zvláště úspěšný při vývoji firmwaru pro příruční zařízení vyráběná společnostmi jako Itron a MSI Data. V roce 1990 získala společnost Federal Express prestižní cenu kvality Malcolma Baldridge za svůj systém sledování zásilek. Zadávání dat je prováděno z příručních zařízení založených na Forthu, která nosí padesát tisíc kurýrů a agentů společnosti Federal po celém světě.

Extrémní modularita jazyka Forth usnadňuje důkladné a systematické testování, což jej činí atraktivním pro aplikace vyžadující vysokou spolehlivost. Díky tomu byl použit v řadě satelitů a experimentů raketoplánů. Společnost McDonnell Douglas použila polyFORTH ve svém projektu Elektroforéza ve vesmíru [Wood, 1986] k řízení samotné továrny v nákladovém prostoru (několik 68000 desek na sběrnici VME), řídicí konzole astronautů (přenosný počítač) a jejich pozemního analytického počítače (počítač Compaq). Let raketoplánu Columbia v listopadu 1990 nesl čtyři astronomická zařízení, z nichž tři byla naprogramována ve Forthu [Ballard 1991], a let Spacelab v lednu 1992 obsahoval experiment Microgravity Vestibular Investigation (MVI), který používal systém polyFORTH pro palubní řízení a analýzu [Paloski, 1986] a MACH2 v pozemním počítači Macintosh pro analýzu.

Pravděpodobně nejplodnějším jednotlivým dodavatelem vestavěných forthovských systémů je společnost Sun Microsystems, jejíž všechny pracovní stanice SPARC používají programovatelný monitor založený na Forthu nazvaný Open Boot, který vyvinul Mitch Bradley a jeho spolupracovníci. Bradley věří [Bradley, 1991], že Forth byl pro tento účel úspěšný, protože nabízel:

"virtuální stroj" nezávislý na procesoru, který se používal pro přenosné ovladače s bajtkódem;
prostředí pro ladění těchto ovladačů;
interaktivní příkazový jazyk s kompletními možnostmi programovacího jazyka, který byl užitečný pro spouštění a ladění hardwaru;
vestavěné prostředí pro ladění samotného firmwaru (ladění firmwaru je jinak poměrně obtížné);
ladicí prostředí pro software operačního systému;
rozšiřitelnost, která umožňuje snadnou podporu nových hardwarových požadavků a funkcí, a
velkou flexibilitu při ladění implementace s ohledem na kompromisy mezi rychlostí a prostorem.

Nejméně jeden další významný výrobce přijal firmware Open Boot pro celou svou produktovou řadu a existuje pracovní skupina, která pro něj vyvíjí standard IEEE.

### 3.3.2 Zásady návrhu

Od minipočítačů 70. let až po PC 80. let většina systémů Forth podporovala vývoj na stejném počítači, na kterém měla být dokončená aplikace spuštěna. Dokonce i mikroprocesorové systémy z konce 70. a počátku 80. let byly vyvíjeny na stejném procesoru (na rozdíl od křížového vývoje), s funkcemi vývojového prostředí pro odpojení vývojových nástrojů a vytvoření cílové ROM.

Většina vestavěných systémů postrádá disk, terminál nebo obojí, čímž se stávají nehostinnými i pro nejúspornější programovací prostředí Forth. Přesto někteří výrobci nabízejí vestavěný Forth v mikrokontrolérech. Příkladem je výše zmíněný Rockwell AIM 65 a desky mikrokontrolérů prodávané firmami New Micros, Inc. z Texasu, Vesta Technologies, Inc. z Colorada a Opto-22 z Kalifornie.

Jak se však osobní počítače stávaly všudypřítomnými, staly se také oblíbenými jako hostitelské počítače pro pohodlnější a výkonnější křížová vývojová prostředí Forth. Ta byla obvykle založena na modifikovaných verzích klasických metakompilátorů Forthu, upravených pro podporu křížového vývoje.

Tradiční slovník jazyka Forth je integrovaný: "definice" obsahuje jméno slova (které lze nalézt při vyhledávání ve slovníku prováděném textovým interpretem), spustitelnou část (typicky ukazatel na kód, který provádí slova určité třídy, jako jsou dvojtečkové definice, proměnné, konstanty atd.) a datový prostor (obsahující jednu nebo více hodnot nebo adres slov, která tvoří obsah definice), vše typicky v sousedních paměťových místech (viz však oddíl 5.2, Strategie implementace). Metakompilátor je strukturálně rozděluje na části, které používá kompilátor hostitelského systému (ekvivalent tabulky symbolů), a části požadované za běhu na cílové platformě. Aby byl cílový program uložitelný v ROM, musí překladač také spravovat oddělené datové prostory ROM a RAM, obvykle pomocí několika sad slovníkových ukazatelů.



