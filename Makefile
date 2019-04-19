heroku-build:
	git push https://git.heroku.com/projectcallistodotorg.git HEAD:master -f
get-bootstrap:
	wget https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css -Ocss/static/bootstrap.min.css
	wget https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css -Ocss/static/font-awesome.min.css
	wget https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js
get-jquery:
	wget https://code.jquery.com/jquery.min.js -Ojs/static/jquery.min.js
