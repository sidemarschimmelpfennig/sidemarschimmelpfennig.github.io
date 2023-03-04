
const profileInformation = (profileData) =>{
    //photo perfil
    const photo =  document.getElementById('profile-photo')
    photo.src   = profileData.photo
    //name
    const name = document.getElementById('profile-name')
    name.innerHTML = profileData.name
    //job
    const job = document.getElementById('profile-job')
    job.innerHTML = profileData.job
    //location
    const location = document.getElementById('profile-location')
    location.innerHTML = profileData.location
    //phone
    const phone = document.getElementById('profile-phone')
    phone.innerHTML = profileData.phone
    //email
    const email = document.getElementById('profile-email')
    email.innerHTML = profileData.email.name
    email.href = profileData.email.href

    const Curriculo = document.getElementById('download')
    Curriculo.href = profileData.linkcur
}
const profileSoftSkills = (profileData) =>{
    const softSkills = document.getElementById('profile-Soft')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

const profileHardSkills = (profiledata) =>{
    const hardskill = document.getElementById('profile-Hard')
    hardskill.innerHTML = profiledata.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title='${skill.name}'></li>`).join('')
}

const profileLenguages = (profileData) => {
    const Lenguage = document.getElementById('profile-Language')
    Lenguage.innerHTML = profileData.languages.map(lenguage => `<li>${lenguage}</li>`).join('')
}

const profileProjects = (profileData) =>{
    const projects = document.getElementById('profile-Projects')  
    projects.innerHTML = profileData.portfolio.map(portfolio =>{
        return`
        <li>
            <span ${portfolio.github ? 'class="title github"' : 'title'}>${portfolio.name}</span>
            <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
        </li>
        
        `
    }).join('')
}

const profileProfessional = (profileData) =>{
    const Professional = document.getElementById('profile-Professional')
    Professional.innerHTML = profileData.professionalExperience.map(professiona => {
        return`
        <li>  
            <h3 class="title">${professiona.name}</h3>
            <span class="period">${professiona.period}</span>
            <p>
                ${professiona.description}
            </p>
        </li>
        `
    }

    ).join('')
}





(async () => {
        const fetchProfile = await fetchProfileData()
        profileInformation(fetchProfile)
        profileHardSkills(fetchProfile)
        profileSoftSkills(fetchProfile)
        profileLenguages(fetchProfile)
        profileProjects(fetchProfile)
        profileProfessional(fetchProfile)
    }
)()