<?php

/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();

if (have_posts()) {
?>
	<div class="container-lg d-block pagina-busca">
		<header class="page-header alignwide">
			<h1 class="page-title">
				<?php
				printf(
					/* translators: %s: Search term. */
					esc_html__('Results for "%s"', 'twentytwentyone'),
					'<span class="page-description search-term">' . esc_html(get_search_query()) . '</span>'
				);
				?>
			</h1>
			<?php
			if (!empty(get_query_var('post_types'))) {
				$texto = '';
				foreach (get_query_var('post_types') as $rede) {
					$texto .= getNameRede($rede) . ', ';
				}

				echo '<p><strong>Pesquisa feita na(s) rede(s):</strong> ' . $texto . '</p>';
			}
			
			if (!empty(get_query_var('publico'))) {
				$texto = '';
				foreach (get_query_var('publico') as $publico) {
					$texto .= $publico . ', ';
				}

				if ($texto == '') {
					$texto = get_query_var('publico');
				}

				echo '<p><strong>Pesquisa feita no(s) público(s):</strong> ' . $texto . '</p>';
			}
			?>
		</header><!-- .page-header -->

		<div class="search-result-count default-max-width">
			<?php
			printf(
				esc_html(
					/* translators: %d: The number of search results. */
					_n(
						'We found %d result for your search.',
						'We found %d results for your search.',
						(int) $wp_query->found_posts,
						'twentytwentyone'
					)
				),
				(int) $wp_query->found_posts
			);
			?>
		</div><!-- .search-result-count -->

		<div class="row">

			<div class="col-md-9 order-1">
				<div class="row">

					<?php
					// Start the Loop.
					while (have_posts()) {
						the_post();

						/*
						* Include the Post-Format-specific template for the content.
						* If you want to override this in a child theme, then include a file
						* called content-___.php (where ___ is the Post Format name) and that will be used instead.
						*/
						//get_template_part( 'template-parts/content/content-excerpt', get_post_format() );
						get_template_part('template-parts/redes/redes-archive');
					} // End the loop.

					?> </div>
			</div>

			<div class="col-md-3 order-2">
				<?php echo do_shortcode("[shortcode_busca_avancada]"); ?>
			</div>
		</div>

		<?php
			// Previous/next page navigation.
			twenty_twenty_one_the_posts_navigation();
		?>
	</div> 
	<?php

	// If no content, include the "No posts found" template.
	} else {
		get_template_part('template-parts/content/content-none');
	}

	get_footer();
