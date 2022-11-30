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
		<?php the_post_thumbnail('medium-thumbnail'); ?>
		<h2><a class="post-title" href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		<!--<p class="post-excerpt"><?php #echo get_the_excerpt(); ?></p> -->
		<p class="post-excerpt"><?php echo wp_trim_words(get_the_content(), 30) ?></p>
		<a class="moretext" href="<?php the_permalink(); ?>">Continue lendo 🡪</a>
	</article><!-- #post-${ID} -->
</div>
