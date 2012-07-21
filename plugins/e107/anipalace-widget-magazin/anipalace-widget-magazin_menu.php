<?php

if (!defined('e107_INIT')) {
	exit;
}

$caption = "AniPalace";
$text = '<div class="anipalace-widget" data-type="all" data-style="changer"></div>
<script type="text/javascript" src="' . e_PLUGIN_ABS . 'anipalace-widget-magazin/anipalace-widget-magazin.js"></script>
<script type="text/javascript">
	getAniPalaceWidgetMagazin( );
</script>
';

$ns->tablerender($caption, $text, 'anipalace-widget-magazin');

?>