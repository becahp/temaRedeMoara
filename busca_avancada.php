<?php

// Shortcode principal da busca
add_shortcode('shortcode_busca_avancada', 'busca_avancada_redes');
function busca_avancada_redes()
{
	//post types permitidos
	// $myUrl = esc_url(admin_url('admin-ajax.php'));
	$post_types = array('rede-1', 'rede-2', 'rede-3', 'rede-4', 'rede-5', 'rede-6', 'rede-7', 'rede-8');

	// pegar o form padrão do wp (pode mudar pra um form normal feito na mão, mas aí tem que fazer na mão a URL de busca rs)
	#$form = get_search_form( false );
	$form = "<form method=\"post\" id=\"formBuscaAvancada\" class=\"search-form\" action=\"" . esc_url(admin_url('admin-post.php')) . "\" enctype=\"multipart/form-data\">";
	$form .= "<div class=\"header-search\"><div class=\"br-input has-icon\">";
	$form .= "<label for=\"search-form-3\">Pesquisa Avançada:</label>";
	$form .= "<input class=\"has-icon\" id=\"search-form-3\" type=\"search\" placeholder=\"O que você procura?\" value=\"\" name=\"s\">";
	$form .= "<button class=\"br-button circle small\" form=\"formBuscaAvancada\" type=\"submit\" aria-label=\"Pesquisar\" \"><i class=\"fas fa-search\" aria-hidden=\"true\"></i></button>";
	#$form .= "<button class=\"br-button circle search-close\" type=\"button\" aria-label=\"Fechar Busca\" data-dismiss=\"search\"><i class=\"fas fa-times\" aria-hidden=\"true\"></i></button>";
	$form .= "</div></div></form>";
	#$form .= "<input id=\"buscaAvacadaSubmit\" type=\"submit\" class=\"search-submit\" value=\"Pesquisar\">";

	// ---------------------------------------------------
	// código copiado do shortcode searchform do relevanssi
	$additional_fields = array();
	if (is_array($post_types)) {
		$post_type_objects   = get_post_types(array(), 'objects');
		$additional_fields[] = '<div class="post_types mt-1"><strong>Selecione a Área de Conhecimento:</strong> ';

		$additional_fields[] = '<div class="ml-5"><span class="post_type">'
			. '<input type="radio" id="todasRedes" name="post_types" value="todasRedes" checked="checked" onclick=" carregaCategorias(this.value)"/>'
			. '<label class="ml-1" for="todasRedes">Todas as Áreas</label></span></div>';

		foreach ($post_types as $post_type) {
			$checked = '';
			if ('*' === substr($post_type, 0, 1)) {
				$post_type = substr($post_type, 1);
				$checked   = ' checked="checked" ';
			}
			if (isset($post_type_objects[$post_type])) {
				$additional_fields[] = '<div class="ml-5"><span class="post_type post_type_' . $post_type . '">'
					. '<input type="radio" id="' . $post_type . '" name="post_types" value="' . $post_type . '"' . $checked . ' onclick=" carregaCategorias(this.value)"/>'
					. '<label class="ml-1" for="' . $post_type . '">' . getNameRede($post_type_objects[$post_type]->name) . '</label></span></div>';
			}
		}
		$additional_fields[] = '</div>';
	}

	// Adicionando os select de categorias do DS.Gov 
	$additional_fields[] = '<div id="categorias-div" style="display: none;" class="post_types"><strong>Selecione a Classificação</strong>:<div class="ml-5">';
	// Um select para cada post type (rede)
	foreach ($post_types as $post_type) {
		$additional_fields[] = '<div id="lista-' . $post_type . '" style="display: none;"><div class="br-select">'
			. '<div class="br-input">'
			. '<input id="select-' . $post_type . '" type="text" placeholder="Selecione o item" />'
			. '<button class="br-button circle small" type="button" tabindex="-1" data-trigger><span class="sr-only">Exibir lista</span><i class="fas fa-angle-down"></i></button>'
			. '</div>'
			. '<div class="br-list" tabindex="0">'
			. '<div class="br-item divider" tabindex="-1">'
			. '<div class="br-radio">'
			. '<input id="todasCat" type="radio" name="radioCat" value="todasCat" />'
			. '<label for="todasCat">Todas as classificações</label>'
			. '</div>'
			. '</div>';
		
		$rede = getCategoryNameRede($post_type);
		$args = array(
			'taxonomy' => $rede,
			'orderby' => 'name',
			'order'   => 'ASC',
			'hide_empty' => 0, /* mostrar todas */
		);
		$cats = get_categories($args);
		
		foreach ($cats as $cat) {
			$additional_fields[] = '<div class="br-item divider" tabindex="-1">'
				. '<div class="br-radio">'
				. '<input id="' . $cat->slug . '" type="radio" name="radioCat" value="' . $cat->slug . '" />'
				. '<label for="' . $cat->slug . '">' . $cat->name . '</label>'
				. '</div>'
				. '</div>';
		}
		$additional_fields[] = '</div></div>'
			. '</div>';
	}

	$additional_fields[] = '</div></div>';

	$additional_fields[] = '<input type="hidden" name="action" value="buscaAvancadaAction">';
	// $additional_fields[] = '<div id="categoriasDaRede"></div>';
	$additional_fields[] = '<div id="publicoAlvo">'
		. '<div class="post_types"><strong>Selecione a Instituição:</strong><div class="ml-5">';
	// Lista de instituições
	$args = array(
		'taxonomy' => 'instituicoes',
		'orderby' => 'name',
		'order'   => 'ASC',
		'hide_empty' => 0, /* mostrar todas */
	);
	$cats = get_categories($args);
	foreach ($cats as $cat) {
		$additional_fields[] = '<input type="checkbox" id="' . $cat->slug . '" name="' . $cat->slug . '" value="' . $cat->slug . '">'
			. '<label class="ml-1" for="' . $cat->slug . '">' . $cat->name . '</label><br>';
	}
	// --------------------
	$additional_fields[] = '</div></div></div>';
	// Adicionando botão para facilitar a busca
	$additional_fields[] =  "<div class=\"d-flex justify-content-center\"><button class=\"br-button primary small mt-1\" form=\"formBuscaAvancada\" type=\"submit\" aria-label=\"Pesquisar\" \">Buscar</button></div>";

	$form = str_replace('</form>', implode("\n", $additional_fields) . '</form>', $form);

	return $form;
}


function buscaAvancadaAction() {
	// Tratamento de Público Alvo
	$alvos = array();
	$args = array(
		'taxonomy' => 'instituicoes',
		'orderby' => 'name',
		'order'   => 'ASC',
		'hide_empty' => 0, /* mostrar todas */
	);
	$cats = get_categories($args);
	foreach ($cats as $cat) {
		if(isset($_POST[$cat->slug])) $alvos[] = $_POST[$cat->slug];
	}	

	$urlPublico = '';
	$publico = '&instituicoes[]=';

	if( count( $alvos ) > 1 ){
		foreach($alvos as $alvo ){
			$urlPublico .= $publico . $alvo;
		}
	} else if ( count( $alvos ) == 1 ) {
		$urlPublico = '&instituicoes='. $alvos[0];
	}

	// Insere um termo de pesquisa. ex: "cnpq"
	if(isset($_POST['s'])) $termoPesquisa = ($_POST['s']); else $termoPesquisa = "";
	
	// escolhe uma rede específica. ex: rede de suporte
	if(isset($_POST['post_types'])) $rede = ($_POST['post_types']); else $rede = "";
	
	// caso clique em "todas as redes"
	if($rede == 'todasRedes' or $rede == '') {
		$url = get_site_url().'/?s='.$termoPesquisa.'&post_types[]=rede-1&post_types[]=rede-2&post_types[]=rede-3&post_types[]=rede-4&post_types[]=rede-5&post_types[]=rede-6&post_types[]=rede-7&post_types[]=rede-8';
		header('Location:'.$url.$urlPublico);
		return;
	}
	
	if(isset($_POST['radioCat'])) $categoria = ($_POST['radioCat']); else $categoria = "";
	
	if($categoria == 'todasCat' or $categoria == '') {
		$url = get_site_url().'/?s='.$termoPesquisa.'&post_types[]='.$rede;
		header('Location:'.$url.$urlPublico);
		return;	
	}

	header('Location:'.get_site_url().'/'.getCategoryNameRede($rede)."/".$categoria."/?s=".$termoPesquisa.$urlPublico);
}
add_action( 'admin_post_nopriv_buscaAvancadaAction', 'buscaAvancadaAction' );
add_action( 'admin_post_buscaAvancadaAction', 'buscaAvancadaAction' );

// ----------------------------------------------------------------------------------------------------
// Parte de inclusão de custom fields (Ex: público alvo, abrangência) 
// tutorial de https://www.smashingmagazine.com/2016/03/advanced-wordpress-search-with-wp_query/

// Função para registrar novos variáveis na URL
// URL passa a aceitar: /?instituicoes=XXX&abrangencia=YYY
function sm_register_query_vars( $vars ) {
    $vars[] = 'instituicoes';
    #$vars[] = 'abrangencia';
    return $vars;
} 
add_filter( 'query_vars', 'sm_register_query_vars' );

//Função para realizar a busca nos custom fields, caso eles apareçam na URL de busca
function sm_pre_get_posts( $query ) {
    // check if the user is requesting an admin page 
    // or current query is not the main query
    if ( is_admin() || ! $query->is_main_query() ){
        return;
    }

    $meta_query = array();

    // add meta_query elements
    if( !empty( get_query_var( 'instituicoes' ) ) ){
        //$meta_query[] = array( 'key' => 'instituicoes', 'value' => get_query_var( 'instituicoes' ), 'compare' => 'LIKE' );
		// possível correção
		$meta_query[] = array('key' => 'quem_fez_nome_unidade_vinculada', 'value' => get_query_var('instituicoes'), 'compare' => 'LIKE');
    }

    if( !empty( get_query_var( 'abrangencia' ) ) ){
        $meta_query[] = array( 'key' => 'abrangencia', 'value' => get_query_var( 'abrangencia' ), 'compare' => 'LIKE' );
    }

    if( count( $meta_query ) > 1 ){
        $meta_query['relation'] = 'AND';
    }

    if( count( $meta_query ) > 0 ){
        $query->set( 'meta_query', $meta_query );
    }
}
add_action( 'pre_get_posts', 'sm_pre_get_posts', 1 );

add_shortcode('shortcode_form_pesquisa_relevanssi', 'form_pesquisa_relevanssi');
function form_pesquisa_relevanssi(){



	$form = "<form class=\"busca-live-wrapper\" role=\"search\" action=\"/\" method=\"get\">";
	$form .= "<div class=\"busca-live-form__container \" role=\"tablist\">";
	$form .= "<input placeholder=\"O que você procura?\" class=\"busca-live-form__input\" type=\"search\" name=\"s\" title=\"Search\" value=\"\" data-rlvlive=\"true\" data-rlvconfig=\"default\">";
	// $form .= "<button id=\"clear-with-button\" type=\"reset\">";
	// $form .= "<i class=\"fas fa-times\" aria-hidden=\"true\"></i>";
	// $form .= "</button>";
	$form .= "<button class=\"busca-live-submit\" type=\"submit\">";
	$form .= "<i class=\"fas fa-search\" aria-hidden=\"true\"></i>";
	$form .= "</button>";
	$form .= "</div>";
	$form .= "</form>";

	// $form = "<form role=\"search\" method=\"get\" class=\"search-form\" action=\"/\">";
	// $form .= "<label>";
	// $form .= "<span class=\"screen-reader-text\">Search for:</span>";
	// $form .= "<input type=\"search\" class=\"search-field\" placeholder=\"Search …\" name=\"s\" data-rlvlive=\"true\" data-rlvconfig=\"default\">";
	// //data-rlvparentel=\"#rlvlive\" 
	// $form .= "</label>";
	// $form .= "<input type=\"submit\" class=\"search-submit\" value=\"Search\">";
	// // $form .= "<div id=\"rlvlive\"></div>";
	// $form .= "</form>";
	
	return $form;
}

add_action( 'admin_ajax_nopriv_relevanssi_live_search', 'relevanssi_live_search' );
add_action( 'admin_ajax_relevanssi_live_search', 'relevanssi_live_search' );

function custom_relevanssi_live_search_query_args($args)
{
	$args['post_type'] = array('rede-1', 'rede-2', 'rede-3', 'rede-4', 'rede-5', 'rede-6', 'rede-7', 'rede-8');

	return $args;
}

add_filter('relevanssi_live_search_query_args', 'custom_relevanssi_live_search_query_args');
// add_filter( 'relevanssi_live_search_add_result_div', '__return_false' );