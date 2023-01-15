//XMLHTTPRequest
const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.onload = () => {
            if(xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };
        xhr.onerror = () => {
            reject('Something went wrong!');
        };
        xhr.send(JSON.stringify(data));
    });
    return promise;
};

const getData = () => {
    sendHttpRequest('GET', 'http://localhost:8080/data').then(responseData => {
        console.log(responseData);
    });
}

const sendData = () => {
    sendHttpRequest('POST', 'http://localhost:8080/data', {
        message: 'Some message'
    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
}

//Fetch API - not in all browsers






