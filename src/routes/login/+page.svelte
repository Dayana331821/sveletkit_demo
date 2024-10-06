<script lang="ts">
    let messsage = "";
    let errorUsernameMessage = "";
    let errorPasswordMessage = "";
    let alpharegex = new RegExp(/^[a-zA-Z ]+$/);
    let logindata = {
        username: "",
        password: "",
    };

    function onHandleChange(e: any) {
        const value = e.target.value;
        const name = e.target.name;

        logindata[name] = value;

        console.log("logindata", logindata);
        messsage = "";

        if (logindata.username <= 5 || logindata.password <= 5) {
            messsage = "both username and password is required ";
        } else if (name === "username") {
            if (logindata.username?.length < 5) {
                return errorUsernameMessage = "name must be greater than 5 characters";
            } else if (alpharegex.test(logindata.username) == false) {
                return errorUsernameMessage = "only alphabets are allowed";
            } else {
                return  errorUsernameMessage = "";
            }
        } else if (name == "password") {
            if (logindata.password?.length < 5) {
                return errorPasswordMessage =
                    "password must be greater than 5 chareacters";
            } else {
                return errorPasswordMessage = "";
            }
        }

        console.log(errorUsernameMessage, errorPasswordMessage);
    }
</script>

{#if messsage?.length > 0}
    <p>{messsage}</p>
{/if}

{#if errorUsernameMessage?.length > 0}
    <p>{errorUsernameMessage}</p>
{/if}

{#if errorPasswordMessage?.length > 0}
    <p>{errorPasswordMessage}</p>
{/if}
<form method="POST" action="?/login">
    <label
        >Ussrname
        <input
            name="username"
            type="text"
            value=""
            on:keydown={onHandleChange}
        />
    </label>
    <label
        >Password
        <input
            name="password"
            type="password"
            value=""
            on:keydown={onHandleChange}
        />
    </label>
    <button
        type="submit"
        disabled={errorUsernameMessage?.length > 0 ||
            errorPasswordMessage?.length > 0 ||
            messsage?.length > 0}>Log In</button
    >
    <!-- <button formaction="?/register">Register</button> -->
</form>
