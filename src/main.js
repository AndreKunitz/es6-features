const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

async function executePromise() {
    const response = await myPromise();

    console.log(response);
}

executePromise();