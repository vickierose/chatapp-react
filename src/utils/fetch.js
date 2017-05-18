export {
   post,
   getRequest,
   put
 };

 function post(url, data) {
   return fetch(new Request(url, {
     method: 'POST',
     headers: {'Content-type': 'application/json'},
     mode: 'cors',
     body: JSON.stringify(data)
   }));
 }

 function put(url, data){
   return fetch(new Request(url, {
     method: 'PUT',
    //  headers: {'Content-type': 'multipart/form-data'},
     mode: 'cors',
     body: data
   }))
 }

 function getRequest(url) {
   return fetch(url) 
 }