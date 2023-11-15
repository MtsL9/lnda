$(document).ready(function() {

    function armarCarrito() {
        let $catalogo = $('#catalogo');

        for (let i = 0; i < productos.length; i++) {
            let $producto = productos[i];
            let $productoHTML = '<div class="col-md-4 p-0">' +
            '<div class="sc-product-item">' +
                '<img class="img-fluid mb-2" data-name="product_image" src="img/productos/' + $producto.Imagen + '" alt="' + $producto.Nombre + '">' +
                '<h4 class="text-center" data-name="product_name">' + $producto.Nombre + '</h4>' +
                '<p class="p-4" data-name="product_desc">' + $producto.Descripcion + '</p>' +
                '<input name="product_price" value="' + $producto.Precio + '" type="hidden" />' +
                '<input name="product_id" value="' + $producto.ID + '" type="hidden" />' +
                '<p class="text-center"><strong>$ ' + $producto.Precio + '</strong></p>' +
                '<div class="text-center mb-5"><button class="sc-add-to-cart btn btn-dark">Añadir al Carrito</button></div>' +
            '</div>' +
            '</div>';

            $catalogo.append($productoHTML);
        }
    }

    armarCarrito();

    $('#smartcart').smartCart();
  });

  


  (function() {

	// Create input element for testing
	var inputs = document.createElement('input');
	
	// Create the supports object
	var supports = {};
	
	supports.autofocus   = 'autofocus' in inputs;
	supports.required    = 'required' in inputs;
	supports.placeholder = 'placeholder' in inputs;

	// Fallback for autofocus attribute
	if(!supports.autofocus) {
		
	}
	
	// Fallback for required attribute
	if(!supports.required) {
		
	}

	// Fallback for placeholder attribute
	if(!supports.placeholder) {
		
	}
	
	// Change text inside send button on submit
	var send = document.getElementById('contact-submit');
	if(send) {
		send.onclick = function () {
			this.innerHTML = '...Sending';
		}
	}

})();


