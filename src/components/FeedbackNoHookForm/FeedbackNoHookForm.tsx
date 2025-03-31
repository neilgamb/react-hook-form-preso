import { useState } from 'react';
import { Button, Checkbox, Radio, Select, Stack, Textarea, TextInput } from '@mantine/core';

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export function FeedbackNoHookForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [feedback, setFeedback] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [favoriteFramework, setFavoriteFramework] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!feedback || feedback.length < 10) {
      newErrors.feedback = 'Feedback must be at least 10 characters';
    }
    if (!favoriteFramework) {
      newErrors.favoriteFramework = 'Please select a framework';
    }
    if (!experienceLevel) {
      newErrors.experienceLevel = 'Please select a level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validate()) {
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      feedback,
      subscribe,
      favoriteFramework,
      experienceLevel,
    };

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data, null, 2));

    // Reset everything
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setFeedback('');
    setSubscribe(false);
    setFavoriteFramework('');
    setExperienceLevel('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack pb={50}>
        <TextInput
          label="First Name"
          placeholder="John"
          value={firstName}
          onChange={(e) => {
            const value = e.currentTarget.value;
            setFirstName(value);
            if (submitted) {
              setErrors((prev) => ({
                ...prev,
                firstName: value ? '' : 'First name is required',
              }));
            }
          }}
          error={errors.firstName}
          withAsterisk
        />
        <TextInput
          label="Last Name"
          placeholder="Doe"
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
        <TextInput
          label="Email"
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={(e) => {
            const value = e.currentTarget.value;
            setEmail(value);
            if (submitted) {
              setErrors((prev) => ({
                ...prev,
                email: value
                  ? validateEmail(value)
                    ? ''
                    : 'Invalid email address'
                  : 'Email is required',
              }));
            }
          }}
          error={errors.email}
          withAsterisk
        />
        <TextInput
          label="Phone Number"
          placeholder="123-456-7890"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.currentTarget.value)}
        />
        <Textarea
          label="Your Feedback"
          placeholder="Tell us what you think..."
          value={feedback}
          onChange={(e) => {
            const value = e.currentTarget.value;
            setFeedback(value);
            if (submitted) {
              setErrors((prev) => ({
                ...prev,
                feedback: value.length >= 10 ? '' : 'Feedback must be at least 10 characters',
              }));
            }
          }}
          error={errors.feedback}
          withAsterisk
          autosize
          minRows={3}
        />
        <Checkbox
          label="Subscribe to newsletter"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.currentTarget.checked)}
          my={10}
        />
        <Radio.Group
          label="Favorite Framework"
          withAsterisk
          value={favoriteFramework}
          onChange={(value) => {
            setFavoriteFramework(value || '');
            if (submitted) {
              setErrors((prev) => ({
                ...prev,
                favoriteFramework: value ? '' : 'Please select a framework',
              }));
            }
          }}
          error={errors.favoriteFramework}
        >
          <Radio value="react" label="React" mt={15} />
          <Radio value="svelte" label="Svelte" mt={15} />
          <Radio value="ng" label="Angular" mt={15} />
          <Radio value="vue" label="Vue" mt={15} />
        </Radio.Group>
        <Select
          label="Experience Level"
          placeholder="Select one"
          data={[
            { value: 'beginner', label: 'Beginner' },
            { value: 'intermediate', label: 'Intermediate' },
            { value: 'expert', label: 'Expert' },
          ]}
          value={experienceLevel}
          onChange={(value) => {
            setExperienceLevel(value || '');
            if (submitted) {
              setErrors((prev) => ({
                ...prev,
                experienceLevel: value ? '' : 'Please select a level',
              }));
            }
          }}
          error={errors.experienceLevel}
          mt={10}
        />
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
