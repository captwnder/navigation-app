import {bindable} from 'aurelia-framework';
import $ from 'jquery';


export class orderform {
	heading = 'Order Form';

	sku='';
	qty='';
	skuName='';
	skuPrice='';
	itemSubTotal='';
	itemCounter=1;

	items = [];


	

	submit(){

		this.items.push({
			'sku': $('#sku-input').val(),
			'qty': $('#qty-input').val(),
			'skuName': 'Test Product Name #' + this.itemCounter,
			'skuPrice': 45.75,
			'itemSubTotal': 45.85 * $('#qty-input').val(),
			'itemCounter' : this.itemCounter++
		});

		console.log(this.items);


		$('#notice').hide();

		$('#sku-input').val('').focus();
		$('#qty-input').val('');

		$('.cart-line').show();
		$('#skuCounter').val(this.itemCounter);
	}

}
