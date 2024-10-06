

<script lang="ts">


// export let type='checkbox'
// export let ondisable=false
export let isChecked = false;
export let toggleCheck = (event:any)=>{}
export let isdisabled = false;




</script>


<label class="text-gray-700 font-medium">
    <input class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed" type="checkbox"  bind:checked={isChecked} on:change={toggleCheck} disabled={isdisabled}/>
 
</label>

<p class="mt-2 text-sm text-red-600"> 
    {isdisabled?'disable':'enable'}
</p>

<!-- disabled={ondisable} -->