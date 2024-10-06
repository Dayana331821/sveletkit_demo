
<script lang="ts">
 export let autoOn: (event: any) => void
 export let typeOn="text"
 export let name = 'stranger';
 export let value='dayana'
 export let maxLength = 5
</script>

<input 
class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
type={typeOn} name={name} value={value} on:change={autoOn} maxlength={maxLength}/>

