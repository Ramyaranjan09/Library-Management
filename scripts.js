// Basic Validation Example for Add Membership Form
function validateAddMembershipForm() {
    const duration = document.querySelector('input[name="membership_duration"]:checked');
    if (!duration) {
        alert("Please select a membership duration.");
        return false;
    }
    return true;
}

// Basic Validation Example for Add Book Form
function validateAddBookForm() {
    const bookName = document.getElementById('book_name').value;
    const authorName = document.getElementById('author_name').value;

    if (!bookName || !authorName) {
        alert("Please fill in all the mandatory fields.");
        return false;
    }
    return true;
}