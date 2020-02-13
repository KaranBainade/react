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
        <form>
        <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
          <EmailTemplateBody />
        </form>
      </div>

    );
  }
}

export default App;
