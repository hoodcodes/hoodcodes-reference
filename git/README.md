# Git Reference - Tips & Notes

[Git Official Page](https://git-scm.com/)

### Installation

### Setting up ssh certificate

### Usage

###### Cloning a Repo

##### Creating a new Repo

##### Creating good commit messages

##### Create new branch

##### list branches

##### Checkout branch

##### Fetching and Pulling

##### Stage branch changes

##### commit staged changes

##### merge branches

##### deleting a branch

##### deleting commits

##### Merge Conflicts

### Patches

### Cherry Picking

### Branching Strategies

### Hooks

### Stashing

Stashing your work is a valuable tool. You can create named stashes and then retrieve them.

to create a named stash:
`git stash push -m "my_stash"`

to list all your stashes:
`git stash list`

to apply a stash and remove it from the stash stack:
`git stash pop stash@{n}`

to apply a stash and keep it in the stash stack:
`git stash apply stash@{n}`

where `n` is the index of the stashed change
