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
2. Change the skin in `Settings/Interface` to `Elastic Dark`.
3. For login screen to work, you also need to update the `roundcube/config/config.inc.php` with:
  ```php
  $config['skin'] = 'elastic-dark';
  ```


## Credits
The whole css has been "borrowed" from [Skorpion/roundcube-elastic-dark](https://github.com/Skorpion/roundcube-elastic-dark) (with some small tweaks).
