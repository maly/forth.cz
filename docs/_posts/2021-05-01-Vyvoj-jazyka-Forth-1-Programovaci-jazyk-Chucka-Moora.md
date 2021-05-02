# Vývoj jazyka Forth [1] - Programovací jazyk Chucka Moora

> Tato série příspěvků vzniká jako překlad obsáhlého článku [The Evolution of Forth](https://www.forth.com/resources/forth-programming-language/)


## Abstrakt
Jazyk Forth je mezi programovacími jazyky jedinečný tím, že jeho vývoj a šíření probíhal zdola a nebyl podporován žádnými významnými firemními ani akademickými sponzory. Původně byl koncipován a vyvíjen jediným člověkem, později jeho vývoj postupoval pod dvěma významnými vlivy: profesionálními programátory, kteří vyvíjeli nástroje pro řešení aplikačních problémů a následně je komercionalizovali, a zájmy amatérů, kteří se zabývali volným šířením jazyka Forth. Díky těmto vlivům vznikl jazyk, který se výrazně liší od tradičních programovacích jazyků.

Předneseno na konferenci ACM SIGPLAN History of Programming Languages (HOPL II, duben 1993). Publikováno v ACM SIGPLAN Notices, Volume 28, No. 3, March 1993. Povolení kopírovat bez poplatku celý tento materiál nebo jeho část je uděleno za předpokladu, že kopie nebudou pořízeny nebo šířeny za účelem přímého komerčního prospěchu, bude uvedeno upozornění ACM o autorských právech a název publikace a její datum a bude uvedeno, že kopírování je povoleno Association for Computing Machinery. Jiné kopírování nebo další publikování vyžaduje poplatek a/nebo zvláštní povolení.

## Autoři článku

### Elizabeth D. Rather

Elizabeth Ratherová je spoluzakladatelkou společnosti FORTH, Inc. a přední odbornicí na programovací jazyk Forth. Elizabeth byla kolegyní Chucka Moora, když na počátku 70. let pracoval v NRAO. Během jeho vývoje jazyka Forth se stala vůbec druhým programátorem jazyka Forth. Od té doby se stala přední odbornicí na tento jazyk a jednou z jeho hlavních propagátorů. Elizabeth byla předsedkyní technického výboru ANSI, který vytvořil normu ANSI pro jazyk Forth (1994). Je autorkou několika knih o jazyce Forth a vedla mnoho vzdělávacích seminářů o jeho používání.

### Donald R. Colburn

Don Colburn byl jedním z prvních uživatelů jazyka Forth. Byl jedním ze zakladatelů Forth Interest Group a podílel se na vývoji prvního public-domain figForthu. Následně založil společnost Creative Solutions, Inc. (CSI), která v roce 1984 představila MacForth™. MacForth byl v době svého uvedení na trh prvním programovacím jazykem, který bylo možné provozovat na počítači Macintosh. Don byl členem technického výboru ANSI, který vytvořil normu ANSI pro jazyk Forth (1994). Zemřel v roce 2009.

### Charles H. Moore

Chuck Moore je předsedou představenstva a technickým ředitelem společnosti Green Arrays, Inc. V roce 1971 spoluzaložil společnost FORTH Inc. a v polovině 80. let 20. století vyvinul čip založený na jazyku Forth (RTX2000), jehož deriváty dodnes hojně využívá NASA. Ve společnosti Computer Cowboys pan Moore navrhl mikroprocesor Sh-Boom a poté spoluzaložil společnost iTv, výrobce internetových zařízení. V 90. letech použil vlastní software CAD k návrhu několika vlastních čipů VLSI, včetně procesoru F21 se síťovým rozhraním. V nedávné době vynalezl colorForth a přenesl do něj své nástroje pro návrh VLSI. Moore působil jako technický ředitel společnosti IntellaSys během vývoje vícejádrového čipu S40.

# 1. Programovací jazyk Chucka Moora

## 1.1 Raný vývoj

Moorova programátorská kariéra začala koncem 50. let 20. století na Smithsonově astrofyzikální observatoři s programy pro výpočet efemerid, orbitálních prvků, poloh družicových stanic atd. [Moore, 1958], [Veis, 1960]. Jeho zdrojový kód zaplnil dva pořadače děrných štítků. Aby minimalizoval překompilovávání tohoto rozsáhlého programu, vyvinul jednoduchý interpret pro čtení štítků ovládajících program. To mu umožnilo sestavovat různé rovnice pro několik družic bez nutnosti rekompilace. Tento interpretr obsahoval několik příkazů a konceptů, které přežily do moderního Forthu, především příkaz pro čtení "slov" oddělených mezerami a příkaz pro převod čísel z vnějšího do vnitřního tvaru, plus konstrukci IF ... ELSE. Zjistil, že zadávání ve volném tvaru je efektivnější (menší a rychlejší kód) a spolehlivější než běžnější fortranovská praxe formátování do určitých sloupců, která vedla k četnému opakovanému spouštění kvůli jejich špatnému zarovnání.

V roce 1961 Moore získal bakalářský titul z fyziky na MIT a nastoupil na postgraduální studium na Stanfordu. Na částečný úvazek pracoval také jako programátor ve Stanfordském lineárním urychlovači (SLAC), kde psal kód pro optimalizaci řízení svazku pro (tehdy) připravovaný dvoumílový urychlovač elektronů, a to na základě rozšíření své předchozí práce s metodou nejmenších čtverců. Klíčovým výstupem této práce byl program CURVE, kódovaný v jazyce Algol (1964), což byl univerzální program pro nelineární diferenciální korekce dat. K ovládání tohoto programu použil vylepšenou verzi svého interpretu, rozšířeného o správu zásobníku pro předávání parametrů, proměnné (s možností explicitního načítání a ukládání hodnot), aritmetické a porovnávací operátory a možnost definovat a interpretovat procedury.

V roce 1965 se přestěhoval do New Yorku a stal se programátorem na volné noze. Pracoval v jazycích Fortran, Algol, Jovial, PL/I a různých assemblerech a nadále používal svůj interpret, jak jen to bylo možné, doslova s sebou nosil svůj balíček štítků a podle potřeby jej překódovával. Koncem 60. let se objevily minipočítače a s nimi dálnopisné terminály, pro které Moore přidal operátory pro správu znakového vstupu a výstupu. Jeden z projektů zahrnoval napsání překladače Fortran-Algol a nástrojů pro editaci souborů. To ho utvrdilo v nahlížení na význam význam mezer mezi slovy, které ve zdrojovém kódu Fortranu nebyly vyžadovány.

V roce 1968 čerstvě ženatý Moore hledal prostředí malého města. Nastoupil do společnosti Mohasco Industries v Amsterdamu ve státě New York. Zde vyvíjel počítačové grafické programy pro minipočítač IBM 1130 s grafickým displejem 2250. Tento počítač měl 16bitový procesor, 8k RAM, jeho první disk, klávesnici, tiskárnu, čtečku a děrovačku štítků (sloužila jako záloha disku!) a kompilátor Fortranu. Ke svému programu přidal cross-assembler pro generování kódu pro 2250, stejně jako primitivní editor a nástroje pro správu zdrojových kódů. Tento systém uměl kreslit animované trojrozměrné obrázky v době, kdy software IBM pro tuto konfiguraci kreslil pouze statické dvojrozměrné obrázky. Pro zábavu také napsal verzi Spacewar, rané videohry, a převedl svůj program Algol Chess do nového jazyka, který se nyní (poprvé) jmenoval FORTH. Byl ohromen tím, jak se zjednodušil.

Název FORTH měl naznačovat software pro čtvrtou (příští) generaci počítačů, pro kterou byly podle Moorea charakteristické distribuované malé počítače. Operační systém, který v té době používal, omezoval názvy souborů na pět znaků, takže písmeno "U" bylo z anglického slova “fourth” vyřazeno. FORTH se až do konce sedmdesátých let psal velkými písmeny, protože převládala vstupně-výstupní zařízení s velkými písmeny. Používání "Forth" se obecně ujalo, když se rozšířila malá písmena, protože slovo nebylo akronymem.

Moore shledal prostředí pro IBM 1130 založené na jazyku Forth pro programování 2250 lepším než prostředí Fortran, ve kterém byl software pro 1130 vyvíjen, a proto jej rozšířil do kompilátoru pro 1130. To přidalo smyčkové příkazy, koncepci uchovávání zdrojového kódu v 1024-bajtových blocích včetně nástrojů pro jejich správu a většinu funkcí kompilátoru, které ve Forthu rozeznáváme dodnes.

Nejdůležitější bylo, že nyní existoval slovník. Procedury nyní měly jména a interpret prohledával propojený seznam jmen, aby našel shodu. U jmen se při kompilaci ukládala jejich délka a tři první znaky, což byla praxe, kterou se naučil od tvůrců překladačů ve Stanfordu a která ve Forthu převládala až do 80. let. Uvnitř slovníkové položky bylo "kódové pole" obsahující adresu kódu, který se má pro danou rutinu vykonat. Jednalo se o implementaci nepřímo zřetězeného kódu (viz oddíl 5.2), který se používal pět let předtím, než se v Communications of the ACM objevil Dewarův článek o nepřímo zřetězeném kódu [Dewar 1975]. Použití nepřímo zřetězeného kódu bylo důležitou inovací, protože nepřímý skok byl jedinou režií po nalezení slova. Položky slovníku se mohly skládat buď z ukazatelů na jiné "vysokoúrovňové" rutiny, nebo ze strojových instrukcí.

Nakonec byl přidán druhý zásobník nazvaný "zásobník návratových adres", aby se zajistil jednoduchý mechanismus pro vnořování rutin. Výhodou existence zásobníku vyhrazeného pro návratové adresy bylo, že druhý zásobník bylo možné volně používat pro předávání parametrů, aniž by se musel "vyrovnávat" před a za voláním. První článek o jazyku Forth byl napsán v Mohascu [Moore, 1970a]. V roce 1970 společnost Mohasco pověřila Moora ambiciózním projektem, který zahrnoval nový Univac 1108 obsluhující síť pronajatých linek pro systém zadávání objednávek. Přenesl jazyk Forth na 1108 a zajistil jeho propojení s moduly COBOLu, které zpracovávaly transakce. Forth 1108 byl kódován v assembleru. Ukládal vstupní a výstupní zprávy do vyrovnávací paměti a sdílel procesor mezi úlohami zpracovávajícími jednotlivé linky. Také interpretoval vstupní data a spouštěl příslušné moduly COBOL. Tato verze jazyka Forth přidala mechanismy pro definování a správu úloh a také efektivní schéma pro správu vyrovnávacích pamětí diskových bloků podobné schématům používaným dnes. Bohužel ekonomický pokles vedl společnost Mohasco ke zrušení projektu 1108 před jeho dokončením. Moore okamžitě podal výpověď a poté napsal rozzlobenou báseň a knihu o Forthu [Moore, 1970b], která nebyla nikdy vydána. Popisoval v ní, jak vyvíjet software Forth, a nabádal k jednoduchosti a inovacím.

## 1.2 Filozofie a cíle

Pro Moora byl Forth osobní reakcí na jeho frustraci z existujících softwarových nástrojů, které považoval za jakousi "babylonskou věž" [Moore, 1970a]:

Software dodávaný s velkými počítači představuje hierarchii jazyků: assembler definuje jazyk pro popis kompilátoru a supervizoru; supervizor jazyk pro řízení úloh; kompilátor jazyk pro aplikační programy; aplikační program jazyk pro svůj vstup. Uživatel nemusí znát nebo vědět o všech těchto jazycích: ale jsou zde. Stojí mezi ním a jeho počítačem a ukládají mu svá omezení, co může dělat a co ho to bude stát.

A stojí, protože tato rozsáhlá hierarchie jazyků vyžaduje obrovské investice lidského a strojového času na jejich vytvoření a stejně velké úsilí na jejich údržbu. Náklady na dokumentaci těchto programů a na její studium jsou obrovské. A po všem tomto úsilí jsou programy stále plné chyb, nepohodlné na používání a nikoho neuspokojují.

Moore vytvořil Forth jako nahradu celé "rozsáhlé hierarchie" jedinou vrstvou, která vyžaduje pouze dva prvky: rozhraní mezi programátorem a Forthem, které se skládá z minimální dokumentace (minimální proto, že rozhraní by mělo být jednoduché a přirozené), a rozhraní Forth-stroj, které se skládá z programu samotného. Jeho pohled byl zcela osobní, zohledňující jeho vlastní potřeby ve světle svých přímých zkušeností. Následující úryvky z jeho nepublikované knihy [Moore, 1970b] tento pohled popisují:

V průběhu let jsem napsal mnoho programů. Snažil jsem se psát dobré programy a způsob, jakým je píšu, jsem sledoval poměrně kriticky. Mým cílem bylo snížit potřebné úsilí a zvýšit produkovanou kvalitu.

Během těchto pozorování jsem zjistil, že se opakovaně dopouštím stejných chyb. Chyby, které jsou při zpětném pohledu zřejmé, ale v kontextu se těžko rozpoznávají. Napadlo mě, že kdybych napsal recept na programování, mohl bych si problémy alespoň připomenout. A pokud je výsledek cenný pro mě, měl by být cenný i pro ostatní.....

Především jeho hlavní zásada, kterou nazval "základní princip", zněla: "Udržujte to jednoduché!". Po celou svou kariéru tuto zásadu dodržoval s nábožným nasazením.

S rostoucím počtem schopností, které do programu přidáváte, exponenciálně roste jeho složitost. Problém udržení kompatibility mezi těmito schopnostmi, nemluvě o nějaké vnitřní konzistenci programu, se může snadno vymknout kontrole. Tomu se můžete vyhnout, pokud použijete Základní princip. Možná jste obeznámeni s operačním systémem, který Základní princip ignoroval.

Je velmi obtížné jej použít. Všechny tlaky, vnitřní i vnější, se spikly, aby přidaly funkce do vašeho programu. Koneckonců stačí jen půl tuctu instrukcí, tak proč ne? Jediným protichůdným tlakem je Základní princip, a pokud ho ignorujete, žádný opačný tlak neexistuje.

Hlavním nepřítelem jednoduchosti byla podle něj siréna obecnosti, která vedla programátory ke snaze domýšlet budoucí potřeby a pokrývat je. Proto k základnímu principu přidal důsledek: "Nespekulujte!".

Nevkládejte do svého programu kód, který by mohl být použit. Nenechávejte háčky, na které by se dala zavěsit rozšíření. Věcí, které byste mohli chtít dělat, je nekonečně mnoho; to znamená, že každá z nich má nulovou pravděpodobnost realizace. Pokud budete rozšíření potřebovat později, můžete je nakódovat později - a pravděpodobně odvedete lepší práci, než kdybyste to udělali teď. A pokud rozšíření přidá někdo jiný, všimne si háčků, které jste tam nechali? Budete tento aspekt svého programu dokumentovat?

Tento přístup byl v rozporu s tehdy i dnes uznávanou praxí. Druhý důsledek byl ještě kacířštější: "Udělejte si to sami!".

Konvenční přístup, prosazovaný ve větší či menší míře, říká, že použijete standardní podprogram. Já tvrdím, že byste si měli psát vlastní podprogramy.

Než si budete moci napsat vlastní podprogramy, musíte vědět, jak na to. To v praxi znamená, že jste je už někdy psali; což ztěžuje začátek. Ale zkuste to. Až napíšete stejný podprogram tucetkrát na tuctu počítačů a témže počtu jazyků, budete v tom docela dobří.

Moore se tím řídil v ohromující míře. V průběhu 70. let, kdy implementoval jazyk Forth na 18 různých procesorech (tabulka 1), napsal pro každý z nich vlastní assembler, vlastní diskové a terminálové ovladače, dokonce i vlastní podprogramy násobení a dělení (na strojích, které je vyžadovaly, což byla většina). Pokud pro tyto funkce existovaly rutiny dodávané výrobcem, četl je, aby získal nápady, ale nikdy je nepoužíval doslovně. Díky tomu, že přesně věděl, jak Forth tyto prostředky využije, vynechal háčky a obecnosti a díky své zručnosti a zkušenostem (spekuloval, že většinu podprogramů pro násobení a dělení napsal někdo, kdo je nikdy předtím nedělal a už nikdy dělat nebude), byly jeho verze vždy menší a rychlejší, obvykle výrazně.

Navíc se nikdy nespokojil s vlastními řešeními problémů. Když se po několika letech vrátil k počítači nebo aplikaci, často přepisoval klíčové rutiny kódu. Nikdy znovu nepoužíval svůj vlastní kód, aniž by jej znovu neprozkoumal z hlediska možných vylepšení. To se později stalo zdrojem frustrace Rathera, který jako marketér společnosti FORTH, Inc. (viz oddíl 2.2), často nabízel zakázky s předpokladem, že když Moore právě udělal podobný projekt, bude to snadné - a pak jen bezmocně sledoval, jak Moore roztrhal všechen svůj předchozí kód a začal znovu.

Dnes Moore navrhuje mikroprocesory na bázi Forthu pomocí svého vlastního CAD systému založeného na Forthu, který od roku 1979 téměř nepřetržitě přepisuje (a někdy i přestavuje, s použitím vlastního hardwaru).

Moore se pokládal především za programátora aplikací a považoval to za vysoké poslání. Vnímal, že "systémoví programátoři", kteří vytvářejí nástroje pro "aplikační programátory", se ke svým konzumentům chovají povýšeně. Cítil, že velkou část svého profesního života strávil snahou obejít bariéry, které systémoví programátoři postavili, aby ochránili systém před programátory a programátory před sebou samými, a rozhodl se, že Forth bude jiný. Forth byl navržen pro programátora, který byl inteligentní, vysoce kvalifikovaný a profesionální; měl posilovat, nikoli omezovat.

Konečným výsledkem Moorovy filozofie byl systém, který byl malý, jednoduchý, čistý - a nesmírně flexibilní: aby bylo možné tuto filozofii uvést do praxe, je flexibilní software nezbytný. Důvodem, proč lidé nechávají háčky pro budoucí rozšíření, je to, že je obecně příliš obtížné a časově náročné něco znovu implementovat, když se změní požadavky. Moore viděl jasný rozdíl mezi schopností naučit počítač dělat "cokoli" (pomocí jednoduchých, flexibilních nástrojů) a snahou umožnit mu dělat "všechno" pomocí obrovského, univerzálního operačního systému. Tím, že se zavázal k první variantě, si zajistil ideální sadu nástrojů, aby mohl sledovat svou vizi.

