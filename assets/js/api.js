 
async function fetchProfileData (){
    const urlMyGitData = "https://raw.githubusercontent.com/sidemarschimmelpfennig/sidemarschimmelpfennig.github.io/refs/heads/main/data/profile.json"
    const fetching = await fetch (urlMyGitData) 
    return await fetching.json()
}

