$(function() {
 $('.input-daterange input').each(function() {
    $(this).datepicker('clearDates');
});
 $('#sandbox-container .input-daterange').datepicker({
    daysOfWeekHighlighted: "3"
});
 $('#sandbox-container .input-group.date').datepicker({
    daysOfWeekHighlighted: "3"
});
});