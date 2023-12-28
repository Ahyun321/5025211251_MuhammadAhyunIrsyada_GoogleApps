const scriptURL = 'https://script.google.com/macros/s/AKfycbzwHt5wLjzjT2_TGD-xEuH21qd5OMNpsm6tSIEpaFFTMBGrVD3-iWpeAtm7Qq_vqI60/exec'

const form = document.forms['form-kontak']
const submitButton = form.querySelector('button[type="submit"]')

form.addEventListener('submit', e => {
    e.preventDefault()
    submitButton.innerHTML = 'Mengirim...';
    submitButton.disabled = true;
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            submitButton.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Kirim';
            submitButton.disabled = false;
            Swal.fire({
                icon: 'success',
                title: 'Terima Kasih',
                text: 'Pesan Anda telah terkirim',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0d6efd'
            })
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => {
            submitButton.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Kirim';
            submitButton.disabled = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Terjadi kesalahan, silahkan coba lagi',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0d6efd'
            })
            console.error('Error!', error.message)
        })
})