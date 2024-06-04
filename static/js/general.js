
// Inicializácia popoveru
document.addEventListener('DOMContentLoaded', function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    document.addEventListener('click', function (e) {
        var clickedOutside = true;
        popoverTriggerList.forEach(function (popoverTriggerEl) {
            if (popoverTriggerEl.contains(e.target)) {
                clickedOutside = false;
            }
        });
        if (clickedOutside) {
            popoverList.forEach(function (popover) {
                popover.hide();
            });
        }
    });
});