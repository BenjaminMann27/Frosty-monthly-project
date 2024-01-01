document.getElementById('madLibForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const adjective = document.getElementById('adjective').value;
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adverb = document.getElementById('adverb').value;
  
    const story = `Once upon a time, in a ${adjective} land, there lived a ${noun}. This ${noun} loved to ${verb} ${adverb} every day. One day, while ${verb} ${adverb}, the ${noun} discovered a hidden cave. Inside the cave, the ${noun} found a magical ${adjective} sphere. When the ${noun} touched the sphere, a bright light surrounded him, and suddenly, the ${noun} could ${verb} ${adverb} like never before.`;
    
    document.getElementById('story').textContent = story;
  });