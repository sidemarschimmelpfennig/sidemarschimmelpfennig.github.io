
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
}

(async () => {
        const fetchProfile = await fetchProfileData()
        console.log(fetchProfile)
        profileInformation(fetchProfile)

    }
)()