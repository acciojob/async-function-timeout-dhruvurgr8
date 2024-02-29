const btn = document.querySelector('#btn');
const showContent = document.querySelector('#output');
const form = document.querySelector('.form');
let data = {};

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const text = form.text.value;
    const num = form.num.value;
    data.text = text;
    data.num = num;

    function createPromise() {
        return new Promise((res, rej) => {
            if (data) {
                res(data);
            } else {
                rej("error occurred");
            }
        });
    }

    async function getPromise() {
        try {
            const res = await createPromise();
			setTimeout(()=>{
				showContent.textContent = `${res.text} - ${res.num/1000}`;
			},data.num)
            
        } catch (error) {
            console.error(error);
            showContent.textContent = "Error occurred";
        }
    }

    showContent.textContent = '';

    await getPromise();
    form.reset();
});

