// Adicione aqui scripts personalizados, se necessário.
console.log("Morais Digital Solutions - Site carregado com sucesso!");

document.querySelectorAll('a[href="#contato"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close the modal if it's open
        const modal = document.querySelector('.modal.show');
        if (modal) {
            const modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
        }

        // Smooth scroll to the "Contato" section
        document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' });
    });
});
