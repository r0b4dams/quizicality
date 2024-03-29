import { Box, Select } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { setParams } from '../../slice';

export const CategorySelect: React.FC = (): JSX.Element => {
  const params = useAppSelector((state) => state.quiz.params);
  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.target.value;
    if (value === 'any') {
      const update = { ...params };
      delete update.category;
      dispatch(setParams(update));
    } else {
      dispatch(setParams({ ...params, category: value }));
    }
  };

  return (
    <Box>
      <label htmlFor='category-select'>Category:</label>
      <Select value={params.category || 'any'} id='category-select' onChange={handleChange}>
        <option value='any'>Any category</option>
        <option value='9'>General Knowledge</option>
        <option value='10'>Entertainment: Books</option>
        <option value='11'>Entertainment: Film</option>
        <option value='12'>Entertainment: Music</option>
        <option value='13'>Entertainment: Musicals & Theatres</option>
        <option value='14'>Entertainment: Television</option>
        <option value='15'>Entertainment: Video Games</option>
        <option value='16'>Entertainment: Board Games</option>
        <option value='17'>Science & Nature</option>
        <option value='18'>Science: Computers</option>
        <option value='19'>Science: Mathematics</option>
        <option value='20'>Mythology</option>
        <option value='21'>Sports</option>
        <option value='22'>Geography</option>
        <option value='23'>History</option>
        <option value='24'>Politics</option>
        <option value='25'>Art</option>
        <option value='26'>Celebrities</option>
        <option value='27'>Animals</option>
        <option value='28'>Vehicles</option>
        <option value='29'>Entertainment: Comics</option>
        <option value='30'>Science: Gadgets</option>
        <option value='31'>Entertainment: Japanese Anime & Manga</option>
        <option value='32'>Entertainment: Cartoon & Animations</option>
      </Select>
    </Box>
  );
};
