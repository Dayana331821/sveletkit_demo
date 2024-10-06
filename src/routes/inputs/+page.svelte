<script lang="ts">
    import Input from "$lib/components/Inputs/Input.svelte";
    import Button from "$lib/components/buttons/Button.svelte";

let value='hello'
let butnlabel='Click Me'

let registerForm: any = {
    username: {value: "", isValid: false, errMsg: ""},
    password: {value: "", isValid: false, errMsg: ""}
}

const performValidations = (fieldName: string, value: string): boolean => {
    if(fieldName == "username" && value.length < 5) {
        // alert("min length should be 5 charagxcters long")
        registerForm[fieldName].isValid = false
        registerForm[fieldName].errMsg = fieldName + " should be atleast 5 charagxcters long"
        return false;
    }

    if(fieldName == "password" && value.length < 8) {
        // alert("min length should be 5 charagxcters long")
        registerForm[fieldName].isValid = false
        registerForm[fieldName].errMsg = fieldName + " should be atleast 8 charagxcters long"
        return false;
    }

    registerForm[fieldName].isValid = true
    registerForm[fieldName].errMsg = ""

    return true

}

const onHandle = (event: any) => {
    const fieldName = (event?.target as HTMLInputElement)?.name
    value = (event?.target as HTMLInputElement)?.value
    console.log((event?.target as HTMLInputElement)?.files)

    console.log(fieldName, value)

    if(performValidations(fieldName, value)) {
        registerForm[fieldName].value = value
    }

}

const handleBtnClick = () => {
    alert('Button clicked')
}
</script>



<form class="w-96 p-6 mx-auto flex flex-col justify-center items-center gap-4">

    {#if registerForm.username.errMsg}
        <p class="text-red-500">{registerForm.username.errMsg}</p>
    {/if}


    {#if registerForm.password.errMsg}
        <p class="text-red-500">{registerForm.password.errMsg}</p>
    {/if}

    <Input value={registerForm.username?.value} name={"username"} maxLength={10} autoOn={onHandle}/>
    <Input value={registerForm.password?.value} name={"password"} typeOn="password"  maxLength={10} autoOn={onHandle}/>
    <Button disabled={registerForm.username.value.length <= 0 || registerForm.password.value.length <= 0} butnlabel={butnlabel} fnClick={handleBtnClick} />
</form>

<div>
    {#if value}
        <p>{value}</p>
    {/if}
</div>
<!-- <Input typeOn="radio" autoOn={onHandle}/>
<Input typeOn="number" autoOn={onHandle}/> -->
