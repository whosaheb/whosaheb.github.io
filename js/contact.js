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
            
            // Show success message (in-page feedback avoiding iframe alert issues)
            let alertBox = document.getElementById('form-feedback');
            if (!alertBox) {
                alertBox = document.createElement('div');
                alertBox.id = 'form-feedback';
                alertBox.style.padding = '12px 16px';
                alertBox.style.marginBottom = '20px';
                alertBox.style.borderRadius = '8px';
                alertBox.style.backgroundColor = '#ecfdf5';
                alertBox.style.color = '#065f46';
                alertBox.style.border = '1px solid #a7f3d0';
                alertBox.style.fontSize = '15px';
                contactForm.parentNode.insertBefore(alertBox, contactForm);
            }
            alertBox.textContent = 'Thank you! Your message has been received.';
        });
    }
});