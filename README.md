# AniPalace Widget-Magazin
Egy egyszerű JavaScript függvény, amely azt a célt szolgálja, hogy az AniPalace weboldaláról lekérdezzen adatokat, majd azokat megjelenítse.
Ennek a widget-nek a segítségével könnyen és gyorsan meg lehet jeleníteni a legújabb magazin és podcast megjelenéseket.

## Használat
A widget egy JavaScript függvényből áll, amit az anipalace-widget-magazin.js vagy a aniapalce-widget-magazin.min.js ( minimalizált )
fileok tartalmaznak. A máködéshez elég csak az egyiket használni! Ajánlott a minimalizált verzió!

### Plugin változat
Amennyiben nem ezt a verziót akarjuk használni, hanem a megtalálható cms pluginok közül valamelyiket, akkor a használat előtt
át kell másolni az egyik JavaScript állományt az adott plugin könyvtárába. Amennyiben a minimalizált verziót használjuk, akkor
át kell nevezni azt anipalace-widget-magazin.js-re.
Miután ezzel megvagyunk át kell másolni az adott rendszer plugins/module/widget mappájába a könyvtárt és az adott rendszernek
megfelelően telepíteni kell azt.
( figyelem ezek a pluginok nincsenek folyamatosan tesztelve, így előfordulhat bennük hiba! )

#### Példa e107-ez:
Az e107 plugin megtalálható a plugins/e107 könyvtárban. Az itt található mappába kell bemásolni a anipalace-widget-magazin.js filet
majd az egész mappát átmásolni az e107 rendszer plugins mappájába.

### JavaScript változat:
Ez az alapértelmezett változat, tapasztaltabb felhasználóknak, vagy azoknak akik egyedi rendszert építenek.

Az alábbi code részletet helyezzük el az oldalunk fejlécében:
```html
<script type="text/javascript" src='anipalace-widget.js'></script>
<script type="text/javascript">
	getAniPalaceWidgetMagazin( );
</script>
```

Majd ahol szeretnénk megjeleníteni a legujabb magazint:
```html
<div class='anipalace-widget' data-type='animagazin'></div>
```

## Changelog

### 2012.07.21 =RedGrape= ( v1.0 )
	- Init
	- Egyszerű demo
	- Nagyon egyszerű lekérdezés
	- Részletes comment
	- Áttérés GoogleCode-ról GitHub-ra
	- elkészül az első e107-es demo
