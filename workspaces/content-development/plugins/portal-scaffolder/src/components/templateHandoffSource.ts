/** Query value for Git Repos Create → filtered Templates handoff (AAP-101666). */
export const GIT_REPOSITORIES_HANDOFF_SOURCE = 'git-repositories';

/**
 * Catalog tag used to scope Templates during the Git Repos Create handoff.
 * Matches APME `apme-register-git-repository` and similar create-repo templates.
 */
export const GIT_REPOSITORY_TEMPLATE_TAG = 'git-repository';

/** True when Templates was opened via Git Repos Create (`?source=git-repositories`). */
export function isGitRepositoriesHandoff(search: string): boolean {
  return (
    new URLSearchParams(search).get('source') ===
    GIT_REPOSITORIES_HANDOFF_SOURCE
  );
}

/** Templates catalog path with Git Repos Create handoff query. */
export function gitRepositoriesHandoffPath(root: string): string {
  const base = root.endsWith('/') ? root.slice(0, -1) : root;
  return `${base}/catalog?source=${GIT_REPOSITORIES_HANDOFF_SOURCE}`;
}
