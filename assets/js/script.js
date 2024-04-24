const topics = ["HTML", "CSS", "Git", "JavaScript"]; // List of topics.
const randomTopic = topics[Math.floor(Math.random() * topics.length)]; // Generate a number [0, 1), multiply by the length of the array, then round DOWN and access the indexed topics for a random topic.

const listTopics = () => { // Trying to implement arrow functions, no parameters.
    console.log('Here are the topics we learned through Prework:'); // Log the sentence to console.
    for (const topic of topics) { // For every topic in the array,
        console.log(topic); // log it to the console.
    }
}

const selectTopic = () => { // Trying to implement arrow functions, no parameters.
    console.log('Which topic should we study first?'); // Log the sentence to the console.
    if (randomTopic) { // If the randomTopic exists,
        console.log(`Let's study ${randomTopic}!`); // then log sentence with specific topic,
    } else { // otherwise,
        console.log('Please try again!'); // log this sentence.
    }
}

listTopics(); // Call the functions
selectTopic();
