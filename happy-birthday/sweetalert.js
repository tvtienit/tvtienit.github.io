function fireAlert(fnCallBacks) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success btn-margin-left',
            cancelButton: 'btn btn-info'
        },
        buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
        title: 'Hỏi cái nè',
        text: 'Thương Tiến không?',
        width: 600,
        padding: '3em',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          center left
          no-repeat
        `,
        showCancelButton: true,
        confirmButtonText: 'Thương lắm!!',
        cancelButtonText: 'Thương chứ sao không!!'
    }).then((result) => {
        fnCallBacks.forEach(function(cb) {
            cb();
        });
    })
}