import { error, redirect } from "@sveltejs/kit"
import { generateRandomUsername } from '$lib/utils'

export const actions = {
    register: async({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())
        let username = generateRandomUsername('user')
        try {
            await locals.pb.collection('users').create({ username, ...body })
            await locals.pb.collection('users').requestVerification(body.email)
        } catch (err) {
            console.log('error: ', err)
            throw error(500, 'Error creating user')
        }

        throw redirect(303, '/login')
    }
}