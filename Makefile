heroku-build:
	git push https://git.heroku.com/projectcallistodotorg.git HEAD:master -f
get-bootstrap:
	wget https://github.com/twbs/bootstrap/releases/download/v3.3.7/bootstrap-3.3.7-dist.zip -O- | bsdtar -C js/static -xvf-
get-jquery:
	wget https://code.jquery.com/jquery.min.js -Ojs/static/jquery.min.js
	wget https://code.jquery.com/jquery.min.map -Ojs/static/jquery.min.map
get-fontawesome:
	wget https://use.fontawesome.com/releases/v5.8.1/fontawesome-free-5.8.1-web.zip -O- | bsdtar -C js/static -xvf-
