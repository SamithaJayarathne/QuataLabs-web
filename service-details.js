(() => {
    'use strict';

    const services = [
        {
            label: 'CUSTOM SOFTWARE DEVELOPMENT',
            title: 'Software built around your business.',
            image: 'assets/services/custom-software.jpg',
            imageAlt: 'Abstract visualization representing software built for business needs',
            intro: 'Every business has unique challenges. We develop custom software solutions designed around your specific requirements, workflows, and long-term goals—helping you work more efficiently and turn complex processes into simple, manageable systems.',
            sections: [
                { title: 'Software that works the way you do', paragraphs: ["Off-the-shelf software doesn't always fit the way your business operates. Custom software gives you the flexibility to build exactly what you need, without unnecessary features or limitations.", 'At Quata Labs, we work with you to understand your business processes, identify opportunities for improvement, and develop reliable software that supports your day-to-day operations and future growth.'] },
                { title: 'What We Offer', bullets: [['Tailored Business Applications', 'Software designed around your operational requirements and business workflows.'], ['Enterprise Software Solutions', 'Scalable applications for managing complex business operations and organisational processes.'], ['Workflow Automation', 'Reduce repetitive manual tasks and improve operational efficiency.'], ['Data Management Systems', 'Organise, process, and access business information more effectively.'], ['Legacy System Modernisation', 'Improve existing software and transition outdated systems to modern technologies.'], ['Software Enhancements', 'Extend existing applications with new features as your business evolves.']] },
                { title: 'Our Development Approach', steps: [['Discovery & Requirements', 'Understand your objectives, challenges, users, and functional requirements.'], ['Planning & Design', 'Define the system architecture, functionality, and user experience.'], ['Development', 'Build the solution using suitable technologies and established development practices.'], ['Testing & Quality Assurance', 'Validate functionality, reliability, and expected behaviour.'], ['Deployment & Support', 'Help deliver the solution and provide ongoing improvements where required.']] },
                { title: 'Why Custom Software?', bullets: [['Designed specifically for your business.', ''], ['Greater control over functionality and future enhancements.', ''], ['Improved productivity through streamlined workflows.', ''], ['Better integration with your existing systems.', ''], ['A solution that can evolve alongside your organisation.', '']] },
                { title: "Let's Build Your Solution", paragraphs: ["Have a business challenge that existing software cannot solve? Let's discuss your requirements and explore a solution designed around your needs."] }
            ],
            cta: 'Discuss Your Project', projectType: 'Custom software / full-stack system',
            projectDetails: 'I would like to discuss a custom software solution designed around my business requirements and workflows.'
        },
        {
            label: 'WEB DEVELOPMENT',
            title: 'Digital experiences designed to perform.',
            image: 'assets/services/web-development.jpg',
            imageAlt: 'Web interface design shown across connected digital screens',
            intro: "Your website is more than an online presence. It's an opportunity to communicate your value, connect with your audience, and create meaningful business opportunities.",
            introExtra: 'Quata Labs designs and develops modern websites and web applications that combine thoughtful design, reliable functionality, responsive layouts, and performance-focused development.',
            sections: [
                { title: 'Websites that work for your goals', paragraphs: ['Whether you need a professional company website, an online store, or a custom web-based platform, we develop digital experiences tailored to your objectives and your audience.', 'We focus on creating websites that are easy to navigate, accessible across devices, and structured to support your business as it grows.'] },
                { title: 'What We Offer', bullets: [['Corporate Websites', 'Professional websites that communicate your brand, services, and business value.'], ['Web Applications', 'Interactive browser-based applications for business operations and customer services.'], ['E-commerce Development', 'Online shopping experiences with product catalogues, carts, and payment integrations.'], ['Customer Portals', 'Dedicated online spaces for customers to access information and manage their activities.'], ['Landing Pages', 'Focused pages designed to communicate an offer and encourage visitors to take action.'], ['Website Modernisation', 'Redesign and improve existing websites with modern layouts and technology.'], ['Third-Party Integrations', 'Connect websites with external APIs, payment providers, and other business services.']] },
                { title: 'Our Development Approach', steps: [['Understand', 'Identify your audience, business objectives, and website requirements.'], ['Design', 'Plan the structure, navigation, responsive layouts, and visual experience.'], ['Develop', 'Implement the website with maintainable code and suitable technologies.'], ['Test', 'Check responsiveness, functionality, compatibility, and performance.'], ['Launch', 'Prepare the website for deployment and provide support as agreed.']] },
                { title: 'Why Choose Our Web Solutions?', bullets: [['Responsive experiences across desktop, tablet, and mobile devices.', ''], ['Clear navigation and user-focused design.', ''], ['Maintainable development and scalable architecture.', ''], ['Integration with essential business tools.', ''], ['Performance, accessibility, and search-engine-friendly foundations.', '']] },
                { title: 'Give Your Business a Stronger Online Presence', paragraphs: ["Let's create a website or web application that represents your business professionally and supports your next stage of growth."] }
            ],
            cta: 'Discuss Your Website', projectType: 'Website or web platform',
            projectDetails: 'I would like to discuss a website or web application for my business.'
        },
        {
            label: 'MOBILE APP DEVELOPMENT',
            title: 'Powerful ideas, built for mobile.',
            image: 'assets/services/mobile-app.png',
            imageAlt: 'Mobile application interface displayed on a smartphone',
            intro: 'Your customers expect convenient, intuitive digital experiences wherever they are. We transform ideas into mobile applications that make services more accessible, simplify everyday activities, and connect people with your business.',
            introExtra: 'Quata Labs develops mobile solutions with a focus on usability, functionality, reliability, and the needs of your target audience.',
            sections: [
                { title: 'Mobile applications with purpose', paragraphs: ['From customer-facing applications to internal business tools, we help you identify the right features and create a mobile experience that serves a clear purpose.', 'We consider the entire application journey, from user onboarding and navigation to data handling, integrations, and ongoing improvements.'] },
                { title: 'What We Offer', bullets: [['Android Applications', 'Native Android applications designed for Android devices and their capabilities.'], ['iOS Applications', "Mobile experiences tailored to Apple's mobile platform."], ['Cross-Platform Applications', 'Applications developed using suitable cross-platform technologies to support multiple platforms.'], ['Business Applications', 'Mobile tools for employees, field teams, service providers, and operational workflows.'], ['Customer Applications', 'Apps that help customers access services, manage accounts, and interact with your business.'], ['API & Backend Integration', 'Connect mobile applications to databases, authentication systems, and business services.'], ['Application Maintenance', 'Updates, bug fixes, compatibility improvements, and new features.']] },
                { title: 'Our Development Approach', steps: [['Product Discovery', 'Define the problem, target users, core features, and platform requirements.'], ['Experience Design', 'Plan navigation, screen layouts, and user interactions.'], ['Application Development', 'Implement the application using appropriate mobile technologies.'], ['Testing', 'Validate functionality, usability, compatibility, and reliability.'], ['Release & Improvement', 'Prepare the application for distribution and support future enhancements.']] },
                { title: 'What Makes a Good Mobile App?', bullets: [['Simple and intuitive navigation.', ''], ['Consistent user experience across supported devices.', ''], ['Secure handling of user information.', ''], ['Reliable communication with backend services.', ''], ['A flexible foundation for future features.', '']] },
                { title: 'Turn Your App Idea Into Reality', paragraphs: ["Whether you're launching a new digital product or improving an existing service, let's explore how a mobile application can help you achieve your goals."] }
            ],
            cta: 'Build Your Mobile App', projectType: 'Mobile application',
            projectDetails: 'I would like to discuss building or improving a mobile application.'
        },
        {
            label: 'BUSINESS MANAGEMENT SYSTEMS',
            title: 'Bring your business operations together.',
            image: 'assets/services/business-management.jpg',
            imageAlt: 'Business analytics and management information on a digital dashboard',
            intro: 'Managing customers, inventory, bookings, employees, and payments across disconnected tools can make everyday operations unnecessarily complicated.',
            introExtra: 'Quata Labs develops integrated business management systems that bring essential processes together, improve visibility, and help businesses manage their operations with greater confidence.',
            sections: [
                { title: 'One organised system for your operations', paragraphs: ['Every business has its own operational requirements. We analyse your workflows and build a management solution that fits the way your organisation works.', 'From small business applications to more comprehensive management platforms, our goal is to reduce manual work, improve access to information, and support informed decision-making.'] },
                { title: 'What We Offer', bullets: [['Inventory Management', 'Track products, stock levels, movements, and inventory records.'], ['Customer Relationship Management', 'Organise customer information, interactions, and service records.'], ['Booking & Appointment Management', 'Manage reservations, schedules, availability, and bookings.'], ['Employee Management', 'Maintain employee records, responsibilities, and operational information.'], ['Membership & Subscription Management', 'Manage memberships, renewals, payment status, and expiry information.'], ['Billing & Payment Management', 'Organise transactions, payment records, invoices, and outstanding balances.'], ['Reporting & Analytics', 'Generate useful summaries and reports to understand business performance.'], ['Role-Based Access', 'Assign system permissions based on user roles and responsibilities.']] },
                { title: 'Our Implementation Approach', steps: [['Business Analysis', 'Understand how your business operates and identify operational challenges.'], ['Process Mapping', 'Define workflows, user roles, and the relationships between business functions.'], ['System Design', 'Plan the database, application structure, interfaces, and reporting requirements.'], ['Development & Integration', 'Build the required modules and connect related processes.'], ['Testing & Deployment', 'Validate business workflows and prepare the system for practical use.']] },
                { title: 'Business Benefits', bullets: [['Less reliance on disconnected spreadsheets and manual records.', ''], ['Improved visibility into everyday operations.', ''], ['More organised and accessible business information.', ''], ['Better coordination between teams and departments.', ''], ['Reporting that supports informed business decisions.', ''], ['A flexible system that can expand with your requirements.', '']] },
                { title: 'Make Business Management Simpler', paragraphs: ["Let's identify the processes that consume the most time in your business and build a system that helps you manage them more effectively."] }
            ],
            cta: 'Discuss Your Management System', projectType: 'Custom software / full-stack system',
            projectDetails: 'I would like to discuss a business management system for my operations.'
        },
        {
            label: 'AI INTEGRATION & BUSINESS INTELLIGENCE',
            title: 'Turn business data into useful insights.',
            image: 'assets/services/ai-integration.png',
            imageAlt: 'Artificial intelligence and data analytics visualisation',
            intro: 'Your business generates valuable information every day. With the right tools, that information can help you understand performance, identify patterns, and make better decisions.',
            introExtra: 'Quata Labs helps businesses integrate artificial intelligence into their applications and transform operational data into meaningful insights through business intelligence and analytics solutions.',
            sections: [
                { title: 'Make your applications more intelligent', paragraphs: ['AI can help simplify information-heavy tasks, improve access to business knowledge, and support decision-making. Business intelligence can help you understand what is happening across your operations through structured data analysis and reporting.', 'We focus on practical applications of AI and analytics that address real business requirements rather than adding technology without a clear purpose.'] },
                { title: 'What We Offer', bullets: [['AI-Powered Applications', 'Integrate AI capabilities into existing applications or develop new AI-enabled solutions.'], ['Large Language Model Integration', 'Connect suitable LLMs to applications for conversational interfaces, text processing, summarisation, and information retrieval.'], ['Business Data Analysis', 'Analyse structured business data to identify patterns, trends, and operational insights.'], ['Intelligent Reporting', 'Develop reporting solutions that help users explore business performance and key metrics.'], ['Database Intelligence', 'Build controlled workflows that help users retrieve and interpret information from business databases.'], ['Workflow Automation', 'Apply AI to suitable repetitive tasks, document processing, and information-handling workflows.'], ['Knowledge Assistants', 'Create AI assistants that help users find information from approved business documents and knowledge sources.'], ['AI System Integration', 'Connect AI capabilities with existing applications, APIs, and business workflows.']] },
                { title: 'Our AI Implementation Approach', steps: [['Identify the Opportunity', 'Define the business problem and determine where AI or analytics can provide genuine value.'], ['Assess the Data', 'Review available data sources, quality, access requirements, and privacy considerations.'], ['Select the Approach', 'Evaluate suitable models, tools, architectures, and integration methods.'], ['Develop & Integrate', 'Build the solution and connect it to relevant business systems.'], ['Evaluate & Improve', 'Test accuracy, usefulness, security, and performance against defined requirements.']] },
                { title: 'Designed for Practical Business Value', bullets: [['Better access to business information.', ''], ['Reduced manual effort for suitable workflows.', ''], ['Clearer visibility into operational trends.', ''], ['Integration with existing business applications.', ''], ['Controlled access to sensitive information.', ''], ['Solutions evaluated for reliability and responsible use.', '']], note: 'AI-generated results can require human verification, particularly when they affect important business decisions. We design solutions with appropriate validation, access controls, and safeguards.' },
                { title: 'Discover What AI Can Do for Your Business', paragraphs: ["Let's explore how AI integration and business intelligence can help your organisation work with information more effectively."] }
            ],
            cta: 'Explore AI Solutions', projectType: 'AI integration or automation',
            projectDetails: 'I would like to explore AI integration or business intelligence for my organisation.'
        },
        {
            label: 'API DEVELOPMENT & INTEGRATION',
            title: 'Connect your systems. Extend your capabilities.',
            image: 'assets/services/api-developments.webp',
            imageAlt: 'Connected software systems and application programming interfaces',
            intro: 'Modern applications rarely work in isolation. They exchange information with databases, payment providers, third-party platforms, and other business systems.',
            introExtra: 'Quata Labs develops APIs and integration solutions that enable applications to communicate reliably, exchange information, and work together as part of a connected digital ecosystem.',
            sections: [
                { title: 'Build a connected technology ecosystem', paragraphs: ["Whether you're developing a new application or extending an existing platform, we help define the interfaces and integrations required to support your business processes.", 'Our approach prioritises clear API contracts, appropriate security controls, maintainable implementation, and reliable communication between systems.'] },
                { title: 'What We Offer', bullets: [['REST API Development', 'Build structured interfaces that allow applications to exchange data and access services.'], ['Backend API Engineering', 'Develop business logic, validation, authentication, and data access behind application interfaces.'], ['Third-Party API Integration', 'Connect your applications with suitable external platforms and service providers.'], ['Payment Gateway Integration', 'Integrate supported payment services into websites and applications.'], ['Authentication & Authorisation', 'Implement appropriate identity verification and access permissions for protected resources.'], ['Database Integration', 'Connect application services to databases with appropriate data access and validation practices.'], ['System-to-System Integration', 'Enable communication between existing business applications and external services.'], ['API Documentation & Testing', 'Document endpoints, expected requests and responses, and integration behaviour.']] },
                { title: 'Our Integration Process', steps: [['Requirements Analysis', 'Identify the systems, data, and workflows that need to communicate.'], ['Interface Design', 'Define endpoints, data structures, error handling, and access requirements.'], ['Development', 'Implement APIs and integration logic using appropriate technologies.'], ['Security & Testing', 'Validate authentication, permissions, input handling, and expected behaviour.'], ['Documentation & Delivery', 'Provide integration documentation and support implementation.']] },
                { title: 'Why API Integration Matters', bullets: [['Reduces duplicated data entry across systems.', ''], ['Enables consistent information exchange.', ''], ['Supports connected web and mobile applications.', ''], ['Makes it easier to extend existing software.', ''], ['Helps create reusable backend capabilities.', ''], ['Provides a foundation for future integrations.', '']] },
                { title: 'Connect Your Digital Systems', paragraphs: ["Let's discuss your integration requirements and build reliable connections between the applications and services your business depends on."] }
            ],
            cta: 'Discuss API Integration', projectType: 'Backend, API or database',
            projectDetails: 'I would like to discuss API development or integration between my systems.'
        },
        {
            label: 'IT CONSULTING & SYSTEM ANALYSIS',
            title: 'Make better technology decisions.',
            image: 'assets/services/it-consulting.webp',
            imageAlt: 'Technology planning and system analysis workspace',
            intro: 'Choosing the right technology begins with understanding the problem. Without clear requirements and a well-defined plan, software projects can become unnecessarily complex, costly, or difficult to maintain.',
            introExtra: 'Quata Labs helps businesses analyse their requirements, evaluate technical options, and plan digital solutions that align with their operational needs and long-term objectives.',
            sections: [
                { title: 'Clarity before development', paragraphs: ["Whether you're planning a new application, improving an existing system, or looking to modernise business processes, we help translate ideas and challenges into structured technical requirements.", 'Our focus is on identifying the right approach for your situation, making informed technology decisions, and establishing a practical foundation for implementation.'] },
                { title: 'What We Offer', bullets: [['Business Requirements Analysis', 'Identify stakeholder needs, business objectives, functional requirements, and constraints.'], ['System Analysis', 'Examine existing workflows, application behaviour, data flows, and operational challenges.'], ['Technical Feasibility Assessment', 'Evaluate potential approaches, technical limitations, dependencies, and implementation considerations.'], ['Software Architecture Planning', 'Define application components, system boundaries, integrations, and architectural requirements.'], ['Technology Selection', 'Assess suitable frameworks, platforms, databases, and tools based on project needs.'], ['Database & Data Flow Planning', 'Analyse data requirements, relationships, information flows, and storage considerations.'], ['Process Improvement', 'Identify opportunities to simplify workflows and reduce unnecessary manual tasks.'], ['Modernisation Planning', 'Develop a structured approach for improving or replacing outdated systems.']] },
                { title: 'Our Consulting Approach', steps: [['Understand the Business', 'Discuss your objectives, current systems, users, and challenges.'], ['Analyse Requirements', 'Document functional needs, technical constraints, and system dependencies.'], ['Evaluate Options', 'Compare feasible solutions based on complexity, maintainability, scalability, and cost considerations.'], ['Define Recommendations', 'Present a practical technical direction and proposed implementation approach.'], ['Plan the Next Steps', 'Establish priorities, key deliverables, and a roadmap for development or improvement.']] },
                { title: 'The Value of Proper System Analysis', bullets: [['Clearer project scope and expectations.', ''], ['Better alignment between business needs and technical decisions.', ''], ['Early identification of risks and dependencies.', ''], ['Reduced uncertainty before development begins.', ''], ['A more maintainable foundation for future development.', ''], ['More informed decisions about technology investments.', '']] },
                { title: 'Start With a Clear Plan', paragraphs: ["Have an idea but aren't sure how to approach it? Let's discuss your requirements and identify a practical path forward."] }
            ],
            cta: 'Book a Consultation', projectType: 'Not sure yet — help me decide',
            projectDetails: 'I would like to book a consultation to analyse my requirements and plan a technical approach.'
        },
        {
            label: 'SOFTWARE MAINTENANCE & SUPPORT',
            title: 'Keep your software reliable as you grow.',
            image: 'assets/services/Maintenance-Software.webp',
            imageAlt: 'Software maintenance and system support dashboard',
            intro: 'Software needs ongoing attention to remain useful, reliable, and compatible with changing business requirements. Regular maintenance helps address issues, improve performance, and keep applications aligned with the needs of their users.',
            introExtra: 'Quata Labs provides software maintenance and improvement services to help businesses maintain their digital systems and extend the value of their existing software investments.',
            sections: [
                { title: 'Support beyond the initial launch', paragraphs: ['Whether your application needs bug fixes, performance improvements, compatibility updates, or additional features, we help you identify the changes that matter and implement them in a structured way.', 'Our approach focuses on understanding the existing system, assessing the impact of proposed changes, and preserving essential functionality while improving the software.'] },
                { title: 'What We Offer', bullets: [['Bug Fixes & Issue Resolution', 'Investigate reported problems and implement appropriate corrections.'], ['Performance Optimisation', 'Identify bottlenecks and improve application responsiveness where possible.'], ['Feature Enhancements', 'Extend existing applications with new functionality based on evolving requirements.'], ['Compatibility Updates', 'Address changes in supported platforms, dependencies, and external services.'], ['Security Improvements', 'Review and address identified software security weaknesses.'], ['Database Maintenance', 'Improve queries, review data integrity, and address database performance issues.'], ['Code Refactoring', 'Improve code structure and maintainability while preserving intended behaviour.'], ['Technical Documentation', 'Document relevant system components, configurations, and maintenance procedures.']] },
                { title: 'Our Maintenance Process', steps: [['System Assessment', 'Review the application, its architecture, known issues, and available documentation.'], ['Prioritisation', 'Identify problems, risks, dependencies, and the most important improvements.'], ['Implementation', 'Apply agreed fixes and enhancements with appropriate change controls.'], ['Testing & Verification', 'Check changes and regression-test relevant existing functionality.'], ['Release & Follow-up', 'Deploy approved changes according to the agreed process and monitor outcomes where applicable.']] },
                { title: 'Why Ongoing Maintenance Matters', bullets: [['Helps keep applications dependable and useful.', ''], ['Reduces the impact of known software issues.', ''], ['Supports changing business requirements.', ''], ['Improves maintainability over time.', ''], ['Helps manage technical debt.', ''], ['Extends the practical value of existing systems.', '']], note: "Support arrangements, response times, maintenance schedules, and service coverage can be agreed according to your project's requirements." },
                { title: "Let's Keep Your Software Moving Forward", paragraphs: ["Already have an application that needs attention? Let's review its current state and identify the improvements that will make the biggest difference."] }
            ],
            cta: 'Request Software Support', projectType: 'Improve an existing product',
            projectDetails: 'I would like to discuss maintenance, support, or improvements for existing software.'
        }
    ];

    const dialog = document.querySelector('#service-detail-dialog');
    const image = document.querySelector('#service-detail-image');
    const label = document.querySelector('#service-detail-label');
    const title = document.querySelector('#service-detail-title');
    const body = document.querySelector('#service-detail-body');
    const cta = document.querySelector('#service-detail-cta');
    const requestDialog = document.querySelector('#request-modal');

    if (!dialog || !image || !label || !title || !body || !cta) return;

    const appendText = (tag, text, parent) => {
        const element = document.createElement(tag);
        element.textContent = text;
        parent.appendChild(element);
        return element;
    };

    const renderService = (service) => {
        image.src = service.image;
        image.alt = service.imageAlt;
        label.textContent = service.label;
        title.textContent = service.title;
        body.replaceChildren();

        const intro = appendText('p', service.intro, body);
        intro.className = 'service-detail-intro';
        if (service.introExtra) appendText('p', service.introExtra, body);

        service.sections.forEach(section => {
            const sectionElement = document.createElement('section');
            appendText('h3', section.title, sectionElement);
            section.paragraphs?.forEach(paragraph => appendText('p', paragraph, sectionElement));
            const entries = section.bullets || section.steps;
            if (entries) {
                const list = document.createElement(section.steps ? 'ol' : 'ul');
                entries.forEach(([term, description]) => {
                    const item = document.createElement('li');
                    if (description) {
                        appendText('strong', term, item);
                        item.appendChild(document.createTextNode(` — ${description}`));
                    } else {
                        item.textContent = term;
                    }
                    list.appendChild(item);
                });
                sectionElement.appendChild(list);
            }
            if (section.note) {
                const note = appendText('p', section.note, sectionElement);
                note.className = 'service-detail-note';
            }
            body.appendChild(sectionElement);
        });

        cta.textContent = service.cta;
        cta.dataset.projectType = service.projectType;
        cta.dataset.projectDetails = service.projectDetails;
    };

    document.querySelectorAll('[data-service-detail]').forEach(button => {
        button.addEventListener('click', () => {
            const service = services[Number(button.dataset.serviceDetail)];
            if (!service) return;
            renderService(service);
            dialog.showModal();
        });
    });

    const closeDialog = () => dialog.close();
    dialog.querySelectorAll('[data-service-detail-close], .service-detail-close').forEach(button => {
        button.addEventListener('click', closeDialog);
    });
    dialog.addEventListener('click', event => {
        if (event.target === dialog) closeDialog();
    });

    cta.addEventListener('click', () => {
        const projectType = document.querySelector('[name="project_type"]');
        const projectDetails = document.querySelector('[name="project_details"]');
        if (projectType) projectType.value = cta.dataset.projectType;
        if (projectDetails) projectDetails.value = cta.dataset.projectDetails;
        dialog.close();
        requestDialog?.showModal();
    });
})();
