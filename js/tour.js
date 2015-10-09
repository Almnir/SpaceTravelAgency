$(function () {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {},
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var phone = $("input#phone").val();
            var email = $("input#email").val();
            var address = $("input#address").val();
            var tourtype = $("select#tourtype").val();
            var comments = $("input#comments").val();
            var firstName = name;
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "tour.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    address: address,
                    tourtype: tourtype,
                    comments: comments
                },
                cache: false,
                success: function () {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Ваше сообщение было отправлено. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    $('#tourForm').trigger("reset");
                },
                error: function () {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Извините " + firstName + ", но почтовый сервер временно недоступен. Пожалуйста, попробуйте отправить заявку позже!!");
                    $('#success > .alert-danger').append('</div>');
                    $('#tourForm').trigger("reset");
                },
            })
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


$('#name').focus(function () {
    $('#success').html('');
});