$(document).ready(function(){
    $(".content").hide();
    $("#accordion-button-1").on('click', () => {
        $('#accordion-content-1').toggle();
        $('#accordion-content-2').hide();
        $('#accordion-content-3').hide();
    });
    $("#accordion-button-2").on('click', () => {
        $('#accordion-content-2').toggle();
        $('#accordion-content-1').hide();
        $('#accordion-content-3').hide();
    });
    $("#accordion-button-3").on('click', () => {
        $('#accordion-content-3').toggle();
        $('#accordion-content-1').hide();
        $('#accordion-content-2').hide();
    });
});

$(".small_img").click(function(){
        $(".big_img").attr('src', $(this).attr('src'
        ));
    });

$(".big_img").imagezoomsl({
    zoomrange: [3, 3]
});

$("#formValidation").validate({
    rules: {
        name: {
            minlength: 2
        },
        email: {
            email: true
        },
        phone: {
            number: true,
            minlength: 10,
            maxlength: 10
        }
    },
    messages: {
        name: {
            required: "Enter your name.",
            minlength: "Use more than 2 characters."
        },
        email: "Enter your email.",
        phone: "Enter your phone number.",
        subject: "Enter the message subject.",
        formMessage: "Enter your message/information."

    },

    submitHandler: function(form) {
        form.submit();
    }
})