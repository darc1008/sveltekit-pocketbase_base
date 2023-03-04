<script>
  import "../app.postcss";
  export let data;
</script>

<main>
    <div class="flex flex-row w-full justify-end items-center gap-2 p-2 mb-4 shadow-md">
        {#if data?.user}
            <h4 class="font-bold">{data.user.name}</h4>
            <form action="/logout" method="POST">
                <button 
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                > Logout</button>
            </form>
        {:else}

            <a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</a>
            <a href="/register" 
            class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            >Register</a>
      {/if}
  </div>
    <slot />
</main>
