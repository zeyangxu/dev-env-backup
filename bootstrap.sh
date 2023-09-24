# install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/bytedance/.zprofile

eval "$(/opt/homebrew/bin/brew shellenv)"

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

# install tmux plugins
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-completions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-completions
brew install autojump

# disable git status to improve performance
git config --add --global oh-my-zsh.hide-status 1
git config --add --global oh-my-zsh.hide-dirty 1

# install tmux
brew install tmux

# replace tmux config file in the system
cp ./.tmux.conf ~/.tmux.conf

# press ctrl-b I to install tmux plugins inside tmux

# neovim
brew install neovim

# lunarvim
LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)

# download nvim config from github
git clone https://github.com/zeyangxu/nvim-config.git nvim
cp -rf ./nvim ~/.config/nvim

# download lvim config from github
git clone https://github.com/zeyangxu/lvim-config.git lvim
cp -rf ./lvim/config.lua ~/.config/lvim/config.lua

# rush.js
npm install -g @microsoft/rush
