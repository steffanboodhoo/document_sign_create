// import jsPDF from 'jspdf';
import SignaturePad from 'signature_pad';

let LINES = 0, VSPACE = 5;//5mm
let LINE_max = 68;
window.onload = () => {
    let [signaturePad, doc] = init('signature_canvas');

    //Save Signature Button
    document.getElementById('btn_signature_add').onclick = () => {
        add_signature(doc, signaturePad);
    };
    //Save Signature Button
    document.getElementById('btn_pdf_generate').onclick = () => {
        // save_signature(signaturePad)
        generate_document(doc);
    };
    //Add Text Button
    document.getElementById('btn_add_text').onclick = () => {
        const text = document.getElementById('input_text').value;
        add_text(doc, text);
    }
}

const init = (canvas_id) => {
    //CANVAS SIGNATURE SETUP
    const canvas = document.getElementById(canvas_id);
    let signaturePad = new SignaturePad(canvas);
    const doc = new PDFDocument;
    console.log('%cSuccessfully initialised signature and pdf objects', 'color:green');
    return [signaturePad, doc];
}

const generate_document = (doc) => {
    doc.end()
}

const add_signature = (doc, signaturePad, image = null, format = null) => {
    if (image == null) {
        image = signaturePad.toDataURL();
        format = 'PNG';
    }
    // console.log(image.clientWidth)
    // console.log(image.clientHeight)    
    doc.addImage(image, format, 0, (1+LINES)*VSPACE);
    LINES += 1 + 150/(3.7795275591*VSPACE)  //TODO 150 is number of pixels in canvas will have to change
    
}

const add_text = (doc, text) => {
    let lines = [];
    for(i=0; i<=text.length; i=i+LINE_max)
        lines.append(text.slice(i-LINE_max,i))
    if (lines.length==0)
        lines.append(text)

    for( line in lines){
        doc.text(line, 0, (1+LINES)*VSPACE);
        LINES++;
    }
}