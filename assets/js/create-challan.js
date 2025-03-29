$(document).ready(function () {
    // Add item row
    $('#addItem').on('click', function () {
        let itemRow = `
            <div class="row g-3 align-items-center item-row mt-2">
                <div class="col-md-3">
                    <input type="text" class="form-control" placeholder="Item/Service Name" required>
                </div>
                <div class="col-md-2">
                    <input type="number" class="form-control quantity" placeholder="Quantity" required min="0">
                </div>
                <div class="col-md-2">
                    <input type="number" class="form-control rate" placeholder="Rate" required min="0">
                </div>
                <div class="col-md-2">
                    <input type="number" class="form-control total" placeholder="Total" readonly>
                </div>
                <div class="col-md-3">
                    <button type="button" class="btn btn-danger remove-item">Remove</button>
                </div>
            </div>`;
        $('#itemsContainer').append(itemRow);
    });

    // Remove item row
    $(document).on('click', '.remove-item', function () {
        $(this).closest('.item-row').remove();
        calculateTotalAmount();
    });

    // Calculate total for each row
    $(document).on('input', '.quantity, .rate', function () {
        let row = $(this).closest('.item-row');
        let quantity = row.find('.quantity').val();
        let rate = row.find('.rate').val();
        let total = quantity * rate;
        row.find('.total').val(total);
        calculateTotalAmount();
    });

    // Calculate total amount for all rows
    function calculateTotalAmount() {
        let totalAmount = 0;
        $('.total').each(function () {
            totalAmount += parseFloat($(this).val()) || 0;
        });
        $('#totalAmount').val(totalAmount);
    }
});