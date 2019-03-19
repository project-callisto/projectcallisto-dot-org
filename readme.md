# PC

*(All commands given are assumed to be run from this base directory.)*

## Run
```
bundle exec jekyll serve
```

The site should be running at http://localhost:4000/.

## Setup

### Homebrew
Install instructions at [Homebrew's site](https://brew.sh).

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Ruby
The version of Ruby included with macOS is way too old for this. To install a usable version:

```
brew install ruby

# force bash (and the current session) to use the brew-provided ruby
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
. ~/.bash_profile
```

### Jekyll
```
gem install bundler jekyll
bundle install
```