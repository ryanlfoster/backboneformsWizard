backbone-forms Wizard
==================

An example of backbone forms fieldsets wizard rendering with Fuel UX

# Technologies used

[backbone-forms](https://github.com/powmedia/backbone-forms)

[bootstrap 3](http://getbootstrap.com/)

And [FuelUX](http://exacttarget.github.io/fuelux/) for wizard component

# The FieldsetView

I create a Backbone View : FieldsetView.
For example you can use it like this :

	$.getJSON('resources/example2.json', function(data) {
	    var c = new FieldSetView({
	        el        : '#myWizard',
	        schema    : data['schema'],
	        fieldsets : data['fieldsets']
	    });
	    c.render();
	}).error(function() {
	    alert('File can\'t be loaded !');
	})

And an the JSON file : 

	{
	    "schema": {
	        "name": {
	            "type": "Text"
	        },
	        "firstname": {
	            "type": "Text"
	        },
	        "adress" : {
	            "type" : "Text"
	        },
	        "country" : {
	            "type" : "Select",
	            "options" : {
	                "Italy" : "Italy",
	                "Germany" : "Germany",
	                "USA" : "USA"
	            }
	        }
	    },
	    "fieldsets": [
	        {
	            "legend": "Person description",
	            "fields": ["name", "firstname"]
	        },
	        {
	            "legend": "Adress description",
	            "fields": ["adress", "country"]
	        }
	    ]
	}

