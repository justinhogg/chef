/* 
 * ChefController - controller for the main application
 * 
 * @author Justin Hogg
 */

/**
 * ChefController
 * 
 * @param object recipes
 */
function ChefController(recipes) {
	
    if( recipes== undefined){
            this.recipes = new Recipes();
    } else {
            this.recipes = recipes;
    }
    //set the element
    this.element ='div#response';
}

/**
 * render - renders a view based on the parameters passed.
 * 
 * @param string name - the name of the view
 * @param string element - the element to render the view in
 * @param mixed options -  data to pass through to the view
 */
ChefController.prototype.render = function(name,element,options) {
    if ( typeof window[name] === 'function' ) {
            new window[name](element, options);
    }
}



