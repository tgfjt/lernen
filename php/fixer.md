# PHP-CS-Fixer

https://github.com/FriendsOfPHP/PHP-CS-Fixer

## only Check

dry-run

```
$ php-cs-fixer fix path/to/sample.php --dry-run

   1) /Users/tgfjt/sample.php
Checked all files in 0.152 seconds, 8.250 MB memory used
```

dry-run, verbose

```
$ php-cs-fixer fix path/to/sample.php --dry-run --verbose

F
Legend: ?-unknown, I-invalid file syntax, file ignored, .-no changes, F-fixed, E-error
   1) /Users/tgfjt/sample.php (braces)
Checked all files in 0.154 seconds, 8.250 MB memory used
```

dry-run, verbose, diff

```
$ php-cs-fixer fix path/to/sample.php --dry-run --verbose --diff

F
Legend: ?-unknown, I-invalid file syntax, file ignored, .-no changes, F-fixed, E-error
   1) /Users/tgfjt/sample.php (braces)
      ---------- begin diff ----------
      --- Original
      +++ New
      @@ @@
      <?php

      -class Sample {
      -
      +class Sample
      +{
       }
      ---------- end diff ----------

Checked all files in 0.156 seconds, 8.250 MB memory used
```