.PHONY: release

release:
ifeq ($(strip $(version)),)
	@echo "\033[31mERROR:\033[0;39m No version provided"
	@echo "\033[1;30mmake release version=1.0.0\033[0;39m"
else
	npm run build
	npm version $(version)
	npm publish
	git push origin internal
	git push origin --tags
endif
