
document.addEventListener('DOMContentLoaded', function() {
    console.log("Website VinFast - Đơn giản và Thân thiện - Đã sẵn sàng!");

    
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add('active');
        }
    }

    
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn chặn load lại trang
            
            
            const name = document.getElementById('name').value;
            const messageSuccess = document.createElement('p');
            messageSuccess.style.color = '#28a745';
            messageSuccess.style.marginTop = '20px';
            messageSuccess.innerText = `Cảm ơn ${name || 'bạn'} đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất!`;

            contactForm.appendChild(messageSuccess);
            
            
            contactForm.reset();
        });
    }

    
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const id = link.getAttribute('href').slice(1);
            const element = document.getElementById(id);
            if(element) {
                const position = element.offsetTop - 80; 
                window.scrollTo({
                    left: 0,
                    top: position,
                    behavior: 'smooth'
                });
            }
        });
    });
});