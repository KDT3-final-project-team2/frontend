import { termExample } from '@/constants/termExample';
import { rest } from 'msw';

const terms = [
  {
    termId: 1,
    type: 'SERVICE',
    version: '1.0',
    createDate: '2023-04-05',
    editDate: '2023-04-05',
    status: 'USE',
    content: termExample,
  },
  {
    termId: 2,
    type: 'PRIVACY',
    version: '2.0',
    createDate: '2023-04-06',
    editDate: '2023-04-07',
    status: 'USE',
    content: termExample,
  },
  {
    termId: 3,
    type: 'MARKETING',
    version: '2.1',
    createDate: '2023-04-08',
    editDate: '2023-04-10',
    status: 'USE',
    content: termExample,
  },
  {
    termId: 4,
    type: 'THIRD_PARTY',
    version: '1.5',
    createDate: '2022-03-27',
    editDate: '2023-04-05',
    status: 'DISCARD',
    content: termExample,
  },
];

const jobposts = [
  {
    postId: 1,
    title: '2023년도 정규직 간호사 모집공고',
    startDate: '2023-04-06',
    dueDate: '2023-4-12',
    createDate: '2023-04-06',
    editDate: '2023-04-06',
    status: 'USE',
  },
  {
    postId: 2,
    title: '2023년도 정규직 의사 모집공고',
    startDate: '2023-04-06',
    dueDate: '2023-4-12',
    createDate: '2023-04-06',
    editDate: '2023-04-06',
    status: 'USE',
  },
  {
    postId: 3,
    title: '2023년도 정규직 간호조무사 모집공고',
    startDate: '2023-04-06',
    dueDate: '2023-4-12',
    createDate: '2023-04-06',
    editDate: '2023-04-06',
    status: 'USE',
  },
];

export const handlers = [
  rest.get('http://localhost:5173/admin/term/list', async (req, res, ctx) => {
    return res(ctx.json(terms));
  }),

  rest.post('http://localhost:5173/admin/term', async (req, res, ctx) => {
    const { termData } = req.body;
    console.log(JSON.stringify(termData));
    terms.push(termData);
    console.log(terms);
    return res(ctx.status(201), ctx.json(true));
  }),

  rest.get('http://localhost:5173/company/jobposts', async (req, res, ctx) => {
    return res(ctx.json(jobposts));
  }),
];
