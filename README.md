Ejemplo de banner para mundosica.com
====================

Simple banner para mundosica.com.



## Uso.

## 1. cargando el CSS:

```html
<link rel="stylesheet" href="banner_desarrollo_web_mundosica.css" type="text/css" media="all"/>
```

## 2. Agregando el banner:
Agregar el html en en lugar donde queremos que este nuestro banner:

```html
<!-- Fin - Ejemplo simple banner mundosica.com-->
	<div class="banner_desarrollo_web_mundosica">
		<h4>Desarrollo web</h4>
		<h3><a href="http://mundosica.com">mundosica.com</a></h3>
	</div>
<!-- Fin - Ejemplo simple banner mundosica.com-->
```

## 3. Cargarndo las librerias javascript:
Require del plugin **bannerDevWebSica** de jQuery:

```html
<script type='text/javascript' src='jquery/1.7.2/jquery.min.js'></script>
<script type="text/javascript" src="jQuerry-banner_desarrollo_web_mundosica.js"></script>
```

## 4. Ejecucion del plugin:
Mandamos a llamar al plugin **bannerDevWebSica** instanciado hacia la clase `.banner_desarrollo_web_mundosica`:

```javascript
$(function() {
	$('.banner_desarrollo_web_mundosica').bannerDevWebSica();
});
```
