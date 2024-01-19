ifneq (,$(wildcard ./.env))
    include .env
    export
    ENV_FILE_PARAM = --env-file .env
endif

export PATH := $(PATH):$(shell pwd)/bin

SHELL := env PATH=$(PATH) $(shell which bash)


.PHONY: help
help: ## Ask for help!
	@[ -f "./.env" ] && \
	grep -E '^[a-zA-Z_-]+(%|:).*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":"}; { printf "\033[36m%-30s\033[0m %s\n", $$2, substr($$3, 5)}' || \
	grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: cmd-exists-
cmd-exists-%:
	@hash $(*) > /dev/null 2>&1 || \
		(echo "ERROR: '$(*)' must be installed and available on your PATH."; exit 1)

.PHONY: require-env
require-env:
	@[ -f "./.env" ] || \
	(printf "\033[31m%-30s\n" 'ERROR: No `.env` file found in project root. Please supply a `.env` file.  Various example `.env` files can be found in ./${CONFIG_DIRECTORY} folder.'; exit 1)

################################################
#### Web
################################################
local-web: ## Run web services locally
	make require-env
	@bash -l -c 'nvm exec --silent npm run start'

local-build: ## Build web services locally
	make require-env
	@bash -l -c 'nvm exec --silent npm run build'