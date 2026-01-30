.PHONY: update-articles

# Generate RSS from JSON and update the gist
update-articles:
	node generate-rss.js
	gh gist edit 7f8dcda3bbe07d652f118d980a5f23a6 manual-articles.xml
	@echo "Gist updated: https://gist.github.com/vincentkoc/7f8dcda3bbe07d652f118d980a5f23a6"
