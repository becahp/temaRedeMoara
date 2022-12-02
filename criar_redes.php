<?php

/**
 * Criação automática dos CPTs
 */

function cptui_register_my_cpts()
{
    for ($i = 1; $i < 9; $i++) {

        $nome_slug = 'rede-' . strval($i);

        $nome_singular = getNameRede($nome_slug);
        $nome_plural = getNameRede($nome_slug);


        $labels = [
            "name" => $nome_plural,
            "singular_name" => $nome_singular,
        ];

        $args = [
            "label" => $nome_plural,
            "labels" => $labels,
            "description" => "",
            "public" => true,
            "publicly_queryable" => true,
            "show_ui" => true,
            "show_in_rest" => true,
            "rest_base" => "",
            "rest_controller_class" => "WP_REST_Posts_Controller",
            "rest_namespace" => "wp/v2",
            "has_archive" => true,
            "show_in_menu" => true,
            "show_in_nav_menus" => true,
            "delete_with_user" => false,
            "exclude_from_search" => false,
            "capability_type" => "post",
            "map_meta_cap" => true,
            "hierarchical" => false,
            "can_export" => false,
            "rewrite" => ["slug" => $nome_slug, "with_front" => true],
            "query_var" => true,
            "menu_position" => 6,
            "menu_icon" => "dashicons-search",
            "supports" => ["title", "author"],
            "show_in_graphql" => false,
        ];

        register_post_type($nome_slug, $args);
    }
}

add_action('init', 'cptui_register_my_cpts');

/**
 * Criação automática das taxonomias
 */
function cptui_register_my_taxes()
{


    for ($i = 1; $i < 9; $i++) {

        $nome_slug_rede = 'rede-' . strval($i);
        $nome_slug_categoria = 'rede_' . strval($i) . '_categoria';


        $nome_singular = getNameRede($nome_slug_rede) . ' (Categoria)';
        $nome_plural = getNameRede($nome_slug_rede) . ' (Categoria)';

        $labels = [
            "name" => $nome_plural,
            "singular_name" => $nome_singular,
        ];

        $args = [
            "label" => $nome_plural,
            "labels" => $labels,
            "public" => true,
            "publicly_queryable" => true,
            "hierarchical" => true,
            "show_ui" => true,
            "show_in_menu" => true,
            "show_in_nav_menus" => true,
            "query_var" => true,
            "rewrite" => ['slug' => $nome_slug_categoria, 'with_front' => true,],
            "show_admin_column" => true,
            "show_in_rest" => true,
            "show_tagcloud" => false,
            "rest_base" => $nome_slug_categoria,
            "rest_controller_class" => "WP_REST_Terms_Controller",
            "rest_namespace" => "wp/v2",
            "show_in_quick_edit" => true,
            "sort" => false,
            "show_in_graphql" => false,
        ];
        register_taxonomy($nome_slug_categoria, [$nome_slug_rede], $args);
    }
}
add_action('init', 'cptui_register_my_taxes');


/**
 * Criação dos Shortcodes
 * cada shortcode é no formato [rede-1], [rede-2], etc
 * Exemplo de https://code.tutsplus.com/tutorials/multiple-shortcodes-with-a-single-function-3-killer-examples--wp-30966
 */
function meus_shortcodes($atts, $content = null, $nome_slug)
{
    $nome_slug_categoria = str_replace("-", "_", $nome_slug) . '_categoria';
    gerar_redes_moara($nome_slug, $nome_slug_categoria);
};

for ($i = 1; $i < 9; $i++) {
    $nome_slug = 'rede-' . strval($i);
    add_shortcode($nome_slug, 'meus_shortcodes');
}
