---
title: Vývoj jazyka Forth [2] - Vývoj a šíření
author: Pavel Křivánek
---

> Tato série příspěvků vzniká jako překlad obsáhlého článku [The Evolution of Forth](https://www.forth.com/resources/forth-programming-language/)

Na počátku 70. let dosáhl Forth takové úrovně vyspělosti, která nejenže umožnila jeho použití ve významných aplikacích, ale také přitáhla pozornost dalších programátorů a organizací. V reakci na jejich potřeby jej Moore implementoval na více počítačů a přizpůsoboval jej tak, aby zvládal stále větší třídy aplikací.

## 2.1 Forth v NRAO

Moore vyvinul první kompletní samostatnou implementaci jazyka Forth v roce 1971 pro 11metrový radioteleskop provozovaný Národní radioastronomickou observatoří (NRAO) na Kitt Peaku v Arizoně. Tento systém běžel na dvou raných minipočítačích (16 KB DDP-116 a 32 KB H316) spojených sériovou linkou. Jednalo se o multiprogramový i multiprocesorový systém (oba počítače se dělily o odpovědnost za řízení teleskopu a jeho vědeckých přístrojů), který byl zodpovědný za nasměrování a sledování teleskopu, sběr dat a jejich záznam na magnetickou pásku a podporu interaktivního grafického terminálu, na kterém mohl astronom analyzovat dříve zaznamenaná data. Víceprogramová povaha systému umožňovala, aby všechny tyto funkce probíhaly současně, bez časových konfliktů nebo jiných interferencí.

Systém byl na tehdejší dobu unikátní také tím, že veškerý vývoj softwaru probíhal na samotných minipočítačích, přičemž jako zdrojová média se používala magnetická páska. Tyto forthovské systémy nejenže podporovaly vývoj aplikací, ale dokonce podporovaly samy sebe. Forth samotný byl napsán ve Forthu a používal "metakompilátor", který v případě potřeby generoval nové jádro systému.

Abychom si tyto softwarové možnosti zasadili do kontextu, je důležité si uvědomit, že výrobcem dodávaný systémový software pro tyto rané minipočítače byl velmi primitivní. Hlavními nástroji byly crossassemblery a křížové překladače jazyka FORTRAN, které běžely na mainframech (i když křížové překladače jazyka FORTRAN byly vzhledem k malým pamětem cílových strojů příliš neefektivní na to, aby zvládly něco složitého). On-line podpora programování byla omezena na assemblery načítané z papírové pásky, přičemž zdrojové kódy byly uchovávány na témže médiu. Společnost Digital Equipment Corp. právě oznámila operační systém RT-11 pro řadu PDP-11, který nabízel omezený provoz na popředí a na pozadí; pro rodinu H316 nebyla k dispozici žádná forma souběhu. Víceuživatelský provoz, který umožňoval astronomům NRAO graficky analyzovat data, zatímco operátor ovládal teleskop a přicházela živá data, byl neslýchaný.

Edward K. Conklin, vedoucí tucsonského oddělení NRAO, které provozovalo 11metrový teleskop, považoval údržbu softwaru za obtížnou, protože Moore sídlil v ústředí NRAO v Charlottesville ve státě Virginia. Proto v roce 1971 přivedl Elizabeth Ratherovou, systémovou analytičku z Arizonské univerzity, aby poskytovala místní podporu na částečný úvazek. Ratherová byla zděšena, když zjistila, že tento kritický systém je napsán v unikátním jazyce, není zdokumentován a zná ho pouze jeden člověk. Její instinktivní reakcí bylo přepsat celou věc ve FORTRANu, aby ji dostala pod kontrolu. Na to však nebyl čas ani rozpočet, a tak se pustila do studia a dokumentování systému, jak nejlépe uměla.

Asi po dvou měsících si Ratherová začala uvědomovat, že se děje něco mimořádného: navzdory neuvěřitelně primitivní povaze on-line počítačů, navzdory podivnosti jazyka, navzdory nedostatku jakýchkoli místních odborníků nebo zdrojů dokázala za těch několik hodin, které jednou týdně strávila u počítačů s jazykem FORTH, udělat víc než za celý zbytek týdne, kdy měla prakticky neomezený přístup k několika velkým mainframům.

Přemýšlela proč. Zdálo se, že zřejmá odpověď spočívá v interaktivní povaze Forthu. Pozornost programátora není nikdy přerušována procedurální režií otevírání a zavírání souborů, načítání a spouštění kompilátorů, linkerů, loaderů, debuggerů atd. Ale je toho víc. Programátor má například k dispozici všechny nástroje používané operačním systémem Forth, překladačem a dalšími interními funkcemi. A jak Chuck Moore zamýšlel, jeho omezení jsou minimální a jeho přístup je liberální. Vyznavači Forthu dodnes rádi diskutují o zdroji a rozsahu takového zvýšení produktivity!

Ratherová ihned opustila univerzitu a začal pracovat pro NRAO společně s Kitt Peak National Observatory (KPNO), optickou observatoří, s níž NRAO sdílela zařízení. Udržovala forthovský systém pro NRAO a vyvíjela systém pro KPNO (který byl později použit na 156″ Mayallově teleskopu KPNO a dalších přístrojích [Phys. Sci. 1975]). Během následujících dvou let napsala první příručku Forthu [Rather, 1972] a přednesla řadu referátů a kolokvií v rámci observatoře a příbuzných astronomických organizací [Moore, 1974a].

V roce 1973 Moore a Ratherová nahradili dvoupočítačový systém jedním diskovým počítačem PDP-11 [Moore, 1974a&b]. Jednalo se o víceuživatelský systém, který kromě úloh řízení dalekohledu a pořizování dat podporoval čtyři terminály. Byl natolik úspěšný, že jeho řídicí části se používaly ještě v roce 1991 (funkce sběru a analýzy dat jsou více závislé na experimentálním vybavení a technikách, které se v průběhu let radikálně změnily). Systém byl tak pokročilý, že o kopie softwaru začali žádat astronomové z celého světa. Jeho verze byly nainstalovány na Stewardově observatoři, MIT, Imperial College (Londýn), Meziamerické observatoři Cerro Tololo (Chile) a na univerzitě v Utrechtu (Nizozemsko). Jeho používání se rychle rozšířilo a v roce 1976 byl Forth přijat Mezinárodní astronomickou unií jako standardní jazyk.

##  2.2 Komerční minipočítačové systémy

Po dokončení vylepšeného systému v roce 1973 založil Moore se svými kolegy Ratherovou a Conklinem společnost FORTH, Inc. s cílem prozkoumat komerční využití jazyka. Společnost FORTH, Inc. vyvinula víceuživatelské verze jazyka Forth [Rather, 1976a] pro většinu tehdy používaných minipočítačů (viz tabulka 1) a prodávala je jako součásti vlastních aplikací s širokým záběrem, od aplikací pro databáze až po vědecké aplikace, jako je zpracování obrazu. Minipočítače a aplikace 70. let představovaly prostředí, v němž se Forth rozvíjel a stabilizoval, a to do té míry, že všechny inovace, kterými přispěli nezávislí implementátoři v následujících letech, představovaly relativně drobné variace na toto téma. Z tohoto důvodu se na návrh a strukturu těchto systémů podíváme podrobněji.

| Rok | Model | Zákazník | Forth | Aplikace | 
|-|-|-|-|-|
| 1971 | Honeywell H316 | NRAO | Sběr dat, on-line analýza s grafickým terminálem
| 1971 | Honeywell DDP116 | NRAO | Řízení radioteleskopu
| 1972 | IBM 370/30 | NRAO | Analýza dat
| 1972 | Varian 620 | KPNO | Řízení optického teleskopu a přístrojového vybavení
| 1972 | HP2100 | KPNO | Přístrojové vybavení
| 1973 | Modcomp | NRAO | Analýza dat
| 1973 | PDP-11 | NRAO | Řízení radioteleskopu, sběr dat, analýza, grafika
| 1973 | DG Nova | Steward Observatory | Sběr a analýza dat
| 1974 | SPC-16 | Stewardova observatoř | Pozemní řízení teleskopu umístěného na balónu
| 1975 | SDS920 | Aerospace Corp.	| Řízení antén
| 1975 | Prime | General Dynamics | Kontrola prostředí
| 1976 | Four-Phase | Source Data Systems | Zadávání dat a správa datové základny
| 1977 | Interdata Series 32 | Alameda Co., CA | Správa datové základny
| 1977 | CA LSI-4 | MICOA | Obchodní systémy
| 1978 | Honeywell Level 6 | Source Data Systems | Zadávání dat a správa databází
| 1978 | Intel 8086 | Aydin Controls | Zpracování grafiky a obrazu
| 1980 | Raytheon PTS-100 | American Airlines | Zobrazovací a pracovní stanice leteckých společností

**Tabulka 1.** Počítače, pro které Chuck Moore osobně implementoval systémy Forth. V roce 1978 představovaly jeho implementace jazyka Forth na procesorech Level 6 a 8086 první nativní software na obou procesorech, který o mnoho měsíců předběhl systémy jejich výrobců.

## 2.2.1 Environmentální omezení

Minipočítače 70. let 20. století byly mnohem méně výkonné než nejmenší mikropočítače současnosti. V první polovině desetiletí neměly všechny systémy ani disky - jediným dostupným hromadným úložištěm byla často 1/2″ páska. Velikost paměti se pohybovala od 16 do 64 kilobajtů, i když poslední jmenované byly považovány za velké. Na počátku 70. let se většina programů pro minipočítače programovala v assembleru. V polovině desetiletí byly k dispozici kompilátory pro Fortran a BASIC a výrobcem dodávané řídicí systémy, jako například RT-11 od společnosti DEC, podporovaly práci na pozadí a v popředí. Běžnými se stávaly také víceuživatelské systémy: od PDP-11 nebo Nova se dalo očekávat, že budou podporovat až osm uživatelů, i když výkon v systému s osmi aktivními uživateli byl nízký.

Na tomto hardwaru nabízely Moorovy systémy Forth integrovanou sadu vývojových nástrojů včetně interaktivního přístupu k assembleru, editoru a vysokoúrovňovému jazyku Forth v kombinaci s víceúlohovým, víceuživatelským operačním prostředím podporujícím 64 uživatelů bez viditelného zhoršení, to vše bez hardwarové podpory.

Přestože časově kritické části systému byly napsány v assembleru, protože většina aplikací vyžadovala velmi vysoký výkon, Moore dokázal přenést celé vývojové prostředí jazyka Forth na nový počítač přibližně za dva týdny. Toho dosáhl tím, že napsal Forth v jazyce Forth - jakýkoli počítač Forth mohl vygenerovat Forth pro jiný počítač, pokud byl k dispozici assembler cílového systému a kód pro přibližně 60 primitiv. Protože prvním krokem při přenosu byl návrh a napsání cílového assembleru, je možné, že Moore napsal více assemblerů pro různé procesory než kdokoli jiný.

Možnost snadno přenést systém na nové architektury byla důležitá, protože trh s minipočítači byl velmi roztříštěný. K dispozici bylo velké množství procesorů a každý z nich byl podporován velkým počtem možných kombinací diskového řadiče a mechaniky. Dnes naopak trhu s mikropočítači dominuje velmi krátký seznam rodin procesorů a dodržování de facto standardů, jako je PC/AT.

Instalace se prováděly na místě, protože převážení minipočítačů bylo nepraktické. Když byly poprvé k dispozici počítače LSI-11, Moore si jeden koupil a namontoval ho do příručního kufru a do druhého kufru vložil jednu 8″ disketovou jednotku. Tento přenosný osobní počítač ho všude doprovázel až do roku 1982 a fungoval jako "přátelský" hostitel pro generování nových Forthů.

2.2.2 Aplikační požadavky
Pakliže hlavními omezeními počítačů byly paměťové limity a potřeba obsluhovat široké spektrum architektur procesorů, v požadavcích na aplikace převládala potřeba výkonu. Zde jsou uvedeny některé z hlavních aplikačních oblastí, v nichž Forth v tomto období dosáhl úspěchu:

#### 1. Komerční/obchodní databázové systémy:

Tyto systémy, poprvé vyvinuté pro společnost Cybek Corp. pod vedením Arthura A. Graviny, podporovaly více terminálů na platformě Data General Nova a zvládaly vysokorychlostní zpracování transakcí. První byl napsán pro společnost Vernon Graphics, Inc, servisní kancelář společnosti Pacific Telephone, v roce 1974. Podporoval 32 terminálů zpracovávajících transakce proti 300 MB datové základně. Během prvního týdne systém zpracoval více než 100 000 transakcí denně (požadováno bylo 40 000). Následně byl systém modernizován na 64 terminálů a 600 MB datovou základnu, aniž by došlo ke znatelnému zhoršení doby odezvy, která zůstala pod jednou sekundou.

Společnost Cybek následně uvedla tento systém na trh pro obchodní aplikace v bankovnictví a řízení nemocnic; jeho současnou verzi prodává divize společnosti McDonnell Douglas. Podobná snaha společnosti Source Data Systems v Iowě vedla k vytvoření systému pro zadávání dat na více terminálech, který uvádí na trh společnost NCR Corp. pro řízení nemocnic a podobné aplikace.

Výkonnost takového systému je v drtivé většině ovlivněna problémy operačního systému, především schopností nativního blokového souborového systému Forth velmi rychle číst a zapisovat datové soubory.

#### 2. Zpracování obrazu:

FORTH, Inc. vyvinula řadu aplikací pro zpracování obrazu pro Námořní výzkumné středisko zbraní, Goddardovo středisko vesmírných letů NASA, Královskou greenwichskou observatoř v Anglii a další. Jejich ústředním bodem byla potřeba provádět standardizované operace (např. vylepšování, ořezávání atd.) s obrázky umístěnými na různých druzích hardwaru. Použitý přístup zahrnoval mnoho prvků, které jsou dnes spojovány s objektově orientovaným programováním: zapouzdření (základním objektem byl "obraz" s charakteristickými parametry a metodami), dědičnost (bylo možné přidávat nové obrazy, které dědily vlastnosti dříve definovaných tříd obrazů) a dynamické vázání manipulačních metod. Moore, hlavní architekt tohoto přístupu, nevěděl o žádné akademické práci v této oblasti. Ve snaze dosáhnout stejných cílů jako pozdější autoři OOP nezávisle odvodil podobná řešení.

Systémy pro zpracování obrázků se vyznačují také potřebou velmi rychle manipulovat a přesouvat velké množství dat; například obrázek 512x512x16 zabírá 512 KB. Kromě vysokorychlostního diskového výkonu, který charakterizoval databázové systémy Forth, vyžadovaly také vysokou rychlost zpracování a schopnost zpracovávat algoritmy, jako je FFT. Protože mnoho minipočítačů postrádalo hardwarovou aritmetiku s pohyblivou řádovou čárkou, obsahoval jazyk Forth flexibilní operátory celočíselných a pevných zlomků a také specializované primitivy polí.

#### 3. Instrumentace a řízení:

Forth byl poprvé vyvinut a použit pro tento účel v NRAO a Forth se pro instrumentaci a řízení široce používá dodnes. Společnost FORTH, Inc. vytvořila několik dalších astronomických systémů (pro univerzity ve Wyomingu [Gehrz, 1978], Minnesotě, na Havaji a v Illinois; Cal Tech; a také pro Královskou greenwichskou observatoř a St Andrews University ve Velké Británii). Kromě toho, řada komerčních výrobců přístrojů, jako Princeton Applied Research (nyní divize EG&G) a Nicolet Instruments, přijala Forth jako jazyk pro interní vývoj.

Tyto aplikace se vyznačují vysokou rychlostí přenosu dat, v některých případech až 20 KHz, což skutečně zatěžovalo rychlost dostupných procesorů. Rychlá odezva na přerušení byla nezbytná, stejně tak vysokorychlostní multitasking, aby sběr dat mohl probíhat současně s činností operátora a řízením přístroje.

### 2.2.3 Vlivy
Vývoji jazyka Forth před rokem 1978 zcela dominoval sám Moore. Jak jsme viděli, Moore byl a je fanatickým minimalistou, oddaným principu nulového návrhu, v němž každá funkce a každá instrukce musí ospravedlnit svou existenci, nebo musí být nemilosrdně vyřazena.

Moore původně vyvinul systém pro vlastní potřebu. Trochu ho překvapilo, že se líbil i Ratherové a dalším prvním uživatelům a že zvýšil jejich produktivitu stejně jako jeho. Ale i po vzniku společnosti FORTH, Inc. a otevřeném uvádění systému na trh dominoval při výběru a návrhu podpůrných nástrojů a obecného programovacího rozhraní jeho osobní vkus.

Moore pracoval především jako konzultant, podporovaný ostatními v rámci společnosti FORTH, Inc. Prvním krokem při vývoji vlastní aplikace byla instalace systém Forth na počítač zákazníka. Protože zákazník měl zájem především o aplikaci, bylo nutné, aby byl port dokončen rychle a levně. Extrémní jednoduchost jazyka Forth to umožňovala, aniž by byl ohrožen výkon aplikace.

Každý z těchto projektů přispěl novými poznatky, nástroji a technikami. Moore nosil v aktovce mikrofiše se seznamy všech předchozích projektů a často se na ně odvolával, aby získal kód nějaké unikátní primitivy nebo ovladače z minulosti. Často používaná slova se mohla stát standardní součástí systému. Do systému byly integrovány také vylepšené techniky pro řešení běžných problémů.

Tento vzorec neustálého vývoje však společnosti FORTH, Inc. způsoboval bolesti hlavy při podpoře zákazníků, protože žádné dva nainstalované systémy nebyly stejné. Ve většině případů instalace zahrnovala pětidenní kurz programování ve Forthu vedený Ratherovou, která musela každý večer kontrolovat, zda se systém stále chová tak, jak byl vyučován.

## 2.3 Rané mikroprocesorové systémy
V roce 1976 Robert O. Winder z polovodičové divize společnosti RCA pověřil společnost FORTH, Inc. implementací jazyka Forth na novém 8bitovém mikroprocesoru CDP-1802 [Rather, 1976b], [Electronics,1976]. Nový produkt nazvaný "microFORTH" byl následně implementován na procesorech Intel 8080, Motorola 6800 a Zilog Z80 a společnost FORTH, Inc. jej prodávala jako hotový produkt. Systém microFORTH byl úspěšně použit v mnoha vestavěných mikroprocesorových přístrojových a řídicích aplikacích ve Spojených státech, Velké Británii a Japonsku.

### 2.3.1 Prostředí a aplikace
Systém microFORTH byl první zkušeností společnosti FORTH, Inc. s hotovými poštou zasílanými softwarovými balíky; všechny minipočítačové systémy byly instalovány přímo na místě. Zasílání poštou bylo umožněno rychlou standardizací průmyslu na 8″ diskety formátu "IBM" a relativně malým počtem vývojových systémů pro jednotlivé typy procesorů.

Všechny tyto mikroprocesory byly osmibitová zařízení, obvykle s šestnácti kilobajty paměti ve vývojovém systému. Cílové systémy byly obvykle desky vyrobené na zakázku (i když řada Intel Single Board Computer se rychle stala populární) a software měl běžet z PROM ve vestavěném prostředí bez disku nebo (obvykle) terminálu. To se výrazně lišilo od prostředí minipočítačů, kde byl disk vždy k dispozici a od programu se očekávalo, že poběží na stejném (nebo identickém) počítači, který se používal pro vývoj.

Většina výrobců mikroprocesorů nabízela vývojové platformy sestávající ze stejného mikroprocesoru jako v cílovém počítači, až 64 kB paměti RAM, sériové linky pro terminál, paralelního portu pro tiskárnu a dvou 8″ disketových jednotek. Softwarovou podporu představoval především assembler, i když Intel brzy zavedl PL/M. Pro ladění byly k dispozici in-circuit emulátory a samostatné utility.

microFORTH byl prodáván především jako interaktivní alternativa assembleru, který byl na rozdíl od PL/M dostupný pro většinu rodin mikroprocesorů, a proto nabízel vyšší míru přenositelnosti.

### 2.3.2 Definice jazyka

Po počátečním experimentování s 8bitovou šířkou zásobníku a 128bajtovými blokovými vyrovnávacími paměťmi bylo rychle rozhodnuto zachovat stejnou základní vnitřní architekturu jako u minipočítačových systémů. Organizace programu se však výrazně změnila.

MicroFORTH byl dodáván s cílovým jádrem určeným ke spuštění z PROM. Toto jádro mělo velikost pouze 1K a obsahovalo primitiva, jako je aritmetika s jednou přesností a další velmi základní funkce. Vývojové prostředí podporovalo interaktivní psaní a testování kódu a následnou kompilaci verze tohoto kódu určené k párování s běhovým jádrem. Byla k dispozici verze VARIABLE, která podporovala oddělený datový prostor ROM/RAM (`CONSTANT` byly v PROM), a definiční slova byla upravena tak, aby uživatelsky definované struktury mohly být umístěny v obou z nich. A zatímco dříve bylo možné `VARIABLE` inicializovat při kompilaci, tato možnost byla odstraněna, protože je obtížné inicializovat cílovou paměť RAM při kompilaci ROM bez nastavení "stínové" tabulky; prostor ROM byl na to považován za příliš drahý.

Podpora multiprogramování byla zpočátku odstraněna, i když se později vrátila s použitím nového, rychlejšího algoritmu výměny úloh, a nástroje pro databázi zmizely úplně.

Společnost FORTH, Inc. nikdy nevydala metakompilátor, který by sloužil k vytváření jazyka Forth na nových minipočítačových procesorech. Varianta tohoto metacompileru se však stala nedílnou součástí microFORTHu, protože byla použita pro generování ROM kódu pro cílovou aplikaci. To bylo významné, jak uvidíme v následující části.

### 2.3.3 Vlivy

Hlavním architektem microFORTHu byl Dean Sanderson. Ačkoli Sanderson s Moorem úzce spolupracoval a sdílel většinu jeho základních filozofií, rozdíly ve stylu a přístupu byly nevyhnutelné. Nejvíce však působila širší zákaznická základna, která byla výsledkem marketingu microFORTHu. Byl to tlak zákazníků, který přinesl návrat multiprogramování, a tato širší zákaznická základna také způsobila vznik skupin pro standardizaci.

## 2.4 Definice jazyka

Komerční implementace pro minipočítače a mikropočítače vytvořené společností FORTH, Inc. na počátku a v polovině 70. let 20. století poprvé shrnuly principy a prvky jazyka Forth, jak se používá dnes. Z tohoto důvodu je stručně shrneme.

### 2.4.1 Principy návrhu

Podobně jako byla algebra "metaforou" pro FORTRAN, byl Forth koncipován po vzoru anglické prózy (i když někteří naznačují, že jeho postfixový zápis má tendenci připomínat jazyky se slovesem na konci, jako je němčina). Jeho prvky ("slova") jsou pojmenované datové položky (zhruba ekvivalentní podstatným jménům), pojmenované procedury (ekvivalentní slovesům) a definiční slova (speciální druhy sloves schopné vytvářet datové položky s vlastními charakteristikami). Slova mohou být definována v termínech dříve definovaných slov nebo ve strojovém kódu (pomocí vestavěného assembleru).

"Slova" jazyka Forth jsou funkčně analogická podprogramům v jiných jazycích. Jsou také ekvivalentní příkazům v jiných jazycích - Forth stírá rozdíl mezi jazykovými a funkčními prvky.

Na slova se odkazuje (buď z klávesnice, nebo ve zdrojovém kódu programu) pomocí jména. V důsledku toho se termín "slovo" používá jak pro programové (a lingvistické) jednotky, tak pro jejich textové názvy. Při analýze textu považuje Forth za slovo jakýkoli řetězec znaků ohraničený mezerami (nebo "bílé znaky" v některých souborových systémech). Kromě nich neexistují žádné speciální znaky, které by nemohly být součástí slova nebo být na jeho začátku, ačkoli mnoho programátorských týmů přijímá pojmenovací konvence pro zlepšení čitelnosti. Slova, která se v textu vyskytují, se dělí do tří kategorií: definovaná slova (tj. rutiny jazyka Forth), čísla a nedefinovaná slova.

Ve Forthu neexistují žádné explicitní typové mechanismy, což je vlastnost, která někdy překvapuje nováčky, ale zkušení programátoři Forthu ji obecně obdivují.

### 2.4.2 Disciplíny strukturovaného programování

Z architektonického hlediska se slova Forth striktně drží zásad "strukturovaného programování", jak je formuloval Dijkstra [např. Dijkstra, 1969], a "modulárního programování" [Parnas, 1971]. Tyto zásady lze shrnout následovně:

Každý program je popsán jako lineární posloupnost samostatných modulů. Modul má jeden vstupní a jeden výstupní bod a v ideálním případě vykonává jednu funkci. Má danou množinou vstupů a výstupů.

Modul může obsahovat:

odkazy na jiné moduly
rozhodovací struktury (příkazy `IF THEN`)
smyčkové struktury

Struktura jazyka Forth silně podporuje návrh shora dolů a kódování a testování zdola nahoru.

Stejně jako v případě Moorova nezávislého vývoje funkcí podobných OOP v jeho systému pro zpracování obrazu, ani Moore nebyl obeznámen s dobovou literaturou o strukturovaném programování. Na tyto principy ho poprvé upozornila v roce 1973 Ratherová, která na seminářích, které o Forthu vedla, dostala několik připomínek ke zjevnému vztahu mezi Forthem a strukturovaným programováním. Po přečtení jednoho z Djikstrových článků Moore poznamenal: "mi to prostě připadá jako dobrá programátorská praxe".

Ve skutečnosti pokročilí programátoři Forthu se znalostí základní implementace znají způsoby, jak "podvádět", ale takové praktiky jsou odsuzovány a rozhodně nejsou podporovány ani povzbuzovány strukturou jazyka.

### 2.4.3 Prvky jazyka Forth

Moorovy systémy Forth z počátku 70. let byly postaveny na jádře o velikosti pouhých 4 kilobajtů. Tento malý program obsahoval diskové (nebo páskové) a terminálové ovladače a možnost vyhledávání a sestavování slovníku. Toto jádro pak bylo použito ke kompilaci ze zdrojových kódů zbytku programovacího prostředí včetně assembleru, editoru, víceuživatelské podpory a několika stovek obecných příkazů. Zavedení systému, včetně kompilace většiny ze zdrojových kódů do spustitelné podoby, trvalo jen několik sekund.

Ke kompilaci jádra byl použit metakompilátor, rovněž napsaný v jazyce Forth. Celý zdrojový kód systému měl asi 40 stran.

Tyto systémy byly "nativní", tj. běžely bez hostitelského operačního systému. V počátcích to byla nutnost, protože operační systémy nebyly k dispozici. Později to bylo považováno za významnou výhodu, protože vstupně-výstupní služby v nativním prostředí Forthu byly mnohem rychlejší, než by mohl poskytnout operační systém pro obecné účely.

V následujících kapitolách budou stručně probrány hlavní prvky jazyka Forth.

#### 2.4.3.1 Slovník

Program ve Forthu je uspořádán do rozšiřitelného slovníku, který zabírá téměř veškerou paměť používanou systémem. Slovník je klasicky implementován jako spojový seznam položek proměnné délky, z nichž každá definuje slovo. Obsah každé definice slova závisí na jeho typu (datová položka, konstanta, posloupnost operací atd.). Ve víceuživatelských systémech Forth mohou mít jednotliví uživatelé soukromé slovníky, z nichž každý je připojen ke sdílenému, reentrantnímu systémovému slovníku.

#### 2.4.3.2 Zásobníky typu Push-down

Forth udržuje dva push-down zásobníky neboli seznamy LIFO (ve víceprogramové verzi pár pro každou úlohu). Ty slouží k předávání dat mezi slovy jazyka Forth a k řízení logického toku. Zásobník obsahuje položky o velikosti jedné buňky, přičemž buňka je široká 16 bitů na 8bitových a 16bitových počítačích a 32 bitů na většině implementací pro 32bitové procesory, jako je rodina 680×0. Čísla s rozšířenou přesností zabírají dvě pozice zásobníku, přičemž nejvýznamnější část je nahoře. Položky na obou zásobnících mohou být adresy nebo datové položky různého druhu. Zásobníky mají neomezenou velikost a obvykle se zvětšují směrem ke spodní části paměti.

Explicitní používání zásobníků v jazyce Forth vede k "postfixovému" zápisu, v němž operandy předcházejí operátorům. Protože výsledky operací zůstávají na zásobníku, lze operace bez námahy řetězit a není třeba definovat proměnné, které by se používaly pro dočasné ukládání.

#### 2.4.3.3 Interprety

Forth je interpretační systém v tom smyslu, že provádění programu je obvykle řízeno malou rutinou strojového kódu (často jen dvě nebo tři instrukce), která interpretuje seznamy ukazatelů nebo tokenů pro abstraktní strojové funkce. Tato architektura je mnohem rychlejší než klasické interprety používané například v jazycích BASIC a PROLOG, což Forthu umožňuje uspokojivě fungovat v aplikacích reálného času, pro které byl navržen.

Tento interní engine se často označuje jako "vnitřní" nebo "adresní" interpret, na rozdíl od tradičnějšího textového interpretu jazyka Forth, který zpracovává zdrojový kód a uživatelský vstup. Textový interpreter získává řetězce oddělené mezerami z terminálu nebo velkokapacitního úložiště a vyhledává každé slovo ve slovníku. Pokud je slovo nalezeno, je provedeno vyvoláním adresního interpretu, který zpracovává posloupnost adres sestavených v definici slova provedením definice, na kterou každá z nich ukazuje. Text se neukládá do paměti, a to ani ve zhuštěné podobě. Pokud slovo není nalezeno, systém se jej pokusí převést jako číslo a odeslat na zásobník. Pokud se převod na číslo nezdaří (kvůli nečíselnému znaku), interpret přeruší práci s chybovým hlášením.

Interpret adresy má dvě důležité vlastnosti. Za prvé je rychlý, často vyžaduje pouze jednu nebo dvě strojové instrukce na jednu adresu. Zadruhé, díky němu jsou definice jazyka Forth mimořádně kompaktní, protože každý odkaz vyžaduje pouze jednu buňku (nebo počítačové slovo; uživatelé jazyka Forth se raději vyhýbají používání slova "word" jako hardwarové jednotky kvůli jeho použití pro označení prvku v jazyce). Naproti tomu volání podprogramu konstruované většinou kompilátorů vyžaduje instrukce pro zpracování sekvence volání před a za instrukcí `CALL` nebo `JSR` a adresu a obvykle ukládání a obnovování registrů v rámci podprogramu. Zásobníková architektura jazyka Forth odstraňuje potřebu explicitní volací sekvence a většina implementací provádí globální přiřazení registrů, v němž jsou určité systémové stavové proměnné přiřazeny vyhrazeným registrům a všechny ostatní registry jsou označeny jako registry pro použití v kódových slovech.

#### 2.4.3.4 Assembler

Většina systémů Forth obsahuje makroasembler pro procesor, na kterém běží. Při použití CODE má programátor plnou kontrolu nad procesorem, stejně jako u jakéhokoli jiného assembleru, a definice CODE běží plnou rychlostí stroje. Assembler umožňuje programátorovi používat explicitní kód závislý na CPU v omezené zvládnutelné míře s konvenčním rozhraním nezávislým na stroji. Přesun aplikace na jiný procesor vyžaduje překódování pouze slov CODE, která budou s ostatními slovy jazyka Forth komunikovat naprosto stejným způsobem.

Assemblery jazyka Forth mají neobvyklou konstrukci, která má dva cíle:

zlepšit přenositelnost mezi procesory tím, že se co nejvíce standardizuje zápis assembleru, aniž by se zhoršila kontrola programátora nad procesorem, a
vytvořit kompaktní assembler, který může být vždy rezidentní, aby se usnadnilo interaktivní programování a ladění.
V klasickém forthovském assembleru je samotný op-kód slovem Forthu, které sestavuje instrukci podle operandů předaných na zásobníku a udávajících adresní informace. To vede k formátu, v němž specifikátory režimu adresování předcházejí op-kódu (v souladu s postfixovou notací používanou jinde ve Forthu). Moore také standardizoval notaci pro režimy adresování, ačkoli obvykle používal mnemotechniky instrukcí výrobce. Registry byly obecně označovány čísly, s výjimkou registrů přiřazených klíčovým interním systémovým funkcím. Například ukazatel na zásobník se obvykle nachází v registru s názvem `S`. Druhou položku na zásobníku o šířce dvou bajtů bychom adresovali výrazem `2 S`).

Forthovské assemblery podporují strukturované programování stejným způsobem jako vysokoúrovňový jazyk Forth. Větvení na libovolná místa kódu s návěštím se nedoporučuje; na druhou stranu jsou v assembleru k dispozici struktury jako `BEGIN ... UNTIL` a `IF ... ELSE ... THEN` (implementovaná jako makra, která sestavují příslušné podmíněné a nepodmíněné větve). Takové struktury se snadno implementují, protože při sestavování je k dispozici zásobník, který přenáší informace o adresách.

Běžné assemblery zanechávají kód v souboru, který musí linker integrovat s kódem v souborech kompilátorů vysokoúrovňových jazyků (pokud existují), než je možné výsledný program načíst do paměti pro testování. Rezidentní assembler jazyka Forth kompiluje kód přímo do paměti ve spustitelné podobě, čímž se vyhne kroku linkování.

Forthovský assembler se používá k zápisu krátkých pojmenovaných rutin, které fungují stejně jako vysokoúrovňová slova jazyka Forth: když je vyvoláno jméno rutiny, provede se. Stejně jako ostatní rutiny jazyka Forth, i kódové rutiny očekávají své argumenty na zásobníku a zanechávají tam své výsledky. V rámci kódu může programátor odkazovat na konstanty (pro získání hodnot), proměnné (pro získání adres) nebo jiné definované datové typy. Kódové rutiny mohou být volány z vysokoúrovňových definic stejně jako ostatní slova jazyka Forth, ale samy o sobě nevolají vysokoúrovňové nebo kódové definice.

Tyto vlastnosti umožňují forthovským programátorům psát kód v krátkých a snadno testovatelných modulech, které jsou automaticky integrovány do aplikace. Programování je plně strukturované, s konzistentními pravidly použití a uživatelským rozhraním jak pro assembler, tak pro vysokoúrovňové programování. Slova jsou testována postupně, dokud je požadované chování v mysli programátora čerstvé. Většinu nových slov lze otestovat jednoduše tak, že se na zásobník umístí vstupní hodnoty, zadá se slovo, které se má otestovat, a výsledek ponechaný na zásobníku se ověří jeho zobrazením.

Výsledkem je úplná kontrola nad počítačem, vysoký výkon tam, kde je to potřeba, a celkové zkrácení doby vývoje díky interaktivnímu programování na všech úrovních.

#### 2.4.3.5 Podpora disků

Klasický Forth dělí paměťové médium na "bloky" po 1024 bajtech. Velikost bloku byla zvolena jako vhodný standard pro všechny disky, jejichž velikost sektorů se liší. V paměti jsou udržovány alespoň dvě vyrovnávací paměti bloků a algoritmus správy bloků vytváří dojem, že všechny bloky jsou v paměti neustále. Příkaz `n BLOCK` vrací adresu paměti bloku n, po jeho případném načtení. Vyrovnávací paměť, jejíž obsah je změněn, je označena tak, že v případě potřeby jejího opětovného použití je její blok automaticky zapsán na disk. Tento algoritmus poskytuje pohodlnou formu virtuální paměti pro ukládání dat a zdrojů s minimálním počtem potřebných fyzických přístupů na disk. Databázové aplikace FORTH, Inc. vytvářejí datové soubory z bloků, přičemž soubor je definován jako soubor zahrnující určitý rozsah bloků; přístup k datům se provádí prostřednictvím operací prováděných proti pojmenovaným polím ve vybraných souborech.

V nativních Forthech je blokový systém rychlý a spolehlivý, protože diskový ovladač vypočítá fyzickou adresu bloku z jeho čísla - není zapotřebí žádný adresář. V aplikacích náročných na disk lze výkon zvýšit přidáním více vyrovnávacích pamětí, takže se v paměti nalézá více bloků; vyrovnávací paměť se stávají diskovou cache.

V 80. letech 20. století se objevily systémy Forth běžící pod běžnými operačními systémy, jak uvidíme dále. Mnohé z nich podporují bloky v souborech hostitelského OS, i když některé od bloků zcela upustily. Protože bloky poskytují kompatibilní prostředek pro přístup k hromadnému úložišti v nativních i nenativních systémech, ANS Forth (oddíl 5.1) vyžaduje, aby byly bloky k dispozici, pokud je k dispozici jakákoli podpora hromadného úložiště.

#### 2.4.3.6 Multiprogramování

Nejstarší systémy Forth podporovaly multiprogramování v tom smyslu, že počítač mohl vykonávat více souběžných programových sekvencí. V roce 1973 Moore tuto schopnost rozšířil o podporu více uživatelů, z nichž každý měl svůj terminál a nezávislé dílčí slovníky a zásobníky. Entita provádějící jednu z těchto programových sekvencí nebo podporující uživatele se označuje jako úloha. Mnohé dnešní Forthy podporují multiprogramování a většina z nich používá varianty Moorova přístupu.

Tento přístup přiděluje čas procesoru pomocí kooperativního, nepreemptivního algoritmu: úloha se vzdá procesoru při čekání na dokončení I/O operace nebo při použití slova PAUSE, které se vzdá procesoru přesně na jeden cyklus fronty úloh.

Moorovy systémy používaly pro I/O přerušení. Přerušení byla přímo vektorována do kódu pro odezvu pomocí makra assembleru bez zásahu interpretu Forthu. Kód přerušení prováděl pouze časově nejkritičtější operace (např. čtení čísla, inkrementace čítače) a poté znovu povolil úlohu, která byla pozastavena v době přerušení. Úloha by pokračovala v činnosti, až by přišla na řadu v kruhové smyčce úloh, kdy by dokončila veškeré vysokoúrovňové zpracování vyvolané událostí a pokračovala v práci.

Teoreticky je tento nepreemptivní algoritmus náchylný k tomu, aby úloha monopolizovala procesor logicky nebo výpočetně náročnou činností, ale v praxi v systémech reálného času převládají vstupy a výstupy natolik, že to bývá zřídkakdy problém. Tam, kde se vyskytují operace náročné na výkon procesoru, se k "vyladění" výkonu používá slovo PAUSE.

| Událost:	| VRTX | OS9 | PDOS | polyFORTH
| - | - | - | - | -
| Reakce na přerušení | 91 | 43,75 | 93,4 | 7,0
| Přepnutí kontextu | 128 | 186,25 | 93,4 | 36,0
| Pozastavení úlohy | 180 | 316,25 | 184,7 | 6,8
| Kopírování paměti  (80 bajtů)  | | | 212,5 | 97,0

**Tabulka 2.** Porovnání výkonu několika raltimových operačních systémů počítači M68010 [Cox, 1987]. Časy jsou průměrné, uváděné v µs. Časy byly normalizovány na 10 MHz 68010. polyFORTH používá nepreemptivní plánování úloh, což mu dává výkonnostní výhodu.

Konzultant Bill Cox upozornil [Cox, 1987], že nepreemptivní algoritmus, jako je tento, má několik výhod. Za prvé, samotný plánovač úloh je jednodušší a rychlejší, protože na jednu úlohu stačí jedna strojová instrukce. Za druhé, protože úloha je pozastavena pouze ve známých, přesně definovaných časech, musí se méně ukládat a obnovovat "kontext", takže samotné přepínání kontextu je rychlejší. Za třetí, kód úlohy lze psát se znalostí toho, kdy přesně úloha ovládá nebo neovládá procesor, a správa sdílených prostředků se výrazně zjednodušuje. Cox porovnal výkonnost několika operačních systémů reálného času; výsledky jsou uvedeny v tabulce 2.

Úlohy byly vytvořeny při spuštění systému a každá z nich měla pevně přidělenou paměť adekvátní funkcím, které měla vykonávat. Vzhledem k tomu, že rebootování trvalo jen několik sekund, bylo snadné úlohu překonfigurovat.

#### 2.4.3.7 Výpočty

Až do konce sedmdesátých let 20. století nabízelo jen málo minipočítačů aritmetiku s pohyblivou řádovou čárkou - mnohé z nich skutečně postrádaly hardwarové násobení a dělení. Od počátku se však Forth používal pro výpočetně náročné práce. Například řízení radioteleskopu vyžadovalo jednou za sekundu převádět hledané polohy z nebeských souřadnic používaných k lokalizací astronomických objektů do souřadnicového systému azimut/výška a pětkrát za sekundu interpolovat mezipolohy, přičemž sběr dat a činnost operátora probíhaly souběžně.

Mooreův přístup spočíval v tom, že do jazyka Forth zabudoval schopnost efektivně manipulovat s celými čísly. Například příkaz `*/` násobí dvě celá čísla o rozsahu jedné buňky a dělí třetím, přičemž mezisoučet je dvojnásobné délky. To odráží způsob, jakým pracuje většina strojových instrukcí násobení a dělení, a umožňuje výpočty, jako např:

```forth
12345 355 113 */
```

Tato věta násobí `12345` poměrem `355/113`, což představuje Pi s chybou 8,5 × 10<sup>-8</sup> [Brodie, 1981]. Možnost násobit poměrem je ideální pro kalibraci a škálování, stejně jako pro racionální aproximace. Podobně slovo `/MOD` provádí jednoduché dělení a vrací jak kvocient, tak zbytek. Bohatá sada operací s jednoduchou, dvojnásobnou a smíšenou přesností, jako jsou tyto, činí celočíselnou aritmetiku mnohem použitelnější, než je tomu ve většině jazyků.

Moore interně vyjádřil úhly jako 14bitové, 15bitové nebo 30bitové binární zlomky s pevnou řádovou čárkou. Poskytl sadu primitiv pro převod do a z úhlových formátů (např. `dd:mm:ss`) a matematickou knihovnu podporující transcendentální funkce pro tyto formáty, založenou z velké části na algoritmech z [Hart 1968]. V některých aplikacích byly k dispozici operace, jako je rychlá Fourierova transformace, postavené na specializovaných primitivách podporujících komplexní čísla jako dvojice celých čísel s definovanou přesností.

Dnes jsou běžné rychlé procesory s pohyblivou řádovou čárkou. Mnoho Forthů podporuje plovoucí desetinnou čárku, stejně jako to dělá ANS Forth. V mnoha případech, například u vestavěných systémů na jednoduchých mikrokontrolérech, však celočíselná aritmetika jazyka Forth stále poskytuje jednodušší a rychlejší řešení.

#### 2.4.3.8 Datové typy

Snad nikde se Moorova osobní filozofie neprojevila tak výrazně jako v jeho přístupu k typování dat. V podstatě chtěl převzít plnou odpovědnost za manipulaci s datovými objekty jakýmkoli způsobem, který si přál. Kdyby byl v této věci dotázán, řekl by: "Když chci k písmenu A přidat jedničku, není věcí kompilátoru, aby mi říkal, že to nemohu udělat".

Standardní slova ve Forthu podporují konstaty (`CONSTANT`) s jednoduchou a dvojitou přesností, které vracejí své hodnoty na zásobník, a proměnné (`VARIABLE`), které vracejí ukazatel. `CREATE` pojmenovává začátek datové oblasti, ve které lze rezervovat místo. Ukazatel vrácený slovem `CREATE` lze inkrementovat a indexovat do pole. Povaha hodnot uchovávaných v konstantách a proměnných byla zcela libovolná; obvykle neexistuje žádná explicitní typová kontrola. Řetězce jsou většinou uchovávány v paměti s délkou v prvním bajtu. Adresu této struktury nebo adresu a délku skutečného řetězce lze předat na zásobník.

`CONSTANT`, `VARIABLE` a `CREATE` jsou "definiční slova", to znamená, že definují nová slova s charakteristickým chováním. Forth také poskytuje nástroje, které programátorovi umožňují vytvářet nová definiční slova a specifikovat vlastní chování jak v době kompilace (např. nastavení a inicializace tabulky), tak v době běhu (např. přijetí indexu a jeho automatické použití na výchozí adresu struktury).
