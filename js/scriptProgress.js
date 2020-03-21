const progress = document.querySelector('.progress-bar')
const progressCats = document.querySelector('.progressBarCats');
const progressParrots = document.querySelector('.progressBarParrots');
const progressDogs = document.querySelector('.progressBarDogs');
const progressTotal = document.querySelector('.progressBarTotal');

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('http://localhost:8080/sse/vote/stats')

const ES = new EventSource(url, header)

ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}

ES.onmessage = ({ data }) => {
        const obj = JSON.parse(data)
        const total = obj.cats + obj.dogs + obj.parrots;
        
        progressCats.style.width = obj.cats / total * 100 + '%'
        progressDogs.style.width = obj.dogs / total * 100 + '%';
        progressParrots.style.width = obj.parrots / total *100 + '%';
       
    	progressCats.textContent = `${Math.floor(obj.cats / total * 100) + '%'} (${String(obj.cats)+')'}`
    	progressParrots.textContent = `${Math.floor(obj.parrots/ total * 100) + '%'} (${String(obj.parrots)+')'}`
    	progressDogs.textContent = `${Math.floor(obj.dogs/ total * 100) + '%'} (${String(obj.dogs)+')'}`
    	progressTotal.textContent =`${String(total) + '  ' + '(100%)'}`
}