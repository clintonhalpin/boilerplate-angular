// sampleFactory
// just define a factory in js/app.js

export default () => {
    let value = "Hey I'm a value and I'm being returned from a factory!";

    let get = function() {
        return value 
    }

    let update = function(req) {
        value = req
        return req 
    }

    return {
        get,
        update
    }
}
