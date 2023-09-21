# install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# git
brew install git

# nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

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

# neovim
brew install neovim

# lunarvim
LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)

# download nvim config from github
git clone https://github.com/zeyangxu/nvim-config.git nvim
cp -rf ./nvim ~/.config/nvim

# download lvim config from github
git clone https://github.com/zeyangxu/lvim-config.git lvim
cp -rf ./lvim ~/.config/lvim

