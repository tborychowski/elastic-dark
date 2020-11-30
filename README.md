elastic-dark
============

This just extends Roundcube's Elastic skin with some dark theme colours.

![](https://raw.githubusercontent.com/Skorpion/roundcube-elastic-dark/master/assets/mail-7.png)


## Installation
0. Make sure you have `Elastic` skin installed (it's part of the Roundcube now, so it should be there, but just in case).
1. In your `roundcube/skins` folder run this:
  ```sh
  git clone https://github.com/tborychowski/elastic-dark.git
  ```
  alternatively, if you don't have `git` installed, you can just get the zip instead:
  ```sh
  wget wget -O elastic-dark.zip https://github.com/tborychowski/elastic-dark/archive/master.zip
  unzip elastic-dark.zip
  mv elastic-dark-master elastic-dark
  ```
  Please note, that you may need to use `sudo` for some commands, depending on your setup.
  
2. Change the skin in `Settings/Interface` to `Elastic Dark`.
3. For login screen to work, you also need to update the `roundcube/config/config.inc.php` with:
  ```php
  $config['skin'] = 'elastic-dark';
  ```


## Credits
The whole css has been "borrowed" from [Skorpion/roundcube-elastic-dark](https://github.com/Skorpion/roundcube-elastic-dark) (with some small tweaks).
