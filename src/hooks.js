export async function handle({ request, render }) {
	const { path } = request;

	console.log(request.headers);
	if (request.headers.cookie.includes('auth')) {
		if (path == '/') {
			return {
				status: 302,
				headers: {
					location: '/dashboard'
				}
			};
		}
	} 
	else if (path.includes('/dashboard')){
		return {
			status: 302,
			headers: {
				location: '/'
			}
		};
	}

	return render(request);
}
