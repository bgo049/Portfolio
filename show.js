class Show{
    constructor(name, year, genre, description, image){
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.description = description;
        this.image = image;
        this.newReleases = year == new Date().getFullYear();
    }

    static modalOpen = false;

    addToPage(){
        if (document.getElementById(this.genre)){
            document.getElementById(this.genre).append(this.buildShow())
            if(this.newRelease){
                document.getElementById('newReleases').append(this.buildShow())
            }

        }
        else{
            this.createGenre()

        }
    }

    buildShow(){
        let showEl = document.createElement('div');
        showEl.classList.add('genre');
        showEl.style.backgroundImage = 'url('+this.image + ")"
        showEl.onclick = this.makeModal.bind(this)
        return showEl
    }

    createGenre(){
        let genre = document.createElement('div');
        genre.classList.add('genre');
        let title = document.createElement('h2');
        title.innerHTML = this.genre;
        genre.id = this.genre;
        document.getElementById('library').append(title)
        document.getElementById('library').append(genre)
    }

    makeModal(){
        if(!Show.modalOpen){
            Show.modalOpen = true;

            let modal = document.createElement("div");
            modal.classList.add("modal");
            let newh1 = document.createElement("h1")
            newh1.innerHTML = this.name;

            let newImg = document.createElement("img");
            newImg.src = this.image;

            let closeButton = document.createElement("button");
            closeButton.innerHTML = "X";
            closeButton.onclick = this.closeModal;

            modal.append(newh1);
            modal.append(newImg);
            modal.append(closeButton);
            document.body.append(modal);

        }
    }

    closeModal(){
        Show.modalOpen = false;
        document.body.removeChild(document.querySelector('.modal'))    
    }

}

export {Show}