<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>

<article id="redes-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="container-lg container-rcc-post">
		<header class="entry-header alignwide">
			<?php the_title( '<h1 class="entry-title titulo-post">', '</h1>' ); ?>
			<div class="row">
				<div class="col-md-6">

					<?php
					// função com "Postado em"
					//funcao_publicado_em();?>
				</div>
				<div class="col-md-6 social-media-rcc">
					<?php
					// Ícones de compartilhamento
					echo do_shortcode('[shortcode_social_links]');?>
				</div>
			</div>
		</header><!-- .entry-header -->

		<div class="entry-content entry-content-rcc">

			<?php if (get_field('visao')) {?>
				<div class="mt-3 mb-3">
					<div class="visao-texto">
						<p>Veja no mapa as unidades:</p>
						<a href="<?php the_field('visao');?>" target="_blank"><img src="<?php echo get_template_directory_uri();?>/assets/images/visao.png" alt="Visão" style="width: 50px;"> </a>
					</div>
				</div>
			<?php } ?>

			<?php
			//the_content();
			the_field('texto');
			?>
		</div><!-- .entry-content -->

		<!-- Mostra o meta do post -->
		<footer class="entry-footer default-max-width mb-5">
			<?php //twenty_twenty_one_entry_meta_footer(); ?>

			<?php
				// função com Categorias, Tags e Editar
				funcao_post_footer();
			?>

			<div class="row">
				<div class="col-md-6">

					<?php
					// função com "like em"
					echo do_shortcode('[posts_like_dislike id='.get_the_ID().']');?>
				</div>
				<div class="col-md-6 social-media-rcc">
					<?php
					// Ícones de compartilhamento
					echo do_shortcode('[shortcode_social_links]');?>
				</div>
			</div>

		</footer><!-- .entry-footer -->

	</div>

</article><!-- #post-<?php the_ID(); ?> -->
