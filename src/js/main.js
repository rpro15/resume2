// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded');
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Populate hero section
    const heroName = document.getElementById('hero-name');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    
    if (heroName && portfolioData.hero) {
        heroName.textContent = portfolioData.hero.name;
        heroTitle.textContent = portfolioData.hero.title;
        heroSubtitle.textContent = portfolioData.hero.subtitle;
    }
    
    // Populate about section
    const aboutDesc = document.getElementById('about-description');
    const aboutHighlights = document.getElementById('about-highlights');
    
    if (aboutDesc && portfolioData.about) {
        aboutDesc.textContent = portfolioData.about.description;
        
        if (aboutHighlights && portfolioData.about.highlights) {
            aboutHighlights.innerHTML = portfolioData.about.highlights
                .map(highlight => `<div class="glass-card p-4">${highlight}</div>`)
                .join('');
        }
    }
    
    // Populate skills section
    const skillsGrid = document.getElementById('skills-grid');
    
    if (skillsGrid && portfolioData.skills) {
        skillsGrid.innerHTML = portfolioData.skills
            .map(skill => `
                <div class="glass-card p-6 text-center">
                    <h3 class="text-xl font-bold mb-2">${skill.name}</h3>
                    <div class="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <div class="bg-gradient-to-r from-pink-500 to-cyan-500 h-2 rounded-full" style="width: ${skill.level ? skill.level * 20 : 60}%"></div>
                    </div>
                    <p class="text-sm text-gray-400">${skill.category}</p>
                </div>
            `)
            .join('');
    }
    
    // Populate toolbox section
    const toolboxGrid = document.getElementById('toolbox-grid');
    
    if (toolboxGrid && portfolioData.toolbox) {
        toolboxGrid.innerHTML = portfolioData.toolbox
            .map(tool => `
                <div class="glass-card p-6 text-center">
                    <div class="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                        <span class="text-2xl">${tool.name ? tool.name.charAt(0) : '●'}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-2">${tool.name || 'Tool'}</h3>
                    <p class="text-sm mb-2">${tool.description || ''}</p>
                    <span class="text-xs bg-teal-900 text-teal-200 px-2 py-1 rounded">${tool.proficiency || 'Beginner'}</span>
                </div>
            `)
            .join('');
    }
    
    // Populate contact section
    const contactInfo = document.getElementById('contact-info');
    
    if (contactInfo && portfolioData.contact) {
        contactInfo.innerHTML = `
            <div class="glass-card p-6 inline-block">
                <p class="text-lg mb-2"><strong>Email:</strong> <a href="mailto:${portfolioData.contact.email}" class="text-neon-teal hover:underline">${portfolioData.contact.email}</a></p>
                <p class="text-lg mb-2"><strong>LinkedIn:</strong> <a href="${portfolioData.contact.linkedin}" target="_blank" class="text-neon-teal hover:underline">View Profile</a></p>
                <p class="text-lg"><strong>GitHub:</strong> <a href="${portfolioData.contact.github}" target="_blank" class="text-neon-teal hover:underline">View Repos</a></p>
            </div>
        `;
    }
    
    // Populate experience section
    const experienceList = document.getElementById('experience-list');
    
    if (experienceList && portfolioData.experience) {
        experienceList.innerHTML = portfolioData.experience
            .map(exp => `
                <div class="glass-card p-6">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold">${exp.position}</h3>
                            <p class="text-neon-teal text-lg">${exp.company}</p>
                        </div>
                        <div class="text-sm text-gray-400 mt-2 md:mt-0">
                            ${exp.startDate} - ${exp.endDate || 'Present'}
                        </div>
                    </div>
                    <p class="text-gray-300 mb-4">${exp.description}</p>
                    ${exp.achievements ? `
                        <div class="space-y-2">
                            <h4 class="font-semibold text-neon-blue">Key Achievements:</h4>
                            <ul class="list-disc list-inside space-y-1 text-sm">
                                ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            `)
            .join('');
    }
    
    // Populate projects section
    const projectsGrid = document.getElementById('projects-grid');
    
    if (projectsGrid && portfolioData.projects) {
        projectsGrid.innerHTML = portfolioData.projects
            .map(project => `
                <div class="glass-card p-6 hover:scale-105 transition-transform">
                    <h3 class="text-xl font-bold mb-2">${project.name}</h3>
                    <p class="text-gray-300 mb-4">${project.description}</p>
                    <div class="mb-4">
                        <h4 class="font-semibold text-neon-green mb-2">Technologies:</h4>
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies.map(tech => `<span class="bg-neon-pink/20 text-neon-pink px-2 py-1 rounded text-sm">${tech}</span>`).join('')}
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        ${project.link ? `<a href="${project.link}" target="_blank" class="text-neon-teal hover:underline">Live Demo</a>` : ''}
                        ${project.github ? `<a href="${project.github}" target="_blank" class="text-neon-blue hover:underline">GitHub</a>` : ''}
                    </div>
                </div>
            `)
            .join('');
    }
    
    // Initialize other sections as they are implemented
});