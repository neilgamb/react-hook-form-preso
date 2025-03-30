import { Controller, useForm } from 'react-hook-form';
import { Button, Checkbox, Radio, Select, Stack, Textarea, TextInput } from '@mantine/core';

// things to show off:
// - type safety
// - defaultValues
// - revalidateMode: 'onSubmit' (default)
// - Controller

type FormValues = {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  feedback: string;
  subscribe: boolean;
  favoriteFramework: string;
  experienceLevel: string;
};

export function FeedbackForm() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data, null, 2));
    reset(); // Reset the form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack pb={50}>
        {/* -------------------------------------------------------------------- */}
        <TextInput
          label="First Name"
          placeholder="John"
          error={errors.firstName?.message}
          withAsterisk
          {...register('firstName', { required: 'First name is required' })}
        />
        {/* -------------------------------------------------------------------- */}
        <TextInput
          label="Last Name"
          placeholder="Doe"
          error={errors.lastName?.message}
          withAsterisk
          {...register('lastName', { required: 'Last name is required' })}
        />
        {/* -------------------------------------------------------------------- */}
        <TextInput
          label="Phone Number"
          placeholder="123-456-7890"
          error={errors.phoneNumber?.message}
          {...register('phoneNumber')}
        />
        {/* -------------------------------------------------------------------- */}
        <TextInput
          label="Email"
          placeholder="johndoe@gmail.com"
          error={errors.email?.message}
          withAsterisk
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          })}
        />
        {/* -------------------------------------------------------------------- */}
        <Textarea
          label="Your Feedback"
          placeholder="Tell us what you think..."
          error={errors.feedback?.message}
          autosize
          minRows={3}
          withAsterisk
          {...register('feedback', {
            required: 'Feedback is required',
            minLength: {
              value: 10,
              message: 'Feedback must be at least 10 characters',
            },
          })}
        />
        {/* -------------------------------------------------------------------- */}
        <Checkbox label="Subscribe to newsletter" {...register('subscribe')} my={10} />
        {/* -------------------------------------------------------------------- */}
        {/* <Radio.Group
          label="Favorite Framework"
          withAsterisk
          error={errors.favoriteFramework?.message}
          {...register('favoriteFramework', { required: 'Please select a framework' })}
        >
          <Radio value="react" label="React" mt={15} />
          <Radio value="svelte" label="Svelte" mt={15} />
          <Radio value="ng" label="Angular" mt={15} />
          <Radio value="vue" label="Vue" mt={15} />
        </Radio.Group> */}
        <Controller
          name="favoriteFramework"
          control={control}
          rules={{ required: 'Please select a framework' }}
          render={({ field }) => (
            <Radio.Group
              label="Favorite Framework"
              withAsterisk
              error={errors.favoriteFramework?.message}
              {...field}
            >
              <Radio value="react" label="React" mt={15} />
              <Radio value="svelte" label="Svelte" mt={15} />
              <Radio value="ng" label="Angular" mt={15} />
              <Radio value="vue" label="Vue" mt={15} />
            </Radio.Group>
          )}
        />
        {/* -------------------------------------------------------------------- */}
        {/* <Select
          label="Experience Level"
          placeholder="Select one"
          data={[
            { value: 'beginner', label: 'Beginner' },
            { value: 'intermediate', label: 'Intermediate' },
            { value: 'expert', label: 'Expert' },
          ]}
          error={errors.experienceLevel?.message}
          {...register('experienceLevel', { required: 'Please select a level' })}
        /> */}
        <Controller
          name="experienceLevel"
          control={control}
          rules={{ required: 'Please select a level' }}
          render={({ field }) => (
            <Select
              label="Experience Level"
              placeholder="Select one"
              data={[
                { value: 'beginner', label: 'Beginner' },
                { value: 'intermediate', label: 'Intermediate' },
                { value: 'expert', label: 'Expert' },
              ]}
              error={errors.experienceLevel?.message}
              mt={10}
              {...field}
            />
          )}
        />

        {/* -------------------------------------------------------------------- */}
        <Button
          type="submit"
          variant="gradient"
          gradient={{ from: 'pink', to: 'blue' }}
          fullWidth
          mt={20}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
}
