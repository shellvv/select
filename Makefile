readme:
	@cat .README_HEADER.md > ./README.md
	@./node_modules/.bin/vuedoc.md --ignore-name --level 3 vx.vue >> ./README.md
	@cat .README_FOOTER.md >> ./README.md
