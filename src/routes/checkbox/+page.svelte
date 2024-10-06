<script lang="ts">
    
    import Checkbox from "$lib/components/checkbox/Checkbox.svelte";


    // let ondisable=false
    let isChecked=true
    let isdisabled=false

    // function onHandlDisable(){
    //     ondisable=!ondisable
    // }
    const toggleCheck=(event:any)=>{
        isChecked=!isChecked
        isdisabled=!isdisabled

    }
</script>

<div class="flex flex-col justify-center items-center max-w-lg mx-auto p-6 gap-4 text-white-800 p-6 bg-blue-700 rounded shadow-md">
    <h2 class="text-xl font-bold mb-4 flex items-center">Parent Component</h2>
<Checkbox  isChecked={isChecked} toggleCheck={toggleCheck} isdisabled={isdisabled}></Checkbox>
<Checkbox  isChecked={isChecked} toggleCheck={toggleCheck} isdisabled={isdisabled}></Checkbox>

</div>


<!-- ondisable={onHandlDisable}  -->