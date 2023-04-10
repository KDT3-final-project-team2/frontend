export const getHtmlToText = (content: string) => {
  //remove code brakes and tabs
  content = content.replace(/\n/g, '');
  content = content.replace(/\t/g, '');

  //keep content brakes and tabs
  content = content.replace(/<\/td>/g, '\t');
  content = content.replace(/<\/table>/g, '\n');
  content = content.replace(/<\/tr>/g, '\n');
  content = content.replace(/<\/p>/g, '\n');
  content = content.replace(/<\/div>/g, '\n');
  content = content.replace(/<\/h>/g, '\n');
  content = content.replace(/<br>/g, '\n');
  content = content.replace(/<br( )*\/>/g, '\n');

  //parse html into text
  const dom = new DOMParser().parseFromString('<!doctype html><body>' + content, 'text/html');
  console.log(dom.body.textContent);
  return dom.body.textContent;
};
