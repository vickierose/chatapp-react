export {
    isNotEmpty,
    isEmail,
    isEqual,
}

function isNotEmpty(field){
    if (!field) {return false
    }else{
        return true
    }
}

function isEmail(field){
    const emailPattern = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
    const result = field.match(emailPattern);
    if(result){
        return true
    }else{
        return false
    }
}

function isEqual(field1, field2){
    return field1 === field2; 
}