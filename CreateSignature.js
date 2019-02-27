// import { pdfMake } from "pdfmake/build/pdfmake";

// import jsPDF from 'jspdf';
// import SignaturePad from 'signature_pad';

let LINES = 0, VSPACE = 5;//5mm
let LINE_max = 68;
let DOC = null;
window.onload = () => {
    let signaturePad = init('signature_canvas');

    //Save Signature Button
    document.getElementById('btn_signature_add').onclick = () => {
        // add_signature(doc, signaturePad);
        add_signature(signaturePad);
    };
    //Save Signature Button
    document.getElementById('btn_pdf_generate').onclick = () => {
        // save_signature(signaturePad)
        // generate_document(doc);
        generate_document();
    };
    //Add Text Button
    document.getElementById('btn_add_text').onclick = () => {
        const text = document.getElementById('input_text').value;
        add_text(text);
    }
}

const init = (canvas_id) => {
    //CANVAS SIGNATURE SETUP
    const canvas = document.getElementById(canvas_id);
    let signaturePad = new SignaturePad(canvas);

    DOC = new PDFDocument;
    //Create new stream for document
    create_stream(DOC);
    return signaturePad;
}
const create_stream = (doc) => {
    let stream = doc.pipe(blobStream());
    stream.on('finish', () => {
        let a = document.createElement("a");
        a.style = "display: none";
        document.body.appendChild(a);

        const blob = stream.toBlob('application/pdf');
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'test'
        a.click();
        window.URL.revokeObjectURL(url);
    })
    // return stream;
    // console.log('%cSuccessfully initialised signature and pdf objects', 'color:green');
}

const generate_document = () => {
    DOC.end()
    //Create new stream for document
    DOC = new PDFDocument();
    STREAM = create_stream(DOC);
}

const add_signature = ( signaturePad, image = null, format = null) => {
    if (image == null) {
        image = signaturePad.toDataURL();
        format = 'PNG';
    }
    DOC.image(image, 0, (1 + LINES) * VSPACE);
    LINES += 1 + 150 / (3.7795275591 * VSPACE)  //TODO 150 is number of pixels in canvas will have to change

}

const add_text = (text) => {
    DOC.text(text);
    DOC.moveDown();
    // let lines = [];
    // for (let i = 0; i <= text.length; i = i + LINE_max)
    //     lines.push(text.slice(i - LINE_max, i))
    // if (lines.length == 0)
    //     lines.push(text)

    // for (line in lines) {
    //     console.log(line)
    //     DOC.text(line, 0, (1 + LINES) * VSPACE);
    //     LINES++;
    // }
}