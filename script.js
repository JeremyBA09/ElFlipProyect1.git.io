document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario haga submit y con el mismo submit hago que el usuario haga click en la barra y de una funcione 
    
    var query = document.getElementById('busqueda').value.toLowerCase().trim(); // Esto Obtiene la consulta de lo que busque 
    
    switch (query) {
        case 'productos':
            window.location.href = '#productos'; 
            break;
        case 'contacto':
            window.location.href = '#contacto'; 
            break;
        case 'nosotros':
            window.location.href = '#nosotros'; 
            break;
        case 'faq':
            window.location.href = '#faq'; 
            break;

        case 'blog':
            window.location.href = 'blog.html'; 
            break;

        default:
            alert('No se encontró ningún resultado para: ' + query); // Mostrar mensaje si la búsqueda no coincide
            break;
    }
    
    document.getElementById('searchInput').value = ''; // Limpiar el campo de búsqueda después de buscar 
});

