import {bindable} from 'aurelia-framework';
import $ from 'jquery';


export class orderform {
	heading = 'Order Form';

	sku='';
	qty='';
	skuName='';
	skuPrice='';
	itemSubTotal='';
	itemCounter=0;

	items = [];

	itemCounter = $('#sku-counter').val();
	itemCounter++
	$('#sku-counter').val(itemCounter);

	submit(){
		this.items.push({
			'sku': $('#sku-input').val(),
			'qty': 1, //$('#qty-input').val(),
			'skuName': 'Test Product Name #',
			'skuPrice': 45.75,
			'itemSubTotal': 45.85 * 1 //$('#qty-input').val(),
			'itemCounter' : itemCounter
		});

		console.log(this.items);

		$('#notice').hide();
		$('.item').show();

		$('#sku-input').val('').focus();
		$('#qty-input').val('');


	}

}
