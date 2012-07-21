/**
 * AniPalace Widget
 * @version RedGrape
 * @site http://code.google.com/p/anipalace-widget/
 * 
 * @author NewPlayer
 * @site http://anipalace.hu/
 * 
 */

var jQueryScriptOutputted = false;
var target_url = undefined;

/**
 * A függvény, ismétlem: _A_ függvény 
 */
function AniPalaceWidget( url ) {
	
	// megnézzük, hogy adtunk-e át url-t
	if( url != "" ){
		
		// ezt későbbre tartogatjuk, esetleg mikor majd külön be lehet állítani az url-t
		if( target_url == undefined ){
		
			target_url = url;
				
		}
			
	}
	
    //Vajon a jQuery elérhető-e?
    if( typeof( jQuery ) == 'undefined' ){
    	
    	// Nem :( nincsen jQuery
    		
        if( !jQueryScriptOutputted ){
        	
            //Csak egyszer kell beolvasnunk a scriptet
            jQueryScriptOutputted = true;

            //És beolvassuk
            //TODO: ne összevissza írjunk mindenhova, hanem a header részhez füzzük hozzá
            document.write("<scr" + "ipt type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js\"></scr" + "ipt>");
        }
        
        // várunk egy picit hátha betöltődik, majd meghívjuk újra a függvényt
        setTimeout("AniPalaceWidget()", 100);
        
    } else {

        // és be van töltve \o/
    	// jQuery-t használunk a $- helyett hogy mindenhol tuti jól működjön pl: wordpress
        jQuery( function() {  
        	
            // megnézzük, hogy van-e paraméterben átadva url
            if( target_url == "" ){
            	
            	target_url = "http://anipalace.hu/json/Widget-Magazin.json";
            	
            }
            
        	jQuery.post(
        		target_url,
        		function( data ){
        			
        			var obj = jQuery.parseJSON( data );
        			jQuery( ".anipalace-widget" ).html( obj['animagazin']['image'] );
        			
        			var animagazinhtml = "<div class='anipalace-widget anipalace-widget-animagazin'>"+
					"<a href='" + obj['animagazin']['link'] + "' title='" + obj['animagazin']['title'] + "'>"+
					"<img src='" + obj['animagazin']['image']+"' alt='"+obj['animagazin']['title'] + "' />"+
					"</a>"+
					"</div>";
        			
        			var anistationhtml = "<div class='anipalace-widget anipalace-widget-anistation'>"+
					"<a href='" + obj['anistation']['link'] + "' title='" + obj['anistation']['title'] + "'>"+
					"<img src='" + obj['anistation']['image'] + "' alt='" + obj['anistation']['title'] + "' />"+
					"</a>"+
					"</div>";
        			
        			jQuery( ".anipalace-widget" ).each( function( index ){
        				
        				// ha AniMagazint kell megjelentetni
        				if( jQuery( this ).attr( "data-type" ) == "animagazin" ){
        					
        					jQuery( this ).html( animagazinhtml );
        					
        				}
        				
        				// Ha anistation-t kell megjelentetni
        				if( jQuery( this ).attr( "data-type" ) == "anistation" ){
        					
        					jQuery(this).html(anistationhtml);
        					
        				}
        				
        				// mindet meg kell jelentetni
        				if( jQuery( this ).attr( "data-type" ) == "all" ){
        					
        					// egy listában
        					if( jQuery( this ).attr( "data-style" ) == "list" ){
        						
        						jQuery( this ).html( "<div class='anipalace-widget-list'>" + animagazinhtml + anistationhtml + "</div>" );
        					
        					}
        					
        					// egy váltóban
        					if( jQuery( this ).attr( "data-style" ) == "changer" ){
        						
        						jQuery( this ).html( "<div class='anipalace-widget-changer'>" + animagazinhtml + anistationhtml + "<input type='button' class='anipalace-button' onclick='anipalace_change()' /></div>" );
        						
        					}
        					
        				}
        				
        			} );
        			
        		}
        		
        	);
        	
        } );
    }
            
}