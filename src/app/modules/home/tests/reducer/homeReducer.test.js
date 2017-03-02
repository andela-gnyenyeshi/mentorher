import expect from 'expect';
import mentors from '../../reducer';
import { fetchMentorsSuccess } from '../../actions';

describe('Testing reducers', () => {
	it('FETCH_USER_SUCCESS', () => {
		const initialState = {
			mentor: 1
		};

		const newMentor = {
			data: 2
		};

		const action = fetchMentorsSuccess(newMentor);

		const newState = mentors(initialState, action);

		expect(newState.data).toBe(2);
	})
})

