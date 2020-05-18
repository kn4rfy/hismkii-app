export let serverUrl = '';
export let backOfficeUrl = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
	serverUrl = 'http://localhost:8080';
	backOfficeUrl = 'http://localhost:9000';
} else {
	serverUrl = 'http://localhost:8080';
	backOfficeUrl = 'http://localhost:9000';
}
