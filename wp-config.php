<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'lycusArt' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'd}-@]4GQK2&1]>8A4d!iRnEH{2b3_+m$dkbU8AU1e7!#bO^QE2!d,~]clJOYt9+,' );
define( 'SECURE_AUTH_KEY',  '82^YK,~ULZgDNwpG};@AaEaaps=&]e`}&@K5K-t8@+>{;GC8ibiA:G67gfJ<Hk.x' );
define( 'LOGGED_IN_KEY',    'z-Qq4@Z+9#})FnmX=YAFaEkVKtf_jX433ixpV ;M2w:~z+ghX9Y:DkB9x]00A3jG' );
define( 'NONCE_KEY',        'OkFKM^}`0htTB~Jr2}B!!<1P]-UUQq6L|<C>$8.Zz<[OU 2wnmQy~[imNe$$5Zma' );
define( 'AUTH_SALT',        'TOH8A[b5[(w:uoZSqRHxEk,#e%0#^3DEzg6N?4q.4D}n@hv>C~<bMH@75AO@iXS}' );
define( 'SECURE_AUTH_SALT', '(J^I1EjT(2M<d^&z.a3^Ko(=lsTn2zs_)zcB8Y~_5 Iz<ZU95bW[S;k`#R{A7FYn' );
define( 'LOGGED_IN_SALT',   'e-_qr-_j-o(82Tq/+`LS-m+uk]9&V,-$~#3[8SN?s_ &1y$X{1tk0%NfdD]GECN0' );
define( 'NONCE_SALT',       'MQNyWP/;lBd6(we)2SV9c&0^NQ}.0*&zAvll$%&bKt^Z9*@irS/r}yF{T.$G&@Fz' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
