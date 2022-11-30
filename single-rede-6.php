<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();

/* Start the Loop */
while (have_posts()) :
	the_post();

	$rede_slug = "rede-6";
	$rede_name = getNameRede($rede_slug);
	$categoria_rede = "rede_6_categoria";

	/* Pegar a taxonomia do post
	https://developer.wordpress.org/reference/functions/get_the_terms/#comment-2587 */
	$term_obj_list = get_the_terms(get_the_id(), $categoria_rede);
	$terms_string = wp_list_pluck($term_obj_list, 'name')[0];
	$term_slug = wp_list_pluck($term_obj_list, 'slug')[0];

	echo "<div class=\"container-lg d-block\">";
	echo "<div class=\"breadcrumb-post\" style=\"margin-left: -24px;\">";
	echo do_shortcode('[shortcode_breadcrumb_redes rede_slug="' . $rede_slug . '" rede_name="' . $rede_name . '" categoria_slug="' . $term_slug . '" categoria_name="' . $terms_string . '" categoria_rede="' . $categoria_rede . '"]');
	echo "</div>";
	echo "</div>";

	get_template_part('template-parts/redes/redes-single');


endwhile; // End of the loop.

get_footer();
