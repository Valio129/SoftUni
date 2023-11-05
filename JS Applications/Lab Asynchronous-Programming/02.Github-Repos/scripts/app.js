function loadRepos() {
	const repos = document.getElementById('repos');
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;
	fetch(url).then(response => {
		if (response.ok == false) {
			const errCode = response.status;
			console.log(response);
			return Promise.reject(errCode, response.statusText);
		} else {
			return response.json();
		}
	}).then(data => {
		repos.replaceChildren();
		for (let entry of data) {
			const li = document.createElement('li');
			li.innerHTML = `<a href="${entry.html_url}">${entry.full_name}</a>`;
			repos.appendChild(li);
		}
		// const els = [];
		// data.forEach(obj => {
		// 	const li = document.createElement('li');
		// 	const a = document.createElement('a');
		// 	a.textContent = obj.full_name;
		// 	a.href = obj.html_url;
		// 	li.appendChild(a);
		// 	repos.appendChild(li);
		// 	els.push(li);
		// });
		// repos.replaceChildren(...els);


	}).catch(errCode, promiseData => repos.innerHTML = `<p> ${errCode}: ${promiseData.message}</p>`);

}