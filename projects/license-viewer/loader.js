async function loadInfo(file) {
    const response = await fetch(file);
    return await response.json();
}

//const val = await loadInfo("file.json");

//console.log(val.account.name);
