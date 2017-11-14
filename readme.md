# project callisto dot org staging

## build

run a single build

```bash
bash build.sh
```

build on pre-commit

```bash
rsync --ignore-existing build.sh .git/hooks/pre-commit
```
