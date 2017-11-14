auto-build:
	rsync --ignore-existing build.sh .git/hooks/pre-commit
	chmod +x .git/hooks/pre-commit
