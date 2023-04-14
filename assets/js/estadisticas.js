$(document).ready(function () {
	$('#productos').DataTable({
		ajax: 'assets/data/productos.txt',
		columns: [
			{ data: 'marca' },
			{ data: 'modelo' },
			{ data: 'tipo' },
			{ data: 'precio' },
			{ data: 'disponibilidad' },
		],
	});
});
