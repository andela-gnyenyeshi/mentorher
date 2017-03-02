import expect from 'expect';
import * as types from '../../actionTypes';
import { fetchMentorsSuccess } from '../../actions';

describe('Tests actions', () => {
  it('fetch mentors action', () => {
    const fakeData = [{name: 'Gertrude'}];

    const expectedMentorData = {
      type: types.FETCH_MENTORS_SUCCESS,
      data: fakeData
    };

    const returnData = fetchMentorsSuccess(fakeData);

    expect(returnData).toEqual(expectedMentorData);
  });
});
