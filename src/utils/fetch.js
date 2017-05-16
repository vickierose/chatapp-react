export {
   post,
   getRequest,
   put
 };

//  export {
//    getRequest,
//    put
//  }
 
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
     headers: {'Content-type': 'application/json'},
     mode: 'cors',
     body: JSON.stringify(data)
   }))
 }

 function getRequest(url) {
   return fetch(url) 
 }