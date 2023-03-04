<section class="flex flex-col h-full w-full items-center">
    <h2 class="text-3xl font-bold text-center">
        Register
    </h2>
    <p class="text-center">
        Already have an account? <a href="/login" class="text-blue-600 unstyled hover:underline hover:cursor-pointer hover:text-blue-900">Login</a>
    </p>
    <form action="?/register" method="POST" class="flex flex-col w-1/2">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="border border-gray-300 rounded-md p-2" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="border border-gray-300 rounded-md p-2" />
        <label for="password2">Confirm Password</label>
        <input type="password" name="passwordConfirm" id="password2" class="border border-gray-300 rounded-md p-2" />
        <button class="bg-blue-600 p-2 rounded-md mt-5">Register</button>
    </form>


</section>