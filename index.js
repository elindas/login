function register() {
    let email = document.getElementById("inputEmail").value
    let password = document.getElementById("inputpassword").value

    localStorage.setItem("Email", email)
    localStorage.setItem("Password", password)

    if (password.length >= 8 && email !== undefined && password !== undefined) {
        
        window.location = "login.html"
    } else {
        
        document.getElementById('error-message').innerHTML = 'Password should be more than 8 character'
    }
}

function login() {
    let email = document.getElementById("inputEmail").value
    let password = document.getElementById("inputpassword").value

    let emailRegistered = localStorage.getItem('Email')
    let passwordRegistered = localStorage.getItem('Password')


    if (email === emailRegistered && password === passwordRegistered && email !== undefined && password !== undefined) {
        
        window.location = "homepage.html"

    } else {
        document.getElementById('error-message').innerHTML = 'Log in failed, please input your email and password !'
    }
}


function logout() {
    localStorage.removeItem('Email')
    localStorage.removeItem('Password')

    let successLogout = alert('Log out sukses')
    
    window.location = "index.html"
}



