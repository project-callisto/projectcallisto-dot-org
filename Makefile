auto-build:
	rsync build.sh .git/hooks/pre-commit
	chmod +x .git/hooks/pre-commit

remove-auto-build:
	rm .git/hooks/pre-commit
