// Handle contact form submission
document.addEventListener('DOMContentLoaded', () => {
    document.title = INFO.main.title + " | Contact";
    loadSocialLinks(INFO.socials);
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the form data to a server
            // console.log('Form submitted:', formData);
        
            // Reset form
            contactForm.reset();
            
            // Show success message (you can enhance this)
            alert('Integrated barta chat app on successful form submission.');
        });
    }
});