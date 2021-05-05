$(document).ready(function(){

    $('form').submit(function(e) {

        if(!$(this).find('[data-input=mobile]').val()){
            alert('Вы забыли заполнить поле для отправки заявки')
        } else {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "../mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('form').trigger('reset');
            });
            location.href = "thanks.html"
            return false;
        }
    });

});

