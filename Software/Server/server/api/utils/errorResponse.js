
export default class ErrorResponse {

    //default constructor
    constructor(code, message, errors = []) {
      console.log("int Error")
        this.code = code;
        this.message = message;
        this.errors = errors;
    }

    //toJson
    toJSON() {
        return {
            code: this.code,
            message: this.message,
            errors: this.errors
        };
    }
}
