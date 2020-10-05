import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-quill-editor',
    templateUrl: './quill-editor.component.html',
    styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit, AfterViewInit {
    @ViewChild('quillQuestion', { static: true }) quillQuestion;
    contentForm: FormGroup;
    quillConfig = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline'],
                [{'script': 'sub'}, {'script': 'super'}],
            ],
        },
    };

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createForm();
    }

    ngAfterViewInit(): void {
        this.quillConfig = {
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline'],
                    [{'script': 'sub'}, {'script': 'super'}],
                ],
            },
        };
    }

    createForm() {
        this.contentForm = this.formBuilder.group({
            content: ['']
        });
    }

    /**
     * Reset quill editor text
     */
    reset() {
        this.quillQuestion.quillEditor.setContents([{insert: '\n'}]);
    }

}
