/* 
 * main.js - sets up the main configuration settings for require.js
 * 
 * @author Justin Hogg
 */
requirejs.config({
	baseUrl: 'app', //set the base url
	paths: {
		js:		'assets/js',
                uikit:          'assets/js/uikit.js',
		views:		'protected/views',
		models:		'protected/models',
		controllers:	'protected/controllers'
	},
        config: {
            'uikit': {
                'base': 'assets/js'
            }
        }
});

// import required files
requirejs(['js/jquery-1.11.3.min','controllers/ChefController','models/Recipes', 'views/RecipesView', 'views/ErrorView'],

//DOM Load
function  () {
    $( document ).ready(function() {
        //action goes here
    });
});




