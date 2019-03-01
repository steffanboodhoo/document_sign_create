// import { pdfMake } from "pdfmake/build/pdfmake";

// import jsPDF from 'jspdf';
// import SignaturePad from 'signature_pad';

// let LINES = 0, VSPACE = 5;//5mm
// let LINE_max = 68;
// let DOC = null;
window.onload = () => {
    // let signaturePad = init('signature_canvas');
    let doc = new Document('signature_canvas')
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
        doc.finish_document();
    };
    
    //Add Text Button
    document.getElementById('btn_add_text').onclick = () => {
        const text = document.getElementById('input_text').value;
        doc.add_text(text);
    }
}
