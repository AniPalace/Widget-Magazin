<?php
/**
 * AniPalace Widget-Magazin e107 plugin
 * 
 * @link https://github.com/AniPalace/Widget-Magazin
 * @author NewPlayer
 * 
 */


if (!defined('e107_INIT')) { exit; }

// a widget címe
$caption = "AniPalace";

// a widget tartalma
//TODO: van $footer_js e107-ben de az nem akart működni
$text = '
<div class="anipalace-widget" data-type="all" data-style="changer"></div>
<script type="text/javascript" src="' . e_PLUGIN_ABS . 'anipalace-widget-magazin/anipalace-widget-magazin.js"></script>
<script type="text/javascript">
	getAniPalaceWidgetMagazin( );
</script>
';

// Widget megjelenítése
$ns->tablerender($caption, $text, 'anipalace-widget-magazin');

?>