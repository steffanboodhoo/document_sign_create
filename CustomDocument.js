import SignaturePad from 'signature_pad';
import PDFDocument from './pdfkit';

class Document {
    constructor(canvas_id, options) {
        this.signaturePad = null;
        this.DOC = null;
        this.custom_handle_end_stream = null;
        this.document_name = 'untitled';
        //CANVAS SIGNATURE SETUP
        const canvas = document.getElementById(canvas_id);
        this.signaturePad = new SignaturePad(canvas);

        this.DOC = new PDFDocument;
        //Create new stream for document
        this.create_stream(this.DOC);
    }

    add_text(text) {
        this.DOC.text(text);
        this.DOC.moveDown()
    }

    skip_lines(lines) { this.DOC.moveDown(lines); }

    add_image(image, options) { this.attach_image_to_document(image, options); }

    add_signature(options) { this.attach_image_to_document(this.signaturePad.toDataURL(), options); }

    attach_image_to_document(image, options) {
        if (options != undefined)
            this.DOC.image(image, options);
        else
            this.DOC.image(image);
    }

    finish_document() {
        this.DOC.end();
        this.DOC = new PDFDocument();
        this.create_stream(this.DOC);
    }

    set_handle_end_stream(func) { this.handle_end_stream = func; }

    create_stream(doc) {
        let stream = doc.pipe(blobStream());
        stream.on('finish', () => {
            const blob = stream.toBlob('application/pdf');
            this.download_document(blob);
        })
    }

    handle_end_stream (blob) {
        if (this.custom_handle_end_stream == null)
            download_document(blob)
        else
            this.custom_handle_end_stream(blob)
    }

    download_document (blob){
        let a = document.createElement("a");
        a.style = "display: none";
        document.body.appendChild(a);
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = this.document_name;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
export default Document;