var expandBelow = function(event) {
    var expandBelowLink = event.target;
    var expandableDetailSection = expandBelowLink.parentNode.nextElementSibling;
    var collapseAboveLink = expandableDetailSection.nextElementSibling.firstChild;
    expandBelowLink.classList.add('hidden');
    expandableDetailSection.classList.remove('hidden');
    collapseAboveLink.classList.remove('hidden');
};

var collapseAbove = function(event) {
    var collapseAboveLink = event.target;
    var expandableDetailSection = collapseAboveLink.parentNode.previousElementSibling;
    var expandBelowLink = expandableDetailSection.previousElementSibling.firstChild;
    collapseAboveLink.classList.add('hidden');
    expandableDetailSection.classList.add('hidden');
    expandBelowLink.classList.remove('hidden');

    var precedingSibling = expandBelowLink.parentNode.previousElementSibling;
    var didScroll = false;
    while (!didScroll) {
        if (precedingSibling.nodeName.substring(0, 1) == 'H') {
            var scrollTarget = document.getElementById(precedingSibling.id).offsetTop;
            window.scrollTo(0, scrollTarget);
            didScroll = true;
        } else {
            precedingSibling = precedingSibling.previousElementSibling;
        }
    }
};

var expandBelowLinks = document.getElementsByClassName('expand-below');
for (var i = 0; i < expandBelowLinks.length; i++) {
    expandBelowLinks[i].addEventListener('click', expandBelow, false);
}

var collapseAboveLinks = document.getElementsByClassName('collapse-above');
for (var i = 0; i < collapseAboveLinks.length; i++) {
    collapseAboveLinks[i].addEventListener('click', collapseAbove, false);
}
