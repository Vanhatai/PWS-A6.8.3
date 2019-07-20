function init() {
    $(".btn").click(function() {
        const maxWidth = $('.progress-bar').attr('aria-valuemax');
        let currentWidth = +$('.progress-bar').attr('aria-valuenow');
        let increment = +this.id;
        
        currentWidth += increment;

        if (currentWidth >= maxWidth)
            currentWidth = 0;
        
        $('.progress-bar')
            .css('width', currentWidth + "%")
            .attr('aria-valuenow', currentWidth)
            .text(currentWidth + '%');
        
    });
};
console.log('скрипт подгрузился');

$(document).ready(init);
