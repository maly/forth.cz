---
title: Vývoj jazyka Forth [4] - Hardwarové implementace jazyka Forth
author: Pavel Křivánek
---

Vnitřní architektura jazyka Forth simuluje počítač se dvěma zásobníky, sadou registrů a dalšími přesně definovanými funkcemi. V důsledku toho bylo téměř nevyhnutelné, že se někdo pokusí postavit hardwarovou reprezentaci skutečného forthovského počítače.

První takový pokus učinil v roce 1973 John Davies z radioastronomické observatoře Jodrell Bank poblíž Manchesteru v Anglii. Daviesův přístup spočíval v přepracování počítače firmy Ferranti, který se přestal vyrábět, a v optimalizaci jeho instrukční sady pro jazyk Forth.

První skutečné forthovské počítače byly produkty založené na deskách s procesorovými řezy. První z nich vyrobila kalifornská společnost Standard Logic v roce 1976. Drobnou úpravou instrukční sady jejich počítače dokázal hlavní programátor firmy Standard Logic Dean Sanderson implementovat přesně tu instrukci, kterou jazyk Forth používá ve svém "adresovém interpretu" pro přechod z jednoho vysokoúrovňového příkazu na druhý. Jejich systém byl hojně využíván americkou poštou.

Počátkem 80. let vyrobila společnost Rockwell mikroprocesor s primitivami jazyka Forth v integrované paměti ROM, Rockwell AIM 65F11 [Dumse, 1984]. Tento čip byl poměrně úspěšně používán ve vestavěných mikroprocesorových aplikacích. Nebyl však učiněn žádný pokus přizpůsobit skutečnou architekturu procesoru (v podstatě šlo o 6502) pro podporu jazyka Forth.

V roce 1981 se Moore sám ujal návrhu skutečného forthovského čipu. Ve spolupráci nejprve se společností FORTH, Inc. a následně se start-upem Novix, který byl založena za účelem vývoje čipu, dokončil Moore návrh v roce 1984. První prototypy byly vyrobeny počátkem roku 1985 [Golden, 1985]. Tento návrh byl následně zakoupen a upraven společností Harris Semiconductor Corp. a stal se základem její řady procesorů RTX.

Od počátku 80. let 20. století vyvíjela skupina v Johns Hopkins Applied Physics Laboratory v Marylandu řadu experimentálních forthovských procesorů pro použití v kosmických řídících systémech [Hayes, 1987]. Nejúspěšnější z nich, prodávaný jako SC-32 firmou Silicon Composers z Palo Alto v Kalifornii, byl použit k řízení Hopkinsova ultrafialového teleskopu, který letěl v listopadu 1990 v raketoplánu Columbia [Ballard, 1991]. Nadále je základem pro další vyvíjené kosmické přístroje.

Sám Moore, pracující na vlastní pěst, pokračoval ve vývoji procesorů založených na Forthu pro speciální aplikace.

Různé forthovské procesory měly vliv na softwarové systémy s Forthem. Aby bylo možné plně využít výhod těchto architektur, Moore a FORTH, Inc. a Laboratory Microsystems vyvinuli kompilátory jazyka Forth, které generovaly strojový kód optimalizovaný pro vnitřní architekturu čipu. Nativní řídící struktura v čipech Novix a Harris nazvaná `FOR` ... `NEXT` (která počítala od horního limitu v argumentu až k nule) vedla k přijetí této struktury i v ostatních Forthech.