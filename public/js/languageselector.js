
    $(document).ready(function() {

        $('#sp').on('click', function(flag) {
            $('#img-pais').attr({src:'/images/flags/Spain-32.png'});
        });
        $('#en').on('click', function(flag) {
            $('#img-pais').attr({src:'/images/flags/United-Kingdom-32.png'});
        });
        $('#fr').on('click', function(flag) {
            $('#img-pais').attr({src:'/images/flags/France-32.png'});
        });
        $('#gr').on('click', function(flag) {
            $('#img-pais').attr({src:'/images/flags/Germany-32.png'});
        });

    });
