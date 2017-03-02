import {FETCH_MENTORS_SUCCESS} from './actionTypes'
export function fetchMentorsSuccess(data) {
	return {
		type: FETCH_MENTORS_SUCCESS,
		data
	}
}

export default function fetchMentors() {
	return (dispatch, getState) => {
		fetch(`http://localhost:4000/api/mentors`)
		.then((response) => response.json())
		.then((data) => {
			dispatch(fetchMentorsSuccess(data));
		})
    .catch((err) => console.error(err))
	}
}
