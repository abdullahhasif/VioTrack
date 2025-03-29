// $(document).ready(function () {
//     // Example jQuery function to handle actions
//     $('.edit-btn').click(function () {
//         alert('Edit action clicked');
//     });

//     $('.view-btn').click(function () {
//         alert('View action clicked');
//     });

//     $('.delete-btn').click(function () {
//         if (confirm('Are you sure you want to delete this challan?')) {
//             // Handle deletion here
//             $(this).closest('tr').remove();
//         }
//     });
// });


$(document).ready(function () {
    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#challanTable tbody tr").filter(function () {
            $(this).toggle($(this).find("td:nth-child(2)").text().toLowerCase().indexOf(value) > -1);
        });
    });
});



$(document).ready(function () {
    let selectedRow;

    // Edit Button Click
    $('.edit-btn').on('click', function () {
        selectedRow = $(this).closest('tr');
        const challanId = selectedRow.find('td').eq(0).text();
        const customerName = selectedRow.find('td').eq(1).text();
        const date = selectedRow.find('td').eq(2).text();
        const amount = selectedRow.find('td').eq(3).text();
        const paymentStatus = selectedRow.find('td').eq(4).find('span').text();

        // Fill modal form with current values
        $('#editChallanId').val(challanId);
        $('#editCustomerName').val(customerName);
        $('#editDate').val(date);
        $('#editAmount').val(amount);
        $('#editPaymentStatus').val(paymentStatus);

        // Show the Edit Modal
        $('#editModal').modal('show');
    });

    // Save changes in Edit Modal
    $('#editChallanForm').on('submit', function (e) {
        e.preventDefault();

        const newCustomerName = $('#editCustomerName').val();
        const newDate = $('#editDate').val();
        const newAmount = $('#editAmount').val();
        const newPaymentStatus = $('#editPaymentStatus').val();

        // Update the table row with new values
        selectedRow.find('td').eq(1).text(newCustomerName);
        selectedRow.find('td').eq(2).text(newDate);
        selectedRow.find('td').eq(3).text(newAmount);
        selectedRow.find('td').eq(4).find('span').text(newPaymentStatus)
            .removeClass('bg-success bg-danger')
            .addClass(newPaymentStatus === 'Paid' ? 'bg-success' : 'bg-danger');

        // Hide the modal
        $('#editModal').modal('hide');
    });


    // View Button Click
    $('.view-btn').on('click', function () {
        selectedRow = $(this).closest('tr');
        const challanId = selectedRow.find('td').eq(0).text();
        const customerName = selectedRow.find('td').eq(1).text();
        const date = selectedRow.find('td').eq(2).text();
        const amount = selectedRow.find('td').eq(3).text();
        const paymentStatus = selectedRow.find('td').eq(4).find('span').text();

        // Fill modal with view details
        $('#viewChallanId').val(challanId);
        $('#viewCustomerName').val(customerName);
        $('#viewDate').val(date);
        $('#viewAmount').val(amount);
        $('#viewPaymentStatus').val(paymentStatus);

        // Show the View Modal
        $('#viewModal').modal('show');
    });





    // Delete Button Click
    $('.delete-btn').on('click', function () {
        selectedRow = $(this).closest('tr');
        $('#deleteModal').modal('show');
    });

    // Confirm Delete in Modal
    $('#confirmDeleteBtn').on('click', function () {
        selectedRow.remove();
        $('#deleteModal').modal('hide');
    });
});
