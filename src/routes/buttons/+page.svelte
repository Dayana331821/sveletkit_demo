<script>
    import Button from "$lib/components/buttons/Button.svelte";
 let messsage=''
 let isdisabled=false


const handleBtnClick=(event: any)=>{
    messsage='button clciked'
    isdisabled=!isdisabled
}

</script>

{#if messsage}
<p>{messsage}</p>
{/if}

<Button onclass='bg-red-500 text-white' btnType='submit' disabled={isdisabled} 
butnlabel='lion' fnClick={handleBtnClick}></Button>



