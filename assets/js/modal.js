var modalStickyFooter = new tingle.modal({
    footer: true,
    stickyFooter: true
});
var btn4 = document.querySelector('.js-tingle-modal-1 ');
btn4.addEventListener('click', function(){
    modalStickyFooter.open();
});


modalStickyFooter.addFooterBtn('Send', 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function(){
    modalStickyFooter.setContent("Thank You for reaching us! We will get back to you soon.<i class='fas fa-check tickmark'></i>");
    document.querySelector(".tingle-btn--primary").style.display = "none";
});

modalStickyFooter.addFooterBtn('Cancel', 'tingle-btn tingle-btn--default tingle-btn--pull-right', function(){
    modalStickyFooter.close();
});

modalStickyFooter.setContent(document.querySelector('.modal-form').innerHTML);