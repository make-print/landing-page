document.addEventListener('DOMContentLoaded', () => {
    
    // --- FAQ Data & Rendering ---
    const faqData = [
        {
            question: `How to use Make-Print?`,
            answer: `After starting the application, you will be greeted onto your dashboard where you can create your new project. Within projects, you can upload and view your 3D models. You can also add your team in the team section and machines in the machine section on the left panel of your dashboard. `,
        },
        {
            question: `What makes Make-Print different from other tools like Trello?`,
            answer: `Make-Print is designed specifically for the needs of 3D printing professionals. Our platform offers a range of specialized tools, such as native 3D files view, inventory management, AI assistance, and Auto Quoting, to streamline your workflow.`,
        },
        {
            question: 'Is it true I can request features that I want to see on Make-Print?',
            answer: `Yes! you can have a direct impact on how we build the platform by requesting features that you want. We are always looking to improve our platform for you and your feedback is invaluable to us. To do so, join our Discord community (<a href="https://discord.gg/frr8qHsu6M" target="_blank" rel="noopener noreferrer" class="text-primary-main underline">https://discord.gg/frr8qHsu6M</a>) and share your thoughts with us.`,
        },
        {
            question: 'How can I request support from the Make-Print team?',
            answer: `For any support requests, you can reach out to us directly via <a href="mailto:make-print@make-print.com" class="text-primary-main underline">make-print@make-print.com</a>. Our dedicated support team is always ready to assist you with any queries or issues you might encounter.`,
        }
    ];

    const faqContainer = document.getElementById('faq-container');
    
    faqData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 bg-gray-50 hover:bg-white hover:shadow-md';
        div.innerHTML = `
            <button class="faq-toggle w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" aria-expanded="false">
                <span class="font-medium text-gray-900 text-lg">${item.question}</span>
                <iconify-icon icon="carbon:add" class="text-gray-500 transition-transform duration-200 transform" width="24"></iconify-icon>
            </button>
            <div class="faq-content hidden px-6 pb-4 text-gray-600 leading-relaxed">
                ${item.answer}
            </div>
        `;
        faqContainer.appendChild(div);
    });

    // FAQ Accordion Logic
    const toggles = document.querySelectorAll('.faq-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('iconify-icon');
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            // Close all others (optional, keeping consistent with some accordions)
            document.querySelectorAll('.faq-toggle').forEach(t => {
                if (t !== toggle) {
                    t.setAttribute('aria-expanded', 'false');
                    t.nextElementSibling.classList.add('hidden');
                    t.querySelector('iconify-icon').setAttribute('icon', 'carbon:add');
                }
            });

            // Toggle current
            if (isExpanded) {
                toggle.setAttribute('aria-expanded', 'false');
                content.classList.add('hidden');
                icon.setAttribute('icon', 'carbon:add');
            } else {
                toggle.setAttribute('aria-expanded', 'true');
                content.classList.remove('hidden');
                icon.setAttribute('icon', 'carbon:subtract');
            }
        });
    });


    // --- Header Scroll Effect ---
    const header = document.getElementById('main-header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
            header.classList.remove('bg-transparent', 'py-4');
            header.classList.add('py-2');
        } else {
            if (mobileMenu.classList.contains('hidden')) { // Only transparent if menu is closed
                header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-2');
                header.classList.add('bg-transparent', 'py-4');
            }
        }
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (!mobileMenu.classList.contains('hidden')) {
            header.classList.add('bg-white', 'shadow-sm');
            header.classList.remove('bg-transparent');
        } else if (window.scrollY <= 50) {
            header.classList.remove('bg-white', 'shadow-sm');
            header.classList.add('bg-transparent');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });



});

