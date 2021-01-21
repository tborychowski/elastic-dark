elastic-dark
============

This just extends Roundcube's [Elastic skin](https://github.com/roundcube/roundcubemail/tree/master/skins/elastic) with some dark theme colours.

![](https://raw.githubusercontent.com/Skorpion/roundcube-elastic-dark/master/assets/mail-7.png)


## Installation

#### 0. Make sure you have `Elastic` skin installed
It's part of the Roundcube now, so it should be there, but just in case.
This only extends the Elastic skin, by adding some additional css, but requires the base to be installed.

#### 1. Download the skin:
In your `roundcube/skins` folder run this:
```sh
git clone https://github.com/tborychowski/elastic-dark.git
```
alternatively, if you don't have `git` installed, you can just get the zip instead:
```sh
wget wget -O elastic-dark.zip https://github.com/tborychowski/elastic-dark/archive/master.zip
unzip elastic-dark.zip
mv elastic-dark-master elastic-dark
```
**Please note:** you may need to use `sudo` for some commands, depending on your setup.


#### 2. Update your Settings
Change the skin in Roundcube's `Settings/User Interface` to `Elastic Dark`.

#### 3. Login screen
For login screen to work, you also need to update the `roundcube/config/config.inc.php` with:
```php
$config['skin'] = 'elastic-dark';
```

#### 4. Emails with `!important` inline styles
Unfortunately that seems to require a manual edit to one of the RC core php files (or a js plugin that would fix that).
For the former solution open `roundcube/program/steps/mail/func.inc` and in `rcmail_html4inline` function add an entry to the `$replace` array: `'/!important/' => '',` (around line 1113), so that it looks like this:
```php
    $replace = array(
        // add comments around html and other tags
        '/(<!DOCTYPE[^>]*>)/i'          => '<!--\\1-->',
        '/(<\?xml[^>]*>)/i'             => '<!--\\1-->',
        '/(<\/?html[^>]*>)/i'           => '<!--\\1-->',
        '/(<\/?head[^>]*>)/i'           => '<!--\\1-->',
        '/(<title[^>]*>.*<\/title>)/Ui' => '<!--\\1-->',
        '/(<\/?meta[^>]*>)/i'           => '<!--\\1-->',
        // quote <? of php and xml files that are specified as text/html
        '/<\?/' => '&lt;?',
        '/\?>/' => '?&gt;',
        '/!important/' => '',
    );
```
Unfortunately, this needs to be re-applied after every update of the Roundcube.

## Credits
The whole css has been "borrowed" from [Skorpion/roundcube-elastic-dark](https://github.com/Skorpion/roundcube-elastic-dark) (with some small tweaks).
