<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <main>
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#" method="post">
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Name" name='username'/>
                    <input type="email" placeholder="Email" name='email'/>
                    <input type="password" placeholder="Password" name='password'/>
                    <button type='submit' name='signup'>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="testlogin.php" method="post">
                    <h1>Sign in</h1>
                    <input type="text" placeholder="email" name="username" />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                        <h1 id='title'>Hello, Friend!</h1>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script>
        const signUpButton = document.getElementById('signUp');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => { 
            if (container.classList[1] == "right-panel-active")
            {
                document.getElementById('title').textContent = "Hello, Friend!";
                signUpButton.textContent = 'Sign Up'
                container.classList.remove("right-panel-active");
            }
            else
            {
                document.getElementById('title').textContent = "Welcome back";
                signUpButton.textContent = 'Sign In'
                container.classList.add("right-panel-active"); 
            }
        });
    </script>
</body>
</html>