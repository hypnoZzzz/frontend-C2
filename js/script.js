
let voiceForCats = 0;
let voiceForDogs = 0;
let voiceForParrots = 0;
let totalVoice = voiceForCats + voiceForDogs + voiceForParrots;


butCat.onclick = () => {
	fetch('http://localhost:8080/sse/vote/cats', {method: 'POST'})
	voiceForCats +=1;
	totalVoice +=1;	
};

	
butParrot.onclick = () => {
	fetch('http://localhost:9090/sse/vote/parrots', {method: 'POST'})
	voiceForParrots +=1;
	totalVoice +=1;	
};	
	
butDog.onclick = () => {
	fetch('http://localhost:9090/sse/vote/dogs', {method: 'POST'})
	voiceForDogs +=1;
	totalVoice +=1;
};



