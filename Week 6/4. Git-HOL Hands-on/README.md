# Git HOL 4 – Merge Conflict Resolution

## Objective
- Understand how merge conflicts occur in Git.
- Learn how to resolve merge conflicts using Git.
- Practice merging branches and completing conflict resolution.

## Prerequisites
- Git installed and configured.
- Local Git repository.
- Basic knowledge of Git branching and commits.

## Steps Performed

1. Created a local Git repository.
2. Created a new branch named `GitWork`.
3. Added `hello.xml` and committed changes in the `GitWork` branch.
4. Switched back to the `master` branch.
5. Modified the same `hello.xml` file with different content.
6. Committed the changes in the `master` branch.
7. Compared the branches using Git log and Git diff.
8. Merged the `GitWork` branch into `master`.
9. Observed the merge conflict.
10. Resolved the conflict manually.
11. Committed the resolved merge.
12. Updated `.gitignore` to ignore backup files.
13. Deleted the merged branch.
14. Verified the final commit history.

## Git Commands Used

```bash
git init
git status
git checkout -b GitWork
git add hello.xml
git commit -m "Initial commit in master"
git checkout master
git add hello.xml
git commit -m "Modified hello.xml in master"
git log --oneline --graph --decorate --all
git diff master GitWork
git merge GitWork
git status
git add hello.xml
git commit -m "Resolved merge conflict"
git branch
git branch -d GitWork
```

## Outcome

- Successfully created and managed Git branches.
- Simulated a merge conflict.
- Resolved the conflict manually.
- Merged the branch successfully.
- Cleaned up the repository by deleting the merged branch.
