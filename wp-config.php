<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '&<mnbcBG3@jH]-QTkp48g*1Z,[BSGyMWtGA|cwE{&7Zi!`OK%m.f3l!6X>IOC #t' );
define( 'SECURE_AUTH_KEY',   'd8c{W(^-v,6f{LJw?k!LKhkeU9Xu?eM}-R:ts!Uq4WXM!]msG-V&aPN&>QCpNaX&' );
define( 'LOGGED_IN_KEY',     'W_,GFBhJ]^_2|_a)H1Yk?bmfIs! wKJ.T~B6KA&JnsY8E.amU,30A3W)DaeD!v1Q' );
define( 'NONCE_KEY',         'C[-k*Wv5}XRu%EReRuGbBVQD!>mz6#uNx|Oba -7z5T#9#X^8 %HBY]3d[sT7N9=' );
define( 'AUTH_SALT',         'xgx?M^v_2cmv#sl?>o|2R9]Id,JlP0I|dh&]b9C0{K/ht8B42O{-eK]:6(fi9Or8' );
define( 'SECURE_AUTH_SALT',  '<,sk%FyD|THj h_$4uJ^H&ncEmJ2/BThY~ [V=4SG+i6ie+$;son}0;[Y1OL?(O@' );
define( 'LOGGED_IN_SALT',    'EaJm)2|$9WRmAA=Mvd{b0W(x95uA/Vtt-lJJg)SGEH)IO~t^dKVYe,)8pd?F82y|' );
define( 'NONCE_SALT',        'pC/J!eT x,!9^WdYG78(6QQn,`$$%fi1#7%G2owsx5o2@/ `P ijFKc>aue2LLlo' );
define( 'WP_CACHE_KEY_SALT', '#tR;QRkJXu,K{99|LXDI`Ju<hh*o@-kYj%[<Ayclmb4s]uKNiESP_C/x{mvJ9@>k' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
