<?php
/**
 * Template Name: Landing Page
 * Description: A Page Template with a modular layout.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * Methods for TimberHelper can be found in the /lib plugin sub-directory
 * @package WordPress
 * @subpackage Omo
 * @version 0.5.0
 * @since Omo 0.5.0
 */

$context = Timber::context();
$context['post'] = new Timber\Post();
Timber::render( 'landing.twig', $context );
