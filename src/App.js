import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import EmailTemplateBody from './components/EmailTemplateBody';
import Select from '@atlaskit/select';

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <div>
        <EmailTemplateBody />

      </div>

    );
  }
}

export default App;
