function validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name === "") {
        error.name = "Input username"
    }
    else {
        error.name = ""
    }

    if(values.email === "") {
        error.email = "Input email"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Incorrect email pattern"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Input password"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password should be atleast 8 characters including uppercase, lowercase and numbers"
    }else {
        error.password = ""
    }
    return error
}

export default validation;