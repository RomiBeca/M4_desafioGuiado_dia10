
const resultadosApi = document.getElementById('results')
const userApi = (async () => {
    const apiUsers = await fetch('https://randomuser.me/api/?results=10')
    const { results } = await apiUsers.json()
    try {
        results.forEach((user) => {
            resultadosApi.innerHTML +=/*html*/ `
        <img src="${user.picture.medium}" alt="">
        <p>${user.name.first}</p>
        <p>${user.name.last}</p>
        <p>${user.email}</p>
        <p>${user.phone}</p>
        `
        })
    } catch (error) {
        console.log(error)
    }
})()
