import { error, redirect, fail } from '@sveltejs/kit'
import { validateData } from '$lib/utils'
import { loginUserSchema } from '$lib/schemas'
export const actions = {
    login: async({ request, locals }) => {
        const { formData, errors } = await validateData(await request.formData(), loginUserSchema)
        if (errors) {
            console.log(errors)
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            })

        }

        try {
            await locals.pb.collection('users').authWithPassword(formData.email, formData.password)
                // prettier-ignore
            let result = false
            try {
                result = locals.pb.authStore.model.verified
            } catch {
                result = false
            }
            if (!result) { // @ts-ignore
                locals.pb.authStore.clear()
                return {
                    notVerified: true
                }
            }
        } catch (err) {
            if (err.status == 400) {
                return {
                    notVerified: true
                }
            }
            console.log('Error:', err)
            throw error(500, "Somenthing wnet wrong loggin in")
        }
        throw redirect(303, '/')
    }
}