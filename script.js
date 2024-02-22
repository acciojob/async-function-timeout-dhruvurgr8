const btn = document.querySelector('#btn');
const showContent = document.querySelector('#output');

btn.addEventListener('click', async () => {
    const text = document.querySelector('#text').value;
    const num = document.querySelector('#delay').value;

    function createPromise(text, num) {
        return new Promise((res, rej) => {
            if (text && num) {
                res(`${text}-${num}`);
            } else {
                rej("error occurred");
            }
        });
    }

    async function getPromise() {
        try {
            const res = await createPromise(text, num);
            showContent.textContent = res;
        } catch (error) {
            console.error(error);
            showContent.textContent = "Error occurred";
        }
    }

    showContent.textContent = '';

    await getPromise();
});
