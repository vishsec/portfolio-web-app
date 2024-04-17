export const validateString = (value:unknown, maxLength:number) => {
    if(!value || typeof value!= "string" || value.length> maxLength) //ts throws error if this condn isnt checked as it says it can be null or a different data type
    {
        return false;
    }
    return true;
}

export const getErrorMessage = (error: unknown) => {

    let message: string;

    if(error instanceof Error){
        message = error.message;
    }else if(error && typeof error === 'object' && 'message' in error){
            message = String(error.message);
        }
        else if(typeof error === 'string'){
            message = error;
        }else{
            message = 'unknown error';
        }

        return message;
};