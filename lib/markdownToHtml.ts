import rehypeFormat from 'rehype-format';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkBreaks from 'remark-breaks';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';

export default async function markdownToHtml(markdown: string): Promise<string> {
  return (await unified().use(remarkParse).use(remarkGfm).use(remarkBreaks).use(remarkRehype).use(rehypeSanitize).use(rehypeFormat).use(rehypeStringify).process(markdown)).toString();
}
