import { Editor } from "@tinymce/tinymce-react";
import React, { Component } from "react";

class EmailTemplateBody extends Component {
    state = {}
    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }
    render() {
        return (<Editor
            init={{ height: 400, width: 400 }}

            initialValue="<p>This is the initial content of the editor</p>"
            init={{
                menubar: false,
                file_picker_types: 'image',
                paste_data_images: true,
                paste_as_text: true,
                table_default_styles: { width: '100%' },
                relative_urls: false,
                remove_script_host: false,
                convert_urls: true,
                height: 400,
                plugins: 'paste,textcolor,code,hr,variables,stats,statimagetools,jqlsection,imagetools,image,table,hr,confluencemacro',
                paste_auto_cleanup_on_paste: true,
                paste_remove_styles: true,
                paste_remove_styles_if_webkit: true,
                paste_strip_class_attributes: true,
                toolbar: "undo redo | styleselect | bold italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code | hr | image | table | " + { name: 'selectvariable', className: 'fa arn-add-variable aui-button aui-button-primary', title: 'Add Variables' } + " | jqlsection | stats | confluencemacro",
                fontsize_formats: '8px 9px 10px 11px 12px 14px 16px 18px 20px 22px 24px 26px 28px 36px 48px 72px',
                font_formats: 'Arial=arial,helvetica,sans-serif;Courier New=courier new,courier;Helvetica=helvetica;Tahoma=tahoma,arial,helvetica,sans-serif;Times New Roman=times new roman,times;Verdana=verdana,geneva;',
                imagetools_toolbar: "removesection | editsection",
            }}
            onChange={this.handleEditorChange}
        />);
    }
}

export default EmailTemplateBody;