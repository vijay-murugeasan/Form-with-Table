$(document).ready(function ($) {

    // table filter 
    (function ($) {
        $('#filter').keyup(function () {
            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();
            $('.no-data').hide();
            if ($('.searchable tr:visible').length == 0) {
                $('.no-data').show();
            }

        })
    }(jQuery));

    // salary field number only restriction
    $('#salary').on('input blur', function () {
        $(this).val($(this).val().replace(/\D/g, ''))
    })
    // date field datepicker script
    $(function () {
        $("#dob").datepicker({
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
        });
    });

    // employee data
    let employeeData = []


    // increment id for table data
    let idCount = 1;

    // validation employee form
    $("#employee-form").validate({

        rules: {
            employeeName: "required",
            designation: 'required',
            dob: 'required',
            salary: {
                required: true,
                number: true,
                digits: true
            },
        },
        messages: {
            employeeName: "Please enter your Name",
            designation: "Please select Designation",
            dob: "Please enter your DOB",
            salary: "Please enter your Salary"

        },
        errorPlacement: function (error, element) {
            if (element[0].id == 'salary') {

                error.appendTo('#salary-input');
            } else {
                error.insertAfter(element);
            }
        },
        //form submit after this
        submitHandler: function (form) {
            $('#employee-submit').attr("disabled", true);
            //get data from form
            var formData = {
                empId: idCount,
                name: $("#employee-name").val(),
                designation: $("#designation").val(),
                dob: $("#dob").val(),
                salary: $("#salary").val(),
            };

            // process the form
            $.ajax({
                type: "POST",
                url: "https://jsonplaceholder.typicode.com/posts",
                data: formData,
                dataType: "json",
                encode: true,
                success: function (response) {
                    employeeData.push(response)
                    if (employeeData.length > 0) $('.no-data').hide();
                    ++idCount;

                    const { empId, name, dob, designation, salary } = response;
                    $("#employee-table-body").append(`<tr><th scope="row">${empId}</th><td>${name}</td><td>${dob}</td><td>${designation}</td><td>${`₹${Number(salary).toLocaleString()}`}</td></tr>`);

                    $('#employee-form')[0].reset(); // form clear
                    $('#employee-submit').attr("disabled", false);
                    $('#response').append('<p class="form-response  alert alert-success">Form Submitted Successfully</p>')
                },
                error: function (response) {
                    $('#employee-submit').attr("disabled", false);
                    $('#response').append('<p class="form-response alert alert-danger">Something Went Wrong.Please Try Again Later</p>')
                }
            }).done(function (data) {
                setTimeout(function () {
                    $('.form-response').remove();
                }, 3000);
            });

        }

    });
});
