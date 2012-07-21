/**
 * AniPalace Widget
 * @version RedGrape
 * @site http://code.google.com/p/anipalace-widget/
 * 
 * @author NewPlayer
 * @site http://anipalace.hu/
 * 
 */

jQueryScriptOutputted = false;

/**
 * A függvény, ismétlem: _A_ függvény 
 */
function AniPalaceWidget() {
    //Vajon a jQuery elérhető-e?
    if (typeof(jQuery) == 'undefined') {
    	// Nem :C
    	console.log("nincs beolvasva");
        if (!jQueryScriptOutputted) {
            //Csak egyszer kell beolvasnunk a scriptet
            jQueryScriptOutputted = true;
            console.log("beolvasás indítása");
            //És beolvassuk
            document.write("<scr" + "ipt type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js\"></scr" + "ipt>");
        }
        
        // várunk egy picit hátha betöltődik
        setTimeout("AniPalaceWidget()", 100);
    } else {
    	console.log("Beolvasva");
        // és be van töltve \o/
    	// jQuery-t használunk a $- helyett hogy mindenhol tuti jól működjön pl: wordpress
        jQuery(function() {  
            // most hogy van jQuery-nk olvassuk be a dolgokat
        	jQuery.post(
        		'demo/json.php',
        		function(data){
        			var obj = jQuery.parseJSON(data);
        			jQuery(".anipalace-widget").html(obj['animagazin']['image']);
        			
        			var animagazinhtml = "<div class='anipalace-widget anipalace-widget-animagazin'>"+
					"<a href='"+obj['animagazin']['link']+"' title='"+obj['animagazin']['title']+"'>"+
					"<img src='"+obj['animagazin']['image']+"' alt='"+obj['animagazin']['title']+"' />"+
					"</a>"+
					"</div>";
        			
        			var anistationhtml = "<div class='anipalace-widget anipalace-widget-anistation'>"+
					"<a href='"+obj['anistation']['link']+"' title='"+obj['anistation']['title']+"'>"+
					"<img src='"+obj['anistation']['image']+"' alt='"+obj['anistation']['title']+"' />"+
					"</a>"+
					"</div>";
        			
        			jQuery(".anipalace-widget").each(function(index){
        				
        				// ha AniMagazint kell megjelentetni
        				if (jQuery(this).attr("data-type") == "animagazin"){
        					jQuery(this).html(animagazinhtml);
        				}
        				
        				// Ha anistation-t kell megjelentetni
        				if (jQuery(this).attr("data-type") == "anistation"){
        					jQuery(this).html(anistationhtml);
        				}
        				
        				// mindet meg kell jelentetni
        				if (jQuery(this).attr("data-type") == "all"){
        					
        					// egy listában
        					if (jQuery(this).attr("data-style") == "list"){
        						jQuery(this).html("<div class='anipalace-widget-list'>"+animagazinhtml+anistationhtml+"</div>");
        					}
        					
        					// egy váltóban
        					if (jQuery(this).attr("data-style") == "changer"){
        						jQuery(this).html("<div class='anipalace-widget-changer'>"+animagazinhtml+anistationhtml+"<input type='button' class='anipalace-button' onclick='anipalace_change()' /></div>");
        					}
        					
        				}
        				
        			});
        		}
        	);
        });
    }
            
}