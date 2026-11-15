
# Git Branching Strategy

## 1. Introduction

This document explains the Git branching strategy used in this project.

Branching allows developers to work on different features independently without affecting the stable main branch.

## 2. Main Branch

The main branch contains stable and tested code.

Branch name:
main

## 3. Feature Branches

Feature branches are created to develop new functionality.

Example:

feature/add-task-manager

## 4. Bugfix Branches

Bugfix branches are used to correct issues in the application.

Example:

bugfix/fix-input-validation

## 5. Hotfix Branches

Hotfix branches are used for urgent fixes.

Example:

hotfix/fix-critical-error

## 6. Git Workflow

### Step 1: Switch to main

    git checkout main

### Step 2: Update local main

    git pull origin main

### Step 3: Create a feature branch

    git checkout -b feature/add-task-manager

### Step 4: Make code changes

Develop and test the required feature.

### Step 5: Stage changes

    git add .

### Step 6: Commit changes

    git commit -m "Add task manager feature"

### Step 7: Push feature branch

    git push -u origin feature/add-task-manager

### Step 8: Create Pull Request

Open GitHub and create a Pull Request from the feature branch into main.

### Step 9: Review and merge

Review the changes and merge the Pull Request into main.

## 7. Best Practices

- Keep main stable.
- Create separate branches for new features.
- Use meaningful commit messages.
- Test changes before merging.
- Use Pull Requests for code reviews.
- Avoid committing passwords or secrets.
