export {
   post
 };
 
 function post(url, data) {
   return fetch(new Request(url, {
     method: 'POST',
     headers: {'Content-type': 'application/json'},
     mode: 'cors',
     body: JSON.stringify(data)
   }));
 }