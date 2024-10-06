// See https://kit.svelte.dev/docs/types#app

import type { Auth } from "$lib/models/auth";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: Auth|null,
			authToken:string|null
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
