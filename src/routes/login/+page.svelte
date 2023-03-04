<script>
        import Input from '$lib/components/Input.svelte'

    export let form
    console.log(form)
</script>
<section class="flex flex-col h-full w-full items-center">
    <h2 class="text-3xl font-bold text-center">
        Login to your account
    </h2>
    <p class="text-center">
        Don't have an account yet? <a href="/register" class="text-blue-600 unstyled hover:underline hover:cursor-pointer hover:text-blue-900">Register</a>
    </p>
    <form action="?/login" method="POST" class="flex flex-col w-1/2">
        <Input label="email" id="email" value={form?.data?.email ?? ''} errors={form?.errors?.email} type="email" required/>
        <Input label="Password" id="password" type="password" errors={form?.errors?.password} value="" required/>
        <button class="bg-blue-600 p-2 rounded-md mt-5">Login</button>
        {#if form?.notVerified}
            <div class="alert">
              You must verify your credentials
            </div>

        {/if}

    </form>


</section>