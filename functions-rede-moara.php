<?php
function gerar_redes_moara($r_type, $r_tax)
{
    /* https://wordpress.stackexchange.com/a/215963 */
    $args = array(
        'taxonomy'    => $r_tax,
        'orderby'    => 'name',
        'parent'    => 0, /* garantir que não trará as filhas */
    );

    $allthecats = get_categories($args);
    $categorias_array = wp_list_pluck($allthecats, 'name', 'term_id');

    echo '<div class="texto-hover" id="texto-hover-' . $r_type . '"></div>';
    echo '<div class="br-accordion" single="single">';

    $i = 0;
    foreach ($categorias_array as $categoria_id => $categoria) {
?>
        <div class="item">
            <button class="header" type="button" aria-controls="id<?php echo $i; ?>">
                <span class="title titulo-redes"><?php echo $categoria; ?></span>
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i> <!-- CATEGORIA PAI -->
                </span>
            </button>
        </div>
        <div class="content conteudo-redes" id="id<?php echo $i; ?>">
            <?php

            meu_arrr_custom_loop($r_type, -1, $r_tax, $categoria);
            $filhos_ids = retorna_filhos($categoria_id, $r_tax);

            if (sizeof($filhos_ids) > 0) {
                foreach ($filhos_ids as $categoria_filho_id) {
                    $categoria_filho = get_term($categoria_filho_id, $r_tax)->name;

            ?>
                    <span class="icon" style='color: #1351b4;'><i class="fas fa-plus" aria-hidden="true"></i></span> <!-- CATEGORIA FILHO -->
                    <span class="title subtitulo-redes"><?php echo $categoria_filho; ?></span>

                    <?php
                    meu_arrr_custom_loop($r_type, -1, $r_tax, $categoria_filho);
                    $netos_ids = retorna_filhos($categoria_filho_id, $r_tax);

                    if (sizeof($netos_ids) > 0) {
                        foreach ($netos_ids as $categoria_neto_id) {

                            $categoria_neto = get_term($categoria_neto_id, $r_tax)->name;

                    ?>
                            <span class="icon" style='color: #1351b4;'><i class="fas fa-star" aria-hidden="true"></i></span> <!-- CATEGORIA NETO -->
                            <span class="title subtitulo-redes"><?php echo $categoria_neto; ?></span>

            <?php
                            meu_arrr_custom_loop($r_type, -1, $r_tax, $categoria_neto);
                        } //fechamento do foreach $netos_ids
                    } // if $netos_ids
                } //fechamento do foreach $filhos_ids
            }  // if $filhos_ids
            ?>
        </div>
<?php
        $i += 1;
    } // fim do foreach $categorias_array
    echo '</div>';
}


function retorna_filhos($categoria_id, $r_tax)
{
    $filhos_args = array(
        'taxonomy'    => $r_tax,
        'orderby'    => 'name',
        'parent'    => $categoria_id,
    );

    $filhos_categorias  = get_categories($filhos_args);

    return wp_list_pluck($filhos_categorias, 'term_id');
}
