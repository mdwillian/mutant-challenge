import { Client } from '@elastic/elasticsearch';

const elastic = new Client({
  node: 'http://logs:9200',
});

export default elastic;
