<?php
/**
 * Wordpress defaults and them features
 *
 * @package WordPress
 * @subpackage Omo
 * @version 0.5.0
 * @since Omo 0.5.0
 */

class bootstrapTheme extends Timber\Site {
    public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'timber_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_menus' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );

        parent::__construct();
    }

	public function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );

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
			)
		);

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support(
			'post-formats',
			array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		/*
		 * Block Editor support.
		 *
		 * See: https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/
		 */
		add_theme_support( 'align-wide' );
		add_theme_support( 'editor-styles' );
		add_editor_style( 'assets/build/css/editor.css' );

		// Custom Color Pallette
		add_theme_support( 'editor-color-palette', array(
			array(
				'name'  => __( 'Blue', 'omo' ),
				'slug'  => 'blue',
				'color'	=> '#59BACC',
			),
			array(
				'name'  => __( 'Green', 'omo' ),
				'slug'  => 'green',
				'color' => '#58AD69',
			),
			array(
				'name'  => __( 'Orange', 'omo' ),
				'slug'  => 'orange',
				'color' => '#FFBC49',
			),
			array(
				'name'	=> __( 'Red', 'omo' ),
				'slug'	=> 'red',
				'color'	=> '#E2574C',
			),
		) );

		// -- Disable Custom Colors
		add_theme_support( 'disable-custom-colors' );


		/*
		 * Wordpress custom menu support.
		 *
		 * See: https://developer.wordpress.org/reference/functions/add_theme_support/
		 */
		add_theme_support( 'menus' );

	}

	/** This is where you can register nav menus */
	public function register_menus() {
		register_nav_menus( array(
			'header-menu' => esc_html__( 'Header', 'omo' ),
			'mobile-menu' => esc_html__( 'Mobile', 'omo' ),
			'footer-menu' => esc_html__( 'Footer', 'omo' )
		) );
	}

	/** This is where you can register custom post types. */
	public function register_post_types() {

	}
	/** This is where you can register custom taxonomies. */
	public function register_taxonomies() {

	}


	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
		$custom_logo = get_theme_mod('custom_logo');

		$context['header']  = new Timber\Menu('header-menu');
		$context['mobile']  = new Timber\Menu('mobile-menu');
		$context['footer']  = new Timber\Menu('footer-menu');
		$context['custom_logo'] = new Timber\Image($custom_logo);
		$context['site']  = $this;
		return $context;
	}

	/** This Would return 'foo bar!'.
	 *
	 * @param string $text being 'foo', then returned 'foo bar!'.
	 */
	// public function myfoo( $text ) {
	// 	$text .= ' bar!';
	// 	return $text;
	// }

	/** This is where you can add your own functions to twig.
	 *
	 * @param string $twig get extension.
	 */
	// public function add_to_twig( $twig ) {
	// 	$twig->addExtension( new Twig\Extension\StringLoaderExtension() );
	// 	$twig->addFilter( new Twig\TwigFilter( 'myfoo', array( $this, 'myfoo' ) ) );
	// 	return $twig;
	// }

}

new bootstrapTheme();
