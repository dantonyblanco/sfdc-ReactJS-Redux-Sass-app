export const MY_ACTION = 'MY_ACTION';

export function executeMyAction(payload) {
	return {
		type: MY_ACTION,
		payload: payload
	}
}