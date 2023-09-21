# install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# replace zsh config file in the system, don't forget to check the path is correct
cp ./.zshrc ~/.zshrc

# add custom oh-my-zsh theme config file in the system
cp ./zebxu.zsh-theme ~/.oh-my-zsh/themes/zebxu.zsh-theme

# install tmux
brew install tmux

# replace tmux config file in the system
cp ./.tmux.conf ~/.tmux.conf

