function downloadResume() {
    window.open('path/to/your/resume.pdf', '_blank');
}

document.getElementById('query-form').addEventListener('submit'), function (event) {
    event.preventDefault();
    alert('Your query has been submitted!');
}