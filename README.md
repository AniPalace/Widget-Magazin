AniPalace Widget-Magazin
========================

Egy egyszerű JavaScript függvény, amely azt a célt szolgálja, hogy az AniPalace weboldaláról lekérdezzen adatokat, majd azokat megjelenítse.
Ennek a widget-nek a segítségével könnyen és gyorsan meg lehet jeleníteni a legújabb magazin és podcast megjelenéseket.

Használat
---------

Az alábbi code részletet helyezzük az oldalunk fejlécében:
>
>	<script type="text/javascript" src='anipalace-widget.js'></script>
>	<script type="text/javascript">
>		getAniPalaceWidgetMagazin( "demo/json.php" );
>	</script>
>

Majd ahol szeretnénk megjeleníteni a legujabb magazin képét:
```html
    <div class='anipalace-widget' data-type='animagazin'> 
    </div>
```


Changelog
---------

- 2012.07.21 =RedGrape= ( v1.0 )
	- Init
	- Egyszerű demo
	- Nagyon egyszerű lekérdezés
	- Részletes comment
	- Áttérés GoogleCode-ról GitHub-ra