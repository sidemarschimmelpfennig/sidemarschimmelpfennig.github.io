 
async function fetchProfileData (){
    const urlMyGitData = "https://raw.githubusercontent.com/sidemarschimmelpfennig/sidemarschimmelpfennig.github.io/dio/data/profile.json"
    const fetching = await fetch (urlMyGitData) 
    return await fetching.json()
}

