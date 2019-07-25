import {Resource} from 'rest-hooks'

class Photo extends Resource {
  pk() {
    return this.id
  }

  id = null;
  title = '';
  thumbnailUrl = '';

  static urlRoot = 'https://jsonplaceholder.typicode.com/photos';
}

export default Photo