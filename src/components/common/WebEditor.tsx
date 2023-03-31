import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const WebEditor = ({
  QuillRef,
  contents,
  setContents,
}: {
  QuillRef: React.MutableRefObject<ReactQuill | undefined>;
  contents: string;
  setContents: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Editor>
      <ReactQuill
        ref={element => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={setContents}
        modules={modules}
        style={{ height: '270px', margin: '0px 0 85px' }}
      ></ReactQuill>
    </Editor>
  );
};

export default WebEditor;

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'underline', 'strike', 'blockquote'],

      [
        {
          color: [
            '#111827',
            '#E03131',
            '#E8590C',
            '#5C940D',
            '#099268',
            '#868E96',
            '#FF6B6B',
            '#FF922B',
            '#8294CD',
            '#4357AC',
            '#1971C2',
            '#3B5BDB',
            '#6741D9',
            '#9C36B5',
          ],
        },
        {
          background: [
            '#F3F4F6',
            '#ECECEC',
            '#B3C2E7',
            '#8294CD',
            '#A5D8FF',
            '#B2F2BB',
            '#BAC8FF',
            '#C2ADFF',
            '#D8F5A2',
            '#E6B7C8',
            '#EEBEFA',
            '#FFC9C9',
            '#FFD8A8',
            '#FFEC99',
          ],
        },
      ],
      [{ align: ['', 'center', 'right'] }, { list: 'bullet' }, { list: 'ordered' }],
    ],
  },
};

const Editor = styled.div`
  margin-top: 11px;
  color: #374151;
  .ql-container {
    border: 1px solid #e2efff;
    border-radius: 0 0 10px 10px;
  }
  .ql-toolbar.ql-snow {
    border: 1px solid #e2efff;
    border-radius: 10px 10px 0px 0px;
    height: 46px;
    display: flex;
    align-items: center;
    gap: 10px;
    .ql-formats {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .ql-formats:not(:last-child)::after {
      content: '';
      height: 26px;
      width: 1px;
      background: #d2d5da;
      border-radius: 0.5px;
    }
    .ql-picker-options {
      box-shadow: 2px 2px 10px 2px rgba(67, 87, 172, 0.15);
      border-radius: 10px;
      padding: 5px;
    }
  }
  .ql-editor {
    background-color: #e2efff;
    border-radius: 0 0 10px 10px;
    border: 1px solid #e2efff;
    padding: 33px;
  }
`;
