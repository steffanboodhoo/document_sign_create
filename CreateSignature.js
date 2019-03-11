// import CustDocument from './CustomDocument';

window.onload = () => {
    let SIGNED = false;
    console.log('stuff')
    // let signaturePad = init('signature_canvas');
    let doc = new CustDocument('signature_canvas')
    // CustomDocument_CustDocument

    document.getElementById('signature_canvas').addEventListener('click', (ev) => {
        SIGNED = true;
    })
    //Save Signature Button
    document.getElementById('btn_signature_add').onclick = () => {
        // add_signature({ signaturePad });
        let options = { fit: [100, 100], align: 'center' };
        doc.add_signature(options);
        doc.skip_lines(3)
        // add_signature({ signaturePad, options });
        // options = { cover: [100, 100], align: 'center' };
        // add_signature({ signaturePad, options });

    };
    //Save Signature Button
    document.getElementById('btn_pdf_generate').onclick = () => {
        if(SIGNED)
            doc.finish_document();
        else
            console.log('fuck off')
    };
    
    //Add Text Button
    document.getElementById('btn_add_text').onclick = () => {
        const text = document.getElementById('input_text').value;
        doc.add_text(text);
    }
}
