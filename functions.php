<?php
/**
 * Functions and definitions
 *
 * @link https://ibict.br
 *
 * @package WordPress
 * @since RCC 1.0
 */

// This theme requires WordPress 5.3 or later.
if ( version_compare( $GLOBALS['wp_version'], '5.3', '<' ) ) {
	require get_template_directory() . '/inc/back-compat.php';
}

if ( ! function_exists( 'twenty_twenty_one_setup' ) ) {
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 *
	 * @since RCC 1.0
	 *
	 * @return void
	 */
	function twenty_twenty_one_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Twenty Twenty-One, use a find and replace
		 * to change 'twentytwentyone' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'twentytwentyone', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * This theme does not use a hard-coded <title> tag in the document head,
		 * WordPress will provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/**
		 * Add post-formats support.
		 */
		add_theme_support(
			'post-formats',
			array(
				'link',
				'aside',
				'gallery',
				'image',
				'quote',
				'status',
				'video',
				'audio',
				'chat',
			)
		);

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 1568, 9999 );

		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary menu', 'twentytwentyone' ),
				'footer'  => __( 'Secondary menu', 'twentytwentyone' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
				'navigation-widgets',
			)
		);

		/*
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		$logo_width  = 300;
		$logo_height = 100;

		add_theme_support(
			'custom-logo',
			array(
				'height'               => $logo_height,
				'width'                => $logo_width,
				'flex-width'           => true,
				'flex-height'          => true,
				'unlink-homepage-logo' => true,
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add support for Block Styles.
		add_theme_support( 'wp-block-styles' );

		// Add support for full and wide align images.
		add_theme_support( 'align-wide' );

		// Add support for editor styles.
		add_theme_support( 'editor-styles' );
		$background_color = get_theme_mod( 'background_color', 'D1E4DD' );
		if ( 127 > Twenty_Twenty_One_Custom_Colors::get_relative_luminance_from_hex( $background_color ) ) {
			add_theme_support( 'dark-editor-style' );
		}

		$editor_stylesheet_path = './assets/css/style-editor.css';

		// Note, the is_IE global variable is defined by WordPress and is used
		// to detect if the current browser is internet explorer.
		global $is_IE;
		if ( $is_IE ) {
			$editor_stylesheet_path = './assets/css/ie-editor.css';
		}

		// Enqueue editor styles.
		add_editor_style( $editor_stylesheet_path );

		// Add custom editor font sizes.
		add_theme_support(
			'editor-font-sizes',
			array(
				array(
					'name'      => esc_html__( 'Extra small', 'twentytwentyone' ),
					'shortName' => esc_html_x( 'XS', 'Font size', 'twentytwentyone' ),
					'size'      => 16,
					'slug'      => 'extra-small',
				),
				array(
					'name'      => esc_html__( 'Small', 'twentytwentyone' ),
					'shortName' => esc_html_x( 'S', 'Font size', 'twentytwentyone' ),
					'size'      => 18,
					'slug'      => 'small',
				),
				array(
					'name'      => esc_html__( 'Normal', 'twentytwentyone' ),
					'shortName' => esc_html_x( 'M', 'Font size', 'twentytwentyone' ),
					'size'      => 20,
					'slug'      => 'normal',
				),
				array(
					'name'      => esc_html__( 'Large', 'twentytwentyone' ),
					'shortName' => esc_html_x( 'L', 'Font size', 'twentytwentyone' ),
					'size'      => 24,
					'slug'      => 'large',
				),
				array(
					'name'      => esc_html__( 'Extra large', 'twentytwentyone' ),
					'shortName' => esc_html_x( 'XL', 'Font size', 'twentytwentyone' ),
					'size'      => 40,
					'slug'      => 'extra-large',
				),
				array(
					'name'      => esc_html__( 'Huge', 'twentytwentyone' ),
					'shortName' => esc_html_x( 'XXL', 'Font size', 'twentytwentyone' ),
					'size'      => 96,
					'slug'      => 'huge',
				),
				array(
					'name'      => esc_html__( 'Gigantic', 'twentytwentyone' ),
					'shortName' => esc_html_x( 'XXXL', 'Font size', 'twentytwentyone' ),
					'size'      => 144,
					'slug'      => 'gigantic',
				),
			)
		);

		// Custom background color.
		add_theme_support(
			'custom-background',
			array(
				'default-color' => 'd1e4dd',
			)
		);

		// Editor color palette.
		$black     = '#000000';
		$dark_gray = '#28303D';
		$gray      = '#39414D';
		$green     = '#D1E4DD';
		$blue      = '#D1DFE4';
		$purple    = '#D1D1E4';
		$red       = '#E4D1D1';
		$orange    = '#E4DAD1';
		$yellow    = '#EEEADD';
		$white     = '#FFFFFF';

		add_theme_support(
			'editor-color-palette',
			array(
				array(
					'name'  => esc_html__( 'Black', 'twentytwentyone' ),
					'slug'  => 'black',
					'color' => $black,
				),
				array(
					'name'  => esc_html__( 'Dark gray', 'twentytwentyone' ),
					'slug'  => 'dark-gray',
					'color' => $dark_gray,
				),
				array(
					'name'  => esc_html__( 'Gray', 'twentytwentyone' ),
					'slug'  => 'gray',
					'color' => $gray,
				),
				array(
					'name'  => esc_html__( 'Green', 'twentytwentyone' ),
					'slug'  => 'green',
					'color' => $green,
				),
				array(
					'name'  => esc_html__( 'Blue', 'twentytwentyone' ),
					'slug'  => 'blue',
					'color' => $blue,
				),
				array(
					'name'  => esc_html__( 'Purple', 'twentytwentyone' ),
					'slug'  => 'purple',
					'color' => $purple,
				),
				array(
					'name'  => esc_html__( 'Red', 'twentytwentyone' ),
					'slug'  => 'red',
					'color' => $red,
				),
				array(
					'name'  => esc_html__( 'Orange', 'twentytwentyone' ),
					'slug'  => 'orange',
					'color' => $orange,
				),
				array(
					'name'  => esc_html__( 'Yellow', 'twentytwentyone' ),
					'slug'  => 'yellow',
					'color' => $yellow,
				),
				array(
					'name'  => esc_html__( 'White', 'twentytwentyone' ),
					'slug'  => 'white',
					'color' => $white,
				),
			)
		);

		add_theme_support(
			'editor-gradient-presets',
			array(
				array(
					'name'     => esc_html__( 'Purple to yellow', 'twentytwentyone' ),
					'gradient' => 'linear-gradient(160deg, ' . $purple . ' 0%, ' . $yellow . ' 100%)',
					'slug'     => 'purple-to-yellow',
				),
				array(
					'name'     => esc_html__( 'Yellow to purple', 'twentytwentyone' ),
					'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $purple . ' 100%)',
					'slug'     => 'yellow-to-purple',
				),
				array(
					'name'     => esc_html__( 'Green to yellow', 'twentytwentyone' ),
					'gradient' => 'linear-gradient(160deg, ' . $green . ' 0%, ' . $yellow . ' 100%)',
					'slug'     => 'green-to-yellow',
				),
				array(
					'name'     => esc_html__( 'Yellow to green', 'twentytwentyone' ),
					'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $green . ' 100%)',
					'slug'     => 'yellow-to-green',
				),
				array(
					'name'     => esc_html__( 'Red to yellow', 'twentytwentyone' ),
					'gradient' => 'linear-gradient(160deg, ' . $red . ' 0%, ' . $yellow . ' 100%)',
					'slug'     => 'red-to-yellow',
				),
				array(
					'name'     => esc_html__( 'Yellow to red', 'twentytwentyone' ),
					'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $red . ' 100%)',
					'slug'     => 'yellow-to-red',
				),
				array(
					'name'     => esc_html__( 'Purple to red', 'twentytwentyone' ),
					'gradient' => 'linear-gradient(160deg, ' . $purple . ' 0%, ' . $red . ' 100%)',
					'slug'     => 'purple-to-red',
				),
				array(
					'name'     => esc_html__( 'Red to purple', 'twentytwentyone' ),
					'gradient' => 'linear-gradient(160deg, ' . $red . ' 0%, ' . $purple . ' 100%)',
					'slug'     => 'red-to-purple',
				),
			)
		);

		/*
		* Adds starter content to highlight the theme on fresh sites.
		* This is done conditionally to avoid loading the starter content on every
		* page load, as it is a one-off operation only needed once in the customizer.
		*/
		if ( is_customize_preview() ) {
			require get_template_directory() . '/inc/starter-content.php';
			add_theme_support( 'starter-content', twenty_twenty_one_get_starter_content() );
		}

		// Add support for responsive embedded content.
		add_theme_support( 'responsive-embeds' );

		// Add support for custom line height controls.
		add_theme_support( 'custom-line-height' );

		// Add support for experimental link color control.
		add_theme_support( 'experimental-link-color' );

		// Add support for experimental cover block spacing.
		add_theme_support( 'custom-spacing' );

		// Add support for custom units.
		// This was removed in WordPress 5.6 but is still required to properly support WP 5.5.
		add_theme_support( 'custom-units' );
	}
}
add_action( 'after_setup_theme', 'twenty_twenty_one_setup' );

/**
 * Register widget area.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 *
 * @return void
 */
function twenty_twenty_one_widgets_init() {

	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer', 'twentytwentyone' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here to appear in your footer.', 'twentytwentyone' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'twenty_twenty_one_widgets_init' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @global int $content_width Content width.
 *
 * @return void
 */
function twenty_twenty_one_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'twenty_twenty_one_content_width', 750 );
}
add_action( 'after_setup_theme', 'twenty_twenty_one_content_width', 0 );

/**
 * Enqueue scripts and styles.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twenty_twenty_one_scripts() {
	// Note, the is_IE global variable is defined by WordPress and is used
	// to detect if the current browser is internet explorer.
	global $is_IE, $wp_scripts;
	if ( $is_IE ) {
		// If IE 11 or below, use a flattened stylesheet with static values replacing CSS Variables.
		wp_enqueue_style( 'twenty-twenty-one-style', get_template_directory_uri() . '/assets/css/ie.css', array(), wp_get_theme()->get( 'Version' ) );
	} else {
		// If not IE, use the standard stylesheet.
		//wp_enqueue_style( 'twenty-twenty-one-style', get_template_directory_uri() . '/style.css', array(), wp_get_theme()->get( 'Version' ) );
	}

	// RTL styles.
	wp_style_add_data( 'twenty-twenty-one-style', 'rtl', 'replace' );

	// Print styles.
	wp_enqueue_style( 'twenty-twenty-one-print-style', get_template_directory_uri() . '/assets/css/print.css', array(), wp_get_theme()->get( 'Version' ), 'print' );

	//Colocando css e js dos tema RCC
	$ver = time();
	wp_register_style( 'dsgov-class', get_template_directory_uri() . '/assets/css/dsgov.css', false, $ver );
	wp_enqueue_style ( 'dsgov-class' );

	wp_register_style( 'dsgovserprodesign-class', "https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/fonts/rawline/css/rawline.css", false, $ver );
	wp_enqueue_style ( 'dsgovserprodesign-class' );

	wp_register_style( 'googleapis-class', "https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&amp;display=swap", false, $ver );
	wp_enqueue_style ( 'googleapis-class' );

	wp_register_style( 'font-awesome-class', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css", false, $ver );
	wp_enqueue_style ( 'font-awesome-class' );

	wp_register_style( 'contrast-class', get_template_directory_uri() . '/assets/css/contrast.css', false, $ver );
	wp_enqueue_style ( 'contrast-class' );

	wp_register_style( 'rccstyle-class', get_template_directory_uri() . '/assets/css/rccstyle.css', false, $ver );
	wp_enqueue_style ( 'rccstyle-class' );

	wp_register_style( 'rede-moara-class', get_template_directory_uri() . '/assets/css/rede-moara-style.css', false, $ver );
	wp_enqueue_style ( 'rede-moara-class' );

	wp_enqueue_script( 'dsgov-js', get_template_directory_uri() . '/assets/js/dsgov.js' , array('jquery'), $ver, true);
	wp_enqueue_script( 'geral-js', get_template_directory_uri() . '/assets/js/geral.js' , array('jquery'), $ver);
	wp_enqueue_script( 'geral-footer-js', get_template_directory_uri() . '/assets/js/geral-footer.js' , array('jquery'), $ver, true);
	//Fim

	// Threaded comment reply styles.
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	// Register the IE11 polyfill file.
	wp_register_script(
		'twenty-twenty-one-ie11-polyfills-asset',
		get_template_directory_uri() . '/assets/js/polyfills.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);

	// Register the IE11 polyfill loader.
	wp_register_script(
		'twenty-twenty-one-ie11-polyfills',
		null,
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
	wp_add_inline_script(
		'twenty-twenty-one-ie11-polyfills',
		wp_get_script_polyfill(
			$wp_scripts,
			array(
				'Element.prototype.matches && Element.prototype.closest && window.NodeList && NodeList.prototype.forEach' => 'twenty-twenty-one-ie11-polyfills-asset',
			)
		)
	);

	// Main navigation scripts.
	if ( has_nav_menu( 'primary' ) ) {
		wp_enqueue_script(
			'twenty-twenty-one-primary-navigation-script',
			get_template_directory_uri() . '/assets/js/primary-navigation.js',
			array( 'twenty-twenty-one-ie11-polyfills' ),
			wp_get_theme()->get( 'Version' ),
			true
		);
	}

	// Responsive embeds script.
	wp_enqueue_script(
		'twenty-twenty-one-responsive-embeds-script',
		get_template_directory_uri() . '/assets/js/responsive-embeds.js',
		array( 'twenty-twenty-one-ie11-polyfills' ),
		wp_get_theme()->get( 'Version' ),
		true
	);

	// Registra estilo e scripts do plugin de cookies consent 
	wp_enqueue_style(
		'osano-cookies-consent-style',
		'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css',
		array(),
		wp_get_theme()->get( 'Version' )
	);
	// Registra script do plugin de cookies consent 
	wp_enqueue_script(
		'osano-cookies-consent-script',
		'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js',
		array(),
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'wp_enqueue_scripts', 'twenty_twenty_one_scripts' );

/**
 * Enqueue block editor script.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twentytwentyone_block_editor_script() {

	wp_enqueue_script( 'twentytwentyone-editor', get_theme_file_uri( '/assets/js/editor.js' ), array( 'wp-blocks', 'wp-dom' ), wp_get_theme()->get( 'Version' ), true );
}

add_action( 'enqueue_block_editor_assets', 'twentytwentyone_block_editor_script' );

/**
 * Fix skip link focus in IE11.
 *
 * This does not enqueue the script because it is tiny and because it is only for IE11,
 * thus it does not warrant having an entire dedicated blocking script being loaded.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @link https://git.io/vWdr2
 */
function twenty_twenty_one_skip_link_focus_fix() {

	// If SCRIPT_DEBUG is defined and true, print the unminified file.
	if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
		echo '<script>';
		include get_template_directory() . '/assets/js/skip-link-focus-fix.js';
		echo '</script>';
	}

	// The following is minified via `npx terser --compress --mangle -- assets/js/skip-link-focus-fix.js`.
	?>
	<script>
	/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",(function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}),!1);
	</script>
	<?php
}
add_action( 'wp_print_footer_scripts', 'twenty_twenty_one_skip_link_focus_fix' );

/**
 * Enqueue non-latin language styles.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twenty_twenty_one_non_latin_languages() {
	$custom_css = twenty_twenty_one_get_non_latin_css( 'front-end' );

	if ( $custom_css ) {
		wp_add_inline_style( 'twenty-twenty-one-style', $custom_css );
	}
}
add_action( 'wp_enqueue_scripts', 'twenty_twenty_one_non_latin_languages' );

// SVG Icons class.
require get_template_directory() . '/classes/class-twenty-twenty-one-svg-icons.php';

// Custom color classes.
require get_template_directory() . '/classes/class-twenty-twenty-one-custom-colors.php';
new Twenty_Twenty_One_Custom_Colors();

// Enhance the theme by hooking into WordPress.
require get_template_directory() . '/inc/template-functions.php';

// Menu functions and filters.
require get_template_directory() . '/inc/menu-functions.php';

// Custom template tags for the theme.
require get_template_directory() . '/inc/template-tags.php';

// Customizer additions.
require get_template_directory() . '/classes/class-twenty-twenty-one-customize.php';
new Twenty_Twenty_One_Customize();

// Block Patterns.
require get_template_directory() . '/inc/block-patterns.php';

// Block Styles.
require get_template_directory() . '/inc/block-styles.php';

// Dark Mode.
require_once get_template_directory() . '/classes/class-twenty-twenty-one-dark-mode.php';
new Twenty_Twenty_One_Dark_Mode();

/**
 * Enqueue scripts for the customizer preview.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twentytwentyone_customize_preview_init() {
	wp_enqueue_script(
		'twentytwentyone-customize-helpers',
		get_theme_file_uri( '/assets/js/customize-helpers.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);

	wp_enqueue_script(
		'twentytwentyone-customize-preview',
		get_theme_file_uri( '/assets/js/customize-preview.js' ),
		array( 'customize-preview', 'customize-selective-refresh', 'jquery', 'twentytwentyone-customize-helpers' ),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'customize_preview_init', 'twentytwentyone_customize_preview_init' );

/**
 * Enqueue scripts for the customizer.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twentytwentyone_customize_controls_enqueue_scripts() {

	wp_enqueue_script(
		'twentytwentyone-customize-helpers',
		get_theme_file_uri( '/assets/js/customize-helpers.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'customize_controls_enqueue_scripts', 'twentytwentyone_customize_controls_enqueue_scripts' );

/**
 * Calculate classes for the main <html> element.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twentytwentyone_the_html_classes() {
	/**
	 * Filters the classes for the main <html> element.
	 *
	 * @since Twenty Twenty-One 1.0
	 *
	 * @param string The list of classes. Default empty string.
	 */
	$classes = apply_filters( 'twentytwentyone_html_classes', '' );
	if ( ! $classes ) {
		return;
	}
	echo 'class="' . esc_attr( $classes ) . '"';
}

/**
 * Add "is-IE" class to body if the user is on Internet Explorer.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twentytwentyone_add_ie_class() {
	?>
	<script>
	if ( -1 !== navigator.userAgent.indexOf( 'MSIE' ) || -1 !== navigator.appVersion.indexOf( 'Trident/' ) ) {
		document.body.classList.add( 'is-IE' );
	}
	</script>
	<?php
}
add_action( 'wp_footer', 'twentytwentyone_add_ie_class' );

/*
*****************************************************************
Adicionando funções do tema
*/

add_shortcode('shortcode_breadcrumb', 'dsgov_breadcrumb');

function dsgov_breadcrumb() {
	echo '<div class="col pt-3 pb-3">';
	echo '<div class="br-breadcrumb">';
	echo '<ul class="crumb-list">';
	//casinha home
	echo '<li class="crumb home">';
	$onclick = " onclick=\"window.location.href='".home_url()."'\" ";
	echo '<div class="br-button circle"'. $onclick .'><span class="sr-only">Página inicial</span><i class="icon fas fa-home"></i></div>';
	echo '</li>';

	if (is_category() || is_single() || is_tag()) {
		echo '<li class="crumb"><i class="icon fas fa-chevron-right"></i>';
		//the_category(' &bull; ');
		echo '<a href="'.get_post_type_archive_link( 'post' ).'"> Post </a>';
		echo '</li>';

		if (is_single()) {
			echo '<li class="crumb" data-active="active"><i class="icon fas fa-chevron-right"></i><span>';
			the_title();
			echo '</span></li>';
		} else {
			echo '<li class="crumb" data-active="active"><i class="icon fas fa-chevron-right"></i><span>';
			echo '<a href="'.get_post_type_archive_link( 'archive' ).'"> '.get_the_archive_title().' </a>';
			echo '</span></li>';
		}
	} elseif (is_page()) {
		echo '<li class="crumb" data-active="active"><i class="icon fas fa-chevron-right"></i><span>';
		the_title();
		echo '</span></li>';
	} elseif (is_search()) {
		echo '&nbsp;&nbsp;<img src="/wp-content/uploads/2021/09/seta.png">&nbsp;&nbsp;Resultados de busca por ... ';
		echo '"<em>';
		echo the_search_query();
		echo '</em>"';
	}
	echo '</div></div>';
}


add_shortcode('shortcode_breadcrumb_redes', 'dsgov_breadcrumb_redes');
#Ex: [shortcode_breadcrumb_redes rede_slug="rede-de-suporte" rede_name="Rede de Suporte" categoria_slug="bolsas" categoria_name="Bolsas" categoria_rede="suporte_categoria"] 
function dsgov_breadcrumb_redes($params) {

	$var = shortcode_atts([
			'rede_slug' => 'rede-de-suporte',
			'rede_name' => 'Rede de Suporte',
			'categoria_slug' => 'bolsas',
			'categoria_name' => 'Bolsas',
			'categoria_rede' => 'suporte_categoria',
			'type' => 'post',
	], $params);

	echo '<div class="col pt-3 pb-3">';
	echo '<div class="br-breadcrumb">';
	echo '<ul class="crumb-list">';
	//casinha home
	echo '<li class="crumb home">';
	$onclick = " onclick=\"window.location.href='".home_url()."'\" ";
	echo '<div class="br-button circle"'. $onclick .'><span class="sr-only">Página inicial</span><i class="icon fas fa-home"></i></div>';
	echo '</li>';

	echo '<li class="crumb"><i class="icon fas fa-chevron-right"></i>';
	echo '<a href="'.get_post_type_archive_link( $var['rede_slug'] ).'"> '.$var['rede_name'].' </a>';
	echo '</li>';

	if($var['type'] == 'post' || $var['type'] == 'taxonomy') {
		echo '<li class="crumb" data-active="active"><i class="icon fas fa-chevron-right"></i><span>';
		echo '<a href="'.get_site_url().'/'.$var['categoria_rede'].'/'.$var['categoria_slug'].'"> '.$var['categoria_name'].' </a>';
		echo '</span></li>';
	}

	if($var['type'] == 'post') {
		echo '<li class="crumb" data-active="active"><i class="icon fas fa-chevron-right"></i><span>';
		the_title();
		echo '</span></li>';
	}


	echo '</div></div>';
}

/*  
 * -- Novo formato para as imagens do cardápio --
*/
function thumbnail_post() {
	add_image_size('thumbnail_post', 1200, 400, true);
}
//add_action('after_setup_theme', 'thumbnail_post');


function thumbnail_blog() {
	add_image_size('thumbnail_blog', 253, 158, true);
}
//add_action('after_setup_theme', 'thumbnail_blog');

function thumbnail_redes() {
	add_image_size('thumbnail_redes', 300, 300, true);
}
add_action('after_setup_theme', 'thumbnail_redes');

function thumbnail_redes_retangular() {
	add_image_size('thumbnail_redes_retangular', 450, 250, true);
}
add_action('after_setup_theme', 'thumbnail_redes_retangular');

/*  
 * -- Funções para template do post --
*/
function funcao_publicado_em() {
	//<time class="entry-date published updated" datetime="2021-10-20T19:04:17-03:00">20 de outubro de 2021</time>
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

	$time_string = sprintf(
		$time_string,
		esc_attr( get_the_date( DATE_W3C ) ), //mostrado dentro da tag datetime no html
		esc_html( get_the_date( "d/m/Y H:i") ) //mostrado no post
	);
	echo '<span class="posted-on posted-rcc">';
	printf(
		/* translators: %s: Publish date. */
		'Publicado em %s',
		$time_string // phpcs:ignore WordPress.Security.EscapeOutput
	);
	echo '</span>';
}

function funcao_post_footer() {
	if ( has_category() || has_tag() ) {

        echo '<div class="post-taxonomies cat-links-rcc cat-links-moara">';

        /* translators: Used between list items, there is a space after the comma. */
        $categories_list = get_the_category_list( __( ', ', 'twentytwentyone' ) );
        if ( $categories_list ) {
          printf(
            /* translators: %s: List of categories. */
            '<span class="cat-links">' . esc_html__( 'Categorized as %s', 'twentytwentyone' ) . ' </span>',
            $categories_list // phpcs:ignore WordPress.Security.EscapeOutput
          );
        }
		echo '</div>';
		echo '<div class="post-taxonomies tag-links-rcc">';
        /* translators: Used between list items, there is a space after the comma. */
        $tags_list = get_the_tag_list( '', __( ' ', 'twentytwentyone' ) );
        if ( $tags_list ) {
          printf(
            /* translators: %s: List of tags. */
            //'<span class="tags-links">' . esc_html__( 'Tagged %s', 'twentytwentyone' ) . '</span>',
            $tags_list // phpcs:ignore WordPress.Security.EscapeOutput
          );
        }
        echo '</div>';
	}


	// Edit post link.
	edit_post_link(
		sprintf(
		/* translators: %s: Name of current post. Only visible to screen readers. */
		esc_html__( 'Edit %s', 'twentytwentyone' ),
		'<span class="screen-reader-text">' . get_the_title() . '</span>'
		),
		'<span class="edit-link">',
		'</span><br>'
	);
}

add_shortcode('shortcode_social_links', 'exibir_social_links');

function exibir_social_links() {
	echo '<div class="social-links">';
	echo '<label>Compartilhe: </label>';
	echo '<a href="http://www.facebook.com/sharer.php?u='.get_the_permalink().'" title="Facebook" class="">';
	echo '<span class="fab fa-facebook-f"></span>';
	echo '</a>';
	
	echo '<a href="https://twitter.com/share?text='.get_the_title().'"&amp;url='.get_the_permalink().'" title="Twitter" class="">';
	echo '<span class="fab fa-twitter"></span>';
	echo '</a>';

	echo '<a class="link-clipboard" onclick="event.preventDefault()" title="Copiar para área de transferência" href="'.get_the_permalink().'">';
	echo '<span class="fas fa-link"></span>';
	echo '</a>';
	
	// echo '<a class="toggle-social-links">';
	// echo '<span class="fas fa-share-alt"></span>';
	// echo '<span class="fas fa-times"></span>';
	// echo '</a>';
	echo '</div>';
}

/************************************************************************************************REDES */
/* Função para padronizar a chamada de custom post types por categoria e subcategoria
 * https://wordpress.stackexchange.com/questions/23136/get-custom-post-type-by-category-in-a-page-template */

function meu_arrr_custom_loop($r_type = 'post', $r_post_num, $r_tax = 'category', $r_terms = 'featured')
{
	$args = array(
		'showposts' => $r_post_num,
		'order' => "ASC",
		'orderby' => "title",
		'tax_query' => array(
			array(
				'post_type' => $r_type,
				'taxonomy' => $r_tax,
				'field' => 'slug',
				'terms' => array(
					$r_terms
				),
				'include_children' => false,
			)
		)
	);
	$the_query = new WP_Query( $args );
	
	// The Loop
	if ( $the_query->have_posts() ) {
		echo '<ol>';
		while ( $the_query->have_posts() ) {
			echo '<li>';
			$the_query->the_post();
			
			$como_usar = get_field('como_usar');
			$link = get_title();

			if ( $como_usar && isset($como_usar['url']) )
				$link = '<a href="' . $como_usar['url'] . '" target="_blank">'. get_title() . '</a>';
			
			?>
			<div onmouseover="mouseOver(this);" onmouseout="mouseOut();">
				<?php echo $link; ?>
  				<span class='d-none'><?php echo wp_trim_words(get_the_excerpt(), 120) ?></span>
			</div>
			<?php
			echo '</li>';
		}
		echo '</ol>';
	} else {
		//echo '<br>no posts found';
	}
	/* Restore original Post Data */
	wp_reset_postdata();
}

/**
 * Função genérica para gerar o acordeão da página principal de acordo com a tipo do post ($r_type) e suas respectivas categorias ($r_tax)
* Lista:
* rede-de-suporte	suporte
* rede-de-pesquisa	pesquisa
*/
function gerar_redes_principal($r_type, $r_tax)
{
	/* https://wordpress.stackexchange.com/a/215963 */
	$args = array(
		'taxonomy'	=> $r_tax,
		'orderby'	=> 'name',
		'parent'	=> 0, /* garantir que não trará as filhas */
	);

	$allthecats = get_categories($args);
	//$categorias_id = wp_list_pluck($allthecats, 'term_id');
	//$categorias_name = wp_list_pluck($allthecats, 'name');
	$categorias_array = wp_list_pluck($allthecats, 'name', 'term_id');

	echo '<div class="texto-hover" id="texto-hover-'.$r_type.'"></div>';
	echo '<div class="br-accordion" single="single">';
	
	$i=0;
	foreach ($categorias_array as $categoria_id => $categoria) {
		?>
		<div class="item">
			<button class="header" type="button" aria-controls="id<?php echo $i; ?>">
				<span class="title titulo-redes"><?php echo $categoria; ?></span>
				<span class="icon">
					<i class="fas fa-angle-down" aria-hidden="true"></i>
				</span>
			</button>
		</div>
		<div class="content conteudo-redes" id="id<?php echo $i; ?>">

			<?php if (strlen(category_description( $categoria_id )) > 1 ) {?>
				<span class="ajuda-redes"><i class="fas fa-info-circle" aria-hidden="true"></i> <?php echo category_description( $categoria_id ); ?> </span>
			<?php } ?>
			
			<?php

			$filhos_args = array(
				'taxonomy'	=> $r_tax,
				'orderby'	=> 'name',
				'parent'	=> $categoria_id,
			);

			$filhos_categorias  = get_categories($filhos_args);
			$filhos_lista = wp_list_pluck($filhos_categorias, 'name');

			if (sizeof($filhos_lista) > 0) {
				foreach ($filhos_lista as $categoria_filho) {
				?>
					<span class="icon" style='color: #1351b4;'><i class="fas fa-plus" aria-hidden="true"></i></span>
					<span class="title subtitulo-redes"><?php echo $categoria_filho; ?></span>
					
					<?php
					meu_arrr_custom_loop($r_type, -1, $r_tax, $categoria_filho);
					?>

				<?php 
				} //fechamento do foreach
			} else {
				meu_arrr_custom_loop($r_type, -1, $r_tax, $categoria);
			}

			?>
		</div>
		<?php
		$i += 1;
		
	} // fim do foreach
	echo '</div>';
}

/**
 * Shortcode das redes, criados com função anônima
 */
// add_shortcode('shortcode_redes_suporte', function () {
// 	gerar_redes_principal('rede-de-suporte', 'suporte_categoria_nova');
// });

// add_shortcode('shortcode_redes_pesquisa', function () {
// 	gerar_redes_principal('rede-de-pesquisa', 'pesquisa_categoria');
// });

// add_shortcode('shortcode_redes_formacao', function () {
// 	gerar_redes_principal('rede-de-formacao', 'formacao_categoria');
// });

// add_shortcode('shortcode_redes_inovacao', function () {
// 	gerar_redes_principal('rede-de-inovacao', 'inovacao_categoria');
// });

// add_shortcode('shortcode_redes_produto', function () {
// 	gerar_redes_principal('rede-de-produto', 'produto_categoria');
// });

function chama_shortcode_redes($params) {
	$var = shortcode_atts([
			'rede_slug' => 'rede-de-suporte',
			'categoria_slug' => 'suporte_categoria',
	], $params);
	gerar_redes_principal($var['rede_slug'], $var['categoria_slug']);
}

#Ex: [shortcode_redes rede_slug="rede-de-suporte" categoria_slug="suporte_categoria"] 
add_shortcode('shortcode_redes', 'chama_shortcode_redes');

/* Função para mostrar os posts das redes em categorias e tags */
add_filter('pre_get_posts', 'query_post_type');
function query_post_type($query) {
  if ( is_category() || is_tag() && empty( $query->query_vars['suppress_filters'] ) ) {
    $post_type = get_query_var('post_type');
    if($post_type) {
        $post_type = $post_type;
	}
    else {
        $post_type = array('post','rede-1','rede-2','rede-3','rede-4','rede-5','rede-6','rede-7','rede-8'); // replace cpt to your custom post type
	}
    $query->set('post_type',$post_type);
    return $query;
    }
}

function getNameRede($slugRede){
	switch($slugRede){
		case "rede-5":
			return "Ciências Agrárias";
		case "rede-2":
			return "Ciências Biológicas";
		case "rede-4":
			return "Ciências da Saúde";
		case "rede-1":
			return "Ciências Exatas e da Terra";
		case "rede-3":
			return "Engenharias";
		case "rede-7":
			return "Ciências Humanas";
		case "rede-6":
			return "Ciências Sociais Aplicadas";
		case "rede-8":
			return "Lingüística, Letras e Artes";
	}
}

function getCategoryNameRede($slugRede){
	switch($slugRede){
		case "rede-de-formacao":
			return "formacao_categoria";
		case "rede-de-inovacao":
			return "inovacao_categoria";
		case "rede-de-pesquisa":
			return "pesquisa_categoria";
		case "rede-de-produto":
			return "produto_categoria";
		case "rede-de-suporte":
			return "suporte_categoria_nova";
	}
}


// desativar verificação do certificado do email
// https://gist.github.com/slaFFik/c1d7d4249f47da7195fb973109952090
add_filter('wp_mail_smtp_custom_options', function( $phpmailer ) {
	$phpmailer->SMTPOptions = array(
		'ssl' => array(
			'verify_peer'       => false,
			'verify_peer_name'  => false,
			'allow_self_signed' => true
		)
	);

	return $phpmailer;
} );


include 'criar_redes.php';
include 'functions-rede-moara.php';