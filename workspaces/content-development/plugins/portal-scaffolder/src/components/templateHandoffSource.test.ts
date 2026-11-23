import {
  GIT_REPOSITORIES_HANDOFF_SOURCE,
  GIT_REPOSITORY_TEMPLATE_TAG,
  gitRepositoriesHandoffPath,
  isGitRepositoriesHandoff,
} from './templateHandoffSource';

describe('templateHandoffSource', () => {
  it('detects the Git Repositories Create handoff query', () => {
    expect(
      isGitRepositoriesHandoff(`?source=${GIT_REPOSITORIES_HANDOFF_SOURCE}`),
    ).toBe(true);
    expect(isGitRepositoriesHandoff('?source=execution-environments')).toBe(
      false,
    );
    expect(isGitRepositoriesHandoff('')).toBe(false);
  });

  it('builds the Templates catalog handoff path', () => {
    expect(gitRepositoriesHandoffPath('/self-service')).toBe(
      `/self-service/catalog?source=${GIT_REPOSITORIES_HANDOFF_SOURCE}`,
    );
    expect(gitRepositoriesHandoffPath('/self-service/')).toBe(
      `/self-service/catalog?source=${GIT_REPOSITORIES_HANDOFF_SOURCE}`,
    );
  });

  it('exports the expected filter tag', () => {
    expect(GIT_REPOSITORY_TEMPLATE_TAG).toBe('git-repository');
  });
});
