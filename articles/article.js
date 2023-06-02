const form = document.querySelector('#summarize');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const paragraph = form.querySelector('#paragraph').value;

    const data = {
        paragraph
    };

    fetch('http://127.0.0.1:5001/summarize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'True') {
                let summaryarea = document.querySelector('#summ');
                summaryarea.innerHTML = data.summary;
            }
            else {
                alert("Summary failed! Please enter a valid input.");
                throw new Error('Wrong Input Value');
            }
        })
        .catch(error => {
            console.error(error);
        });
});