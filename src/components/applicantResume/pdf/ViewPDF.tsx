import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';

export const ViewPDF = ({ fileUrl }: Props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  const Inner = styled.div`
    width: 1200px;
    height: 680px;
    overflow: auto;
    position: relative;
    .react-pdf__Page__textContent {
      display: none !important;
    }
    .react-pdf__Page__annotations {
      display: none !important;
    }
  `;

  const Content = styled.div`
    position: fixed;
    bottom: 50px;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 16px;
    background-color: var(--color-primary-100);
    color: #fff;
    border-radius: 50px;
    justify-content: center;
    height: 50px;
    padding-top: 3px;
    button {
      background: transparent;
      img {
        width: 8px;
        filter: invert(100%) sepia(52%) saturate(20%) hue-rotate(315deg) brightness(103%) contrast(108%);
      }
      }
    }
  `;

  return (
    <Inner>
      <Document
        file={{
          url: fileUrl,
        }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page width={1280} height={720} pageNumber={pageNumber} />
      </Document>
      <Content>
        <button
          onClick={() => {
            setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1);
          }}
        >
          <img src='\icons\arrow_left.png' alt='이전' />
        </button>
        <p>
          페이지 {pageNumber} / {numPages}
        </p>
        <button
          onClick={() => {
            setPageNumber(numPages === pageNumber ? pageNumber : pageNumber + 1);
          }}
        >
          <img src='\icons\arrow_right.png' alt='다음' />
        </button>
      </Content>
    </Inner>
  );
};
