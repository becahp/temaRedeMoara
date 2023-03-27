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
	<div class="container-lg" style="text-align: center;">
	<?php 
		if ( has_post_thumbnail() ) {
			the_post_thumbnail( 'thumbnail_post' );
		} else {
			echo '<img src="' . get_template_directory_uri() . '/assets/images/logos/moara.png' . '" class="attachment-thumbnail_post size-thumbnail_post wp-post-image" alt="" decoding="async" style="width:100%;height:100.58%;max-width:107px;" width="107" height="86">';
		}
	?>
	</div>
	<div class="container-lg container-rcc-post container-moara-post">
		<header class="entry-header alignwide">
			<?php the_title( '<h1 class="entry-title titulo-post">', '</h1>' ); ?>
			<div class="row">
				<div class="col-md-6">

					<?php
					// função com "Postado em"
					//funcao_publicado_em();?>
				</div>
				<div class="col-md-6 social-media-rcc social-media-moara">
					<?php
					// Ícones de compartilhamento
					echo do_shortcode('[shortcode_social_links]');?>
				</div>
			</div>
		</header><!-- .entry-header -->

		<div class="entry-content entry-content-rcc entry-content-moara">
	
			<h2>O que é?</h2>
			<ol>
			<?php if( have_rows('o_que_e') ): ?>
    			<?php while( have_rows('o_que_e') ):
					
					the_row(); 
					
					if ( get_sub_field('descricao_codigo') ) : ?>
					<li>
						<strong>Descrição do código</strong>: <?php the_sub_field('descricao_codigo'); ?>
					</li>
					<?php endif; ?>
					<?php if ( get_sub_field('software_vinculado') ) : ?>
					<li>
						<strong>Software vinculado</strong>: <?php the_sub_field('software_vinculado'); ?>
					</li>
					<?php endif; ?>
					<?php if ( get_sub_field('linguagens') ) : ?>
					<li>
						<strong>Linguagens utilizadas</strong>: <?php the_sub_field('linguagens'); ?>
					</li>
					<?php endif; ?>

				<?php endwhile; ?>
			<?php endif; ?>
			</ol>

			<h2>Quem fez?</h2>
			<ol>
			<?php if( have_rows('quem_fez') ): ?>
    			<?php while( have_rows('quem_fez') ):
					
					the_row(); 

					if ( get_sub_field('nome_depositante') ) : ?>
					<li>
						<strong>Nome do depositante</strong>: <?php echo get_sub_field('curriculo_lattes') ? ('<a target="_blank" rel="noreferrer noopener" href="' . get_sub_field('curriculo_lattes') . '">' . get_sub_field('nome_depositante') . '</a>') : get_sub_field('nome_depositante'); ?>
					</li>
					<?php endif; ?>
					<?php if ( get_sub_field('email_depositante') ) : ?>
					<li>
						<strong>Email do depositante</strong>: <?php echo '<a target="_blank" rel="noreferrer noopener" href="mailto:' . get_sub_field('email_depositante') . '">' . get_sub_field('email_depositante') . '</a>'; ?>
					</li>
					<?php endif; ?>
					<?php if ( get_sub_field('nome_unidade_vinculada') ) : ?>
					<li>
						<strong>Unidade de pesquisa vinculada</strong>: <?php echo get_sub_field('site_unidade_vinculada') ? ('<a target="_blank" rel="noreferrer noopener" href="' . get_sub_field('site_unidade_vinculada') . '">' . get_sub_field('nome_unidade_vinculada') . '</a>') : get_sub_field('nome_unidade_vinculada'); ?>
					</li>
					<?php endif; ?>
					<?php if ( get_sub_field('projeto_vinculado') ) : ?>
					<li>
						<strong>Projeto vinculado</strong>: <?php the_sub_field('projeto_vinculado'); ?>
					</li>
					<?php endif; ?>
					<?php if ( get_sub_field('coordenacao_projeto') ) : ?>
					<li>
						<strong>Coordenação do projeto</strong>: <?php the_sub_field('coordenacao_projeto'); ?>
					</li>
					<?php endif; ?>
				
				<?php endwhile; ?>
			<?php endif; ?>
			</ol>

			<h2>Como usar?</h2>
			<ol>
			<?php if( have_rows('como_usar') ): ?>
    			<?php while( have_rows('como_usar') ):
					
					the_row(); 

					// <!-- <li>
					// 	<strong>Endereço</strong>: <a rel="noreferrer noopener" href="https://github.com/becahp/mandala-editor-plugin" target="_blank">https://github.com/becahp/mandala-editor-plugin</a>
					// </li> -->
					if ( get_sub_field('funcionalidades') ) : ?>
					<li>
						<strong>Funcionalidades</strong>: <?php the_sub_field('funcionalidades'); ?>
					</li>
					<?php endif; ?>
					<!-- <li>
						<strong>Licença de uso</strong>: <a rel="noreferrer noopener" href="https://github.com/becahp/mandala-editor-plugin/blob/main/LICENSE" target="_blank">GNU General Public License v3.0</a>
					</li> -->
					
				<?php endwhile; ?>
			<?php endif; ?>
			</ol>

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
				<div class="col-md-6 social-media-rcc social-media-moara">
					<?php
					// Ícones de compartilhamento
					echo do_shortcode('[shortcode_social_links]');?>
				</div>
			</div>

		</footer><!-- .entry-footer -->

	</div>

</article><!-- #post-<?php the_ID(); ?> -->
