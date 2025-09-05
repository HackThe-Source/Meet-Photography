// Smooth Scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Lightbox for gallery
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        const lightImg = document.createElement('img');
        lightImg.src = img.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(lightImg);
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Testimonials auto-rotate
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial() {
    testimonials.forEach((t, i) => {
        t.style.display = (i === testimonialIndex) ? 'block' : 'none';
    });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

showTestimonial();
setInterval(showTestimonial, 4000); // change every 4 seconds

// Form submit success message with Formspree
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".footer form");
    const button = form.querySelector("button");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // prevent default submit

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                button.innerText = "Message Sent Successfully ✅";
                button.style.background = "#4CAF50";
                button.disabled = true;
                form.reset();
            } else {
                button.innerText = "Error ❌ Try Again";
                button.style.background = "#E74C3C";
            }
        } catch (error) {
            button.innerText = "Network Error ❌";
            button.style.background = "#E74C3C";
        }
    });
});
