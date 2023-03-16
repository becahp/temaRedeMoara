<?php

/**
 * Novo accordion multi nível:
 * https://codyhouse.co/demo/multi-level-accordion-menu/index.html
 */
function gerar_redes_moara($r_type, $r_tax)
{
    /* https://wordpress.stackexchange.com/a/215963 */
    $args = array(
        'taxonomy'    => $r_tax,
        'orderby'    => 'name',
        'parent'    => 0, /* garantir que não trará as filhas */
        'hide_empty' => 0, /* mostrar todas */
    );

?>
    <div class="titulo-categoria">
        <img src="<?php echo getIconeRede($r_type) ?>" alt="alternatetext">
        <p><?php echo getNameRede($r_type) ?></p>
    </div>
    <?php

    $allthecats = get_categories($args);
    $categorias_array = wp_list_pluck($allthecats, 'name', 'term_id');

    echo '<div class="texto-hover" id="texto-hover-' . $r_type . '"></div>';
    echo '<div class="accordion-moara-container">';
    echo '<div class="accordion-moara">';
    echo '<ul class="cd-accordion primeiro-ul">';

    $categoria_count = 0;
    foreach ($categorias_array as $categoria_id => $categoria) {
        $categoria_slug = get_term($categoria_id, $r_tax)->slug;
        $checkbox_name = "group-" . $r_tax . "-" . $categoria_slug . "-" . $categoria_count;
    ?>
        <li class="cd-accordion__item cd-accordion__item--has-children primeiro-li">
            <input class="cd-accordion__input" type="checkbox" name="<?php echo $checkbox_name ?>" id="<?php echo $checkbox_name ?>">
            <label class="cd-accordion__label cd-accordion__label--icon-folder" for="<?php echo $checkbox_name ?>">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                <span><?php echo $categoria; ?></span> <!-- CATEGORIA PAI -->
            </label>

            <ul class="cd-accordion__sub cd-accordion__sub--l1">
                <?php
                // <!-- single child do PAI-->
                meu_arrr_custom_loop_moara($r_type, -1, $r_tax, $categoria);
                $filhos_ids = retorna_filhos($categoria_id, $r_tax);

                if (sizeof($filhos_ids) > 0) {
                    $filhos_count = 0;
                    foreach ($filhos_ids as $categoria_filho_id) {
                        $categoria_filho = get_term($categoria_filho_id, $r_tax)->name;
                        $categoria_filho_slug = get_term($categoria_filho_id, $r_tax)->slug;
                        $checkbox_name_filho = "sub-group-" . $r_tax . "-" . $categoria_filho_slug . "-" . $filhos_count;
                ?>
                        <!-- PAI tem filhos  -->
                        <li class="cd-accordion__item cd-accordion__item--has-children">
                            <input class="cd-accordion__input" type="checkbox" name="<?php echo $checkbox_name_filho; ?>" id="<?php echo $checkbox_name_filho; ?>">
                            <label class="cd-accordion__label cd-accordion__label--icon-folder" for="<?php echo $checkbox_name_filho; ?>">
                                <span class="icon">
                                    <i class="fas fa-plus" aria-hidden="true"></i>
                                </span>
                                <span><?php echo $categoria_filho; ?></span> <!-- CATEGORIA FILHO -->
                            </label>

                            <ul class="cd-accordion__sub cd-accordion__sub--l2">
                                <?php
                                // <!-- single child  do FILHO -->
                                meu_arrr_custom_loop_moara($r_type, -1, $r_tax, $categoria_filho);
                                $netos_ids = retorna_filhos($categoria_filho_id, $r_tax);

                                if (sizeof($netos_ids) > 0) {
                                    $netos_count = 10;
                                    foreach ($netos_ids as $categoria_neto_id) {
                                        $categoria_neto = get_term($categoria_neto_id, $r_tax)->name;
                                        $categoria_neto_slug = get_term($categoria_neto_id, $r_tax)->slug;
                                        $checkbox_name_neto = "sub-sub-group-" . $r_tax . "-" . $categoria_neto_slug . "-" . $netos_count;
                                ?>
                                        <!-- FILHOS tem filhos (netos) -->
                                        <li class="cd-accordion__item cd-accordion__item--has-children">
                                            <input class="cd-accordion__input" type="checkbox" name="<?php echo $checkbox_name_neto; ?>" id="<?php echo $checkbox_name_neto; ?>">
                                            <label class="cd-accordion__label cd-accordion__label--icon-folder" for="<?php echo $checkbox_name_neto; ?>">
                                                <span class="icon">
                                                    <i class="fas fa-folder" aria-hidden="true"></i>
                                                </span>
                                                <span><?php echo $categoria_neto; ?></span> <!-- CATEGORIA NETO -->
                                            </label>

                                            <ul class="cd-accordion__sub cd-accordion__sub--l3">

                                                <?php meu_arrr_custom_loop_moara($r_type, -1, $r_tax, $categoria_neto); ?>

                                            </ul> <!-- ul netos  -->
                                        </li> <!-- li de cada neto -->
                                <?php
                                        $netos_count += 1;
                                    } //fechamento do foreach $netos_ids
                                } // if $netos_ids
                                ?>
                            </ul> <!-- ul filhos : netos  -->
                        </li> <!-- li de cada filho -->
                <?php
                        $filhos_count += 1;
                    } //fechamento do foreach $filhos_ids
                }  // if $filhos_ids
                ?>
            </ul> <!-- ul pai : filhos  -->
        </li> <!-- li de cada pai -->
        <?php
        $categoria_count += 1;
    } // fim do foreach $categorias_array

    echo '</ul></div></div>';
}


function retorna_filhos($categoria_id, $r_tax)
{
    $filhos_args = array(
        'taxonomy'    => $r_tax,
        'orderby'    => 'name',
        'parent'    => $categoria_id,
        'hide_empty' => 0, /* mostrar todas */
    );

    $filhos_categorias  = get_categories($filhos_args);

    return wp_list_pluck($filhos_categorias, 'term_id');
}


/************************************************************************************************REDES */
/* Função para padronizar a chamada de custom post types por categoria e subcategoria
 * https://wordpress.stackexchange.com/questions/23136/get-custom-post-type-by-category-in-a-page-template */

function meu_arrr_custom_loop_moara($r_type = 'post', $r_post_num, $r_tax = 'category', $r_terms = 'featured')
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
    $the_query = new WP_Query($args);
    // The Loop
    if ($the_query->have_posts()) {
        // echo '<ol>';
        while ($the_query->have_posts()) {
            echo '<li class="cd-accordion__item item-moara">';
            $the_query->the_post();
            $cats = get_the_category_instituicoes();

        ?>
            <div onmouseover="mouseOver(this);" onmouseout="mouseOut();">
                <a class="item-moara-a" href="<?php the_field('url'); ?>" target="_blank"><?php the_title(); ?></a>
                <?php foreach ($cats as $cat) { ?>
                    - <a class="item-moara-cat" href="<?php echo get_category_link($cat->term_id) ?>">
                        <?php echo $cat->name; ?>
                    </a>
                <?php } ?>
                <span class='d-none'><?php echo wp_trim_words(get_field('texto_hover'), 120) ?></span>
            </div>
        <?php
            echo '</li>';
        }
        // echo '</ol>';
    } else {
        //echo '<br>no posts found';
    }
    /* Restore original Post Data */
    wp_reset_postdata();
}

// Cópia de get_the_category
function get_the_category_instituicoes($post_id = false)
{
    $categories = get_the_terms($post_id, 'instituicoes');

    if (!$categories || is_wp_error($categories)) {
        $categories = array();
    }

    $categories = array_values($categories);

    foreach (array_keys($categories) as $key) {
        _make_cat_compat($categories[$key]);
    }

    /**
     * Filters the array of categories to return for a post.
     *
     * @since 3.1.0
     * @since 4.4.0 Added the `$post_id` parameter.
     *
     * @param WP_Term[] $categories An array of categories to return for the post.
     * @param int|false $post_id    The post ID.
     */
    return apply_filters('get_the_categories', $categories, $post_id);
}

add_shortcode('shortcode_instituicoes', 'mostrarInstituicoes');
function mostrarInstituicoes()
{
    $args = array(
        'taxonomy' => 'instituicoes',
        'orderby' => 'name',
        'order'   => 'ASC'
    );

    $cats = get_categories($args);

    ob_start();
    ?>
    <ul class="instituicoes-categorias">
    <?php foreach ($cats as $cat) : ?>
        <li>
            <div class="elementor-element elementor-element elementor-widget elementor-widget-image" data-element_type="widget" data-widget_type="image.default">
                <div class="elementor-widget-container">
                    <div class="elementor-image">
                        <?php
                            $image_src = '';
                            switch($cat->slug) {
                                case 'ibict':
                                    $image_src = esc_url( get_template_directory_uri() ) . '/assets/images/logos/ibict.png';
                                break;
                                case 'mcti':
                                    $image_src = esc_url( get_template_directory_uri() ) . '/assets/images/logos/mcti.png';
                                break;
                                case 'unb':
                                    $image_src = esc_url( get_template_directory_uri() ) . '/assets/images/logos/unb.png';
                                break;
                                default:
                                    $image_src = esc_url( get_template_directory_uri() ) . '/assets/images/logos/moara.png';
                            }
                         ?>
                        <img decoding="async" src="<?php echo $image_src; ?>" class="attachment-large size-large" alt="" loading="lazy" style="width:100%;height:48.18%;max-width:110px" width="110">
                    </div>
                </div>
            </div>
            <div class="elementor-element elementor-widget elementor-widget-heading" data-element_type="widget" data-widget_type="heading.default">
                <div class="elementor-widget-container">
                    <h2 class="elementor-heading-title elementor-size-default">
                        <?php echo $cat->name; ?>
                    </h2>
                </div>
            </div>
            <div class="elementor-element elementor-align-center elementor-widget elementor-widget-button" data-element_type="widget" data-widget_type="button.default">
                <div class="elementor-widget-container">
                    <div class="elementor-button-wrapper">
                        <a href="<?php echo get_category_link($cat->term_id); ?>" target="_blank" class="elementor-button-link elementor-button elementor-size-md" role="button">
                            <span class="elementor-button-content-wrapper">
                                <span class="elementor-button-text">Saiba mais</span>
                            </span>
                        </a>
                    </div>
                </div>
			</div>
        </li>
    <?php endforeach; ?> 
    </ul>
    <?php

    $html = ob_get_contents();
    ob_end_clean();

    return $html;
}


function getIconeRede($slugRede)
{
    $caminho = get_template_directory_uri() . '/assets/images/icones-redes/';

    switch ($slugRede) {
        case "rede-5":
            return $caminho . "ciencias_agrarias.svg";
        case "rede-2":
            return $caminho . "ciencias_biologicas.svg";
        case "rede-4":
            return $caminho . "ciencias_saude.svg";
        case "rede-1":
            return $caminho . "ciencias_exatas.svg";
        case "rede-3":
            return $caminho . "engenharias.svg";
        case "rede-7":
            return $caminho . "ciencias_humanas.svg";
        case "rede-6":
            return $caminho . "ciencias_sociais_aplicadas.svg";
        case "rede-8":
            return $caminho . "linguistica_artes.svg";
    }
}
