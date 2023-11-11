function changeImage(newSrc) {
    // Get the main image element
    var mainImage = document.querySelector('.main-image img');

    // Change the source of the main image
    mainImage.src = newSrc;
}

$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.click-product-sections section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

function toggleReviewForm() {
    var reviewForm = document.querySelector('.review-form');
    reviewForm.style.display = reviewForm.style.display === 'none' ? 'block' : 'none';
}
