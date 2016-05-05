
    $(document).ready(function() {

        $('#sp').on('click', function(flag) {
            $('#img-pais').attr({src:'/images/flags/Spain-24.png'});
        });

        $('#en').on('click', function(flag) {
            $('#img-pais').attr({src:'/images/flags/United-Kingdom-24.png'});
        });

        $('#fr').on('click', function(flag) {
            $('#img-pais').attr({src:'/images/flags/France-24.png'});
        });
        
        $('#gr').on('click', function(flag) {
            $('#img-pais').attr({src:'/images/flags/Germany-24.png'});
        });

    });
