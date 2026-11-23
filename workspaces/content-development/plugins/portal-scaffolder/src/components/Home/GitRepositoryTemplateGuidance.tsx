import {
  createTranslationRef,
  useTranslationRef,
} from '@backstage/core-plugin-api/alpha';
import { Alert, Button, Flex } from '@backstage/ui';

const gitRepositoryTemplateTranslationRef = createTranslationRef({
  id: 'portal-scaffolder.git-repository-template',
  messages: {
    title: 'Create a Git repository',
    description:
      'Select a template to create a Git repository for Ansible content.',
    clearFilters: 'Clear filters',
  },
});

export function GitRepositoryTemplateGuidance({
  onClear,
}: Readonly<{ onClear: () => void }>): JSX.Element {
  const { t } = useTranslationRef(gitRepositoryTemplateTranslationRef);
  return (
    <Flex direction="column" gap="2" mb="4">
      <Alert
        status="info"
        title={t('title')}
        description={t('description')}
        customActions={
          <Button variant="tertiary" onPress={onClear}>
            {t('clearFilters')}
          </Button>
        }
      />
    </Flex>
  );
}
