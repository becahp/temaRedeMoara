<?php

// Shortcode principal da busca
add_shortcode('shortcode_busca_avancada', 'busca_avancada_redes');

function busca_avancada_redes() {
	//post types permitidos
	$myUrl = esc_url(admin_url('admin-ajax.php'));
	$post_types = array('rede-1','rede-2','rede-3','rede-4','rede-5','rede-6','rede-7','rede-8');
	
	// pegar o form padrão do wp (pode mudar pra um form normal feito na mão, mas aí tem que fazer na mão a URL de busca rs)
	#$form = get_search_form( false );
	$form = "<form method=\"post\" id=\"formBuscaAvancada\" class=\"search-form\" action=\"".esc_url(admin_url('admin-post.php'))."\" enctype=\"multipart/form-data\">";
	$form .= "<div class=\"header-search\"><div class=\"br-input has-icon\">";
	$form .= "<label for=\"search-form-3\">Pesquisa Avançada:</label>";
	$form .= "<input class=\"has-icon\" id=\"search-form-3\" type=\"search\" placeholder=\"O que você procura?\" value=\"\" name=\"termoPesquisa\" data-swplive=\"true\">";
	$form .= "<button class=\"br-button circle small\" form=\"formBuscaAvancada\" type=\"submit\" aria-label=\"Pesquisar\" \"><i class=\"fas fa-search\" aria-hidden=\"true\"></i></button>";
	#$form .= "<button class=\"br-button circle search-close\" type=\"button\" aria-label=\"Fechar Busca\" data-dismiss=\"search\"><i class=\"fas fa-times\" aria-hidden=\"true\"></i></button>";
	$form .= "</div></div></form>";
	#$form .= "<input id=\"buscaAvacadaSubmit\" type=\"submit\" class=\"search-submit\" value=\"Pesquisar\">";
	
	// ---------------------------------------------------
	// código copiado do shortcode searchform do relevanssi
	$additional_fields = array();
	if ( is_array( $post_types ) ) {
		$post_type_objects   = get_post_types( array(), 'objects' );
		$additional_fields[] = '<div class="post_types"><strong>Selecione a Área de Conhecimento:</strong> ';

		$additional_fields[] = '<div class="ml-5"><span class="post_type">'
				. '<input type="radio" id="todasRedes" name="post_types" value="todasRedes" checked="checked" onclick=" carregaCategorias(this.value,\''.$myUrl.'\')"/>'
				. '<label class="ml-1" for="todasRedes">Todas as Áreas</label></span></div>';
				// Radio button do DS.Gov
				#.'<div class="br-radio">'
				#.'  <input id="todasRedes" type="radio" name="post_types" value="todasRedes"' . $checked . ' onclick=" carregaCategorias(this.value,\''.$myUrl.'\')"/>'
				#.'  <label for="todasRedes">Todas as Áreas</label>'
				#.'</div>'
				#.'</div>';
		
		foreach ( $post_types as $post_type ) {
			$checked = '';
			if ( '*' === substr( $post_type, 0, 1 ) ) {
				$post_type = substr( $post_type, 1 );
				$checked   = ' checked="checked" ';
			}
			if ( isset( $post_type_objects[ $post_type ] ) ) {
				$additional_fields[] = '<div class="ml-5"><span class="post_type post_type_' . $post_type . '">'
				. '<input type="radio" id="'.$post_type.'" name="post_types" value="' . $post_type . '"' . $checked . ' onclick=" carregaCategorias(this.value,\''.$myUrl.'\')"/>'
				. '<label class="ml-1" for="'.$post_type.'">'.getNameRede($post_type_objects[ $post_type ]->name).'</label></span></div>';
				// Radio button do DS.Gov
				#.'<div class="br-radio">'
				#.'  <input id="'.$post_type.'" type="radio" name="post_types" value="' . $post_type . '"' . $checked . ' onclick=" carregaCategorias(this.value,\''.$myUrl.'\')"/>'
				#.'  <label for="'.$post_type.'">'.getNameRede($post_type_objects[ $post_type ]->name).'</label>'
				#.'</div>'
				#.'</div>';

			}
		}
		$additional_fields[] = '</div>';
	}
	$additional_fields[] = '<input type="hidden" name="action" value="buscaAvancadaAction">';
	$additional_fields[] = '<div id="categoriasDaRede"></div>';
	$additional_fields[] = '<div id="publicoAlvo">'
		.'<div class="post_types"><strong>Selecione o Público Alvo:</strong><div class="ml-5">'
		.'<input type="checkbox" id="startup" name="startup" value="Startup">'
		.'<label class="ml-1" for="startup">Startup</label><br>'
		.'<input type="checkbox" id="mpe" name="mpe" value="MPE">'
		.'<label class="ml-1" for="mpe">MPE</label><br>'
		.'<input type="checkbox" id="mEmpresa" name="mEmpresa" value="Média+Empresa">'
		.'<label class="ml-1" for="mEmpresa">Média Empresa</label><br>'
		.'<input type="checkbox" id="gEmpresa" name="gEmpresa" value="Empresa+de+grande+porte">'
		.'<label class="ml-1" for="gEmpresa">Empresa de grande porte</label><br>'
		.'<input type="checkbox" id="governo" name="governo" value="Governo">'
		.'<label class="ml-1" for="governo">Governo</label><br>'
		.'<input type="checkbox" id="icts" name="icts" value="ICTs">'
		.'<label class="ml-1" for="icts">ICTs</label><br>'
		.'<input type="checkbox" id="investidor" name="investidor" value="Investidor">'
		.'<label class="ml-1" for="investidor">Investidor</label><br>'
		.'<input type="checkbox" id="pesquisador" name="pesquisador" value="Pesquisador">'
		.'<label class="ml-1" for="pesquisador">Pesquisador</label><br>'
		.'<input type="checkbox" id="tSetor" name="tSetor" value="Terceiro+Setor">'
		.'<label class="ml-1" for="tSetor">Terceiro Setor</label><br>'
		.'<input type="checkbox" id="pf" name="pf" value="Pessoa+física">'
		.'<label class="ml-1" for="pf">Pessoa física</label><br>'
		.'</div></div></div>';
	
	$form = str_replace( '</form>', implode( "\n", $additional_fields ) . '</form>', $form );

?>
<!-- exemplo de select do dsgov -->
<div class="br-select">
 <div class="br-input">
  <label for="select-simple">Select Simples</label>
  <input id="select-simple" type="text" placeholder="Selecione o item" />
  <button
   class="br-button circle small"
   type="button"
   tabindex="-1"
   data-trigger
  >
   <span class="sr-only">Exibir lista</span
   ><i class="fas fa-angle-down"></i>
  </button>
 </div>
 <div class="br-list" tabindex="0">
  <div class="br-item divider" tabindex="-1">
   <div class="br-radio">
    <input id="rb0" type="radio" name="opcao" value="opcao1" />
    <label for="rb0">Opção 1</label>
   </div>
  </div>
  <div class="br-item divider" tabindex="-1">
   <div class="br-radio">
    <input id="rb1" type="radio" name="opcao" value="opcao2" />
    <label for="rb1">Opção 2</label>
   </div>
  </div>
  <div class="br-item divider" tabindex="-1">
   <div class="br-radio">
    <input id="rb2" type="radio" name="opcao" value="opcao3" />
    <label for="rb2">Opção 3</label>
   </div>
  </div>
 </div>
 <div class="feedback">Texto auxiliar Função de previnir erros.</div>
</div>

<?php

	return $form;
}


function ajaxCarregaCategorias() {

	$idRede = ( isset( $_POST['id'] ) ) ? $_POST['id'] : '';

	if( empty( $idRede ) )
		return;
	if( $idRede == 'todasRedes' ){
		echo " ";
		die();
	}
	
	$rede = getCategoryNameRede($idRede);
	#var_dump($rede);
	$args = array(
		'taxonomy' => $rede,
		'orderby' => 'name',
		'order'   => 'ASC',
		'hide_empty' => 0, /* mostrar todas */
	);
	#var_dump($args);
   $cats = get_categories($args);
   #var_dump($cats);
   echo '<div class="post_types"><strong>Selecione a Classificação</strong>:<div class="ml-5">';
   
   echo '<select name="radioCat" id="radioCat">';
   echo '<option value="todasCat" checked>Todas as classificações</option>';
   #echo '<input type="radio" id="todasCat" name="radioCat" value="todasCat" checked>';
   #echo '<label class="ml-1" for="todasCat">Todas as classificações</label><br>';

   foreach($cats as $cat) {
	echo '<option value="' . $cat->slug . '">' . $cat->name . '</option>';
	   #echo '<input type="radio" id="'.$cat->slug.'" name="radioCat" value="'.$cat->slug.'">';
  	   #echo '<label class="ml-1" for="'.$cat->slug.'">'.$cat->name.'</label><br>';
	   #echo '<a href="'.get_category_link( $cat->term_id ).'">'.$cat->name.'</a><br>';
   }
   echo '</select>';

   # Mostrando select para todas as categorias
   # echo '<select name="cars" id="cars">';
   # echo '<option value="volvo">Volvo</option>';
   # echo '<option value="saab">Saab</option>';
   # echo '<option value="opel">Opel</option>';
   # echo '<option value="audi">Audi</option>';
   # echo '</select>';

   echo '</div>';
   echo '</div>';
   die();
}
add_action('wp_ajax_carrega_categorias','ajaxCarregaCategorias');
add_action('wp_ajax_nopriv_carrega_categorias', 'ajaxCarregaCategorias');


function buscaAvancadaAction() {
	// Tratamento de Público Alvo
	$alvos = array();
	if(isset($_POST['startup'])) $alvos[] = $_POST['startup'];
	if(isset($_POST['mpe'])) $alvos[] = $_POST['mpe'];
	if(isset($_POST['mEmpresa'])) $alvos[] = $_POST['mEmpresa'];
	if(isset($_POST['gEmpresa'])) $alvos[] = $_POST['gEmpresa'];
	if(isset($_POST['governo'])) $alvos[] = $_POST['governo'];
	if(isset($_POST['icts'])) $alvos[] = $_POST['icts'];
	if(isset($_POST['investidor'])) $alvos[] = $_POST['investidor'];
	if(isset($_POST['pesquisador'])) $alvos[] = $_POST['pesquisador'];
	if(isset($_POST['tSetor'])) $alvos[] = $_POST['tSetor'];
	if(isset($_POST['pf'])) $alvos[] = $_POST['pf'];

	$urlPublico = '';
	$publico = '&publico[]=';

	if( count( $alvos ) > 1 ){
		foreach($alvos as $alvo ){
			$urlPublico .= $publico . $alvo;
		}
	} else if ( count( $alvos ) == 1 ) {
		$urlPublico = '&publico='. $alvos[0];
	}

	// Insere um termo de pesquisa. ex: "cnpq"
	if(isset($_POST['termoPesquisa'])) $termoPesquisa = ($_POST['termoPesquisa']); else $termoPesquisa = "";
	
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
// URL passa a aceitar: /?publico=XXX&abrangencia=YYY
function sm_register_query_vars( $vars ) {
    $vars[] = 'publico';
    $vars[] = 'abrangencia';
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
    if( !empty( get_query_var( 'publico' ) ) ){
        $meta_query[] = array( 'key' => 'publico-alvo', 'value' => get_query_var( 'publico' ), 'compare' => 'LIKE' );
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