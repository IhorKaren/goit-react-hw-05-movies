import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Form, Input, Button, Error } from './SearchBar.styled';

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
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      {errors.movieSearch && <Error>{errors.movieSearch?.message}</Error>}
      <Input name="movieSearch" type="text" {...register('movieSearch')} />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
