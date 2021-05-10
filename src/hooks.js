export async function handle({ request, render }) {
	const { path } = request;

	if (request.headers.cookie != null) {
		if (path == '/') {
			return {
				status: 302,
				headers: {
					location: '/dashboard'
				}
			};
		}
	} else {
		if (path.includes('/dashboard')) {
			return {
				status: 302,
				headers: {
					location: '/'
				}
			};
		}
	}

	return render(request);
}
