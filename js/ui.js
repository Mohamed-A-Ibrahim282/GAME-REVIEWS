class Ui {

    displayGames(list) {

        var cartona = ``
        for (let i = 0; i < list.length; i++) {
            let shortDescription = list[i].short_description.split(" ")
            let newShortDescription = shortDescription.splice(0, 8).join(" ")

            cartona += `<div class="col-lg-3 col-md-6">
            <div class="card mainBg border border-2 border-dark">
                <div class="p-3">
                    <img src="${list[i].thumbnail}" class="card-img-top">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title text-white">${list[i].title}</h5>
                            <div class="bg-primary px-2 rounded-3 text-white">Free</div>
                        </div>
                        <p class="card-text text-secondary">${newShortDescription}</p>
                        <span id="gameId" class="d-none">${list[i].id}</span>
                    </div>
                </div>

                <div
                    class="d-flex justify-content-between align-items-center border-top border-top-2 border-dark py-2 px-3">
                    <h6 class="bg-dark p-1 rounded-3 m-0 text-white">${list[i].genre}</h6>
                    <h6 class="bg-dark p-1 rounded-3 m-0 text-white">${list[i].platform}</h6>
                </div>
            </div>
        </div>`
        }
        document.querySelector(".allGames .row").innerHTML = cartona;
    }

    displayDetails(item) {

        document.querySelector(".gameDetails .row").innerHTML = `<div class="col-md-4">
        <div>
            <img src="${item.thumbnail}" class="w-100 rounded-3">
        </div>
    </div>
    <div class="col-md-8">
        <div class="text-white">
            <h2 class="mb-4">Title: ${item.title}</h2>
            <h5 class="mb-4">Category: <span class="bg-info px-2 py-1 rounded-3 text-black fw-bold">${item.genre}</span></h5>
            <h5 class="mb-4">Platform: <span class="bg-info px-2 py-1 rounded-3 text-black fw-bold">${item.platform}</span></h5>
            <h5 class="mb-4">Status: <span class="bg-info px-2 py-1 rounded-3 text-black fw-bold">${item.status}</span></h5>
            <p class="mb-4">${item.description}</p>
            <a class="btn btn-outline-warning text-white fw-semibold">Show Game</a>
        </div>
    </div>`

    }
}


export {
    Ui
}