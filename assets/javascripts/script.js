function initbtnUpbtnDown(){
    jQuery('.times').each(function() {

        var spinner = jQuery(this),

            input = spinner.find('input[type="number"]'),

            btnUp = spinner.find('.times-up'),

            btnDown = spinner.find('.times-down'),

            min = input.attr('min'),

            max = input.attr('max');

        btnUp.off()
        btnUp.click(function() {

            data_increment = parseInt(input.data('increment'))
            var oldValue = parseFloat(input.val());

            if (oldValue >= max) {

                var newVal = oldValue;

            } else {

                var newVal = oldValue + data_increment;

            }
            if(newVal !== '0:0')
            {
                spinner.find("input").val(newVal);
            }
            else {
                spinner.find("input").val('');
            }
            spinner.find("input").trigger("change");

        });
        btnDown.off()
        btnDown.click(function() {

            var oldValue = parseFloat(input.val());
            data_increment = parseInt(input.data('increment'))
            if (oldValue <= min) {

                var newVal = oldValue;

            } else {

                var newVal = oldValue - data_increment;

            }

            if(newVal !== '0:0')
            {
                spinner.find("input").val(newVal);
            }
            else {
                spinner.find("input").val('');
            }

        });
});
}
$(document).ready(function(){
    jQuery('<div class="times-nav"><div class="times-button times-up"><img src="/images/sort_asc.png" /></div><div class="times-button times-down"><img src="/images/sort_desc.png" /></div></div>').insertAfter('.times-minutes input');
    jQuery('<div class="times-nav"><div class="times-button times-up"><img src="/images/sort_asc.png" /></div><div class="times-button times-down"><img src="/images/sort_desc.png" /></div></div>').insertBefore('.times-hours input');
    initbtnUpbtnDown()
})
