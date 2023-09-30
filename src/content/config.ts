import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
	schema: z.object({
		author: z.object({
			name: z.string(),
			avatar: z.string()
		}),
		date: z.string(),
		image: z.string(),
		title: z.string(),
		description: z.string()
	})
})

export const collections = {
	blogs: blogCollection
}
