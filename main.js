file = () => {
    const file_input = document.getElementById('file');
    if (file_input.files.length > 0) {
        for (const i = 0; i <= file_input.files.length - 1; i++) {
            const fsize = file_input.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 4096) {
                alert(
                "Fayl juda katta, 4mb dan kichik faylni tanlang");
            } else if (file < 2048) {
                alert(
                "Fayl juda kichik, 2mb dan katta faylni tanlang");
            } else {
                document.getElementById('size').innerHTML = '<b>'
                + file + '</b> KB';
            }
        }
    }
}