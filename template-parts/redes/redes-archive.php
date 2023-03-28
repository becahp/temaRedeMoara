<?php
/**
 * Template part for displaying post archives-rcc and search results
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
<div class="col-md-3 archive-rcc">
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<?php
			if ( has_post_thumbnail() ) {
				the_post_thumbnail( 'medium-thumbnail' );
			} else {
				echo '<img src="' . get_template_directory_uri() . '/assets/images/logos/moara.png' . '" class="attachment-medium-thumbnail size-medium-thumbnail wp-post-image" alt="" decoding="async" style="width:100%;height:100.58%;max-width:107px;" width="107" height="86">';
			}
		?>
		<h2><a class="post-title" href="<?php the_permalink(); ?>" target="_blank"><?php the_title(); ?></a></h2>
		<!--<p class="post-excerpt"><?php #echo get_the_excerpt(); ?></p> -->
		<p class="post-excerpt"><?php echo wp_trim_words(get_field("texto_hover"), 30) ?></p>
		<a class="moretext" href="<?php the_permalink(); ?>" target="_blank">Veja o projeto 🡪</a>
	</article><!-- #post-${ID} -->
</div>
