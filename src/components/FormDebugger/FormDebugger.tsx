import { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'; // or any icons you like
import { useFormContext } from 'react-hook-form';
import { ActionIcon, Code, Collapse, Divider, Paper, ScrollArea, Stack, Text } from '@mantine/core';

export function FormDebugger() {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen((prev) => !prev);

  const { watch, formState } = useFormContext();
  const { errors, touchedFields, dirtyFields, isDirty, isValid } = formState;
  const values = watch();

  const simplifiedErrors = Object.fromEntries(
    Object.entries(errors).map(([key, value]) => [key, value?.message])
  );

  return (
    <>
      <ActionIcon
        variant="transparent"
        size="md"
        color="dark"
        onClick={toggle}
        style={{
          position: 'fixed',
          top: 30,
          right: 30,
          zIndex: 1000,
        }}
      >
        {open ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />}
      </ActionIcon>
      <Collapse in={open}>
        <Paper
          p="md"
          radius="md"
          shadow="xl"
          style={(theme) => ({
            backgroundColor: theme.colors.dark[8],
            position: 'fixed',
            top: 20,
            right: 20,
            width: '20vw',
            maxHeight: '95vh',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <ScrollArea scrollbars="y" style={{ flex: 1, overflow: 'auto' }}>
            <Stack gap="sm">
              <Text size="md" fw={500}>
                Form Values:
              </Text>
              <Text size="sm" fw={500}>
                isDirty:{' '}
                <Text component="span" size="sm" fw={500} c={isDirty ? 'green' : 'red'}>
                  {isDirty.toString()}
                </Text>{' '}
                (Unsaved changes)
              </Text>

              <Text size="sm" fw={500}>
                isValid:{' '}
                <Text component="span" size="sm" fw={500} c={isValid ? 'green' : 'red'}>
                  {isValid.toString()}
                </Text>{' '}
                (Form is submittable)
              </Text>

              <Divider my="sm" />

              <Text size="md" fw={500}>
                Field Values:
              </Text>
              <Code block>{JSON.stringify(values, null, 2)}</Code>

              <Text size="md" fw={500}>
                Field Errors:
              </Text>
              <Code block color="red">
                {JSON.stringify(simplifiedErrors, null, 2)}
              </Code>

              <Text size="md" fw={500}>
                Touched Fields (Focused and Blurred):
              </Text>
              <Code block color="blue">
                {JSON.stringify(touchedFields, null, 2)}
              </Code>

              <Text size="sm" fw={500}>
                Dirty Fields (Changed):
              </Text>
              <Code block color="yellow">
                {JSON.stringify(dirtyFields, null, 2)}
              </Code>
            </Stack>
          </ScrollArea>
        </Paper>
      </Collapse>
    </>
  );
}
