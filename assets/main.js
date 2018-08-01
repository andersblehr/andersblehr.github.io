var expand = function(event) {
    var expander = event.target;
    var collapser = expander.nextElementSibling;
    var expandable = expander.parentNode.nextElementSibling;
    expander.classList.add('hidden');
    expandable.classList.remove('hidden');
    collapser.classList.remove('hidden');
};

var collapse = function(event) {
    var collapser = event.target;
    var expander = collapser.previousElementSibling;
    var collapsable = collapser.parentNode.nextElementSibling;
    collapser.classList.add('hidden');
    collapsable.classList.add('hidden');
    expander.classList.remove('hidden');
};

var expanders = document.getElementsByClassName('expander');
for (var i = 0; i < expanders.length; i++) {
    expanders[i].addEventListener('click', expand, false);
}

var collapsers = document.getElementsByClassName('collapser');
for (var i = 0; i < collapsers.length; i++) {
    collapsers[i].addEventListener('click', collapse, false);
}
