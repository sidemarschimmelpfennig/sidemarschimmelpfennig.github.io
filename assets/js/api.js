 
async function fetchProfileData() {
    try {
        const urlLocal = './data/profile.json';
        const responseLocal = await fetch(urlLocal);
        if (responseLocal.ok) {
            return await responseLocal.json();
        }
    } catch (e) {
        // Fallback to remote if local fails (e.g., accessed through some specific subpaths)
    }

    try {
        const urlMyGitData = "https://raw.githubusercontent.com/sidemarschimmelpfennig/sidemarschimmelpfennig.github.io/refs/heads/main/data/profile.json";
        const fetching = await fetch(urlMyGitData);
        if (fetching.ok) {
            return await fetching.json();
        }
    } catch (err) {
        console.error("Erro ao carregar dados do perfil:", err);
    }
}

