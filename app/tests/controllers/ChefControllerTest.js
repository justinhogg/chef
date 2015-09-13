/* 
 * ChefControllerTest
 * 
 * @author Justin Hogg
 */

(function() {

    var obj;

    module("ChefController", {
            setup: function() {
                    obj = new ChefController();
            }
    });

    test( "ChefController element test", function() {

            equal(obj.element, 'div#response', 'Strings for the element match');
    });
	
})();



