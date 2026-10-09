const profileInformation = (profileData) => {
    if (!profileData) return;

    // Foto de perfil
    const photo = document.getElementById('profile-photo');
    if (photo && profileData.photo) {
        photo.src = profileData.photo;
    }

    // Nome
    const name = document.getElementById('profile-name');
    if (name && profileData.name) {
        name.innerHTML = profileData.name.trim();
    }

    // Cargo / Job
    const job = document.getElementById('profile-job');
    if (job && profileData.job) {
        job.innerHTML = profileData.job;
    }

    // Localização
    const location = document.getElementById('profile-location');
    if (location && profileData.location) {
        location.innerHTML = profileData.location;
    }

    // Telefone / WhatsApp
    const phone = document.getElementById('profile-phone');
    if (phone && profileData.phone) {
        phone.href = profileData.phone.replace('www.', '');
    }

    // E-mail
    const email = document.getElementById('profile-email');
    if (email && profileData.email) {
        const emailHref = typeof profileData.email === 'object' ? profileData.email.href : `mailto:${profileData.email}`;
        email.href = emailHref;
    }

    // GitHub
    const github = document.getElementById('profile-github');
    if (github && (profileData.github || profileData.git)) {
        github.href = profileData.github || profileData.git;
    }

    // LinkedIn
    const linkedin = document.getElementById('profile-linkedin');
    if (linkedin && profileData.linkedin) {
        linkedin.href = profileData.linkedin;
    }

    // Link do Currículo
    const curriculo = document.getElementById('download');
    if (curriculo && profileData.linkcur) {
        curriculo.href = profileData.linkcur;
    }
};

const profileSkills = (profileData) => {
    if (!profileData || !profileData.skills) return;

    // Hard Skills (Stack Tecnológica)
    const hardContainer = document.getElementById('profile-Hard');
    if (hardContainer && profileData.skills.hardSkills) {
        hardContainer.innerHTML = profileData.skills.hardSkills.map(skill => {
            const skillName = typeof skill === 'object' ? skill.name : skill;
            const skillLogo = typeof skill === 'object' ? skill.logo : '';
            return `
            <span class="skill-pill">
                ${skillLogo ? `<img src="${skillLogo}" alt="${skillName}" class="skill-icon" />` : ''}
                ${skillName}
            </span>
            `;
        }).join('');
    }
};

const profileLanguages = (profileData) => {
    if (!profileData || !profileData.languages) return;
    const container = document.getElementById('profile-Language');
    if (!container) return;

    container.innerHTML = profileData.languages.map(lang => {
        let label = typeof lang === 'object' ? lang.name : lang;
        let percent = 45;

        const langLower = label.toLowerCase();
        if (/portugu[eê]s/i.test(langLower) || /nativo/i.test(langLower)) {
            percent = 100;
            label = 'Português (Nativo)';
        } else if (/alem[aã]o/i.test(langLower) || /b[aá]sico/i.test(langLower)) {
            percent = 45;
            label = 'Alemão (Básico)';
        } else if (/ingl[eê]s/i.test(langLower) || /estudo/i.test(langLower)) {
            percent = 20;
            label = 'Inglês (Em estudo)';
        }

        if (typeof lang === 'object' && lang.percent) {
            percent = lang.percent;
        }

        return `
        <div class="language-item">
            <span class="language-name">${label}</span>
            <div class="language-bar-track">
                <div class="language-bar-fill" style="width: ${percent}%;"></div>
            </div>
        </div>
        `;
    }).join('');
};

const profileProjects = (profileData) => {
    if (!profileData || !profileData.portfolio) return;
    const container = document.getElementById('profile-Projects');
    if (!container) return;

    const portfolioList = [...profileData.portfolio];
    const hasPlacar = portfolioList.some(p => (p.name || '').toLowerCase().includes('placar') || (p.url || '').includes('placar-futsal-desktop'));
    if (!hasPlacar) {
        portfolioList.push({
            name: "Placar Municipal de Arabutã (Python)",
            url: "https://github.com/sidemarschimmelpfennig/placar-futsal-desktop",
            github: true,
            description: "Placar Futsal Desktop desenvolvido em Python com PyQt5, arquitetura Dual Monitor e VLC.",
            image: "./assets/img/placar.png",
            tech: [
                { name: "Python", logo: "./data/img/python.svg" },
                { name: "PyQt5", logo: "./data/img/python.svg" }
            ]
        });
    }

    container.innerHTML = portfolioList.map(project => {
        const nameLower = (project.name || '').toLowerCase();
        let desc = project.description;
        if (!desc) {
            if (nameLower.includes('delphi')) {
                desc = 'Desenvolvido em Delphi e Banco de Dados MySQL.';
            } else if (nameLower.includes('marketplatz')) {
                desc = 'Marketplace e PDV municipal para produtores e artesãos de Arabutã. Atuação no front-end em Vue 3, backend em CodeIgniter 4 e app móvel em React Native.';
            } else if (nameLower.includes('react')) {
                desc = 'Desenvolvido em React com TypeScript.';
            } else if (nameLower.includes('python') || nameLower.includes('placar') || nameLower.includes('arabutã')) {
                desc = 'Placar Futsal Desktop desenvolvido em Python com PyQt5, arquitetura Dual Monitor e VLC.';
            } else {
                desc = 'Projeto completo desenvolvido com boas práticas e código limpo.';
            }
        }

        // Mockup icon selector
        let mockupIcon = './data/img/js.svg';
        if (nameLower.includes('delphi')) mockupIcon = './data/img/delphi.svg';
        else if (nameLower.includes('marketplatz') || nameLower.includes('vue')) mockupIcon = './data/img/vuejs.svg';
        else if (nameLower.includes('react')) mockupIcon = './data/img/react.svg';
        else if (nameLower.includes('python') || nameLower.includes('placar')) mockupIcon = './data/img/python.svg';

        // Tech tags
        let tagsHtml = '';
        if (Array.isArray(project.tech)) {
            tagsHtml = project.tech.map(t => {
                const tName = typeof t === 'object' ? t.name : t;
                const tLogo = typeof t === 'object' ? t.logo : '';
                return `<span class="project-mini-tag">${tLogo ? `<img src="${tLogo}" alt="${tName}" />` : ''} ${tName}</span>`;
            }).join('');
        } else {
            if (nameLower.includes('delphi')) {
                tagsHtml = `<span class="project-mini-tag"><img src="./data/img/delphi.svg" alt="Delphi" /> Delphi</span><span class="project-mini-tag"><img src="./data/img/mysql.svg" alt="MySQL" /> MySQL</span>`;
            } else if (nameLower.includes('marketplatz')) {
                tagsHtml = `<span class="project-mini-tag"><img src="./data/img/vuejs.svg" alt="Vue 3" /> Vue 3</span><span class="project-mini-tag"><img src="./data/img/codeigniter.svg" alt="CodeIgniter 4" /> CodeIgniter 4</span><span class="project-mini-tag"><img src="./data/img/react.svg" alt="React Native" /> React Native</span>`;
            } else if (nameLower.includes('react')) {
                tagsHtml = `<span class="project-mini-tag"><img src="./data/img/react.svg" alt="React" /> React</span><span class="project-mini-tag"><img src="./data/img/typescript.svg" alt="TS" /> TS</span>`;
            } else if (nameLower.includes('python') || nameLower.includes('placar')) {
                tagsHtml = `<span class="project-mini-tag"><img src="./data/img/python.svg" alt="Python" /> Python</span><span class="project-mini-tag"><img src="./data/img/python.svg" alt="PyQt5" /> PyQt5</span>`;
            }
        }

        const projectCoverImg = project.image || 
            (nameLower.includes('marketplatz') ? './assets/img/marketplatz.jpg' : 
            (nameLower.includes('placar') ? './assets/img/placar.png' : null));

        return `
        <div class="project-card">
            <div class="project-mockup">
                <div class="project-mockup-dots">
                    <span class="mockup-dot dot-red"></span>
                    <span class="mockup-dot dot-yellow"></span>
                    <span class="mockup-dot dot-green"></span>
                </div>
                ${projectCoverImg ? `<img src="${projectCoverImg}" alt="${project.name}" class="project-mockup-cover" />` : `<img src="${mockupIcon}" alt="${project.name}" class="project-mockup-icon" />`}
            </div>
            <div class="project-card-body">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-desc">${desc}</p>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
            </div>
            <div class="project-actions">
                <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-action-link" title="Repositório no GitHub">
                    <img src="./assets/img/icons/github.svg" alt="GitHub" />
                </a>
                <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-action-link" title="Abrir Projeto">
                    <img src="./assets/img/icons/link.svg" alt="Link do Projeto" />
                </a>
            </div>
        </div>
        `;
    }).join('');
};

const profileProfessional = (profileData) => {
    if (!profileData || !profileData.professionalExperience) return;
    const container = document.getElementById('profile-Professional');
    if (!container) return;

    container.innerHTML = profileData.professionalExperience.map(exp => {
        let company = exp.name;
        let role = '';

        if (exp.name.includes('/')) {
            const parts = exp.name.split('/');
            role = parts[0].trim();
            company = parts[1].trim();
        }

        return `
        <li class="timeline-item">
            <div class="timeline-dot" aria-hidden="true"></div>
            <div class="timeline-content">
                <h3 class="timeline-company">${company}</h3>
                ${role ? `<span class="timeline-role">${role}</span>` : ''}
                <span class="timeline-period">${exp.period}</span>
                <p class="timeline-desc">${exp.description}</p>
            </div>
        </li>
        `;
    }).join('');
};

(async () => {
    try {
        const fetchProfile = await fetchProfileData();
        if (fetchProfile) {
            profileInformation(fetchProfile);
            profileSkills(fetchProfile);
            profileLanguages(fetchProfile);
            profileProjects(fetchProfile);
            profileProfessional(fetchProfile);
        }
    } catch (error) {
        console.error('Erro na inicialização dos dados do perfil:', error);
    }
})();