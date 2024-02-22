//your JS code here. If required.
const btn = document.querySelector('#btn');
const showContent = document.querySelector('#output');
showContent.textContent = "";
btn.addEventListener('click',()=>{
	const text = document.querySelector('#text').value;
const num = document.querySelector('#delay').value;
	function createPromise(text,num){
		return new Promise((res,rej)=>{
			if(text && num){
				res(`${text}-${num}`)
			}else{
				rej("error occured")
			}
		})
	}
	async function getPromise(){
		const res = await createPromise(text,num);
		showContent.textContent = res;
	}
	getPromise();
})
