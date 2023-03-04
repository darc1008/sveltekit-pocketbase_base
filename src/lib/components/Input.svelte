<script>
    export let label
    export let type
    export let id
    export let required = false
    export let placeholder = ''
    export let value = ''
    export let disabled

    export let errors

</script>

<div class="mb-6 w-full">
    <label for={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <input type={type} id={id} name={id}  value={value} 
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder={placeholder} 
    required={required}
    disabled={disabled}>
    {#if errors}
        {#each errors as error}

        <div class="p-4 mb-2 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span class="font-medium"> {error} </span>
        </div>
            
        {/each}
        
    {/if}
</div> 