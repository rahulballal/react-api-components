import { Resource } from 'rest-hooks';

class Comment extends Resource {
  id = null;
  email = '';

  pk() {
    return this.id;
  }

  static urlRoot = 'https://jsonplaceholder.typicode.com/comments';
}

export default Comment