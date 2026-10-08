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
        const cleanName = profileData.name.trim();
        if (/schimmelpfennig/i.test(cleanName)) {
            name.innerHTML = 'Sidemar Schimmelpfennig<br />Junior';
        } else {
            name.innerHTML = cleanName;
        }
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
        phone.innerHTML = 'WhatsApp';
        phone.href = profileData.phone.replace('www.', '');
    }

    // E-mail
    const email = document.getElementById('profile-email');
    if (email && profileData.email) {
        const emailAddress = typeof profileData.email === 'object' ? profileData.email.name : profileData.email;
        const emailHref = typeof profileData.email === 'object' ? profileData.email.href : `mailto:${profileData.email}`;
        email.innerHTML = emailAddress;
        email.href = emailHref;
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
        const isNative = /portugu[eê]s/i.test(lang);
        const percent = isNative ? 100 : 45;
        const label = isNative ? 'Português (Nativo)' : lang;

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

    container.innerHTML = profileData.portfolio.map(project => {
        let desc = 'Projeto completo desenvolvido com boas práticas e código limpo.';
        if (project.name.toLowerCase().includes('delphi')) {
            desc = 'Desenvolvido em Delphi e Banco de Dados MySQL.';
        } else if (project.name.toLowerCase().includes('react')) {
            desc = 'Desenvolvido em React com TypeScript.';
        }

        return `
        <div class="project-card">
            <div>
                <h3 class="project-title">${project.name}</h3>
                <p class="project-desc">${desc}</p>
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