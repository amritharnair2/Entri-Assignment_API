// Fetch data from the JSONPlaceholder API

/* fetch('https://jsonplaceholder.typicode.com/todos/1/users').then((response) => {
    return response.json()
}).then((res) => {
    console.log("Fetched data:",res)
})
.catch((error) => {
    console.log("Error occured",error)
}) */



// Function to generate a random number and return a promise

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) 
    console.log(randomNumber);
    return new Promise((resolve, reject) => {
        if (randomNumber < 2) {
            resolve("Operation Success");
        } else {
            reject("Operation Failed");
        }
    });
} 



// Handle promise with .then/catch when the button is clicked

/* document.getElementById("thenCatchBtn").addEventListener("click", () => {
    generateRandomNumber()
        .then((result) => {
            console.log(result);
            })
        .catch((error) => {
            console.log(error);
        });
}); */



// Handle promise with async/await when the button is clicked

document.getElementById("asyncAwaitBtn").addEventListener("click", async () => {
    try {
        const result = await generateRandomNumber();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
});
