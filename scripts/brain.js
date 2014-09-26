function readFile(input, callback) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            callback(e.target.result)
        }
        reader.readAsText(input.files[0]);
    } else {
        alert ('Error');
    }
}

$(document).ready( function() {

	$('#create').click( function() {

        if ($('#jsonFile').val() === "") {
            alert ('No JSON file selected')
        } else {
            readFile($('#jsonFile')[0], function(result) {
                var json   = JSON.parse(result);

                    var b = new FieldSetView({
                        el        : "#secondWizard",
                        schema    : json['schema'],
                        fieldsets : json['fieldsets']
                    });

                    b.render();
            });
        }

	});

    $('#load').click(function() {
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
    })

})