
<script lang="ts">
  export let butnlabel = "default button"
  export let fnClick = (event: any) => {}
  export let disabled = false
  export let btnType: "button" | "reset" | "submit" = "button"
  export let onclass: string = "disabled:bg-gray-500 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
</script>

<button class={onclass} type={btnType} disabled={disabled} on:click={fnClick}>{butnlabel}</button>
