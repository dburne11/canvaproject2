document.addEventListener('DOMContentLoaded', function() {
    // Get all links with hash
    const links = document.querySelectorAll('a[href*="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 80px offset for header
                    behavior: 'smooth'
                });
            }
        });
    }
});
