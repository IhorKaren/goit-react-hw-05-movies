import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  movieSearch: Yup.string().trim().required('Search field cannot be empty'),
});

const SearchBar = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitForm = (data, e) => {
    onSubmit({ query: data.movieSearch });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      {errors.movieSearch && <div>{errors.movieSearch?.message}</div>}
      <input name="movieSearch" type="text" {...register('movieSearch')} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
